export default {
  id: 9, slug: 'majburiy-tebranish', title: 'Majburiy tebranishlar va rezonans',
  category: 'Tebranishlar va tovush', emoji: '🌉',
  short: 'Tashqi davriy kuch chastotasini o‘zgartirib, tebranish amplitudasi va rezonans hodisasini kuzating.',
  aim: [
    'Tashqi davriy kuch ta’siridagi majburiy tebranishlarni o‘rganish',
    'Majbur etuvchi kuch chastotasining amplitudaga ta’sirini aniqlash',
    'Rezonans hodisasini kuzatish va A(f) grafigini qurish',
    'So‘nishning rezonansga ta’sirini baholash'
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Prujinali mayatnik (yuk va prujina)', 'Davriy kuch generatori', 'Kompyuter yoki mobil qurilma', 'Kalkulyator'],
  theory: [
    'Tashqi davriy kuch F = F₀·cos(ωt) ta’sirida yuzaga keladigan tebranishlar majburiy tebranishlar deyiladi. Energiya tashqi manbadan uzatiladi.',
    'Prujinali mayatnikning xususiy chastotasi ω₀ = √(k/m), f₀ = ω₀/(2π). So‘nish koeffitsiyenti b bo‘lsa, so‘nish δ = b/(2m).',
    'Turg‘un amplituda A = (F₀/m) / √((ω₀² − ω²)² + 4δ²ω²). Chastota xususiy chastotaga yaqinlashganda (f ≈ f₀) amplituda keskin ortadi — bu rezonans.',
    'So‘nish qanchalik kam bo‘lsa, rezonans cho‘qqisi shunchalik baland va tor bo‘ladi. Qurilishda ko‘prik, bino va kranlarni loyihalashda xususiy chastotalarni hisoblash, dempfer qo‘llash rezonans xavfini kamaytiradi.'
  ],
  formulas: [
    { name: 'Xususiy chastota', expr: 'ω₀ = √(k / m),  f₀ = ω₀ / 2π' },
    { name: 'Majbur etuvchi kuch', expr: 'F = F₀·cos(ωt)' },
    { name: 'Turg‘un amplituda', expr: 'A = (F₀/m) / √((ω₀² − ω²)² + 4δ²ω²)', note: 'δ = b / 2m' },
    { name: 'Rezonans sharti', expr: 'f ≈ f₀' },
    { name: 'Sifat omili', expr: 'Q = ω₀ / (2δ)' }
  ],
  procedure: [
    'Virtual laboratoriyani ishga tushiring.',
    'Yuk massasini m = 0,5 kg, prujina bikrligini k = 50 N/m qilib belgilang.',
    'Xususiy chastota f₀ = (1/2π)·√(k/m) ni hisoblang.',
    'Tashqi davriy kuchni yoqing.',
    'Chastotani kichik qiymatdan (0,5 Hz) boshlab asta oshiring.',
    'Har bir chastotada amplituda A ni o‘lchab, jadvalga yozing.',
    'Amplituda eng katta bo‘lgan chastotani rezonans holati sifatida qayd eting.',
    'A = A(f) grafigini chizing; so‘nishni oshirib, tajribani takrorlang.'
  ],
  questions: [
    'Majburiy tebranish deb nimaga aytiladi?',
    'Erkin va majburiy tebranishlarning farqi nimada?',
    'Prujinali mayatnikning xususiy chastotasi qanday aniqlanadi?',
    'Rezonans hodisasi nima va qanday sharoitda yuz beradi?',
    'So‘nish rezonans egri chizig‘iga qanday ta’sir qiladi?',
    'Rezonansning foydali va zararli tomonlariga misollar keltiring.',
    'Qurilish konstruksiyalarini loyihalashda rezonans nima uchun hisobga olinadi?'
  ],
  quiz: [
    { q: 'Majburiy tebranishlar nima?', options: ['Tashqi davriy kuch ta’sirida yuzaga keladigan tebranishlar', 'Erkin tebranishlar', 'Tasodifiy harakat', 'Aylanma harakat'], answer: 0 },
    { q: 'Rezonans hodisasi qachon yuz beradi?', options: ['Tashqi kuch chastotasi xususiy chastotaga teng bo‘lganda', 'Tashqi kuch nol bo‘lganda', 'Massa ortganda', 'Harorat oshganda'], answer: 0 },
    { q: 'Rezonans vaqtida amplituda:', options: ['Maksimal bo‘ladi', 'Nol bo‘ladi', 'O‘zgarmaydi', 'Kamayadi'], answer: 0 },
    { q: 'Rezonansni kamaytirish uchun nima qo‘llaniladi?', options: ['Dempferlar', 'Chastotani oshirish', 'Massani kamaytirish', 'Haroratni oshirish'], answer: 0 },
    { q: 'Qurilishda rezonansning oldini olish uchun:', options: ['Xususiy chastota hisoblanadi', 'Devorlar bo‘yaladi', 'Balandlik kamaytiriladi', 'Elektr toki uziladi'], answer: 0 }
  ],
  conclusion: 'Majburiy tebranishlarda amplituda majbur etuvchi kuch chastotasiga bog‘liq bo‘lib, f ≈ f₀ da maksimumga erishdi. So‘nish ortgani sari cho‘qqi pasaydi va kengaydi. Qurilish inshootlari xususiy chastotasi tashqi ta’sir chastotasidan uzoq bo‘lishi lozim.',
  sim: {
    intro: 'Chastotani xususiy chastotaga yaqinlashtiring va amplituda o‘sishini kuzating.',
    inputs: [
      { id: 'm', label: 'Yuk massasi', unit: 'kg', min: 0.1, max: 5, step: 0.1, value: 0.5 },
      { id: 'k', label: 'Prujina bikrligi', unit: 'N/m', min: 5, max: 200, step: 1, value: 50 },
      { id: 'b', label: 'So‘nish koeffitsiyenti b', unit: 'kg/s', min: 0.05, max: 5, step: 0.05, value: 0.4 },
      { id: 'F0', label: 'Kuch amplitudasi F₀', unit: 'N', min: 0.1, max: 5, step: 0.1, value: 1 },
      { id: 'f', label: 'Majbur etuvchi chastota', unit: 'Hz', min: 0.1, max: 5, step: 0.05, value: 1.5 }
    ],
    compute: (v) => {
      const w0 = Math.sqrt(v.k / v.m);
      const f0 = w0 / (2 * Math.PI);
      const d = v.b / (2 * v.m);
      const amp = (f) => {
        const w = 2 * Math.PI * f;
        return (v.F0 / v.m) / Math.sqrt(Math.pow(w0 * w0 - w * w, 2) + 4 * d * d * w * w);
      };
      const A = amp(v.f);
      const w = 2 * Math.PI * v.f;
      const phase = Math.atan2(2 * d * w, w0 * w0 - w * w) * 180 / Math.PI;
      const Q = w0 / (2 * d);
      const wr2 = w0 * w0 - 2 * d * d;
      const fr = wr2 > 0 ? Math.sqrt(wr2) / (2 * Math.PI) : 0;
      const Amax = amp(fr > 0 ? fr : 1e-4);
      const pts = [];
      for (let i = 0; i <= 60; i++) {
        const f = 0.05 + (5 - 0.05) * i / 60;
        pts.push([f, amp(f)]);
      }
      return {
        results: [
          { label: 'Xususiy chastota f₀', value: f0, unit: 'Hz', digits: 3 },
          { label: 'Amplituda A', value: A, unit: 'm', digits: 3 },
          { label: 'Maksimal amplituda', value: Amax, unit: 'm', digits: 3 },
          { label: 'Sifat omili Q', value: Q, unit: '', digits: 3 },
          { label: 'Faza siljishi', value: phase, unit: '°', digits: 3 }
        ],
        chart: {
          title: 'Rezonans egri chizig‘i A(f)', xLabel: 'f, Hz', yLabel: 'A, m',
          series: [{ name: 'A(f)', points: pts }, { name: 'Joriy', points: [[v.f, A]] }]
        },
        note: Math.abs(v.f - f0) / f0 < 0.05 ? 'Rezonans! f ≈ f₀, amplituda maksimal.' : 'Rezonansdan uzoq: amplituda kichik.'
      };
    }
  }
};
