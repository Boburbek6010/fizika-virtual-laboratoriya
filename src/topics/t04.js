export default {
  id: 4,
  slug: 'energiya-impuls',
  title: 'Mexanik energiya va impulsning saqlanishi',
  category: 'Mexanika',
  emoji: '🎱',
  short: "Qiya tekislikda potensial energiyaning kinetik energiyaga aylanishi va aravachalar to'qnashuvida impulsning saqlanishini tekshiring.",
  aim: [
    "Mexanik energiyaning saqlanish qonunini tajriba asosida o'rganish",
    "Kinetik va potensial energiya orasidagi o'zaro aylanishni kuzatish",
    "Impuls va impulsning saqlanish qonunini o'rganish",
    "To'qnashuvdan oldingi va keyingi tezliklarni aniqlash",
    "Tajriba natijalarini nazariy qiymatlar bilan taqqoslash"
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Kompyuter yoki mobil qurilma', 'Virtual aravachalar', "Balandligi o'zgaradigan qiya tekislik", 'Tezlik o\'lchagich', 'Massa o\'lchagich', 'Sekundomer'],
  theory: [
    "Jismning kinetik energiyasi Eₖ = m·v²/2, potensial energiyasi Eₚ = m·g·h. Ishqalanish va havo qarshiligi bo'lmasa, yopiq sistemaning to'liq mexanik energiyasi o'zgarmaydi: Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂. Balandlikdan tushayotgan jism uchun pastki nuqtadagi tezlik v = √(2gh).",
    "Jism impulsi p = m·v (vektor kattalik, birligi kg·m/s). Tashqi kuchlar ta'sir etmaydigan yopiq sistemada umumiy impuls saqlanadi: m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'.",
    "To'qnashuvlar ikki xil: elastik to'qnashuvda impuls va kinetik energiya saqlanadi; mutlaq noelastik to'qnashuvda jismlar yopishib, bir xil tezlik bilan harakatlanadi, impuls saqlanadi, kinetik energiyaning bir qismi issiqlik va deformatsiyaga sarflanadi. Mutlaq noelastik urilishdan keyingi tezlik v' = (m₁v₁ + m₂v₂)/(m₁ + m₂)."
  ],
  formulas: [
    { name: 'Kinetik energiya', expr: 'Eₖ = m·v² / 2', note: 'Joul (J)' },
    { name: 'Potensial energiya', expr: 'Eₚ = m·g·h', note: 'g = 9,81 m/s²' },
    { name: 'Energiyaning saqlanishi', expr: 'Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂', note: 'Ishqalanishsiz yopiq sistema' },
    { name: 'Impuls', expr: 'p = m·v', note: 'kg·m/s' },
    { name: 'Impulsning saqlanishi', expr: 'm₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'', note: "Yopiq sistemada" },
    { name: 'Noelastik urilishdan keyingi tezlik', expr: "v' = (m₁v₁ + m₂v₂) / (m₁ + m₂)", note: 'Jismlar birga harakatlanadi' },
    { name: "Yo'qotilgan energiya", expr: 'ΔE = Eₖ(oldin) − Eₖ(keyin)', note: 'Issiqlik va deformatsiyaga' }
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring.",
    "Birinchi va ikkinchi aravacha massalari m₁ va m₂ ni kiriting.",
    "Qiya tekislikning boshlang'ich balandligi h ni belgilang va \"Boshlash\" tugmasini bosing.",
    "Boshlang'ich potensial energiyani hisoblang; pastki nuqtadagi tezlikni aniqlab, kinetik energiyani toping.",
    "Mexanik energiyaning boshlang'ich va oxirgi qiymatlarini taqqoslang.",
    "To'qnashuvdan oldingi tezliklar v₁, v₂ ni aniqlang.",
    "To'qnashuvdan keyingi tezliklarni qayd eting.",
    "To'qnashuvdan oldingi va keyingi umumiy impulsni hisoblab, jadvalga kiriting va xulosa chiqaring."
  ],
  questions: [
    "Mexanik energiya deb nimaga aytiladi? Kinetik va potensial energiya qanday aniqlanadi?",
    "Mexanik energiyaning saqlanish qonunini ta'riflang. Qanday sharoitda bajariladi?",
    "Jism impulsi nima va uning SI birligi qanday?",
    "Impulsning saqlanish qonunini ta'riflang.",
    "Elastik va noelastik to'qnashuvning farqi nimada?",
    "Noelastik to'qnashuvda kinetik energiya qayerga ketadi?",
    "Qiya tekislik balandligi 4 marta oshirilsa, pastki nuqtadagi tezlik necha marta ortadi?"
  ],
  quiz: [
    { q: "Noelastik to'qnashuvda qaysi kattalik saqlanadi?", options: ["Kinetik energiya", "Impuls", "Potensial energiya", "Quvvat"], answer: 1 },
    { q: "Impulsning SI birligi qaysi?", options: ["N", "J", "W", "kg·m/s"], answer: 3 },
    { q: "Mutlaq noelastik to'qnashuvda kinetik energiya qanday o'zgaradi?", options: ["Ortadi", "Kamayadi", "O'zgarmaydi", "Nol bo'ladi"], answer: 1 },
    { q: "Impulsning saqlanish qonuni qachon bajariladi?", options: ["Har doim", "Faqat elastik to'qnashuvda", "Tashqi kuchlar ta'sir etmaganda (yopiq sistemada)", "Faqat tinch holatda"], answer: 2 },
    { q: "Noelastik to'qnashuvda energiyaning bir qismi qayerga sarflanadi?", options: ["Yo'qolib ketadi", "Massaga aylanadi", "Issiqlik va deformatsiyaga", "O'zgarmaydi"], answer: 2 }
  ],
  conclusion: "Virtual tajribada potensial energiyaning kinetik energiyaga aylanishi kuzatildi: ishqalanishsiz to'liq mexanik energiya saqlandi, tezlik v = √(2gh) bo'ldi. To'qnashuvda jismlarning umumiy impulsi oldin va keyin teng chiqdi (impulsning saqlanishi), mutlaq noelastik urilishda esa kinetik energiyaning bir qismi issiqlik va deformatsiyaga sarflandi.",
  sim: {
    intro: "Qiymatlarni o'zgartiring, natija avtomatik hisoblanadi. Birinchi aravacha qiya tekislikdan tushadi (balandlik h), to'qnashuv mutlaq noelastik deb olinadi.",
    inputs: [
      { id: 'm1', label: 'Birinchi aravacha massasi m₁', unit: 'kg', min: 0.1, max: 10, step: 0.1, value: 2 },
      { id: 'v1', label: 'Birinchi aravacha tezligi v₁', unit: 'm/s', min: -10, max: 10, step: 0.1, value: 3 },
      { id: 'm2', label: 'Ikkinchi aravacha massasi m₂', unit: 'kg', min: 0.1, max: 10, step: 0.1, value: 1 },
      { id: 'v2', label: 'Ikkinchi aravacha tezligi v₂', unit: 'm/s', min: -10, max: 10, step: 0.1, value: 0 },
      { id: 'h', label: 'Qiya tekislik balandligi h', unit: 'm', min: 0, max: 5, step: 0.05, value: 1 }
    ],
    compute: (v) => {
      const g = 9.81;
      const Ep = v.m1 * g * v.h;
      const vb = Math.sqrt(2 * g * v.h);
      const Ek1 = v.m1 * vb * vb / 2;
      const pBefore = v.m1 * v.v1 + v.m2 * v.v2;
      const vf = pBefore / (v.m1 + v.m2);
      const EkBefore = v.m1 * v.v1 ** 2 / 2 + v.m2 * v.v2 ** 2 / 2;
      const EkAfter = (v.m1 + v.m2) * vf ** 2 / 2;
      const dE = EkBefore - EkAfter;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const x = -10 + 20 * i / 40;
        pts.push([+x.toFixed(2), +((v.m1 * x + v.m2 * v.v2) / (v.m1 + v.m2)).toFixed(4)]);
      }
      const vfb = (v.m1 * vb + v.m2 * v.v2) / (v.m1 + v.m2);
      return {
        results: [
          { label: 'Boshlang\'ich potensial energiya Eₚ', value: Ep, unit: 'J', digits: 3 },
          { label: 'Pastki nuqtadagi tezlik v = √(2gh)', value: vb, unit: 'm/s', digits: 3 },
          { label: 'Pastki nuqtadagi kinetik energiya Eₖ', value: Ek1, unit: 'J', digits: 3 },
          { label: 'Umumiy impuls (oldin = keyin)', value: pBefore, unit: 'kg·m/s', digits: 3 },
          { label: "To'qnashuvdan keyingi tezlik v'", value: vf, unit: 'm/s', digits: 3 },
          { label: "Kinetik energiya (oldin)", value: EkBefore, unit: 'J', digits: 3 },
          { label: "Kinetik energiya (keyin)", value: EkAfter, unit: 'J', digits: 3 },
          { label: "Yo'qotilgan energiya ΔE", value: dE, unit: 'J', digits: 3 }
        ],
        chart: {
          title: "Urilishdan keyingi tezlik v'(v₁)", xLabel: 'v₁, m/s', yLabel: "v', m/s",
          series: [{ name: "v'(v₁)", points: pts }, { name: 'Joriy', points: [[v.v1, +vf.toFixed(4)]] }, { name: "Tekislik pastida (v₁ = √(2gh))", points: [[+vb.toFixed(4), +vfb.toFixed(4)]] }]
        },
        note: `Impuls saqlanadi: ${pBefore.toFixed(2)} kg·m/s. Mexanik energiyaning ${EkBefore > 0 ? (100 * dE / EkBefore).toFixed(1) : '0'}% qismi issiqlikka va deformatsiyaga sarflandi.`
      };
    }
  }
};
