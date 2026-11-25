import { useState } from 'react'
import { Link } from 'react-router-dom'
import { topics, categories, DETAIL } from '../topics.js'
import Img from './Img.jsx'
import Simulator from './Simulator.jsx'
import Author from './Author.jsx'
export default function Home() {
  const [cat, setCat] = useState('Hammasi')
  const list = topics.filter(t => cat === 'Hammasi' || t.category === cat)
  return <>
    <nav className="nav"><a href="#/" className="brand"><span className="mark">⚛</span> Fizika<b>Lab</b></a>
      <a href="#muallif" className="navlink" onClick={e => { e.preventDefault(); document.getElementById('muallif')?.scrollIntoView({ behavior: 'smooth' }) }}>Muallif</a>
      <div className="links">{topics.map(t => <a key={t.id} href={'#sec-' + t.id} onClick={e => { e.preventDefault(); document.getElementById('sec-' + t.id)?.scrollIntoView({ behavior: 'smooth' }) }}>{t.id}</a>)}</div></nav>
    <header className="hero"><div className="hero-in"><h1>Fizikadan<br />virtual laboratoriya ishlari</h1><p className="uni">Toshkent arxitektura qurilish universiteti</p><p>Qurilish muhandislari uchun 20 ta interaktiv laboratoriya ishi: nazariya, jonli simulyator va testlar.</p>
      <div className="hero-act"><span className="by"><i className="av">Z</i>Muallif: Jumayeva Ziyoda Arslonovna</span>
      <button className="btn" onClick={() => document.getElementById('muallif')?.scrollIntoView({ behavior: 'smooth' })}>Guvohnomani ko'rish</button></div></div></header>
    <Author />
    <div className="chips">{['Hammasi', ...categories].map(c => <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>)}</div>
    {list.map((t, n) => <section id={'sec-' + t.id} key={t.id} className={'sec ' + (n % 2 ? 'alt' : '')}>
      <div className={'row ' + (n % 2 ? 'rev' : '')}>
        <div className="media"><Img topic={t} /><span className="badge">{String(t.id).padStart(2, '0')}</span></div>
        <div className="txt"><span className="cat">{t.category}</span><h2>{t.title}</h2>{t.short && <p>{t.short}</p>}
          {t.aim && <ul>{t.aim.map((a, i) => <li key={i}>{a}</li>)}</ul>}
          {DETAIL.includes(t.id) ? <Link className="btn" to={'/topic/' + t.id}>Batafsil ochish →</Link> : <span className="soon">Batafsil sahifa tez orada</span>}</div>
      </div>
      <div className="simbox">{t.sim ? <Simulator sim={t.sim} /> : <p className="muted">Simulyator tez orada qo'shiladi.</p>}</div>
    </section>)}
    <footer>© Fizika virtual laboratoriya · Muallif: Jumayeva Ziyoda Arslonovna · Guvohnoma № DGU 68504</footer>
  </>
}
