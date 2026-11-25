import { useState } from 'react'
const B = import.meta.env.BASE_URL
export default function Author() {
  const [open, setOpen] = useState(false)
  return <section id="muallif" className="author">
    <div className="arow">
      <div className="ainfo">
        <div className="aprof">
          <img className="portrait" src={B + 'img/muallif.jpg'} alt="Jumayeva Ziyoda Arslonovna" />
          <div>
            <span className="cat">Muallif</span>
            <h2>Jumayeva Ziyoda Arslonovna</h2>
            <p className="cyr">Жумаева Зиёда Арслоновна</p>
            <p><b>Toshkent arxitektura-qurilish universiteti o'qituvchisi</b></p>
            <p className="work">Fizikadan virtual laboratoriya ishlari</p>
          </div>
        </div>
        <ul className="stats4">
          <li><b>PhD</b><span>dissertatsiya himoyasi, 25.11.2026</span></li>
          <li><b>20</b><span>virtual laboratoriya ishi</span></li>
          <li><b>13.00.02</b><span>ta'lim va tarbiya nazariyasi va metodikasi (fizika)</span></li>
          <li><b>DGU 68504</b><span>dasturning davlat guvohnomasi</span></li>
        </ul>
        <div className="abio">
          <h3>Ilmiy va pedagogik faoliyat</h3>
          <ul>
            <li><b>Ish joyi.</b> Toshkent arxitektura-qurilish universiteti (TAQU) o'qituvchisi.</li>
            <li><b>Ilmiy tadqiqot.</b> «Fizika fanini o'qitish jarayonida talabalarning muhandislik qobiliyatlarini rivojlantirish metodikasi (qurilish muhandisligi yo'nalishlari misolida)» mavzusida falsafa doktori (PhD) dissertatsiyasi.</li>
            <li><b>Yo'nalishlari.</b> Fizikani kasbga yo'naltirib o'qitish, ilg'or pedagogik texnologiyalarni qo'llash, elektrodinamika fanidan ma'ruza materiallari.</li>
            <li><b>Amaliy natija.</b> Qurilish muhandisligi talabalari uchun interaktiv virtual laboratoriyalar dasturi — Adliya vazirligi tomonidan davlat ro'yxatidan o'tkazilgan.</li>
          </ul>
        </div>
        <p className="for">Qurilish muhandisligi yo'nalishi talabalari uchun</p>
      </div>
      <div className="cert">
        <span className="glabel">GUVOHNOMA № DGU 68504</span>
        <img src={B + 'img/guvohnoma.jpg'} alt="Guvohnoma DGU 68504" onClick={() => setOpen(true)} />
        <div className="facts">
          <b>O'zbekiston Respublikasi Adliya vazirligi — Elektron hisoblash mashinalari uchun yaratilgan dasturning rasmiy ro'yxatdan o'tkazilganligi to'g'risidagi GUVOHNOMA № DGU 68504</b>
          <p>Talabnoma raqami: DT 202609864 (09.08.2026). Dasturiy mahsulotlar davlat reyestrida 29.08.2026 da ro'yxatdan o'tkazilgan.</p>
          <a className="btn" href={B + 'guvohnoma-DGU-68504.pdf'} download>PDF yuklab olish</a>
        </div>
      </div>
    </div>
    {open && <div className="lb" onClick={() => setOpen(false)}><img src={B + 'img/guvohnoma.jpg'} alt="Guvohnoma" /><span>✕</span></div>}
  </section>
}
