const B = import.meta.env.BASE_URL
export default function Author() {
  return <section id="muallif" className="author">
    <div className="arow single">
      <img className="portrait" src={B + 'img/muallif.jpg'} alt="Jumayeva Ziyoda Arslonovna" />
      <div className="ainfo">
        <span className="cat">Muallif</span>
        <h2>Jumayeva Ziyoda Arslonovna</h2>
        <p className="cyr">Жумаева Зиёда Арслоновна</p>
        <p><b>Toshkent arxitektura-qurilish universiteti o'qituvchisi</b></p>
        <p className="work">Fizika virtual laboratoriya ishlari</p>
        <div className="abio">
          <h3>Ilmiy va pedagogik faoliyat</h3>
          <ul>
            <li><b>Ish joyi.</b> Toshkent arxitektura-qurilish universiteti (TAQU) o'qituvchisi.</li>
            <li><b>Yo'nalishlari.</b> Fizikani kasbga yo'naltirib o'qitish, ilg'or pedagogik texnologiyalarni qo'llash, elektrodinamika fanidan ma'ruza materiallari.</li>
            <li><b>Amaliy natija.</b> Qurilish muhandisligi talabalari uchun interaktiv virtual laboratoriyalar dasturi — Adliya vazirligi tomonidan davlat ro'yxatidan o'tkazilgan.</li>
          </ul>
        </div>
        <a className="plink" href={B + 'guvohnoma.pdf'} target="_blank" rel="noopener">Guvohnoma (PDF)</a>
      </div>
    </div>
  </section>
}
