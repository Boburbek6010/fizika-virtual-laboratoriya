export default {
  id: 7, slug: 'matematik-mayatnik', title: 'Matematik mayatnik yordamida erkin tushish tezlanishini aniqlash',
  category: 'Tebranishlar va tovush', emoji: '⏱️',
  short: 'Mayatnik uzunligi va tebranish vaqtini o‘lchab, erkin tushish tezlanishi g ni hisoblang.',
  aim: [
    'Matematik mayatnikning tebranish qonuniyatlarini o‘rganish',
    'Tebranish davrining mayatnik uzunligiga bog‘liqligini aniqlash',
    'Tebranish davrini tajribada o‘lchash',
    'g = 4π²l/T² formulasi orqali erkin tushish tezlanishini hisoblash va 9,81 m/s² bilan taqqoslash'
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Virtual matematik mayatnik (ip va sharcha)', 'Shtativ', 'Chizg‘ich', 'Sekundomer', 'Kalkulyator'],
  formulas: [
    { name: 'Tebranish davri', expr: 'T = 2π·√(l / g)', note: 'l — uzunlik, g — erkin tushish tezlanishi' },
    { name: 'Davrni o‘lchash', expr: 'T = t / N', note: 'N — to‘liq tebranishlar soni' },
    { name: 'Erkin tushish tezlanishi', expr: 'g = 4π²·l / T²' },
    { name: 'N tebranish orqali', expr: 'g = 4π²·l·N² / t²' },
    { name: 'Burchak tuzatmasi', expr: 'T ≈ T₀·(1 + θ₀²/16)', note: 'θ₀ — radianda' },
    { name: 'Nisbiy xato', expr: 'δg = |g_tajriba − g₀| / g₀ · 100 %', note: 'g₀ = 9,81 m/s²' }
  ],
  learn: [
    "Matematik mayatnikning tebranish davri T = 2π√(l/g) qonunini",
    "Uzunlik va tebranishlar soni orqali g ni aniqlashni",
    "Katta burchak davrga qanday ta’sir qilishini va tuzatmani",
    "Tajriba xatosini baholash va grafikdan g ni topishni (T² — l)"
  ],
  civil: [
    "Baland binoning shamol ta’siridagi tebranish davri (balandligi 100 m bino uchun taxminan 2–4 s) mayatnik analogiyasi bilan baholanadi.",
    "Taypeydagi kabi osma sozlanuvchi massali damperlar (TMD) mayatnik sifatida ishlaydi: uzunligi binoning xususiy davriga moslanadi.",
    "Geodeziyada va qurilishda otves (shovun) mayatnik qonuniga asoslangan, g ning joydagi qiymati nivelirlashga ta’sir qiladi.",
    "Osma ko‘prik va kran arqonida osilgan yuk mayatnik kabi chayqaladi: l ni bilgan holda chayqalish davrini oldindan hisoblash mumkin."
  ],
  keyFact: "Tebranish davri massaga bog‘liq emas: og‘ir va yengil sharchali mayatniklar bir xil davrga ega. Shu sababli kran arqonidagi yuk massasidan qat’i nazar, uning chayqalish davri faqat arqon uzunligi bilan belgilanadi.",
  mistakes: [
    "Tebranishlar sonini noto‘g‘ri sanash: bitta to‘liq tebranish — ikki chetga borib qaytish. Boshlanishni o‘rtadan emas, chetdan sanang.",
    "Uzunlikni ipning o‘zi bilan olish: l — osilish nuqtasidan sharcha markazigacha masofa (ip + radius).",
    "Katta burchak (>10°) ostida boshlash: davr uzayadi va g kam chiqadi. Burchakni 5–8° da saqlang va 20–30 tebranishni o‘lchang."
  ],
  glossary: [
    {
      "t": "Matematik mayatnik",
      "d": "Vaznsiz cho‘zilmas ipga osilgan nuqtaviy massa."
    },
    {
      "t": "Tebranish davri",
      "d": "Bitta to‘liq tebranishga ketgan vaqt T, birligi s."
    },
    {
      "t": "Chastota",
      "d": "Birlik vaqtdagi tebranishlar soni, f = 1/T, birligi Hz."
    },
    {
      "t": "Erkin tushish tezlanishi",
      "d": "Erkin tushayotgan jism tezlanishi, g ≈ 9,81 m/s²."
    },
    {
      "t": "Nisbiy xato",
      "d": "Tajriba va haqiqiy qiymat farqining haqiqiy qiymatga nisbati, %."
    }
  ],
  theory: [
    "Matematik mayatnik — vaznsiz va cho‘zilmas ipga osilgan nuqtaviy massa. Uni muvozanat holatidan kichik burchakka og‘dirib qo‘yib yuborsak, u garmonik tebranadi. Real tajribada ingichka ip va zich sharcha bu modelga yaqin keladi.",
    "Kichik burchaklarda tebranish davri T = 2π·√(l/g) formulasi bilan beriladi. Davr faqat uzunlik va g ga bog‘liq, massa va amplitudaga (kichik burchakda) bog‘liq emas. Bundan g = 4π²·l / T² kelib chiqadi.",
    "Aniqlikni oshirish uchun N ta tebranish vaqti t o‘lchanadi: T = t/N, shunda g = 4π²·l·N² / t². Sekundomer xatosi N marta kamayadi, shu sababli kamida 20 ta tebranish o‘lchash tavsiya etiladi.",
    "Burchak katta bo‘lsa, davr uzayadi: T ≈ T₀·(1 + θ₀²/16 + 11θ₀⁴/3072). 8° da tuzatma atigi 0,12 %, 30° da esa taxminan 1,7 %. Shu sababli amalda burchak 5–10° bilan cheklanadi.",
    "T² = (4π²/g)·l bog‘lanish to‘g‘ri chiziq beradi. Bir necha uzunlikda T² ni o‘lchab, grafik og‘ishidan g = 4π²/k ni topish alohida o‘lchashlardan ko‘ra ishonchli, chunki tizimli xatolar ordinata o‘qida siljish beradi.",
    "Qurilishda mayatnik modeli baland binolarning, kran arqonidagi yuk va osma konstruksiyalarning tebranishlarini baholashda, shuningdek g ning joydagi qiymatini aniqlashda qo‘llanadi."
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring va mayatnik uzunligini l = 1 m ga o‘rnating.",
    "Uzunlikni osilish nuqtasidan sharcha markazigacha aniqlang va yozib oling.",
    "Boshlang‘ich burchakni 5–8° ga qo‘ying (kichik burchak sharti).",
    "Sharchani qo‘yib yuboring va tebranish barqarorlashishini kuting.",
    "Sekundomerni muvozanat nuqtasidan o‘tishda yoqing va N = 20 tebranishni sanang.",
    "Vaqt t ni yozing va davrni T = t/N formulasidan toping.",
    "g = 4π²·l·N² / t² formulasidan erkin tushish tezlanishini hisoblang.",
    "Uzunlikni 0,25 m qadam bilan o‘zgartirib, tajribani kamida 5 marta takrorlang.",
    "T² ning l ga grafigini chizing va og‘ishdan g ni toping.",
    "g₀ = 9,81 m/s² bilan nisbiy xatoni hisoblang va burchakni 30° ga oshirib, farqni solishtiring."
  ],
  questions: [
    "Matematik mayatnik nima va u qanday shartlarda tebranadi?",
    "Tebranish davri formulasini yozing va uni tushuntiring.",
    "Davr mayatnik massasiga bog‘liqmi? Nima uchun?",
    "Nima uchun bitta tebranish emas, N ta tebranish vaqti o‘lchanadi?",
    "Katta burchakda davr qanday o‘zgaradi va g qanday chiqadi?",
    "T² — l grafigi qanday shaklda bo‘ladi va uning og‘ishi nimani beradi?",
    "Mayatnik uzunligi 4 marta oshirilsa, davr necha marta o‘zgaradi?",
    "Oyda (g ≈ 1,6 m/s²) mayatnik davri qanday bo‘ladi?",
    "Baland binodagi sozlanuvchi massali damper nima uchun mayatnik sifatida ishlatiladi?",
    "Tajriba xatolarining asosiy manbalarini sanab bering."
  ],
  quiz: [
    {
      "q": "Matematik mayatnikning davri formulasi:",
      "options": [
        "T = 2π√(l/g)",
        "T = 2π√(g/l)",
        "T = 2π·l/g",
        "T = √(l/g)"
      ],
      "answer": 0
    },
    {
      "q": "Mayatnik uzunligi 4 marta oshsa, davr:",
      "options": [
        "4 marta ortadi",
        "2 marta kamayadi",
        "2 marta ortadi",
        "O‘zgarmaydi"
      ],
      "answer": 2
    },
    {
      "q": "Kichik burchakda davr quyidagi kattalikka bog‘liq emas:",
      "options": [
        "Uzunlikka",
        "Massaga",
        "g ga",
        "Mayatnik joylashgan sayyoraga"
      ],
      "answer": 1
    },
    {
      "q": "g ni aniqlash formulasi:",
      "options": [
        "g = 2π²l / T",
        "g = l / 4π²T²",
        "g = T² / 4π²l",
        "g = 4π²l / T²"
      ],
      "answer": 3
    },
    {
      "q": "Bitta to‘liq tebranish:",
      "options": [
        "Ikki chetga borib qaytish",
        "Faqat bir chetga borish",
        "Faqat muvozanatdan o‘tish",
        "Chap chetdan o‘ngga borish"
      ],
      "answer": 0
    },
    {
      "q": "Burchak katta bo‘lsa, hisoblangan g:",
      "options": [
        "Haqiqiydan kichik chiqadi",
        "Haqiqiydan katta chiqadi",
        "O‘zgarmaydi",
        "Nolga teng bo‘ladi"
      ],
      "answer": 0
    },
    {
      "q": "T² — l grafigi:",
      "options": [
        "Parabola",
        "Koordinata boshidan o‘tuvchi to‘g‘ri chiziq",
        "Giperbola",
        "Gorizontal chiziq"
      ],
      "answer": 1
    },
    {
      "q": "N ta tebranish o‘lchanishining sababi:",
      "options": [
        "Massani aniqlash",
        "Burchakni oshirish",
        "Sekundomer xatosini kamaytirish",
        "Ipni cho‘zish"
      ],
      "answer": 2
    }
  ],
  conclusion: "Tajribada mayatnik uzunligi ortishi bilan tebranish davri √l ga proporsional ortishi kuzatildi, T² = f(l) grafigi to‘g‘ri chiziq bo‘ldi. Hisoblangan g qiymati kichik burchaklarda 9,81 m/s² ga juda yaqin chiqdi, katta burchakda esa davr uzayib, g kam chiqdi. Xatolik asosan vaqtni o‘lchash, uzunlikni aniqlash va burchak ta’siri bilan bog‘liq. Natijalar baland bino va osma konstruksiyalar tebranishini baholashda mayatnik modelidan foydalanish mumkinligini ko‘rsatadi.",
  tasks: [
    {
      "q": "Kran arqonidagi yuk uzunligi 2,5 m bo‘lgan mayatnik kabi kichik burchakda chayqaladi. Chayqalish davrini toping (g = 9,81 m/s²).",
      "answer": 3.172,
      "unit": "s",
      "tol": 0.03,
      "hint": "T = 2π√(l/g).",
      "solution": "T = 2π·√(2,5/9,81) = 3,17 s."
    },
    {
      "q": "Mayatnikning davri 2,0 s bo‘lishi uchun ip uzunligi qancha bo‘lishi kerak (g = 9,81 m/s²)?",
      "answer": 0.994,
      "unit": "m",
      "tol": 0.03,
      "hint": "l = g·T² / 4π².",
      "solution": "l = 9,81·4 / (4π²) = 0,994 m."
    },
    {
      "q": "Uzunligi 0,5 m bo‘lgan mayatnik 20 ta tebranishni 28,4 s da bajardi. g ni toping (g = 4π²lN²/t²).",
      "answer": 9.789,
      "unit": "m/s²",
      "tol": 0.03,
      "hint": "Avval N² = 400 va t² ni hisoblang.",
      "solution": "g = 4π²·0,5·400 / 28,4² = 9,79 m/s²."
    },
    {
      "q": "Binodagi sozlanuvchi massali damper mayatnik sifatida ishlaydi va uning davri 6,0 s bo‘lishi kerak. Mayatnik uzunligi qancha (g = 9,81 m/s²)?",
      "answer": 8.946,
      "unit": "m",
      "tol": 0.03,
      "hint": "l = g·T² / 4π².",
      "solution": "l = 9,81·36 / (4π²) = 8,95 m."
    }
  ],
  sim: {
    intro: 'Qiymatlarni o‘zgartiring, natija avtomatik hisoblanadi. Katta burchakda g kam chiqishiga e’tibor bering.',
    inputs: [
      { id: 'l', label: 'Mayatnik uzunligi l', unit: 'm', min: 0.1, max: 2, step: 0.05, value: 1 },
      { id: 'N', label: 'Tebranishlar soni N', unit: '', min: 5, max: 50, step: 1, value: 20 },
      { id: 'th', label: 'Boshlang‘ich burchak θ₀', unit: '°', min: 1, max: 60, step: 1, value: 8 },
      { id: 'g0', label: 'Joyning haqiqiy g ( 9,81 — Yer )', unit: 'm/s²', min: 1.6, max: 12, step: 0.01, value: 9.81 }
    ],
    compute: (v) => {
      const th = v.th * Math.PI / 180;
      const T0 = 2 * Math.PI * Math.sqrt(v.l / v.g0);
      const T = T0 * (1 + th * th / 16 + 11 * Math.pow(th, 4) / 3072);
      const t = T * v.N;
      const gExp = 4 * Math.PI * Math.PI * v.l * v.N * v.N / (t * t);
      const err = (gExp - 9.81) / 9.81 * 100;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const l = 0.1 + (2 - 0.1) * i / 40;
        const Tl = 2 * Math.PI * Math.sqrt(l / v.g0) * (1 + th * th / 16 + 11 * Math.pow(th, 4) / 3072);
        pts.push([l, v.N * Tl]);
      }
      return {
        results: [
          { label: 'Nazariy davr T₀ (kichik burchak)', value: T0, unit: 's', digits: 4 },
          { label: 'Haqiqiy davr T', value: T, unit: 's', digits: 4 },
          { label: 'N tebranish vaqti t', value: t, unit: 's', digits: 4 },
          { label: 'Hisoblangan g = 4π²lN²/t²', value: gExp, unit: 'm/s²', digits: 4 },
          { label: 'g₀ = 9,81 dan og‘ish', value: err, unit: '%', digits: 3 }
        ],
        chart: {
          title: 'N ta tebranish vaqtining l ga bog‘liqligi', xLabel: 'l, m', yLabel: 't, s',
          series: [{ name: 't = N·T(l)', points: pts }, { name: 'Joriy', points: [[v.l, t]] }]
        },
        note: v.th > 10 ? 'Burchak 10° dan katta: davr uzayadi va hisoblangan g kamayadi.' : 'Burchak kichik: formula yaxshi ishlaydi.'
      };
    }
  }
};
