export default {
  id: 14, slug: 'kirxgof-qonunlari', title: 'Kirxgof qonunlarini elektr zanjirida tekshirish',
  category: 'Elektr', emoji: '🔌',
  short: "Tarmoqlangan zanjirda toklar va kuchlanishlarni o'lchab, Kirxgofning birinchi va ikkinchi qonunlarini tekshirish.",
  aim: ["Tarmoqlangan zanjirda tok va kuchlanishlarni o'lchash", "Kirxgofning birinchi qonunini tajribada tekshirish", "Kirxgofning ikkinchi qonunini tajribada tekshirish", "Elektr zanjirlarini hisoblash ko'nikmasini shakllantirish"],
  equipment: ['Elektr manbalari E₁ va E₂', "O'zgaruvchan qarshiliklar R₁, R₂, R₃", 'Ampermetrlar A₁, A₂, A₃', 'Voltmetr', 'Kalit va ulash simlari', 'Virtual laboratoriya dasturi'],
  theory: [
    "Kirxgofning birinchi qonuni (tugunlar qonuni): tugunga kirayotgan toklar yig'indisi undan chiqayotgan toklar yig'indisiga teng, ΣI = 0. U zaryadning saqlanish qonuniga asoslanadi.",
    "Kirxgofning ikkinchi qonuni (konturlar qonuni): yopiq konturda EYuK larning algebraik yig'indisi kuchlanish tushuvlarining algebraik yig'indisiga teng, ΣE = ΣI·R. U energiyaning saqlanish qonuniga asoslanadi.",
    "Qurilish muhandisligida elektr ta'minoti tarmoqlarini hisoblashda aynan shu qonunlardan foydalaniladi."
  ],
  formulas: [
    { name: 'Birinchi qonun', expr: 'ΣI = 0;  I₁ + I₂ = I₃', note: 'tugun uchun' },
    { name: 'Ikkinchi qonun', expr: 'ΣE = ΣI·R', note: 'yopiq kontur uchun' },
    { name: 'Tugun potensiali', expr: 'U = (E₁/R₁ + E₂/R₂) / (1/R₁ + 1/R₂ + 1/R₃)', note: 'B tugun yerga ulangan' },
    { name: 'Nisbiy xatolik', expr: 'ε = |I₁ + I₂ − I₃| / I₃ · 100%', note: '' }
  ],
  procedure: [
    "Virtual laboratoriya dasturini ishga tushiring.",
    "Manbalar EYuK E₁, E₂ va qarshiliklar R₁, R₂, R₃ ni tanlang.",
    "Ampermetrlarni tegishli tarmoqlarga ketma-ket, voltmetrni parallel ulang.",
    "Kalitni yopib, toklarni o'lchang.",
    "Tugun uchun I₁ + I₂ bilan I₃ ni taqqoslang (birinchi qonun).",
    "Kontur uchun E − ΣIR ni hisoblang (ikkinchi qonun).",
    "Qarshiliklarni o'zgartirib, tajribani 3–5 marta takrorlang va xatolikni baholang."
  ],
  questions: [
    "Elektr zanjirining tuguni deb nimaga aytiladi?",
    "Kontur nima?",
    "Kirxgofning birinchi qonunini ta'riflang.",
    "Birinchi qonun qaysi saqlanish qonuniga asoslangan?",
    "Kirxgofning ikkinchi qonunini yozing.",
    "Ampermetr va voltmetr zanjirga qanday ulanadi?",
    "Kirxgof qonunlari elektr ta'minoti tizimlarini hisoblashda qanday ahamiyatga ega?"
  ],
  quiz: [
    { q: "Kirxgofning birinchi qonuni nimaga asoslangan?", options: ['Zaryadning saqlanish qonuniga', 'Energiyaning saqlanishiga', 'Impulsning saqlanishiga', 'Om qonuniga'], answer: 0 },
    { q: "Tugunda toklar yig'indisi (algebraik) nimaga teng?", options: ['Nolga', 'EYuK ga', 'Qarshilikka', 'Kuchlanishga'], answer: 0 },
    { q: "Ikkinchi qonun qaysi saqlanish qonuniga asoslangan?", options: ['Energiyaning saqlanishiga', 'Zaryadning saqlanishiga', 'Massaning saqlanishiga', 'Impulsning saqlanishiga'], answer: 0 },
    { q: "Ampermetr zanjirga qanday ulanadi?", options: ['Ketma-ket', 'Parallel', 'Aralash', 'Ulanmaydi'], answer: 0 },
    { q: "Konturda ΣE − ΣIR nimaga teng?", options: ['Nolga', 'Birga', 'Tokka', 'Quvvatga'], answer: 0 }
  ],
  conclusion: "Tajribada A tugundagi toklar uchun I₁ + I₂ = I₃ bajarildi, yopiq konturlarda EYuK va kuchlanish tushuvlari yig'indisi tengligi tasdiqlandi. Kichik farq o'lchash xatoliklari bilan bog'liq.",
  sim: {
    intro: "Ikki manbali tarmoqlangan zanjir: EYuK va qarshiliklarni o'zgartiring, toklar va qonunlar tekshiruvi hisoblanadi.",
    inputs: [
      { id: 'E1', label: 'EYuK E₁', unit: 'V', min: 1, max: 30, step: 0.5, value: 12 },
      { id: 'E2', label: 'EYuK E₂', unit: 'V', min: 0, max: 30, step: 0.5, value: 6 },
      { id: 'R1', label: 'Qarshilik R₁', unit: 'Ω', min: 1, max: 100, step: 1, value: 10 },
      { id: 'R2', label: 'Qarshilik R₂', unit: 'Ω', min: 1, max: 100, step: 1, value: 20 },
      { id: 'R3', label: 'Qarshilik R₃', unit: 'Ω', min: 1, max: 100, step: 1, value: 30 }
    ],
    compute: (v) => {
      const cur = (R3) => {
        const U = (v.E1 / v.R1 + v.E2 / v.R2) / (1 / v.R1 + 1 / v.R2 + 1 / R3);
        return { U, I1: (v.E1 - U) / v.R1, I2: (v.E2 - U) / v.R2, I3: U / R3 };
      };
      const s = cur(v.R3);
      const pts = [];
      for (let i = 0; i <= 40; i++) { const R = 1 + i * 2.5; pts.push([R, cur(R).I3]); }
      const k1 = s.I1 + s.I2 - s.I3;
      const k2 = v.E1 - s.I1 * v.R1 - s.I3 * v.R3;
      return {
        results: [
          { label: 'Tok I₁', value: s.I1, unit: 'A', digits: 3 },
          { label: 'Tok I₂', value: s.I2, unit: 'A', digits: 3 },
          { label: 'Tok I₃', value: s.I3, unit: 'A', digits: 3 },
          { label: 'Birinchi qonun: I₁ + I₂ − I₃', value: k1, unit: 'A', digits: 2 },
          { label: 'Ikkinchi qonun: E₁ − I₁R₁ − I₃R₃', value: k2, unit: 'V', digits: 2 }
        ],
        chart: { title: 'I₃ ning R₃ ga bog\'liqligi', xLabel: 'R₃, Ω', yLabel: 'I₃, A',
          series: [{ name: 'Nazariy', points: pts }, { name: 'Joriy', points: [[v.R3, s.I3]] }] },
        note: "Tok manfiy bo'lsa, haqiqiy yo'nalishi tanlanganiga qarama-qarshi. Ikkala qonun nolga teng (aniq hisob)."
      };
    }
  }
};
