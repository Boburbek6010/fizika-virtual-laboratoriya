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
  learn: [
    "Kinetik va potensial energiyaning bir-biriga aylanishini (energiyaning saqlanishi)",
    "Impuls p = m·v va uning yopiq sistemada saqlanishini",
    "Noelastik urilishdan keyingi tezlik va yo'qotilgan energiyani hisoblashni",
    "Qiya tekislik tajribasida v = √(2gh) ni tekshirishni"
  ],
  civil: [
    "Qoziq uruvchi bolg'a (svay-bolg'a) balandlikdan tushganda potensial energiya kinetikka aylanadi va qoziqni gruntga suqadi.",
    "Kran yuki qarshi og'irlik bilan to'qnashganda yoki yuk shiftga urilganda impuls saqlanishi bilan tezlik baholanadi.",
    "Vagonetka va yuk aravachalari to'qnashuvida tezlik va yo'qotilgan energiya (deformatsiya) hisoblanadi.",
    "Yuk tushishidan himoya qiluvchi to'siqlar energiyani yutishga mo'ljallab loyihalanadi."
  ],
  keyFact: "Noelastik urilishda impuls saqlanadi, lekin mexanik energiyaning bir qismi issiqlik va deformatsiyaga aylanadi: qoziq bolg'asi aynan shu energiya hisobiga gruntni siqadi.",
  mistakes: [
    "Tezlik ishorasini unutish: qarama-qarshi yo'nalgan jismlar tezligidan biri manfiy olinadi, aks holda impuls noto'g'ri chiqadi.",
    "Impulsning saqlanishini energiyaning saqlanishi bilan aralashtirish: noelastik urilishda energiya saqlanmaydi.",
    "Birliklarda grammni kilogrammga o'tkazmaslik: energiya J da, massa kg da bo'lishi shart."
  ],
  glossary: [
    {
      "t": "Kinetik energiya",
      "d": "harakat energiyasi, Eₖ = m·v²/2"
    },
    {
      "t": "Potensial energiya",
      "d": "balandlik bilan bog'liq energiya, Eₚ = m·g·h"
    },
    {
      "t": "Impuls",
      "d": "jism massasi va tezligi ko'paytmasi, p = m·v"
    },
    {
      "t": "Noelastik urilish",
      "d": "jismlar urilgach birga harakatlanadigan hodisa"
    },
    {
      "t": "Yopiq sistema",
      "d": "tashqi kuchlar ta'sir qilmaydigan yoki ular muvozanatda bo'lgan jismlar guruhi"
    }
  ],
  tasks: [
    {
      "q": "Qoziq uruvchi bolg'aning massasi 500 kg, u h = 2 m balandlikdan erkin tushadi. Qoziqqa urilish oldidagi tezligi v qancha? (g = 9,81 m/s², ishqalanishsiz)",
      "answer": 6.264,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "Eₚ = Eₖ, v = √(2gh).",
      "solution": "v = √(2·9,81·2) = √39,24 ≈ 6.264 m/s."
    },
    {
      "q": "Xuddi shu bolg'aning (m = 500 kg) 2 m balandlikdagi potensial energiyasi Eₚ necha J?",
      "answer": 9810,
      "unit": "J",
      "tol": 0.03,
      "hint": "Eₚ = m·g·h.",
      "solution": "Eₚ = 500·9,81·2 = 9810 J."
    },
    {
      "q": "m₁ = 2000 kg li vagonetka v₁ = 3 m/s tezlik bilan tinch turgan m₂ = 1000 kg li vagonetkaga urilib, ular birga harakatlandi. Urilishdan keyingi tezlik v' qancha?",
      "answer": 2,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "v' = (m₁v₁ + m₂v₂)/(m₁ + m₂), v₂ = 0.",
      "solution": "v' = 2000·3/3000 = 2 m/s."
    },
    {
      "q": "Yuqoridagi urilishda (2000 kg, 3 m/s va 1000 kg tinch) kinetik energiyaning qancha qismi yo'qoldi (ΔE, J)?",
      "answer": 3000,
      "unit": "J",
      "tol": 0.03,
      "hint": "ΔE = Eₖ(oldin) − Eₖ(keyin).",
      "solution": "Eₖ oldin = 0,5·2000·9 = 9000 J; keyin = 0,5·3000·4 = 6000 J; ΔE = 3000 J."
    }
  ],
  learn: [
    "Kinetik va potensial energiyaning bir-biriga aylanishini (energiyaning saqlanishi)",
    "Impuls p = m·v va uning yopiq sistemada saqlanishini",
    "Noelastik urilishdan keyingi tezlik va yo'qotilgan energiyani hisoblashni",
    "Qiya tekislik tajribasida v = √(2gh) ni tekshirishni"
  ],
  civil: [
    "Qoziq uruvchi bolg'a (svay-bolg'a) balandlikdan tushganda potensial energiya kinetikka aylanadi va qoziqni gruntga suqadi.",
    "Kran yuki qarshi og'irlik bilan to'qnashganda yoki yuk shiftga urilganda impuls saqlanishi bilan tezlik baholanadi.",
    "Vagonetka va yuk aravachalari to'qnashuvida tezlik va yo'qotilgan energiya (deformatsiya) hisoblanadi.",
    "Yuk tushishidan himoya qiluvchi to'siqlar energiyani yutishga mo'ljallab loyihalanadi."
  ],
  keyFact: "Noelastik urilishda impuls saqlanadi, lekin mexanik energiyaning bir qismi issiqlik va deformatsiyaga aylanadi: qoziq bolg'asi aynan shu energiya hisobiga gruntni siqadi.",
  mistakes: [
    "Tezlik ishorasini unutish: qarama-qarshi yo'nalgan jismlar tezligidan biri manfiy olinadi, aks holda impuls noto'g'ri chiqadi.",
    "Impulsning saqlanishini energiyaning saqlanishi bilan aralashtirish: noelastik urilishda energiya saqlanmaydi.",
    "Birliklarda grammni kilogrammga o'tkazmaslik: energiya J da, massa kg da bo'lishi shart."
  ],
  glossary: [
    {
      "t": "Kinetik energiya",
      "d": "harakat energiyasi, Eₖ = m·v²/2"
    },
    {
      "t": "Potensial energiya",
      "d": "balandlik bilan bog'liq energiya, Eₚ = m·g·h"
    },
    {
      "t": "Impuls",
      "d": "jism massasi va tezligi ko'paytmasi, p = m·v"
    },
    {
      "t": "Noelastik urilish",
      "d": "jismlar urilgach birga harakatlanadigan hodisa"
    },
    {
      "t": "Yopiq sistema",
      "d": "tashqi kuchlar ta'sir qilmaydigan yoki ular muvozanatda bo'lgan jismlar guruhi"
    }
  ],
  tasks: [
    {
      "q": "Qoziq uruvchi bolg'aning massasi 500 kg, u h = 2 m balandlikdan erkin tushadi. Qoziqqa urilish oldidagi tezligi v qancha? (g = 9,81 m/s², ishqalanishsiz)",
      "answer": 6.264,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "Eₚ = Eₖ, v = √(2gh).",
      "solution": "v = √(2·9,81·2) = √39,24 ≈ 6.264 m/s."
    },
    {
      "q": "Xuddi shu bolg'aning (m = 500 kg) 2 m balandlikdagi potensial energiyasi Eₚ necha J?",
      "answer": 9810,
      "unit": "J",
      "tol": 0.03,
      "hint": "Eₚ = m·g·h.",
      "solution": "Eₚ = 500·9,81·2 = 9810 J."
    },
    {
      "q": "m₁ = 2000 kg li vagonetka v₁ = 3 m/s tezlik bilan tinch turgan m₂ = 1000 kg li vagonetkaga urilib, ular birga harakatlandi. Urilishdan keyingi tezlik v' qancha?",
      "answer": 2,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "v' = (m₁v₁ + m₂v₂)/(m₁ + m₂), v₂ = 0.",
      "solution": "v' = 2000·3/3000 = 2 m/s."
    },
    {
      "q": "Yuqoridagi urilishda (2000 kg, 3 m/s va 1000 kg tinch) kinetik energiyaning qancha qismi yo'qoldi (ΔE, J)?",
      "answer": 3000,
      "unit": "J",
      "tol": 0.03,
      "hint": "ΔE = Eₖ(oldin) − Eₖ(keyin).",
      "solution": "Eₖ oldin = 0,5·2000·9 = 9000 J; keyin = 0,5·3000·4 = 6000 J; ΔE = 3000 J."
    }
  ],
  theory: [
    "Mexanik energiya kinetik (Eₖ = m·v²/2) va potensial (Eₚ = m·g·h) energiyalar yig'indisidan iborat. Ishqalanish va qarshilik bo'lmasa, yopiq sistemada to'liq mexanik energiya o'zgarmaydi: Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂.",
    "Qiya tekislikdan h balandlikdan sirpanib tushgan jism pastki nuqtada v = √(2gh) tezlikka erishadi, bunda massa tezlikka ta'sir qilmaydi. Potensial energiya to'liq kinetikka aylanadi.",
    "Jismning impulsi p = m·v vektor kattalik bo'lib, yo'nalishi tezlik bilan bir xil. Yopiq sistemada jismlar to'qnashganda umumiy impuls o'zgarmaydi: m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'.",
    "Mutlaq noelastik urilishda jismlar birlashib, bitta tezlik bilan harakatlanadi: v' = (m₁v₁ + m₂v₂)/(m₁ + m₂). Bunda impuls saqlanadi, lekin kinetik energiyaning bir qismi issiqlik va deformatsiyaga o'tadi.",
    "Yo'qotilgan energiya ΔE = Eₖ(oldin) − Eₖ(keyin) ga teng. Agar ikkinchi jism tinch bo'lsa, yo'qotilgan ulush m₂/(m₁ + m₂) ga teng; ya'ni nishon og'ir bo'lsa, ko'proq energiya deformatsiyaga sarflanadi.",
    "Qurilishda bu qonunlar qoziq urish, yuk tushishi, vagonetka va mashinalar to'qnashuvi hamda himoya to'siqlarini hisoblashda ishlatiladi. Real hodisalarda ishqalanish tufayli bir oz energiya doim yo'qoladi."
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
    "Qiya tekislik balandligi h ni (masalan, 1 m) o'rnating.",
    "Birinchi aravacha massasi m₁ va tezligi v₁ ni kiriting.",
    "Ikkinchi aravacha massasi m₂ va tezligi v₂ ni kiriting (tinch bo'lsa 0).",
    "Pastki nuqtadagi tezlik v = √(2gh) va Eₚ, Eₖ qiymatlarini yozib oling; ular tengligini tekshiring.",
    "Umumiy impuls va urilishdan keyingi tezlik v' ni o'qing.",
    "Natijani jadvalga qo'shing.",
    "h ni 0,5; 1; 2 m ga o'zgartirib, tezlik v ning √h ga proporsionalligini tekshiring.",
    "m₂ ni 1 dan 5 kg gacha oshirib, yo'qotilgan energiya ulushi qanday o'zgarishini kuzating.",
    "v₂ ni manfiy qilib impuls ishorasini tekshiring; qo'lda hisoblangan v' va ΔE ni simulyatsiya bilan taqqoslab, xulosa yozing."
  ],
  questions: [
    "Mexanik energiya nima va qachon saqlanadi?",
    "Kinetik va potensial energiya formulalarini yozing.",
    "Qiya tekislik pastidagi tezlik massaga bog'liqmi?",
    "Impuls nima va qaysi birlikda o'lchanadi?",
    "Impulsning saqlanish qonuni qachon bajariladi?",
    "Noelastik urilishda nima saqlanadi, nima saqlanmaydi?",
    "Yo'qotilgan energiya qayerga ketadi?",
    "Qoziq bolg'asining massasi yoki balandligini oshirsak, nima o'zgaradi?",
    "Qarama-qarshi tezliklarda impulsni qanday hisoblaysiz?",
    "Elastik urilish noelastikdan nimasi bilan farq qiladi?"
  ],
  quiz: [
    {
      "q": "Kinetik energiya formulasi?",
      "options": [
        "Eₖ = m·v",
        "Eₖ = m·g·h",
        "Eₖ = m·v² ",
        "Eₖ = m·v² / 2"
      ],
      "answer": 3
    },
    {
      "q": "Qiya tekislik pastidagi tezlik?",
      "options": [
        "v = √(2gh)",
        "v = g·h",
        "v = 2gh",
        "v = √(gh/2)"
      ],
      "answer": 0
    },
    {
      "q": "Impuls birligi?",
      "options": [
        "kg·m/s",
        "N·m",
        "kg·m/s²",
        "J/s"
      ],
      "answer": 0
    },
    {
      "q": "Noelastik urilishda nima saqlanadi?",
      "options": [
        "Faqat kinetik energiya",
        "Tezlik",
        "Impuls",
        "Potensial energiya"
      ],
      "answer": 2
    },
    {
      "q": "m₁ = 2 kg, v₁ = 3 m/s, m₂ = 1 kg tinch; urilgach tezlik?",
      "options": [
        "3 m/s",
        "1 m/s",
        "2 m/s",
        "1,5 m/s"
      ],
      "answer": 2
    },
    {
      "q": "Eₚ = m·g·h bo'yicha 10 kg, 5 m da (g ≈ 10) energiya?",
      "options": [
        "≈ 50 J",
        "≈ 500 J",
        "≈ 5000 J",
        "≈ 15 J"
      ],
      "answer": 1
    },
    {
      "q": "Yo'qotilgan mexanik energiya asosan nimaga aylanadi?",
      "options": [
        "Potensial energiyaga",
        "Issiqlik va deformatsiyaga",
        "Impulsga",
        "Massaga"
      ],
      "answer": 1
    },
    {
      "q": "Tinch nishonga urilishda yo'qotilgan ulush qaysi formula bilan?",
      "options": [
        "m₁ / (m₁ + m₂)",
        "m₁·m₂",
        "1/2",
        "m₂ / (m₁ + m₂)"
      ],
      "answer": 3
    }
  ],
  conclusion: "Tajribada qiya tekislikdan tushishda potensial energiya kinetikka aylanishi va v = √(2gh) qonuniyati tasdiqlandi. To'qnashuvda umumiy impuls saqlandi, kinetik energiyaning bir qismi esa issiqlik va deformatsiyaga sarflandi. Bu qonunlar qoziq urish va yuk tushishi kabi qurilish jarayonlarida energiya va tezlikni baholashga imkon beradi.",
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
