export default {
  id: 12, slug: 'chiziqli-kengayish', title: 'Qattiq jismlarning chiziqli kengayish koeffitsiyentini aniqlash',
  category: 'Issiqlik', emoji: '📐',
  short: "Metall sterjen qizdirilganda uzunligining o'zgarishini o'lchab, chiziqli kengayish koeffitsiyentini topish.",
  aim: ["Qattiq jismlar qizdirilganda uzunligi o'zgarishini o'rganish", "Chiziqli kengayish koeffitsiyentini tajriba yo'li bilan aniqlash", "Turli metallarning kengayishini solishtirish", "Kengayishning qurilishdagi ahamiyatini tushunish"],
  equipment: ['Virtual laboratoriya dasturi', 'Kompyuter yoki mobil qurilma', 'Kalkulyator', 'Metall sterjen (virtual)', 'Mikrometr yoki indikator (virtual)'],
  theory: [
    "Qattiq jismlar qizdirilganda o'lchamlari ortadi. Sterjen temperaturasi oshirilsa, uning uzunligi ham ortadi. Bu hodisa issiqlikdan chiziqli kengayish deyiladi.",
    "Uzunlikning o'zgarishi Δl = α·l₀·ΔT formulasi bilan ifodalanadi. Bu yerda l₀ — boshlang'ich uzunlik, ΔT = T₂ − T₁ — temperatura o'zgarishi, α — chiziqli kengayish koeffitsiyenti.",
    "Bundan α = Δl / (l₀·ΔT). α ning SI birligi K⁻¹. Qurilishda kengayish tirqishlari (temir yo'l relslari, ko'priklar, beton plitalar) shu hodisani hisobga olib qoldiriladi."
  ],
  formulas: [
    { name: "Uzunlik o'zgarishi", expr: 'Δl = α·l₀·ΔT', note: 'Δl = l − l₀' },
    { name: 'Kengayish koeffitsiyenti', expr: 'α = Δl / (l₀·ΔT)', note: 'birligi: K⁻¹' },
    { name: 'Temperatura farqi', expr: 'ΔT = T₂ − T₁', note: '' },
    { name: 'Oxirgi uzunlik', expr: 'l = l₀·(1 + α·ΔT)', note: '' }
  ],
  procedure: [
    "Virtual laboratoriya dasturini ishga tushiring.",
    "Tajriba uchun metall sterjen turini tanlang.",
    "Sterjenning boshlang'ich uzunligi l₀ ni va boshlang'ich temperaturasi T₁ ni qayd eting.",
    "«Qizdirish» tugmasini bosib, temperatura oshishini kuzating va T₂ ni yozing.",
    "Mikrometr yoki indikator yordamida uzunlik ortishi Δl ni o'lchang.",
    "ΔT ni va α ni hisoblang.",
    "Tajribani turli temperaturalarda 3–5 marta takrorlab, o'rtacha qiymatni toping."
  ],
  questions: [
    "Issiqlikdan chiziqli kengayish hodisasi nima?",
    "Chiziqli kengayish koeffitsiyenti nimani ifodalaydi?",
    "α ning SI tizimidagi birligi qanday?",
    "Qaysi metallarning chiziqli kengayish koeffitsiyenti katta?",
    "Chiziqli kengayish qurilish konstruksiyalarida nima uchun hisobga olinadi?",
    "Temir yo'l relslari va ko'priklarda kengayish tirqishlari nima sababdan qoldiriladi?"
  ],
  quiz: [
    { q: "Chiziqli kengayish koeffitsiyentining SI birligi qaysi?", options: ['K⁻¹', 'K', 'm/K', 'J/K'], answer: 0 },
    { q: "Chiziqli kengayish formulasi qaysi?", options: ['Δl = α·l₀·ΔT', 'Δl = l₀/(α·ΔT)', 'Δl = α·ΔT/l₀', 'Δl = α + l₀·ΔT'], answer: 0 },
    { q: "Temperatura oshganda qattiq jism uzunligi qanday o'zgaradi?", options: ['Ortadi', 'Kamayadi', "O'zgarmaydi", 'Nolga teng bo\'ladi'], answer: 0 },
    { q: "Ko'priklarda kengayish tirqishlari nima uchun qoldiriladi?", options: ["Issiqdan kengayganda konstruksiya shikastlanmasligi uchun", "Chiroyli ko'rinish uchun", "Og'irlikni kamaytirish uchun", "Tovushni kamaytirish uchun"], answer: 0 },
    { q: "Bir xil sharoitda qaysi metall ko'proq kengayadi?", options: ['Alyuminiy (α≈23·10⁻⁶ K⁻¹)', 'Po\'lat (α≈12·10⁻⁶ K⁻¹)', 'Shisha (α≈9·10⁻⁶ K⁻¹)', 'Hammasi bir xil'], answer: 0 }
  ],
  conclusion: "Tajribada qizdirilganda sterjen uzunligining temperatura o'zgarishiga to'g'ri proporsional ortishi kuzatildi. Δl, l₀ va ΔT dan α aniqlandi; turli metallar turlicha kengayishi ko'rsatildi.",
  sim: {
    intro: "Sterjen uzunligi, temperaturalar va α ni o'zgartiring, Δl va oxirgi uzunlik avtomatik hisoblanadi.",
    inputs: [
      { id: 'l0', label: "Boshlang'ich uzunlik", unit: 'm', min: 0.1, max: 5, step: 0.1, value: 1 },
      { id: 'T1', label: "Boshlang'ich temperatura", unit: '°C', min: 0, max: 40, step: 1, value: 20 },
      { id: 'T2', label: 'Oxirgi temperatura', unit: '°C', min: 20, max: 300, step: 5, value: 120 },
      { id: 'alpha', label: 'Koeffitsiyent α', unit: '×10⁻⁶ K⁻¹', min: 5, max: 30, step: 0.5, value: 12 }
    ],
    compute: (v) => {
      const a = v.alpha * 1e-6;
      const dT = v.T2 - v.T1;
      const dl = a * v.l0 * dT;
      const l = v.l0 + dl;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const T = v.T1 + i * (Math.max(dT, 1)) / 40;
        pts.push([T, a * v.l0 * (T - v.T1) * 1000]);
      }
      return {
        results: [
          { label: "Uzunlik o'zgarishi Δl", value: dl * 1000, unit: 'mm', digits: 3 },
          { label: 'Oxirgi uzunlik l', value: l, unit: 'm', digits: 5 },
          { label: 'Koeffitsiyent α = Δl/(l₀·ΔT)', value: dT !== 0 ? dl / (v.l0 * dT) : 0, unit: 'K⁻¹', digits: 3 }
        ],
        chart: { title: 'Δl ning temperaturaga bog\'liqligi', xLabel: 'T, °C', yLabel: 'Δl, mm',
          series: [{ name: 'Nazariy', points: pts }, { name: 'Joriy', points: [[v.T2, dl * 1000]] }] },
        note: dT <= 0 ? "T₂ > T₁ bo'lishi kerak." : 'Δl temperatura farqiga chiziqli bog\'liq.'
      };
    }
  }
};
