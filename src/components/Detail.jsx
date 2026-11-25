import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { topics, DETAIL } from '../topics.js'
import Img from './Img.jsx'
import Simulator from './Simulator.jsx'
import Quiz from './Quiz.jsx'
const TABS = ['Nazariya', 'Formulalar', 'Jihozlar', 'Ishni bajarish', 'Simulyatsiya', 'Test', 'Nazorat savollari']
export default function Detail() {
  const { id } = useParams(); const t = topics.find(x => x.id === +id)
  const [tab, setTab] = useState(0)
  const back = <nav className="nav"><Link to="/" className="brand">← Bosh sahifa</Link></nav>
  if (!t || !DETAIL.includes(t.id) || !t.ready) return <>{back}<div className="wrap"><h2>{t ? t.title : 'Topilmadi'}</h2><span className="soon">Tez orada</span></div></>
  const ul = a => <ul>{(a || []).map((x, i) => <li key={i}>{x}</li>)}</ul>
  return <>{back}
    <div className="wrap"><div className="dhead"><Img topic={t} className="small" /><div><span className="cat">{t.category}</span><h1>{t.title}</h1><h4>Maqsad</h4>{ul(t.aim)}</div></div>
      <div className="tabs">{TABS.map((x, i) => <button key={x} className={'tab' + (i === tab ? ' on' : '')} onClick={() => setTab(i)}>{x}</button>)}</div>
      <div className="panel">
        {tab === 0 && <>{(t.theory || []).map((p, i) => <p key={i}>{p}</p>)}</>}
        {tab === 1 && (t.formulas || []).map((f, i) => <div className="formula" key={i}><small>{f.name}</small><code>{f.expr}</code>{f.note && <span>{f.note}</span>}</div>)}
        {tab === 2 && ul(t.equipment)}
        {tab === 3 && <ol>{(t.procedure || []).map((x, i) => <li key={i}>{x}</li>)}</ol>}
        {tab === 4 && t.sim && <Simulator sim={t.sim} />}
        {tab === 5 && <Quiz quiz={t.quiz} />}
        {tab === 6 && <><ol>{(t.questions || []).map((x, i) => <li key={i}>{x}</li>)}</ol>{t.conclusion && <div className="note"><b>Namunaviy xulosa:</b> {t.conclusion}</div>}</>}
      </div></div></>
}
