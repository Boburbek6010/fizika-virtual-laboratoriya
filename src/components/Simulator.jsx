import { useState, useMemo, useEffect, useRef, Component } from 'react'
import { save } from '../store.js'
const sig = (x, d = 3, sc) => (typeof x !== 'number' || !isFinite(x)) ? '—' : (sc > 0 && Math.abs(x) < 1e-12 * sc) ? '0' : (x !== 0 && (Math.abs(x) >= 1e6 || Math.abs(x) < 1e-3)) ? x.toExponential(d - 1) : String(+x.toPrecision(d))
const COL = ['var(--c1)', 'var(--c2)', 'var(--c3)']
function Chart({ c, run, live }) {
  const W = 480, H = 260, m = { l: 56, r: 14, t: 28, b: 42 }
  const ss = (c.series || []).filter(s => s.points && s.points.length)
  const pts = ss.flatMap(s => s.points).filter(p => isFinite(p[0]) && isFinite(p[1]))
  if (!pts.length) return null
  const ext = i => { const lo = Math.min(...pts.map(p => p[i])), hi = Math.max(...pts.map(p => p[i])); let a = lo, b = hi; if (a === b) { a -= 1; b += 1 } else { const d = (b - a) * .05; b += d; a -= d } if (lo >= 0) a = Math.max(0, a); if (hi <= 0) b = Math.min(0, b); return [a, b] }
  const [x0, x1] = ext(0), [y0, y1] = ext(1)
  const X = x => m.l + (x - x0) / (x1 - x0) * (W - m.l - m.r), Y = y => H - m.b - (y - y0) / (y1 - y0) * (H - m.t - m.b)
  const ticks = (a, b) => Array.from({ length: 5 }, (_, i) => a + (b - a) * i / 4)
  return <svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img">
    <text x={W / 2} y="16" textAnchor="middle" className="ct">{c.title}</text>
    {ticks(x0, x1).map((t, i) => <g key={'x' + i}><line x1={X(t)} x2={X(t)} y1={m.t} y2={H - m.b} className="grid" /><text x={X(t)} y={H - m.b + 15} textAnchor="middle">{sig(t, 3)}</text></g>)}
    {ticks(y0, y1).map((t, i) => <g key={'y' + i}><line y1={Y(t)} y2={Y(t)} x1={m.l} x2={W - m.r} className="grid" /><text x={m.l - 6} y={Y(t) + 4} textAnchor="end">{sig(t, 3)}</text></g>)}
    <line x1={m.l} x2={m.l} y1={m.t} y2={H - m.b} className="axis" /><line x1={m.l} x2={W - m.r} y1={H - m.b} y2={H - m.b} className="axis" />
    <text x={(m.l + W - m.r) / 2} y={H - 4} textAnchor="middle" className="al">{c.xLabel}</text>
    <text transform={`translate(12 ${(m.t + H - m.b) / 2}) rotate(-90)`} textAnchor="middle" className="al">{c.yLabel}</text>
    {ss.map((s, k) => s.points.length === 1
      ? <g key={k}><circle cx={X(s.points[0][0])} cy={Y(s.points[0][1])} r="6.5" className={'dot' + (live ? ' pulse' : '')} /></g>
      : <polyline key={k + '-' + run} fill="none" className={live || run ? 'draw' : ''} style={{ stroke: COL[k % 3] }} strokeWidth="2.4" strokeLinejoin="round" points={s.points.map(p => X(p[0]) + ',' + Y(p[1])).join(' ')} />)}
    <g transform={`translate(${m.l + 8} ${m.t + 4})`}>{ss.map((s, k) => <g key={k} transform={`translate(0 ${k * 14})`}><circle r="4" cx="4" cy="4" style={{ fill: s.points.length === 1 ? 'var(--accent)' : COL[k % 3] }} /><text x="14" y="8" className="lg">{s.name}</text></g>)}</g>
  </svg>
}
const STANDS = Object.fromEntries(Object.entries(import.meta.glob('../stands/*.jsx', { eager: true })).map(([k, m]) => [+(k.match(/s(\d+)\.jsx$/) || [])[1], m.default]).filter(([id, c]) => id && c))
class Guard extends Component { constructor(p) { super(p); this.state = { err: false } } static getDerivedStateFromError() { return { err: true } } render() { return this.state.err ? null : this.props.children } }
function StandView({ Comp, v, out, phase, t0, frozen }) {
  const [t, setT] = useState(0)
  useEffect(() => {
    if (phase !== 'running') { setT(phase === 'finished' ? frozen : 0); return }
    let id; const tick = () => { setT((performance.now() - t0) / 1000); id = requestAnimationFrame(tick) }
    id = requestAnimationFrame(tick); return () => cancelAnimationFrame(id)
  }, [phase, t0, frozen])
  return <div className="stand"><Guard><Comp v={v} out={out} state={phase} t={t} /></Guard></div>
}
const P = ({ n, title, children, className }) => <section className={'lp ' + (className || '')}><h5><i>{n}.</i> {title}</h5><div className="lp-b">{children}</div></section>
const mmss = n => String(Math.floor(n / 60)).padStart(2, '0') + ':' + String(n % 60).padStart(2, '0')
export default function Simulator({ sim, table, onFinish, compact, topicId, formulas }) {
  const Stand = topicId ? STANDS[topicId] : null
  const defs = () => Object.fromEntries(sim.inputs.map(i => [i.id, i.value]))
  const [v, setV] = useState(defs)
  const [phase, setPhase] = useState('idle'); const [el, setEl] = useState(0); const [run, setRun] = useState(0); const [fin, setFin] = useState(null)
  const t0 = useRef(0); const [pt0, setPt0] = useState(0); const [frz, setFrz] = useState(0)
  useEffect(() => { if (phase !== 'running') return; const id = setInterval(() => setEl(Math.floor((Date.now() - t0.current) / 1000)), 250); return () => clearInterval(id) }, [phase])
  const idle = phase === 'idle', running = phase === 'running', done = phase === 'finished'
  const start = () => { t0.current = Date.now(); setPt0(performance.now()); setFrz(0); setEl(0); setFin(null); setRun(r => r + 1); setPhase('running') }
  const reset = () => { setV(defs()); setEl(0); setFin(null); setPhase('idle') }
  const out = useMemo(() => { try { return sim.compute(v) } catch (e) { return { results: [], note: 'Hisoblashda xato: ' + e.message } } }, [v, sim])
  const sc = Math.max(0, ...(out.results || []).map(r => Math.abs(r.value)).filter(isFinite))
  const set = (i, x) => { x = parseFloat(x); setV(p => ({ ...p, [i.id]: isNaN(x) ? i.min : x })) }
  const cols = [...sim.inputs.map(i => ({ k: i.label + (i.unit ? ' (' + i.unit + ')' : ''), h: i.label + (i.unit ? ' (' + i.unit + ')' : '') })), ...(out.results || []).map((r, k) => ({ k: r.label + (r.unit ? ' (' + r.unit + ')' : ''), h: r.label + (r.unit ? ' (' + r.unit + ')' : '') }))]
  const snap = () => ({ ...Object.fromEntries(sim.inputs.map(i => [i.label + (i.unit ? ' (' + i.unit + ')' : ''), String(v[i.id])])), ...Object.fromEntries((out.results || []).map(r => [r.label + (r.unit ? ' (' + r.unit + ')' : ''), sig(r.value, r.digits || 3, sc)])) })
  const finish = () => {
    const secs = Math.floor((Date.now() - t0.current) / 1000), row = snap()
    const items = (out.results || []).map(r => ({ label: r.label, unit: r.unit, text: sig(r.value, r.digits || 3, sc) }))
    setEl(secs); setFrz((performance.now() - pt0) / 1000); setFin({ items, secs }); setPhase('finished')
    if (table) table.setRows(r => [...r, row])
    if (topicId) save('fz:done:' + topicId, { at: Date.now(), secs, results: items })
  }
  const csv = () => {
    const q = x => '"' + String(x ?? '').replace(/"/g, '""') + '"'
    const text = ['№', ...cols.map(c => c.h)].map(q).join(',') + '\n' + table.rows.map((r, n) => [n + 1, ...cols.map(c => r[c.k])].map(q).join(',')).join('\n')
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['\ufeff' + text], { type: 'text/csv;charset=utf-8' })); a.download = 'natijalar.csv'; a.click(); URL.revokeObjectURL(a.href)
  }
  const stand = Stand && <StandView Comp={Stand} v={v} out={out} phase={phase} t0={pt0} frozen={frz} />
  const bar = <div className="simbar noprint">
    <button className="btn pill" onClick={start} disabled={!idle}>Boshlash</button>
    <button className="btn pill ghost" onClick={finish} disabled={!running}>Tugatish</button>
    <button className="btn pill ghost" onClick={reset} disabled={idle}>Qayta boshlash</button>
    <span className={'status s-' + phase} role="status"><i />{idle ? 'Boshlashga tayyor' : running ? 'Tajriba ketmoqda' : 'Tajriba yakunlandi'}<b className="timer">{mmss(el)}</b></span>
  </div>
  const inputs = <div className={'inputs' + (idle || done ? ' locked' : '')}>{sim.inputs.map(i => <div className="inp" key={i.id}>
    <div className="inp-top"><span>{i.label}</span><span className="num"><input type="number" disabled={!running} value={v[i.id]} min={i.min} max={i.max} step={i.step} onChange={e => set(i, e.target.value)} /><em>{i.unit}</em></span></div>
    <input type="range" disabled={!running} min={i.min} max={i.max} step={i.step} value={v[i.id]} onChange={e => set(i, e.target.value)} />
  </div>)}</div>
  const summary = done && fin && <div className="summary" role="status"><h4>Tajriba yakunlandi</h4><p className="muted">Davomiyligi: <b>{mmss(fin.secs)}</b>{table ? " · natija jadvalga qo'shildi" : ''}</p>
    <ul>{fin.items.map((r, k) => <li key={k}><span>{r.label}</span><b>{r.text} {r.unit}</b></li>)}</ul>
    {onFinish && <button className="btn pill" onClick={onFinish}>Xulosaga o'tish</button>}</div>
  const tbl = table && <div className="rtable">
    <div className="rt-act noprint"><button className="btn" disabled={!running} onClick={() => table.setRows(r => [...r, snap()])}>Natijani jadvalga qo'shish</button>
      {table.rows.length > 0 && <><button className="btn ghost" onClick={csv}>CSV yuklash</button><button className="btn ghost" onClick={() => window.print()}>Chop etish</button><button className="btn ghost" onClick={() => table.setRows([])}>Tozalash</button></>}</div>
    {table.rows.length > 0 ? <div className="tscroll"><table><thead><tr><th>№</th>{cols.map(c => <th key={c.k}>{c.h}</th>)}</tr></thead>
      <tbody>{table.rows.map((r, n) => <tr key={n}><td>{n + 1}</td>{cols.map(c => <td key={c.k}>{r[c.k] ?? '—'}</td>)}</tr>)}</tbody></table></div>
      : <p className="muted">Jadval bo'sh. Qiymatlarni tanlab, natijani jadvalga qo'shing.</p>}
  </div>
  if (compact) return <div className={'sim compact ph-' + phase}>
    {sim.intro && <p className="muted">{sim.intro}</p>}
    {bar}
    {stand && <div className="stand-c">{stand}</div>}
    <div className="sim-grid">
      {inputs}
      <div className="outs">
        {idle ? <div className="hint">Tajribani boshlash uchun «Boshlash» tugmasini bosing</div> : <div className="cards">{(out.results || []).map((r, k) => <div className="rc" key={k}><small>{r.label}</small><b>{sig(r.value, r.digits || 3, sc)} <i>{r.unit}</i></b></div>)}</div>}
        {out.chart && <div className={idle ? 'chartw dim' : 'chartw'}><Chart c={out.chart} run={run} live={running} /></div>}
        {summary}
        {out.note && <div className="note">{out.note}</div>}
      </div>
    </div>
    {tbl}
  </div>
  let n = 0; const N = () => ++n
  const n1 = N(), n2 = N(), n3 = stand ? N() : 0, n4 = N(), n5 = formulas && formulas.length ? N() : 0, n6 = out.chart ? N() : 0, n7 = N()
  return <div className={'sim lab ph-' + phase}>
    {sim.intro && <p className="muted">{sim.intro}</p>}
    <div className={'lab-grid' + (stand ? '' : ' nostand')}>
      <div className="lcol">
        <P n={n1} title="Parametrlar">{inputs}</P>
        <P n={n2} title="Tajribani boshqarish" className="noprint">{bar}</P>
      </div>
      {stand && <div className="ccol"><P n={n3} title="Virtual laboratoriya stendi">{stand}</P></div>}
      <div className="rcol"><P n={n4} title="O'lchash natijalari">
        {idle ? <div className="hint">Tajribani boshlash uchun «Boshlash» tugmasini bosing</div>
          : <div className="tscroll"><table className="rtab"><thead><tr><th>Parametr</th><th>Qiymat</th><th>Birlik</th></tr></thead>
            <tbody>{(out.results || []).map((r, k) => <tr key={k}><td>{r.label}</td><td>{sig(r.value, r.digits || 3, sc)}</td><td>{r.unit || '—'}</td></tr>)}</tbody></table></div>}
      </P></div>
    </div>
    <div className="lab-bottom">
      {n5 > 0 && <P n={n5} title="Formulalar">{formulas.map((f, k) => <div className="frow" key={k}><span>{f.name}</span><code>{f.expr}</code></div>)}</P>}
      {n6 > 0 && <P n={n6} title="Grafik"><div className={idle ? 'chartw dim' : 'chartw'}><Chart c={out.chart} run={run} live={running} /></div></P>}
      <P n={n7} title="Xulosa">
        {out.note && <div className="note">{out.note}</div>}
        {summary || (!out.note && <p className="muted">Tajriba yakunlangach natijalar xulosasi shu yerda chiqadi.</p>)}
      </P>
    </div>
    {tbl}
  </div>
}
