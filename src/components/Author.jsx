import { useState } from 'react'
const B = import.meta.env.BASE_URL
export default function Author() {
  const [open, setOpen] = useState(false)
  return <section id="muallif" className="author">
    <div className="arow">
      <div className="ainfo">
        <span className="cat">Muallif</span>
        <h2>Jumayeva Ziyoda Arslonovna</h2>
        <p className="cyr">Жумаева Зиёда Арслоновна</p>
        <p><b>O'qituvchi</b></p>
        <p className="work">Fizikadan virtual laboratoriya ishlari</p>
        <p className="uni">Toshkent arxitektura qurilish universiteti</p>
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
