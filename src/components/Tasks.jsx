import { useState, useEffect } from 'react'
const fmt = x => String(+Number(x).toPrecision(4))
export default function Tasks({ tasks = [], onScore }) {
  const [val, setVal] = useState({}), [res, setRes] = useState({}), [hint, setHint] = useState({}), [sol, setSol] = useState({})
  const sc = tasks.filter((_, i) => res[i] === 'ok').length
  useEffect(() => { if (onScore && Object.keys(res).length) onScore(sc, tasks.length) }, [sc, res]) // eslint-disable-line
  if (!tasks.length) return <p className="muted">Nazorat ishi masalalari hozircha mavjud emas.</p>
  const check = i => {
    const x = parseFloat(String(val[i] ?? '').replace(',', '.')); const t = tasks[i]
    if (isNaN(x)) return setRes(r => ({ ...r, [i]: 'empty' }))
    const tol = t.tol ?? 0.03
    const ok = t.answer === 0 ? Math.abs(x) <= tol : Math.abs(x - t.answer) <= tol * Math.abs(t.answer)
    setRes(r => ({ ...r, [i]: ok ? 'ok' : 'bad' }))
  }
  const score = tasks.filter((_, i) => res[i] === 'ok').length
  return <div className="tasks">
    <div className="score">Ball: {score} / {tasks.length}</div>
    {tasks.map((t, i) => <div className={'task ' + (res[i] || '')} key={i}>
      <b>{i + 1}-masala.</b> <span>{t.q}</span>
      <div className="trow"><input type="number" step="any" inputMode="decimal" placeholder="Javob" value={val[i] ?? ''} onChange={e => { setVal({ ...val, [i]: e.target.value }); setRes(r => ({ ...r, [i]: undefined })) }} onKeyDown={e => e.key === 'Enter' && check(i)} /><em>{t.unit}</em>
        <button className="btn" onClick={() => check(i)}>Tekshirish</button>
        {t.hint && <button className="btn ghost" onClick={() => setHint({ ...hint, [i]: !hint[i] })}>Ishora</button>}
        <button className="btn ghost" onClick={() => setSol({ ...sol, [i]: !sol[i] })}>Yechim</button></div>
      {res[i] === 'ok' && <div className="fb ok">To'g'ri! Javob ≈ {fmt(t.answer)} {t.unit}</div>}
      {res[i] === 'bad' && <div className="fb bad">Noto'g'ri. Qayta hisoblab ko'ring (ruxsat etilgan xato ±{Math.round((t.tol ?? 0.03) * 100)}%).</div>}
      {res[i] === 'empty' && <div className="fb bad">Avval javobni kiriting.</div>}
      {hint[i] && t.hint && <div className="note">Ishora: {t.hint}</div>}
      {sol[i] && <div className="note"><b>Yechim:</b> {t.solution}<br /><b>Javob:</b> {fmt(t.answer)} {t.unit}</div>}
    </div>)}
  </div>
}
