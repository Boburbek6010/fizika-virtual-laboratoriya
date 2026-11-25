import { useState } from 'react'
export default function Quiz({ quiz = [] }) {
  const [ans, setAns] = useState({}); const [done, setDone] = useState(false)
  if (!quiz.length) return <p className="muted">Test hozircha mavjud emas.</p>
  const score = quiz.filter((q, i) => ans[i] === q.answer).length
  return <div className="quiz">
    {quiz.map((q, i) => <div className="qcard" key={i}>
      <b>{i + 1}. {q.q}</b>
      {q.options.map((o, j) => {
        const cls = done ? (j === q.answer ? 'ok' : ans[i] === j ? 'bad' : '') : ans[i] === j ? 'sel' : ''
        return <label key={j} className={'opt ' + cls}><input type="radio" name={'q' + i} disabled={done} checked={ans[i] === j} onChange={() => setAns({ ...ans, [i]: j })} />{o}</label>
      })}
    </div>)}
    {done ? <div className="score">Natija: {score} / {quiz.length} <button className="btn ghost" onClick={() => { setAns({}); setDone(false) }}>Qayta urinish</button></div>
      : <button className="btn" disabled={Object.keys(ans).length < quiz.length} onClick={() => setDone(true)}>Tekshirish</button>}
  </div>
}
