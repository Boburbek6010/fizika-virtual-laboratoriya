export default {
  id: 13, slug: 'quyosh-kollektori', title: 'Quyosh kollektori samaradorligini izolyatsiya funksiyasi sifatida aniqlash',
  category: 'Issiqlik', emoji: '☀️',
  short: "Issiqlik izolyatsiyasi qalinligi kollektorning foydali ish koeffitsiyentiga qanday ta'sir qilishini o'rganish.",
  aim: ["Quyosh kollektorida issiqlik yutilishi va yo'qotilishini o'rganish", "Kollektor FIK ini aniqlash", "Izolyatsiya qalinligining FIK ga ta'sirini aniqlash", "Optimal izolyatsiya qalinligi tushunchasini bilish"],
  equipment: ['Virtual laboratoriya dasturi', 'Kompyuter yoki mobil qurilma', 'Kalkulyator', 'Quyosh kollektori (virtual)', 'Termometr'],
  theory: [
    "Quyosh kollektori nurlanish energiyasini issiqlikka aylantiradi. Yutilgan energiyaning bir qismi suvni qizdirishga, qolgani tashqi muhitga yo'qotishga ketadi.",
    "Foydali energiya Q_f = m·c·(T₂ − T₁), kollektorga tushgan energiya Q = I·A·t. Samaradorlik η = Q_f / Q.",
    "Izolyatsiya orqali yo'qotish Q_yo'q = λ·A·ΔT·t/δ. Qalinlik δ ortsa yo'qotish kamayadi va η ortadi, lekin o'sish sekinlashadi, shuning uchun optimal qalinlik tanlanadi."
  ],
  formulas: [
    { name: 'Foydali issiqlik', expr: 'Q_f = m·c·(T₂ − T₁)', note: 'c = 4200 J/(kg·K)' },
    { name: 'Tushgan energiya', expr: 'Q = I·A·t', note: 'I — W/m², A — m²' },
    { name: 'Samaradorlik', expr: 'η = Q_f / (I·A·t)', note: '' },
    { name: "Izolyatsiyadagi yo'qotish", expr: "Q_yo'q = λ·A·ΔT·t / δ", note: 'λ — W/(m·K)' },
    { name: 'Izolyatsiya funksiyasi', expr: 'η(δ) = η₀ − λ·ΔT / (I·δ)', note: 'η₀ — yutilish ulushi' }
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring.",
    "Kollektor yuzasi A, nurlanish intensivligi I va suv massasi m ni belgilang.",
    "Suvning T₁ va tashqi havoning T_a temperaturasini kiriting.",
    "Izolyatsiya materialini tanlab, λ ni yozing.",
    "Izolyatsiya qalinligini 10, 20, 30, 40, 50 mm qilib o'zgartiring.",
    "Har bir qalinlik uchun bir xil t vaqt davomida tajriba o'tkazib, T₂ ni o'lchang.",
    "Q_f, Q va η ni hisoblang, η = f(δ) grafigini chizing."
  ],
  questions: [
    "Quyosh kollektorining vazifasi nima?",
    "Kollektor effektivligi qanday aniqlanadi?",
    "Quyosh nurlanish intensivligining birligi qanday?",
    "Issiqlik izolyatsiyasining vazifasi nima?",
    "Izolyatsiya qalinligi oshganda issiqlik yo'qotilishi qanday o'zgaradi?",
    "Nima uchun η = f(δ) bog'lanishi chiziqli bo'lmaydi?",
    "Kollektorlarda qaysi izolyatsiya materiallaridan foydalanish mumkin?"
  ],
  quiz: [
    { q: "Quyosh nurlanish intensivligining birligi qaysi?", options: ['W/m²', 'J/kg', 'W/K', 'K/m'], answer: 0 },
    { q: "Kollektor FIK formulasi qaysi?", options: ['η = m·c·ΔT / (I·A·t)', 'η = I·A·t / (m·c·ΔT)', 'η = m·c / ΔT', 'η = I / A'], answer: 0 },
    { q: "Izolyatsiya qalinligi ortsa issiqlik yo'qotilishi...", options: ['Kamayadi', 'Ortadi', "O'zgarmaydi", 'Nolga teng bo\'ladi'], answer: 0 },
    { q: "Izolyatsiya uchun qanday λ afzal?", options: ['Kichik', 'Katta', 'Hech farqi yo\'q', 'Cheksiz'], answer: 0 },
    { q: "Energiya balansi qanday yoziladi?", options: ["Q_quyosh = Q_f + Q_yo'q", "Q_quyosh = Q_f − Q_yo'q", "Q_f = Q_quyosh + Q_yo'q", "Q_yo'q = Q_f"], answer: 0 }
  ],
  conclusion: "Tajribada kollektor samaradorligi izolyatsiya qalinligiga bog'liqligi aniqlandi: qalinlik ortishi bilan yo'qotish kamayib η ortadi, ammo ma'lum qalinlikdan keyin o'sish sekinlashadi.",
  sim: {
    intro: "Kollektor va izolyatsiya parametrlarini o'zgartiring, suvning oxirgi temperaturasi va samaradorlik hisoblanadi.",
    inputs: [
      { id: 'I', label: 'Nurlanish intensivligi', unit: 'W/m²', min: 300, max: 1000, step: 10, value: 800 },
      { id: 'A', label: 'Kollektor yuzasi', unit: 'm²', min: 0.5, max: 5, step: 0.1, value: 2 },
      { id: 'm', label: 'Suv massasi', unit: 'kg', min: 1, max: 20, step: 0.5, value: 5 },
      { id: 't', label: 'Vaqt', unit: 's', min: 60, max: 3600, step: 60, value: 600 },
      { id: 'T1', label: "Suv boshlang'ich temp.", unit: '°C', min: 5, max: 40, step: 1, value: 20 },
      { id: 'dT', label: 'Kollektor–muhit temperatura farqi', unit: 'K', min: 5, max: 60, step: 1, value: 25 },
      { id: 'lam', label: 'Issiqlik o\'tkazuvchanlik λ', unit: 'W/(m·K)', min: 0.02, max: 0.1, step: 0.005, value: 0.04 },
      { id: 'd', label: 'Izolyatsiya qalinligi δ', unit: 'mm', min: 5, max: 100, step: 5, value: 30 },
      { id: 'eta0', label: 'Yutilish ulushi η₀', unit: '', min: 0.5, max: 0.95, step: 0.01, value: 0.85 }
    ],
    compute: (v) => {
      const c = 4200;
      const eta = (d) => Math.max(0, v.eta0 - v.lam * v.dT / (v.I * d / 1000));
      const e = eta(v.d);
      const Qs = v.I * v.A * v.t;
      const Qf = e * Qs;
      const T2 = v.T1 + Qf / (v.m * c);
      const Tend = (d) => v.T1 + eta(d) * Qs / (v.m * c);
      const pts = [];
      for (let i = 0; i <= 40; i++) { const d = 5 + i * 2.5; pts.push([d, Tend(d)]); }
      return {
        results: [
          { label: 'Samaradorlik η', value: e * 100, unit: '%', digits: 3 },
          { label: 'Foydali issiqlik Q_f', value: Qf, unit: 'J', digits: 3 },
          { label: 'Tushgan energiya Q', value: Qs, unit: 'J', digits: 3 },
          { label: 'Suvning oxirgi temperaturasi T₂', value: T2, unit: '°C', digits: 3 }
        ],
        chart: { title: 'T₂ ning izolyatsiya qalinligiga bog\'liqligi (joriy I, A, m, t, T₁ da)', xLabel: 'δ, mm', yLabel: 'T₂, °C',
          series: [{ name: 'Nazariy', points: pts }, { name: 'Joriy', points: [[v.d, T2]] }] },
        note: e === 0 ? 'Yo\'qotish yutilgan energiyadan katta: izolyatsiyani qalinlashtiring.' : "Qalinlik ortishi bilan o'sish sekinlashadi."
      };
    }
  }
};
