export default {
  id: 15, slug: 'uitston-kopriji', title: "Uitston ko'prigi yordamida noma'lum qarshilikni aniqlash",
  category: 'Elektr', emoji: '⚖️',
  short: "Ko'prikni muvozanatga keltirib, galvanometrdan tok o'tmaydigan holatda noma'lum qarshilikni topish.",
  aim: ["Uitston ko'prigining ishlash prinsipini o'rganish", "Ko'prikni muvozanat holatiga keltirish", "Noma'lum qarshilikni tajriba yo'li bilan aniqlash", "Nol usulining afzalliklarini tushunish"],
  equipment: ["Uitston ko'prigi sxemasi", 'Doimiy tok manbai', 'Ma\'lum qarshiliklar R₁, R₂', "Rostlanadigan R₃ reostat", "Noma'lum qarshilik Rₓ", 'Galvanometr', 'Kalit va simlar'],
  theory: [
    "Uitston ko'prigi to'rtta qarshilikdan (R₁, R₂, R₃, Rₓ) va diagonalga ulangan galvanometrdan iborat. Tok manbai A va C nuqtalarga, galvanometr B va D nuqtalarga ulanadi.",
    "Muvozanat holatida galvanometrdan tok o'tmaydi (I_G = 0), shuning uchun B va D nuqtalar potensiallari teng. Bunda R₁/R₂ = R₃/Rₓ.",
    "Bundan Rₓ = R₂·R₃/R₁. Usul nol usuli bo'lib, manba kuchlanishiga bog'liq emas va yuqori aniqlik beradi. Datchiklar (tenzorezistorlar) o'lchash tizimlarida keng qo'llanadi."
  ],
  formulas: [
    { name: 'Muvozanat sharti', expr: 'R₁/R₂ = R₃/Rₓ', note: 'I_G = 0' },
    { name: "Noma'lum qarshilik", expr: 'Rₓ = R₂·R₃ / R₁', note: '' },
    { name: "O'rtacha qiymat", expr: 'Rₓ(o\'rt) = (Rₓ₁ + ... + Rₓ₅) / 5', note: '' },
    { name: 'Nisbiy xatolik', expr: 'ε = |Rₓ − R_haq| / R_haq · 100%', note: '' }
  ],
  procedure: [
    "Virtual laboratoriya dasturini ishga tushiring va ko'prik sxemasini yig'ing.",
    "R₁ va R₂ qiymatlarini belgilang.",
    "Noma'lum Rₓ ni zanjirga ulang, manbani ulab, kalitni yoping.",
    "Galvanometr ko'rsatishini kuzating.",
    "R₃ ni asta o'zgartirib, galvanometrni nolga keltiring (I_G = 0).",
    "R₁, R₂, R₃ ni yozing va Rₓ = R₂R₃/R₁ ni hisoblang.",
    "Tajribani kamida 5 marta takrorlab, o'rtacha qiymat va xatolikni toping."
  ],
  questions: [
    "Uitston ko'prigi nima maqsadda ishlatiladi?",
    "Ko'prik qanday elementlardan tashkil topgan?",
    "Muvozanat holati deganda nima tushuniladi?",
    "Muvozanatda galvanometrdan nega tok o'tmaydi?",
    "Muvozanat shartini yozing.",
    "Uitston ko'prigining voltmetr-ampermetr usuliga nisbatan afzalligi nima?",
    "Ko'prikdan qurilishdagi datchiklarda qanday foydalaniladi?"
  ],
  quiz: [
    { q: "Uitston ko'prigining muvozanat sharti qaysi?", options: ['R₁/R₂ = R₃/Rₓ', 'R₁ + R₂ = R₃ + Rₓ', 'R₁·R₂ = R₃/Rₓ', 'R₁ = Rₓ'], answer: 0 },
    { q: "Muvozanatda galvanometr toki nimaga teng?", options: ['Nolga', 'Maksimal', 'Manba tokiga', 'Cheksiz'], answer: 0 },
    { q: "Rₓ qanday topiladi?", options: ['Rₓ = R₂R₃/R₁', 'Rₓ = R₁R₃/R₂', 'Rₓ = R₁R₂/R₃', 'Rₓ = R₁ + R₂'], answer: 0 },
    { q: "Qarshilikning SI birligi nima?", options: ['Om (Ω)', 'Amper', 'Volt', 'Vatt'], answer: 0 },
    { q: "Muvozanatda qaysi nuqtalar potensiallari teng?", options: ['B va D', 'A va C', 'A va B', 'C va D'], answer: 0 }
  ],
  conclusion: "Uitston ko'prigi muvozanatga keltirilganda galvanometr toki nolga teng bo'ldi va muvozanat shartidan noma'lum qarshilik aniqlandi. Natija nol usulining aniqligini ko'rsatdi.",
  sim: {
    intro: "R₃ ni o'zgartirib ko'prikni muvozanatga keltiring: galvanometr toki nolga teng bo'lganda Rₓ topiladi.",
    inputs: [
      { id: 'E', label: 'Manba kuchlanishi', unit: 'V', min: 1, max: 24, step: 0.5, value: 10 },
      { id: 'R1', label: 'Qarshilik R₁', unit: 'Ω', min: 10, max: 500, step: 5, value: 100 },
      { id: 'R2', label: 'Qarshilik R₂', unit: 'Ω', min: 10, max: 500, step: 5, value: 200 },
      { id: 'R3', label: 'Reostat R₃', unit: 'Ω', min: 1, max: 500, step: 1, value: 60 },
      { id: 'Rx', label: "Haqiqiy Rₓ", unit: 'Ω', min: 10, max: 500, step: 5, value: 150 },
      { id: 'Rg', label: 'Galvanometr qarshiligi', unit: 'Ω', min: 10, max: 500, step: 10, value: 100 }
    ],
    compute: (v) => {
      // B: R1 (A-B), R3 (B-C); D: R2 (A-D), Rx (D-C). Muvozanat: R1/R3 = R2/Rx => Rx = R2*R3/R1
      const IG = (R3) => {
        const vb = v.E * R3 / (v.R1 + R3);
        const vd = v.E * v.Rx / (v.R2 + v.Rx);
        const rth = v.R1 * R3 / (v.R1 + R3) + v.R2 * v.Rx / (v.R2 + v.Rx);
        return (vb - vd) / (rth + v.Rg);
      };
      const ig = IG(v.R3);
      const Rxm = v.R2 * v.R3 / v.R1;
      const R3bal = v.R1 * v.Rx / v.R2;
      const pts = [];
      for (let i = 0; i <= 50; i++) { const R = 1 + i * 10; pts.push([R, IG(R) * 1000]); }
      const bal = Math.abs(ig) < 1e-5;
      return {
        results: [
          { label: 'Galvanometr toki I_G', value: ig * 1000, unit: 'mA', digits: 3 },
          { label: "Hisoblangan Rₓ = R₂R₃/R₁", value: Rxm, unit: 'Ω', digits: 4 },
          { label: 'Muvozanat uchun R₃', value: R3bal, unit: 'Ω', digits: 4 }
        ],
        chart: { title: 'Galvanometr toki R₃ ga bog\'liqligi', xLabel: 'R₃, Ω', yLabel: 'I_G, mA',
          series: [{ name: 'Nazariy', points: pts }, { name: 'Joriy', points: [[v.R3, ig * 1000]] }] },
        note: bal ? "Ko'prik muvozanatda: I_G = 0, Rₓ aniqlandi!" : (ig > 0 ? "B potensiali D dan yuqori: R₃ ni kamaytiring." : "D potensiali B dan yuqori: R₃ ni oshiring.")
      };
    }
  }
};
