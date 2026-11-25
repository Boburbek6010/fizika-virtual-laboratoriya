import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { topics } from '../topics.js'
import { load, rm } from '../store.js'
const dl = (name, text) => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + text], { type: 'text/csv;charset=utf-8' })); a.download = name; a.click(); URL.revokeObjectURL(a.href) }
const q = x => '"' + String(x ?? '').replace(/"/g, '""') + '"'
export function Nazariya() {
  const [s, setS] = useState('')
  const l = s.trim().toLowerCase()
  const list = topics.filter(t => !l || (t.title + ' ' + (t.theory || []).join(' ') + ' ' + (t.formulas || []).map(f => f.name + f.expr).join(' ')).toLowerCase().includes(l))
  return <div className="wrap"><h1>Nazariya va formulalar</h1><input className="search wide" placeholder="Qidirish: mavzu, formula, atama…" value={s} onChange={e => setS(e.target.value)} />
    {list.map(t => <div className="panel pgcard" key={t.id}><h3><Link to={'/topic/' + t.id + '?tab=theory'}>{t.id}. {t.title}</Link></h3>
      {t.theory && t.theory[0] && <p className="muted">{t.theory[0].length > 300 ? t.theory[0].slice(0, 300) + '…' : t.theory[0]}</p>}
      {(t.formulas || []).map((f, i) => <div className="frow" key={i}><span>{f.name}</span><code>{f.expr}</code></div>)}</div>)}
    {!list.length && <p className="muted">Hech narsa topilmadi.</p>}</div>
}
export function Testlar() {
  const nav = useNavigate()
  return <div className="wrap"><h1>Testlar</h1><div className="tgrid">{topics.map(t => { const b = load('fz:quiz:' + t.id, null)
    return <button key={t.id} className="tcard" onClick={() => nav('/topic/' + t.id + '?tab=test')}><i>{String(t.id).padStart(2, '0')}</i><b>{t.title}</b><span className="tag">{(t.quiz || []).length} savol</span>{b ? <span className="tag best">Eng yaxshi: {b.score}/{b.total}</span> : <span className="tag">Topshirilmagan</span>}</button> })}</div></div>
}
export function Natijalar() {
  const [k, setK] = useState(0)
  const data = useMemo(() => topics.map(t => ({ t, quiz: load('fz:quiz:' + t.id, null), tasks: load('fz:tasks:' + t.id, null), rows: load('fz:rows:' + t.id, []) })), [k])
  const sum = (f, g) => data.reduce((n, d) => n + (d[f] ? d[f][g] : 0), 0)
  const clear = () => { if (window.confirm("Barcha saqlangan natijalar o'chirilsinmi?")) { topics.forEach(t => ['quiz', 'tasks', 'rows'].forEach(x => rm('fz:' + x + ':' + t.id))); setK(k + 1) } }
  const csv = () => {
    let o = ['№,Mavzu,Test (eng yaxshi),Nazorat ishi,Jadval qatorlari'].concat(data.map(d => [d.t.id, q(d.t.title), d.quiz ? d.quiz.score + '/' + d.quiz.total : '', d.tasks ? d.tasks.score + '/' + d.tasks.total : '', d.rows.length].join(','))).concat([['', 'Jami', sum('quiz', 'score') + '/' + sum('quiz', 'total'), sum('tasks', 'score') + '/' + sum('tasks', 'total'), data.reduce((n, d) => n + d.rows.length, 0)].join(',')])
    data.filter(d => d.rows.length).forEach(d => { const h = Object.keys(d.rows[0]); o.push('', q(d.t.id + '. ' + d.t.title), h.map(q).join(',')); d.rows.forEach(r => o.push(h.map(c => q(r[c])).join(','))) })
    dl('natijalar.csv', o.join('\n'))
  }
  return <div className="wrap"><h1>Natijalar</h1>
    <div className="rt-act noprint"><button className="btn" onClick={csv}>CSV yuklash</button><button className="btn ghost" onClick={() => window.print()}>Chop etish</button><button className="btn ghost" onClick={clear}>Tozalash</button></div>
    <div className="tscroll"><table><thead><tr><th>№</th><th style={{ textAlign: 'left' }}>Mavzu</th><th>Test</th><th>Nazorat ishi</th><th>Jadval</th></tr></thead>
      <tbody>{data.map(d => <tr key={d.t.id}><td>{d.t.id}</td><td style={{ textAlign: 'left', whiteSpace: 'normal' }}><Link to={'/topic/' + d.t.id}>{d.t.title}</Link></td><td>{d.quiz ? d.quiz.score + '/' + d.quiz.total : '—'}</td><td>{d.tasks ? d.tasks.score + '/' + d.tasks.total : '—'}</td><td>{d.rows.length || '—'}</td></tr>)}
        <tr className="tot"><td></td><td style={{ textAlign: 'left' }}><b>Jami</b></td><td><b>{sum('quiz', 'score')}/{sum('quiz', 'total')}</b></td><td><b>{sum('tasks', 'score')}/{sum('tasks', 'total')}</b></td><td><b>{data.reduce((n, d) => n + d.rows.length, 0)}</b></td></tr></tbody></table></div></div>
}
