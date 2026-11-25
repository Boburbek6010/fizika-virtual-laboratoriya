import { useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { getTheme, applyTheme, scrollToId } from '../store.js'
const I = { home: 'M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z', lab: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3', book: 'M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6', test: 'M5 4h14v16H5zM9 9h6M9 13h6', res: 'M4 20V10M10 20V4M16 20v-8M22 20H2', menu: 'M4 6h16M4 12h16M4 18h16' }
const Ic = ({ d }) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
export function MenuSheet({ onClose }) {
  const nav = useNavigate(); const [th, setTh] = useState(getTheme)
  const go = id => { onClose(); nav('/'); setTimeout(() => scrollToId(id), 120) }
  return <div className="sheet-bg" onClick={onClose}><div className="sheet" onClick={e => e.stopPropagation()}>
    <h3>Menyu</h3>
    <button className="mi" onClick={() => go('muallif')}>Muallif</button>
    <button className="mi" onClick={() => go('muallif')}>Guvohnoma № DGU 68504</button>
    <div className="mi static">Mavzu<span className="seg">{[['light', 'Yorug'], ['dark', "Qorong'i"], ['auto', 'Avto']].map(([k, l]) => <button key={k} className={th === k ? 'on' : ''} onClick={() => { applyTheme(k); setTh(k) }}>{l}</button>)}</span></div>
    <button className="btn ghost" style={{ margin: '12px 0 0' }} onClick={onClose}>Yopish</button></div></div>
}
export default function Shell() {
  const [menu, setMenu] = useState(false); const nav = useNavigate(); const loc = useLocation()
  const labs = () => { if (loc.pathname === '/') scrollToId('laboratoriyalar'); else { nav('/'); setTimeout(() => scrollToId('laboratoriyalar'), 150) } }
  const items = [['Bosh sahifa', 'home', '/'], ['Laboratoriyalar', 'lab', null], ['Nazariya', 'book', '/nazariya'], ['Testlar', 'test', '/testlar'], ['Natijalar', 'res', '/natijalar']]
  return <>
    <nav className="nav noprint topnav"><Link to="/" className="brand"><span className="mark">⚛</span> Fizika<b>Lab</b></Link>
      <div className="tnav">{items.map(([l, , to]) => to ? <NavLink key={l} to={to} end className={({ isActive }) => 'tl' + (isActive ? ' on' : '')}>{l}</NavLink> : <button key={l} className="tl" onClick={labs}>{l}</button>)}
        <button className="tl" onClick={() => setMenu(true)}>Menyu</button></div></nav>
    <div className="tabbar noprint">{items.map(([l, ic, to]) => to ? <NavLink key={l} to={to} end className={({ isActive }) => 'tb' + (isActive ? ' on' : '')}><Ic d={I[ic]} /><span>{l === 'Laboratoriyalar' ? 'Laboratoriya' : l}</span></NavLink> : <button key={l} className="tb" onClick={labs}><Ic d={I[ic]} /><span>Laboratoriya</span></button>)}
      <button className="tb" onClick={() => setMenu(true)}><Ic d={I.menu} /><span>Menyu</span></button></div>
    {menu && <MenuSheet onClose={() => setMenu(false)} />}</>
}
