export default {
  id: 11, slug: 'solishtirma-issiqlik-sigimi', title: "Qattiq jismlarning solishtirma issiqlik sig'imini aniqlash",
  category: 'Issiqlik', emoji: '🌡️',
  short: "Kalorimetr yordamida qizdirilgan metall namunaning solishtirma issiqlik sig'imini issiqlik balansi usulida aniqlash.",
  aim: ["Issiqlik balansi tenglamasini o'rganish", "Kalorimetriya usulini o'zlashtirish", "Metall namunaning solishtirma issiqlik sig'imini tajribada aniqlash", "Natijani jadval qiymati bilan solishtirib, xatolikni baholash"],
  equipment: ['Kalorimetr (ichki idish bilan)', 'Termometr', 'Metall namuna (po\'lat, alyuminiy yoki mis)', 'Suv', 'Isitgich va qaynoq suv idishi', 'Tarozi', 'Virtual laboratoriya dasturi'],
  theory: [
    "Jismning temperaturasini ΔT ga o'zgartirish uchun zarur issiqlik miqdori Q = c·m·ΔT formulasi bilan topiladi. Bu yerda c — moddaning solishtirma issiqlik sig'imi, birligi J/(kg·K).",
    "Kalorimetrik usulda qizdirilgan namuna suvli kalorimetrga tushiriladi. Izolyatsiyalangan tizimda namuna bergan issiqlik suv va kalorimetr idishi olgan issiqlikka teng bo'ladi (issiqlik balansi).",
    "Namunaning boshlang'ich temperaturasi T₁, suv va kalorimetrniki T₂, umumiy muvozanat temperaturasi θ bo'lsa, balans tenglamasi: c₁·m₁·(T₁ − θ) = (c_s·m₂ + C_k)·(θ − T₂). Bunda C_k — kalorimetrning issiqlik sig'imi."
  ],
  formulas: [
    { name: 'Issiqlik miqdori', expr: 'Q = c·m·ΔT', note: 'c — solishtirma issiqlik sig\'imi, J/(kg·K)' },
    { name: 'Issiqlik balansi', expr: 'c₁·m₁·(T₁ − θ) = (c_s·m₂ + C_k)·(θ − T₂)', note: 'θ — muvozanat temperaturasi' },
    { name: "Namuna sig'imi", expr: 'c₁ = (c_s·m₂ + C_k)·(θ − T₂) / [m₁·(T₁ − θ)]', note: 'c_s = 4200 J/(kg·K)' },
    { name: 'Nisbiy xatolik', expr: 'ε = |c₁ − c_jadval| / c_jadval · 100%', note: '' }
  ],
  procedure: [
    "Namuna massasi m₁ va kalorimetrdagi suv massasi m₂ ni tarozida o'lchang.",
    "Namunani qaynoq suvda qizdirib, uning temperaturasi T₁ ni qayd eting.",
    "Kalorimetrga suv quying va uning boshlang'ich temperaturasi T₂ ni o'lchang.",
    "Qizigan namunani tezda kalorimetrga tushiring va qopqoqni yoping.",
    "Aralashtirib turib, termometr ko'rsatishi barqarorlashguncha kuting va θ ni yozing.",
    "Formula bo'yicha c₁ ni hisoblang.",
    "Tajribani turli massa va temperaturalar bilan 3–5 marta takrorlang, o'rtacha qiymatni toping."
  ],
  questions: [
    "Solishtirma issiqlik sig'imi nima va uning birligi qanday?",
    "Issiqlik balansi tenglamasini yozing.",
    "Kalorimetr nima uchun issiqlik izolyatsiyalangan bo'ladi?",
    "Kalorimetrning issiqlik sig'imi natijaga qanday ta'sir qiladi?",
    "Namunani kalorimetrga tushirishda nima uchun tez harakat qilish kerak?",
    "Qurilish materiallarining issiqlik sig'imi bino energiya sarfiga qanday ta'sir qiladi?"
  ],
  quiz: [
    { q: "Solishtirma issiqlik sig'imining SI birligi qaysi?", options: ['J/(kg·K)', 'J/K', 'W/(m·K)', 'J/kg'], answer: 0 },
    { q: "Issiqlik miqdori formulasi qaysi?", options: ['Q = c·m·ΔT', 'Q = m/ΔT', 'Q = c·ΔT/m', 'Q = m·g·h'], answer: 0 },
    { q: "Issiqlik balansi tenglamasi nimaga asoslangan?", options: ['Energiyaning saqlanish qonuniga', 'Nyutonning 3-qonuniga', 'Arximed qonuniga', 'Om qonuniga'], answer: 0 },
    { q: "Namuna bergan issiqlik qaysi jismlar tomonidan olinadi?", options: ['Suv va kalorimetr idishi', 'Faqat havo', 'Faqat termometr', 'Hech kim'], answer: 0 },
    { q: "Namuna massasi ortsa, θ qanday o'zgaradi (c₁ va T₁ o'zgarmas)?", options: ['Ortadi', 'Kamayadi', 'O\'zgarmaydi', 'Nolga teng bo\'ladi'], answer: 0 }
  ],
  conclusion: "Kalorimetrik tajribada qizdirilgan namuna bergan issiqlik suv va kalorimetr olgan issiqlikka tengligi asosida namunaning solishtirma issiqlik sig'imi aniqlandi. Natija jadval qiymatiga yaqin bo'lib, farq issiqlik yo'qotilishi va o'lchash xatoliklari bilan izohlanadi.",
  sim: {
    intro: "Namuna va suv parametrlarini o'zgartiring: muvozanat temperaturasi va aniqlangan sig'im avtomatik hisoblanadi.",
    inputs: [
      { id: 'm1', label: 'Namuna massasi', unit: 'g', min: 20, max: 500, step: 5, value: 150 },
      { id: 'T1', label: 'Namuna temperaturasi', unit: '°C', min: 40, max: 100, step: 1, value: 95 },
      { id: 'm2', label: 'Suv massasi', unit: 'g', min: 50, max: 500, step: 5, value: 200 },
      { id: 'T2', label: 'Suv temperaturasi', unit: '°C', min: 5, max: 30, step: 1, value: 20 },
      { id: 'c', label: "Namuna haqiqiy c", unit: 'J/(kg·K)', min: 130, max: 900, step: 10, value: 380 },
      { id: 'Ck', label: 'Kalorimetr sig\'imi', unit: 'J/K', min: 0, max: 200, step: 5, value: 40 }
    ],
    compute: (v) => {
      const cs = 4200;
      const m1 = v.m1 / 1000, m2 = v.m2 / 1000;
      const W = cs * m2 + v.Ck;
      const theta = (m1 * v.c * v.T1 + W * v.T2) / (m1 * v.c + W);
      const c1 = W * (theta - v.T2) / (m1 * (v.T1 - theta));
      const Q = W * (theta - v.T2);
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const x = v.m1 * (0.2 + i * 0.06);
        const mm = x / 1000;
        pts.push([x, (mm * v.c * v.T1 + W * v.T2) / (mm * v.c + W)]);
      }
      return {
        results: [
          { label: 'Muvozanat temperaturasi θ', value: theta, unit: '°C', digits: 4 },
          { label: "Aniqlangan solishtirma sig'im c₁", value: c1, unit: 'J/(kg·K)', digits: 3 },
          { label: 'Suv va kalorimetr olgan issiqlik', value: Q, unit: 'J', digits: 3 }
        ],
        chart: { title: 'θ ning namuna massasiga bog\'liqligi', xLabel: 'm₁, g', yLabel: 'θ, °C',
          series: [{ name: 'Nazariy', points: pts }, { name: 'Joriy', points: [[v.m1, theta]] }] },
        note: 'Issiqlik yo\'qotilishi hisobga olinmagan ideal kalorimetr.'
      };
    }
  }
};
