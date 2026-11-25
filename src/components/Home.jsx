import { useState } from 'react'
import { scrollToId } from '../store.js'
import { Link } from 'react-router-dom'
import { topics, categories } from '../topics.js'
import Img from './Img.jsx'
import Simulator from './Simulator.jsx'
import Author from './Author.jsx'
export default function Home() {
  const [cat, setCat] = useState('Hammasi'); const [qs, setQs] = useState('')
  const list = topics.filter(t => cat === 'Hammasi' || t.category === cat)
  const ql = qs.trim().toLowerCase()
  const gl = list.filter(t => !ql || (t.title + ' ' + (t.short || '')).toLowerCase().includes(ql))
  const sum = k => topics.reduce((n, t) => n + (t[k] || []).length, 0)
  const stats = [[topics.length, 'laboratoriya'], [topics.filter(t => t.sim).length, 'interaktiv simulyatorlar'], [sum('quiz'), 'test savollari'], [sum('tasks'), 'nazorat masalalari']]
  const D = [['Muallif', 'Jumayeva Ziyoda Arslonovna'], ['Mavzu', "Fizika fanini o'qitish jarayonida talabalarning muhandislik qobiliyatlarini rivojlantirish metodikasi (qurilish muhandisligi yo'nalishlari misolida)"], ['Ixtisoslik', "13.00.02 – Ta'lim va tarbiya nazariyasi va metodikasi (fizika)"], ["Mavzu ro'yxatga olingan", 'B2025.4.PhD/Ped11379'], ['Ilmiy rahbar', 'Kamalov Amangeldi Bazarbayevich, fizika-matematika fanlari doktori, professor'], ['Bajarilgan muassasa', 'Nukus davlat pedagogika instituti'], ['Yetakchi tashkilot', "Farg'ona davlat universiteti"], ['Ilmiy kengash', 'Nukus davlat pedagogika instituti, DSc.01/2025.27.12.Ped.09.01']]
  return <>
    <header className="hero"><div className="hero-in"><h1>Fizikadan<br />virtual laboratoriya ishlari</h1><p className="uni">Toshkent arxitektura qurilish universiteti</p><p>Qurilish muhandislari uchun 20 ta interaktiv laboratoriya ishi: nazariya, jonli simulyator va testlar.</p>
      <div className="fchips">{[["Interaktiv modellar", "M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5"], ["Animatsiya va simulyatsiya", "M8 5v14l11-7z"], ["Avtomatik hisoblash", "M5 4h14v16H5zM8 8h8M8 12h3M13 12h3M8 16h3M13 16h3"], ["Grafiklar va diagrammalar", "M4 20V4M4 20h16M7 15l4-5 3 3 5-7"], ["Natijalarni saqlash", "M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6"]].map(([n, d]) => <span className="fc" key={n}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>{n}</span>)}</div>
      <div className="hero-act"><span className="by"><i className="av">Z</i>Muallif: Jumayeva Ziyoda Arslonovna</span>
      <button className="btn" onClick={() => document.getElementById('muallif')?.scrollIntoView({ behavior: 'smooth' })}>Guvohnomani ko'rish</button></div></div></header>
    <Author />
    <section className="intro"><div className="stats">{stats.map(([n, l]) => <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>)}</div>
      <h2 className="sh">Qanday ishlaydi</h2>
      <div className="how">{[['1', 'Nazariya', "Qisqa nazariya, formulalar va qurilishdagi qo'llanishini o'qing."], ['2', 'Simulyatsiya', "Parametrlarni o'zgartirib, natija va grafikni jonli kuzating, jadvalga yozing."], ['3', 'Test va nazorat ishi', "Testlar va sonli masalalar bilan bilimingizni tekshiring."]].map(([n, h, p]) => <div key={n}><i>{n}</i><h3>{h}</h3><p>{p}</p></div>)}</div>
      <div className="defense"><span className="cat">Dissertatsiya himoyasi</span><h3>Falsafa doktori (PhD) dissertatsiyasi himoyasi — 25.11.2026</h3><dl>{D.map(([k, v]) => <div style={{ display: 'contents' }} key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div></section>

    <section id="laboratoriyalar" className="labs"><h2>Laboratoriyalar</h2><p className="muted">20 ta laboratoriya ishidan birini tanlang</p>
      <div className="gridbar"><div className="chips2">{['Hammasi', ...categories].map(c => <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>)}</div>
        <input className="search" placeholder="Qidirish…" value={qs} onChange={e => setQs(e.target.value)} /></div>
      <div className="cgrid">{gl.map(t => <div className="lc" key={t.id}><div className="thumb"><Img topic={t} /><span className="nb">{String(t.id).padStart(2, '0')}</span>{t.formulas && t.formulas[0] && <span className="fo">{t.formulas[0].expr}</span>}</div>
        <div className="lb2"><h3>{t.title}</h3><Link className="btn" to={'/topic/' + t.id}>Kirish</Link>
          <div className="ql"><Link to={'/topic/' + t.id + '?tab=sim'}>Simulyatsiya</Link><Link to={'/topic/' + t.id + '?tab=test'}>Test</Link><Link to={'/topic/' + t.id + '?tab=tasks'}>Nazorat ishi</Link></div></div></div>)}</div>
      {!gl.length && <p className="muted" style={{ textAlign: 'center' }}>Hech narsa topilmadi.</p>}</section>
    <div className="chips">{['Hammasi', ...categories].map(c => <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>)}</div>
    {list.map((t, n) => <section id={'sec-' + t.id} key={t.id} className={'sec ' + (n % 2 ? 'alt' : '')}>
      <div className={'row ' + (n % 2 ? 'rev' : '')}>
        <div className="media"><Img topic={t} /><span className="badge">{String(t.id).padStart(2, '0')}</span></div>
        <div className="txt"><span className="cat">{t.category}</span><h2>{t.title}</h2>{t.short && <p>{t.short}</p>}
          {(t.learn || t.aim) && <div className="know"><h5>Nimani o'rganasiz</h5><ul>{(t.learn || t.aim).slice(0, 4).map((a, i) => <li key={i}>{a}</li>)}</ul></div>}
          {t.civil && t.civil[0] && <div className="civilc"><b>Qurilishda qo'llanishi:</b> {t.civil[0]}</div>}
          {t.formulas && t.formulas[0] && <div><small className="muted">Asosiy formula</small><br /><span className="fchip">{t.formulas[0].expr}</span></div>}
          <div className="tags"><span className="tag">Test: {(t.quiz || []).length} savol</span><span className="tag">Nazorat ishi: {(t.tasks || []).length} masala</span></div>
          <Link className="btn" to={'/topic/' + t.id}>Batafsil sahifa →</Link></div>
      </div>
      <div className="simbox">{t.sim ? <Simulator sim={t.sim} /> : <p className="muted">Simulyator tez orada qo'shiladi.</p>}</div>
    </section>)}
    <section className="closing"><div className="em">👷 🏗️ 🏢</div><h2>Qurilish fizikasi — kelajak mutaxassislari uchun!</h2></section>
    <footer>© Fizika virtual laboratoriya · Muallif: Jumayeva Ziyoda Arslonovna · Guvohnoma № DGU 68504</footer>
  </>
}
