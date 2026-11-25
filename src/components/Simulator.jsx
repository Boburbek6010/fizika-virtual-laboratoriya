import { useState, useMemo } from 'react'
const sig = (x, d = 3) => (typeof x !== 'number' || !isFinite(x)) ? '—' : (x !== 0 && (Math.abs(x) >= 1e6 || Math.abs(x) < 1e-3)) ? x.toExponential(d - 1) : String(+x.toPrecision(d))
const COL = ['var(--c1)', 'var(--c2)', 'var(--c3)']
function Chart({ c }) {
  const W = 480, H = 260, m = { l: 56, r: 14, t: 28, b: 42 }
  const ss = (c.series || []).filter(s => s.points && s.points.length)
  const pts = ss.flatMap(s => s.points).filter(p => isFinite(p[0]) && isFinite(p[1]))
  if (!pts.length) return null
  const ext = i => { let a = Math.min(...pts.map(p => p[i])), b = Math.max(...pts.map(p => p[i])); if (a === b) { a -= 1; b += 1 } else { const d = (b - a) * .05; b += d; if (a !== 0) a -= d } return [a, b] }
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
      ? <g key={k}><circle cx={X(s.points[0][0])} cy={Y(s.points[0][1])} r="6.5" className="dot" /></g>
      : <polyline key={k} fill="none" style={{ stroke: COL[k % 3] }} strokeWidth="2.4" strokeLinejoin="round" points={s.points.map(p => X(p[0]) + ',' + Y(p[1])).join(' ')} />)}
    <g transform={`translate(${m.l + 8} ${m.t + 4})`}>{ss.map((s, k) => <g key={k} transform={`translate(0 ${k * 14})`}><circle r="4" cx="4" cy="4" style={{ fill: s.points.length === 1 ? 'var(--accent)' : COL[k % 3] }} /><text x="14" y="8" className="lg">{s.name}</text></g>)}</g>
  </svg>
}
export default function Simulator({ sim }) {
  const [v, setV] = useState(() => Object.fromEntries(sim.inputs.map(i => [i.id, i.value])))
  const out = useMemo(() => { try { return sim.compute(v) } catch (e) { return { results: [], note: 'Hisoblashda xato: ' + e.message } } }, [v, sim])
  const set = (i, x) => { x = parseFloat(x); setV(p => ({ ...p, [i.id]: isNaN(x) ? i.min : x })) }
  return <div className="sim">
    {sim.intro && <p className="muted">{sim.intro}</p>}
    <div className="sim-grid">
      <div className="inputs">{sim.inputs.map(i => <div className="inp" key={i.id}>
        <div className="inp-top"><span>{i.label}</span><span className="num"><input type="number" value={v[i.id]} min={i.min} max={i.max} step={i.step} onChange={e => set(i, e.target.value)} /><em>{i.unit}</em></span></div>
        <input type="range" min={i.min} max={i.max} step={i.step} value={v[i.id]} onChange={e => set(i, e.target.value)} />
      </div>)}</div>
      <div className="outs">
        <div className="cards">{(out.results || []).map((r, k) => <div className="rc" key={k}><small>{r.label}</small><b>{sig(r.value, r.digits || 3)} <i>{r.unit}</i></b></div>)}</div>
        {out.chart && <Chart c={out.chart} />}
        {out.note && <div className="note">{out.note}</div>}
      </div>
    </div>
  </div>
}
