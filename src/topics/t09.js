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
  formulas: [
    { name: 'Xususiy chastota', expr: 'ω₀ = √(k / m),  f₀ = ω₀ / 2π' },
    { name: 'Majbur etuvchi kuch', expr: 'F = F₀·cos(ωt)' },
    { name: 'Turg‘un amplituda', expr: 'A = (F₀/m) / √((ω₀² − ω²)² + 4δ²ω²)', note: 'δ = b / 2m' },
    { name: 'Rezonans sharti', expr: 'f ≈ f₀' },
    { name: 'Sifat omili', expr: 'Q = ω₀ / (2δ)' }
  ],
  learn: [
    "Majburiy tebranishlar va xususiy chastota f₀ = √(k/m)/2π ni",
    "Rezonans hodisasi va amplituda–chastota egri chizig‘ini",
    "So‘nish va sifat omili Q ning amplituda cho‘qqisiga ta’sirini",
    "Rezonansning qurilishdagi xavfi va undan himoyalanish usullarini"
  ],
  civil: [
    "1940 yilgi Takoma ko‘prigi shamol ta’sirida rezonansga yaqin tebranib qulagan: ko‘priklarda xususiy chastota shamol va transport chastotalaridan uzoq tanlanadi.",
    "Askarlar qadam tashlab o‘tadigan ko‘priklarda ritm buzilib o‘tish tavsiya etiladi, chunki qadam chastotasi (≈2 Hz) ko‘prikning xususiy chastotasiga mos tushishi mumkin.",
    "Zilzilada bino tuprog‘ining tebranish chastotasi bino xususiy chastotasiga yaqin bo‘lsa, amplituda keskin ortadi; seysmoizolyatsiya va damperlar shu sababli ishlatiladi.",
    "Mashina poydevorlarida (nasos, kompressor, vibrator) tebranish yutuvchi prujinalar va rezina qatlamlar bilan xususiy chastota ish chastotasidan pasaytiriladi."
  ],
  keyFact: "Ba’zi binolarda xususiy davr taxminan 0,1 s ga har bir qavat uchun mos keladi: 20 qavatli bino uchun T ≈ 2 s. Shu sababli zilzila to‘lqinining davri 2 s ga yaqin bo‘lsa, aynan shunday baland binolar eng ko‘p zarar ko‘radi.",
  mistakes: [
    "Chastotani (Hz) burchak chastota (rad/s) bilan aralashtirish: ω = 2πf. Formulaga ω qo‘yilganda f ni 2π ga ko‘paytirishni unutmang.",
    "Rezonansda amplituda cheksiz deb o‘ylash: so‘nish borligi sababli amplituda chekli va A ≈ F₀/(b·ω₀).",
    "Prujina bikrligini N/mm yoki kN/m da qoldirish: hisoblashdan oldin hammasini SI (N/m) ga o‘tkazing."
  ],
  glossary: [
    {
      "t": "Xususiy chastota",
      "d": "Tizim tashqi ta’sirsiz tebranadigan chastota, f₀ = √(k/m)/2π."
    },
    {
      "t": "Majburiy tebranish",
      "d": "Tashqi davriy kuch ta’sirida hosil bo‘ladigan tebranish."
    },
    {
      "t": "Rezonans",
      "d": "Majbur etuvchi chastota f ≈ f₀ bo‘lganda amplituda keskin ortishi."
    },
    {
      "t": "So‘nish koeffitsiyenti",
      "d": "Qarshilik kuchi F = b·v dagi b, birligi kg/s."
    },
    {
      "t": "Sifat omili Q",
      "d": "Rezonans cho‘qqisining o‘tkirligi, Q = ω₀/(2δ)."
    }
  ],
  theory: [
    "Tashqi davriy kuch F = F₀·cos(ωt) ta’sirida tizim majburiy tebranadi. Boshlang‘ich o‘tish jarayonidan keyin tebranish chastotasi majbur etuvchi kuchniki bilan bir xil, amplituda esa o‘zgarmas bo‘lib qoladi.",
    "Tizimning xususiy chastotasi ω₀ = √(k/m). Prujinali mayatnik uchun f₀ = ω₀ / 2π. Bikrlik k katta yoki massa m kichik bo‘lsa, xususiy chastota yuqori bo‘ladi.",
    "Turg‘un amplituda A = (F₀/m) / √((ω₀² − ω²)² + 4δ²ω²) formulasi bilan beriladi, bunda δ = b/(2m). Majbur etuvchi chastota xususiy chastotaga yaqinlashganda amplituda keskin ortadi — bu rezonans.",
    "So‘nish kuchaysa, rezonans cho‘qqisi pasayadi va kengayadi. Sifat omili Q = ω₀/(2δ) qanchalik katta bo‘lsa, cho‘qqi shunchalik o‘tkir. Rezonansda amplituda taxminan A ≈ F₀/(b·ω₀) ga teng.",
    "Majburiy tebranishda faza siljishi mavjud: past chastotada siljish nolga, rezonansda 90° ga, yuqori chastotada 180° ga yaqin bo‘ladi.",
    "Qurilishda rezonans xavfli: ko‘priklar, ustunlar, binolar va mashina poydevorlarining xususiy chastotasini ish chastotasidan uzoqlashtirish yoki damper qo‘shib so‘ndirish talab etiladi."
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring va yuk massasi m ni belgilang.",
    "Prujina bikrligi k ni o‘rnating va xususiy chastotani f₀ = √(k/m)/2π dan hisoblang.",
    "So‘nish koeffitsiyenti b va kuch amplitudasi F₀ ni kichik qiymatlarga o‘rnating.",
    "Majbur etuvchi chastotani 0,1 Hz dan boshlab asta-sekin oshiring.",
    "Har bir chastota uchun tebranish amplitudasi A ni jadvalga yozing.",
    "f₀ yaqinida chastotani kichik qadam (0,05 Hz) bilan o‘zgartirib, amplituda maksimumini aniqlang.",
    "Amplituda–chastota egri chizig‘ini chizing va rezonans chastotasini aniqlang.",
    "So‘nish koeffitsiyentini 2–3 marta oshirib, tajribani takrorlang va cho‘qqi o‘zgarishini kuzating.",
    "Q = ω₀/(2δ) ni hisoblang va qiymatlarni solishtiring.",
    "Natijalar bo‘yicha rezonans chastotasi tajriba va nazariya orasidagi farqni baholab, xulosa yozing."
  ],
  questions: [
    "Majburiy tebranish nima va u erkin tebranishdan nimasi bilan farq qiladi?",
    "Xususiy chastota qanday aniqlanadi?",
    "Rezonans hodisasi nima va qachon yuz beradi?",
    "So‘nish koeffitsiyenti amplituda egri chizig‘iga qanday ta’sir qiladi?",
    "Sifat omili Q nimani ifodalaydi?",
    "Rezonansda majbur etuvchi kuch va siljish orasidagi faza siljishi qancha?",
    "Nima uchun rezonansda amplituda cheksiz o‘smaydi?",
    "Prujina bikrligi 4 marta oshsa, xususiy chastota necha marta o‘zgaradi?",
    "Takoma ko‘prigi falokati rezonans bilan qanday bog‘liq?",
    "Mashina poydevorida rezonansni qanday oldini olish mumkin?"
  ],
  quiz: [
    {
      "q": "Prujinali mayatnikning xususiy chastotasi:",
      "options": [
        "f₀ = 2π·√(k/m)",
        "f₀ = √(m/k)",
        "f₀ = (1/2π)·√(k/m)",
        "f₀ = k·m"
      ],
      "answer": 2
    },
    {
      "q": "Rezonans sharti:",
      "options": [
        "f ≈ f₀",
        "f = 0",
        "f ≫ f₀",
        "f ≪ f₀"
      ],
      "answer": 0
    },
    {
      "q": "So‘nish ortsa, rezonans cho‘qqisi:",
      "options": [
        "Ortadi va torayadi",
        "O‘zgarmaydi",
        "Yo‘qolmaydi, yanada o‘tkirlashadi",
        "Pasayadi va kengayadi"
      ],
      "answer": 3
    },
    {
      "q": "Rezonansda faza siljishi taxminan:",
      "options": [
        "0°",
        "90°",
        "180°",
        "360°"
      ],
      "answer": 1
    },
    {
      "q": "Bikrlik 4 marta oshsa, f₀:",
      "options": [
        "4 marta ortadi",
        "2 marta ortadi",
        "2 marta kamayadi",
        "O‘zgarmaydi"
      ],
      "answer": 1
    },
    {
      "q": "Sifat omili Q = ω₀/(2δ) katta bo‘lsa:",
      "options": [
        "Cho‘qqi yassi bo‘ladi",
        "Rezonans bo‘lmaydi",
        "Chastota nolga teng bo‘ladi",
        "Cho‘qqi o‘tkir bo‘ladi"
      ],
      "answer": 3
    },
    {
      "q": "Yurish ritmi ko‘prik xususiy chastotasiga mos tushsa:",
      "options": [
        "Amplituda xavfli ortishi mumkin",
        "Ko‘prik mustahkamlanadi",
        "Tebranish yo‘qoladi",
        "Hech narsa o‘zgarmaydi"
      ],
      "answer": 0
    },
    {
      "q": "Rezonansdan himoyalanish usuli:",
      "options": [
        "Massani o‘zgartirmaslik",
        "Chastotani xususiyga tenglashtirish",
        "Xususiy chastotani ish chastotasidan uzoqlashtirish va damper",
        "So‘nishni kamaytirish"
      ],
      "answer": 2
    }
  ],
  conclusion: "Majburiy tebranishlarda amplituda majbur etuvchi kuch chastotasiga bog‘liq bo‘lib, f ≈ f₀ da maksimumga erishdi. So‘nish ortgani sari cho‘qqi pasaydi va kengaydi, sifat omili esa kamaydi. Tajriba natijalari nazariy A(f) bog‘lanishiga mos keldi va rezonans chastotasi xususiy chastotaga juda yaqin chiqdi. Bu ko‘priklar, binolar va mashina poydevorlarida rezonansning oldini olish zarurligini ko‘rsatadi.",
  tasks: [
    {
      "q": "Mashina poydevori: tebranuvchi massa 2000 kg, tayanchlar bikrligi 8·10⁶ N/m. Xususiy chastotani toping (f₀ = √(k/m)/2π).",
      "answer": 10.07,
      "unit": "Hz",
      "tol": 0.03,
      "hint": "Avval ω₀ = √(k/m) ni toping.",
      "solution": "ω₀ = √4000 = 63,25 rad/s; f₀ = 63,25/6,283 = 10,07 Hz."
    },
    {
      "q": "Piyodalar ko‘prigi ekvivalent massasi 1·10⁵ kg, xususiy chastotasi 2 Hz bo‘lishi kerak. Zarur bikrlikni toping (MN/m, k = m(2πf)²).",
      "answer": 15.79,
      "unit": "MN/m",
      "tol": 0.03,
      "hint": "ω = 2π·2 = 12,57 rad/s.",
      "solution": "k = 10⁵·12,57² = 1,579·10⁷ N/m = 15,79 MN/m."
    },
    {
      "q": "Tizim: m = 1000 kg, k = 4·10⁵ N/m, b = 2000 kg/s. Sifat omilini toping (Q = ω₀/(2δ), δ = b/2m).",
      "answer": 10,
      "unit": "",
      "tol": 0.03,
      "hint": "ω₀ = 20 rad/s, δ = 1 s⁻¹.",
      "solution": "ω₀ = √400 = 20; δ = 2000/2000 = 1; Q = 20/2 = 10."
    },
    {
      "q": "Xuddi shu tizimga (m = 1000 kg, k = 4·10⁵ N/m, b = 2000 kg/s) rezonans chastotasida F₀ = 800 N kuch ta’sir qiladi. Amplitudani toping (A = F₀/(b·ω₀)).",
      "answer": 0.02,
      "unit": "m",
      "tol": 0.03,
      "hint": "ω₀ = 20 rad/s.",
      "solution": "A = 800 / (2000·20) = 0,02 m."
    }
  ],
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
        note: (() => {
          const rel = Math.abs(v.f - f0) / f0, pc = Math.round(100 * A / Amax) + '% A_max';
          return rel < 0.1 ? 'Rezonans yaqinida: amplituda katta (' + pc + ').'
            : rel < 0.3 ? 'Rezonansga yaqinlashmoqda (' + pc + ').'
            : 'Rezonansdan uzoq: amplituda kichik (' + pc + ').';
        })()
      };
    }
  }
};
