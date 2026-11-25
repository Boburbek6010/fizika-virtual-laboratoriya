import { useState, useRef } from 'react'
import { PHET, phetUrl, phetPage } from '../phet.js'
const HINT = { 1: "burchak va boshlang'ich tezlikni o'zgartirib, uchish uzoqligini kuzating", 2: 'turli materiallarni suvga tushirib, zichlikni solishtiring', 3: "prujinani cho'zib, kuch va uzayish bog'lanishini kuzating", 4: "to'qnashuvda impuls va energiyaning saqlanishini tekshiring", 5: "tarozida yuklarni joylashtirib, muvozanat shartini toping", 7: "mayatnik uzunligi va g ni o'zgartirib, davrni o'lchang", 8: "tovush to'lqinining chastotasi va tarqalishini kuzating", 10: "jismlarni suyuqlikka botirib, Arximed kuchini kuzating", 11: "energiyaning bir turdan boshqasiga o'tishini kuzating", 14: "elektr zanjir yig'ib, tok va kuchlanishni o'lchang", 15: "kuchlanish va qarshilikni o'zgartirib, Om qonunini tekshiring", 16: "sim uzunligi va yuzasini o'zgartirib, qarshilikni kuzating", 17: "magnitni g'altak yonida harakatlantirib, induksiya tokini kuzating", 18: "linza va buyum holatini o'zgartirib, tasvirni kuzating", 19: "eritma konsentratsiyasi va yorug'lik yutilishini kuzating", 20: "yadro parchalanishini kuzating" }
export default function Phet({ id }) {
  const slug = PHET[id]; const [on, setOn] = useState(false); const box = useRef(null)
  if (!slug) return null
  const off = typeof navigator !== 'undefined' && navigator.onLine === false
  const full = () => { const e = box.current; if (e?.requestFullscreen) e.requestFullscreen().catch(() => {}); else if (e?.webkitRequestFullscreen) e.webkitRequestFullscreen() }
  return <section className="phet card-like">
    <h4>Interaktiv animatsiya</h4>
    <p className="muted">Sinab ko'ring: {HINT[id] || "parametrlarni o'zgartirib, natijani kuzating"}.</p>
    <div className="phet-act noprint">{!on ? <button className="btn pill" onClick={() => setOn(true)}>Animatsiyani ishga tushirish</button>
      : <><button className="btn pill ghost" onClick={full}>To'liq ekran</button><button className="btn pill ghost" onClick={() => setOn(false)}>Yopish</button></>}</div>
    {on && (off ? <div className="note">Internet aloqasi yo'q. Animatsiya yuklanmadi — ulanishni tekshirib, qayta urinib ko'ring.</div>
      : <div className="phet-box" ref={box}><iframe title={'PhET: ' + slug} src={phetUrl(slug)} loading="lazy" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" /></div>)}
    {on && !off && <p className="muted small">Yuklanmasa, <a href={phetPage(slug)} target="_blank" rel="noopener noreferrer">saytda oching</a>.</p>}
    <p className="phet-credit">Animatsiya: PhET Interaktiv simulyatsiyalari, Kolorado universiteti (Boulder) — <a href={phetPage(slug)} target="_blank" rel="noopener noreferrer">phet.colorado.edu</a>, CC BY 4.0</p>
  </section>
}
