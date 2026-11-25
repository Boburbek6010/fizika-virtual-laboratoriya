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
  theory: [
    'Vaznsiz va cho‘zilmas ipga osilgan moddiy nuqta matematik mayatnik deyiladi. Haqiqiy mayatnikka uni ip uzunligi sharcha o‘lchamidan ancha katta bo‘lganda yaqinlashtirish mumkin.',
    'Kichik burchaklarda (taxminan 5–10° gacha) sin θ ≈ θ bo‘ladi va harakat garmonik tebranishga aylanadi. Davr T = 2π·√(l/g) bo‘lib, u massaga va amplitudaga bog‘liq emas.',
    'Formuladan g = 4π²·l/T² kelib chiqadi. Davrni aniq o‘lchash uchun N ta to‘liq tebranish vaqti t o‘lchanadi: T = t/N, shunda g = 4π²·l·N²/t². Ko‘p tebranishni o‘lchash sekundomer xatosini N marta kamaytiradi.',
    'Katta boshlang‘ich burchak θ₀ da haqiqiy davr birmuncha uzunroq: T ≈ T₀·(1 + θ₀²/16), θ₀ radianda. Shu sababli hisoblangan g bir oz kam chiqadi.',
    'Muhandislikda mayatnik prinsipi seysmik asboblar, binolar tebranishini baholash va gravimetriyada qo‘llanadi.'
  ],
  formulas: [
    { name: 'Tebranish davri', expr: 'T = 2π·√(l / g)', note: 'l — uzunlik, g — erkin tushish tezlanishi' },
    { name: 'Davrni o‘lchash', expr: 'T = t / N', note: 'N — to‘liq tebranishlar soni' },
    { name: 'Erkin tushish tezlanishi', expr: 'g = 4π²·l / T²' },
    { name: 'N tebranish orqali', expr: 'g = 4π²·l·N² / t²' },
    { name: 'Burchak tuzatmasi', expr: 'T ≈ T₀·(1 + θ₀²/16)', note: 'θ₀ — radianda' },
    { name: 'Nisbiy xato', expr: 'δg = |g_tajriba − g₀| / g₀ · 100 %', note: 'g₀ = 9,81 m/s²' }
  ],
  procedure: [
    'Virtual laboratoriya dasturini ishga tushirib, matematik mayatnik modelini tanlang.',
    'Ip uzunligi l ni chizg‘ich bilan o‘lchab belgilang (osilish nuqtasidan sharcha markazigacha).',
    'Mayatnikni muvozanat holatidan kichik burchakka (5–10°) og‘diring.',
    '“Boshlash” tugmasini bosib, mayatnikning erkin tebranishini kuzating.',
    'N = 10 yoki 20 ta to‘liq tebranish uchun ketgan t vaqtni sekundomer bilan o‘lchang.',
    'Davrni T = t/N formula bilan hisoblang.',
    'g = 4π²·l/T² formulasi bilan erkin tushish tezlanishini toping.',
    'Uzunlikni o‘zgartirib (masalan 0,4; 0,6; 0,8; 1,0; 1,2 m) tajribani kamida 5 marta takrorlang va natijalarni jadvalga kiriting.',
    'g ning o‘rtacha qiymatini va nisbiy xatoni hisoblang, T² = f(l) grafigini chizing (to‘g‘ri chiziq bo‘lishi kerak).'
  ],
  questions: [
    'Matematik mayatnik deb nimaga aytiladi?',
    'Matematik mayatnik tebranish davri qanday formula bilan aniqlanadi?',
    'Mayatnik massasi tebranish davriga ta’sir qiladimi? Nima uchun?',
    'Uzunlik 4 marta oshirilsa, davr necha marta o‘zgaradi?',
    'Nima uchun mayatnik faqat kichik burchakka og‘dirilishi kerak?',
    'Nima uchun bir necha tebranish vaqtini o‘lchash aniqroq natija beradi?',
    'T² ning l ga bog‘liqlik grafigi qanday ko‘rinishda bo‘ladi va uning burchak koeffitsiyenti nimaga teng?',
    'Tajribadagi xatoliklar qaysi sabablardan yuzaga kelishi mumkin?',
    'Tebranish davrining SI birligi nima, g ning Yerdagi o‘rtacha qiymati qancha?'
  ],
  quiz: [
    { q: 'Matematik mayatnikning kichik burchakdagi tebranish davri formulasi:', options: ['T = 2π·√(l/g)', 'T = 2π·√(g/l)', 'T = 2π·l/g', 'T = π·√(l·g)'], answer: 0 },
    { q: 'Mayatnik uzunligi 4 marta oshirilsa, davr:', options: ['2 marta ortadi', '4 marta ortadi', '2 marta kamayadi', 'O‘zgarmaydi'], answer: 0 },
    { q: 'Mayatnik tebranish davri quyidagilardan qaysisiga bog‘liq emas?', options: ['Sharcha massasiga', 'Ip uzunligiga', 'Erkin tushish tezlanishiga', 'Joyning balandligiga'], answer: 0 },
    { q: 'Tajribadan g ni hisoblash formulasi:', options: ['g = 4π²·l/T²', 'g = T²/(4π²·l)', 'g = 2π·l/T', 'g = l/(4π²·T²)'], answer: 0 },
    { q: 'Yerda erkin tushish tezlanishining o‘rtacha qiymati:', options: ['9,81 m/s²', '1,62 m/s²', '98,1 m/s²', '3,7 m/s²'], answer: 0 }
  ],
  conclusion: 'Tajribada mayatnik uzunligi ortishi bilan tebranish davri √l ga proporsional ortishi kuzatildi, T² = f(l) grafigi to‘g‘ri chiziq bo‘ldi. Hisoblangan erkin tushish tezlanishi g ≈ 9,8 m/s² bo‘lib, nazariy qiymatdan bir necha foizga farq qildi. Farq boshlang‘ich burchakning noldan farqliligi, ip cho‘zilishi va vaqtni o‘lchashdagi inson reaksiyasi bilan izohlanadi. N ta tebranish vaqtini o‘lchash natija aniqligini oshiradi.',
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
