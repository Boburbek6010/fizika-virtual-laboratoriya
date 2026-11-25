import { useState } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { load, save, bestQuiz, saveTasks } from '../store.js'
import { topics } from '../topics.js'
import Img from './Img.jsx'
import Simulator from './Simulator.jsx'
import Quiz from './Quiz.jsx'
import Tasks from './Tasks.jsx'
import Phet from './Phet.jsx'
const TABS = ["Umumiy ko'rinish", 'Nazariya', 'Formulalar', 'Jihozlar', 'Ishni bajarish', 'Simulyatsiya', 'Test', 'Nazorat ishi', 'Nazorat savollari', 'Xulosa']
const KEYS = ['ov', 'theory', 'formulas', 'equip', 'proc', 'sim', 'test', 'tasks', 'q', 'concl']
const ul = a => <ul>{(a || []).map((x, i) => <li key={i}>{x}</li>)}</ul>
function View({ t }) {
  const [sp] = useSearchParams(); const [tab, setTab] = useState(Math.max(0, KEYS.indexOf(sp.get('tab'))))
  const [rows, setRowsS] = useState(() => load('fz:rows:' + t.id, []))
  const setRows = f => setRowsS(p => { const n = typeof f === 'function' ? f(p) : f; save('fz:rows:' + t.id, n); return n })
  const i = topics.findIndex(x => x.id === t.id), prev = topics[i - 1], next = topics[i + 1]
  const learn = t.learn || t.aim
  return <div className="wrap"><div className="dhead"><Img topic={t} className="small" /><div><span className="cat">{t.category}</span><h1>{t.title}</h1>{t.short && <p className="muted">{t.short}</p>}
    <div className="badges"><span>Test: {(t.quiz || []).length} savol</span><span>Nazorat ishi: {(t.tasks || []).length} masala</span></div></div></div>
    <div className="tabs noprint">{TABS.map((x, k) => <button key={x} className={'tab' + (k === tab ? ' on' : '')} onClick={() => setTab(k)}>{x}</button>)}</div>
    <div className="panel">
      {tab === 0 && <>
        {learn && <><h4>Nimani o'rganasiz</h4>{ul(learn)}</>}
        {t.aim && t.learn && <><h4>Maqsad</h4>{ul(t.aim)}</>}
        {t.civil && <><h4>Qurilishda qo'llanishi</h4><div className="callout">{ul(t.civil)}</div></>}
        {t.keyFact && <div className="note"><b>Qiziqarli fakt:</b> {t.keyFact}</div>}</>}
      {tab === 1 && <>{(t.theory || []).map((p, k) => <p key={k}>{p}</p>)}
        {t.glossary && <><h4>Atamalar lug'ati</h4><dl className="gl">{t.glossary.map((g, k) => <div key={k}><dt>{g.t}</dt><dd>{g.d}</dd></div>)}</dl></>}</>}
      {tab === 2 && (t.formulas || []).map((f, k) => <div className="formula" key={k}><small>{f.name}</small><code>{f.expr}</code>{f.note && <span>{f.note}</span>}</div>)}
      {tab === 3 && ul(t.equipment)}
      {tab === 4 && <><ol>{(t.procedure || []).map((x, k) => <li key={k}>{x}</li>)}</ol>
        {t.mistakes && <><h4>Odatiy xatolar</h4><div className="callout warn">{ul(t.mistakes)}</div></>}</>}
      {tab === 5 && (t.sim ? <><Simulator sim={t.sim} table={{ rows, setRows }} topicId={t.id} onFinish={() => setTab(9)} /><Phet id={t.id} /></> : <p className="muted">Simulyator hozircha mavjud emas.</p>)}
      {tab === 6 && <Quiz quiz={t.quiz} onDone={(s, n) => bestQuiz(t.id, s, n)} />}
      {tab === 7 && <Tasks tasks={t.tasks} onScore={(s, n) => saveTasks(t.id, s, n)} />}
      {tab === 8 && <ol>{(t.questions || []).map((x, k) => <li key={k}>{x}</li>)}</ol>}
      {tab === 9 && (t.conclusion ? <div className="note"><b>Namunaviy xulosa:</b> {t.conclusion}</div> : <p className="muted">Xulosa hozircha mavjud emas.</p>)}
    </div>
    <div className="pn noprint">{prev ? <Link to={'/topic/' + prev.id}>← {prev.id}. {prev.title}</Link> : <span />}{next ? <Link to={'/topic/' + next.id}>{next.id}. {next.title} →</Link> : <span />}</div>
  </div>
}
export default function Detail() {
  const [sp] = useSearchParams()
  const { id } = useParams(); const t = topics.find(x => x.id === +id)
  const nav = null
  if (!t || !t.ready) return <>{nav}<div className="wrap"><h2>{t ? t.title : 'Topilmadi'}</h2><span className="soon">Tez orada</span></div></>
  return <>{nav}<View key={t.id + '|' + sp.toString()} t={t} /></>
}
