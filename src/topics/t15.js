export default {
  "id": 15,
  "slug": "uitston-kopriji",
  "title": "Uitston ko'prigi yordamida noma'lum qarshilikni aniqlash",
  "category": "Elektr",
  "emoji": "⚖️",
  "short": "Ko'prikni muvozanatga keltirib, galvanometrdan tok o'tmaydigan holatda noma'lum qarshilikni topish.",
  "learn": [
    "Uitston ko'prigining tuzilishi va muvozanat shartini",
    "Nol usuli bilan noma'lum qarshilikni aniqlashni",
    "Ko'prikni muvozanatga keltirish ketma-ketligini",
    "Datchiklar (tenzorezistor, termorezistor) ulanishida ko'prik sxemasidan foydalanishni"
  ],
  "civil": [
    "Konstruksiyalardagi deformatsiyani o'lchaydigan tenzorezistorlar ko'prik sxemasiga ulanadi va minimal qarshilik o'zgarishini aniqlaydi.",
    "Termorezistorlar yordamida beton massivi ichidagi temperatura ko'prik usulida kuzatiladi.",
    "Sim va kabellarning izolyatsiya va o'tkazgich qarshiligini o'lchashda Uitston ko'prigi prinsipi ishlatiladi.",
    "Yerga ulash va o'lchash laboratoriyalarida aniq qarshilik o'lchovlari ko'prik usuliga asoslanadi."
  ],
  "keyFact": "Uitston ko'prigi nol usulida ishlagani uchun manba kuchlanishining o'zgarishi natijaga ta'sir qilmaydi, shu sababli ko'prik sxemasi bugungi kunda ham aniq datchiklar va tarozilarning asosi hisoblanadi.",
  "aim": [
    "Uitston ko'prigining ishlash prinsipini o'rganish",
    "Ko'prikni muvozanat holatiga keltirish",
    "Noma'lum qarshilikni tajriba yo'li bilan aniqlash",
    "Nol usulining afzalliklarini tushunish"
  ],
  "equipment": [
    "Uitston ko'prigi sxemasi",
    "Doimiy tok manbai",
    "Ma'lum qarshiliklar R₁, R₂",
    "Rostlanadigan R₃ reostat",
    "Noma'lum qarshilik Rₓ",
    "Galvanometr",
    "Kalit va simlar"
  ],
  "theory": [
    "Uitston ko'prigi to'rtta qarshilikdan (R₁, R₂, R₃, Rₓ) va diagonalga ulangan galvanometrdan iborat. Tok manbai A va C nuqtalarga, galvanometr B va D nuqtalarga ulanadi.",
    "Muvozanat holatida galvanometrdan tok o'tmaydi (I_G = 0), chunki B va D nuqtalar potensiallari teng. Bu shartda ko'prikning ikki yelkasidagi kuchlanishlar nisbati bir xil bo'ladi: R₁/R₂ = R₃/Rₓ.",
    "Bundan noma'lum qarshilik Rₓ = R₂·R₃/R₁ formulasi bilan topiladi. Nisbat R₂/R₁ ni ko'rsatuvchi «yelka» o'zgartirilib, o'lchash diapazoni kengaytiriladi.",
    "Usul nol usuli bo'lib, manba kuchlanishiga va galvanometr shkalasi aniqligiga bog'liq emas. Faqat qarshiliklarning aniqligi va galvanometr sezgirligi natija aniqligini belgilaydi, shuning uchun usul yuqori aniqlik beradi.",
    "Muvozanatdan chiqqan ko'prikda galvanometr toki muvozanatdan chetlanishga proporsional. Shuning uchun ko'prik sxemasi o'zgaruvchan qarshilikli datchiklar (tenzorezistor, termorezistor) ning kichik qarshilik o'zgarishini elektr signaliga aylantiradi.",
    "Qurilishda ko'prik sxemasi konstruksiya deformatsiyasi, beton temperaturasi va namlik datchiklarini monitoring qilish tizimlarida hamda yerga ulash va izolyatsiya qarshiligini aniq o'lchashda ishlatiladi."
  ],
  "formulas": [
    {
      "name": "Muvozanat sharti",
      "expr": "R₁/R₂ = R₃/Rₓ",
      "note": "I_G = 0"
    },
    {
      "name": "Noma'lum qarshilik",
      "expr": "Rₓ = R₂·R₃ / R₁",
      "note": ""
    },
    {
      "name": "O'rtacha qiymat",
      "expr": "Rₓ(o'rt) = (Rₓ₁ + ... + Rₓ₅) / 5",
      "note": ""
    },
    {
      "name": "Nisbiy xatolik",
      "expr": "ε = |Rₓ − R_haq| / R_haq · 100%",
      "note": ""
    }
  ],
  "procedure": [
    "Virtual laboratoriya dasturini ishga tushiring va ko'prik sxemasini yig'ing.",
    "Manba kuchlanishi E ni va galvanometr qarshiligini belgilang.",
    "R₁ va R₂ qiymatlarini tanlang.",
    "Noma'lum Rₓ ni zanjirga ulang, kalitni yoping.",
    "Galvanometr ko'rsatishini kuzating va tok yo'nalishini aniqlang.",
    "R₃ ni asta o'zgartirib, galvanometrni nolga keltiring (I_G = 0).",
    "R₁, R₂, R₃ ni yozing va Rₓ = R₂R₃/R₁ ni hisoblang.",
    "R₁ va R₂ nisbatini o'zgartirib (masalan, 1:1, 1:2, 2:1), tajribani takrorlang.",
    "Kamida 5 marta o'lchab, o'rtacha qiymat va nisbiy xatolik ε ni toping, natijalarni jadvalga qo'shing.",
    "I_G(R₃) grafigini tahlil qilib, nol nuqtasini aniqlang va xulosa yozing."
  ],
  "mistakes": [
    "Ko'prik to'liq muvozanatga kelmasdan Rₓ ni hisoblash: galvanometr ko'rsatishi aniq nolga yaqin bo'lishini kuting.",
    "R₁ va R₂ ni R₃ va Rₓ bilan almashtirib yuborish: formulada Rₓ = R₂·R₃/R₁ tartibini tekshiring.",
    "Galvanometr sezgirligini hisobga olmaslik: juda katta tok bilan ishlash asbobni shikastlashi mumkin.",
    "Ulash simlari qarshiligini e'tiborga olmaslik: kichik qarshiliklarda xatolik katta bo'ladi."
  ],
  "glossary": [
    {
      "t": "Uitston ko'prigi",
      "d": "To'rt qarshilik va diagonalga ulangan galvanometrdan iborat o'lchash sxemasi."
    },
    {
      "t": "Nol usuli",
      "d": "Asbob ko'rsatishi nolga keltirilgandagi muvozanat holatiga asoslangan o'lchash."
    },
    {
      "t": "Galvanometr",
      "d": "Juda kichik toklarni aniqlovchi sezgir asbob."
    },
    {
      "t": "Reostat",
      "d": "Qarshiligini o'zgartirib bo'ladigan qarshilik."
    },
    {
      "t": "Tenzorezistor",
      "d": "Mexanik deformatsiyada qarshiligi o'zgaradigan datchik."
    }
  ],
  "questions": [
    "Uitston ko'prigi nima maqsadda ishlatiladi?",
    "Ko'prik qanday elementlardan tashkil topgan?",
    "Muvozanat holati deganda nima tushuniladi?",
    "Muvozanatda galvanometrdan nega tok o'tmaydi?",
    "Muvozanat shartini yozing.",
    "Uitston ko'prigining voltmetr-ampermetr usuliga nisbatan afzalligi nima?",
    "Ko'prikdan qurilishdagi datchiklarda qanday foydalaniladi?",
    "R₁ va R₂ nisbati o'lchash diapazoniga qanday ta'sir qiladi?",
    "Natija aniqligi nimalarga bog'liq?",
    "Tenzorezistor ko'prikda qarshilik o'zgarishini qanday signalga aylantiradi?"
  ],
  "quiz": [
    {
      "q": "Uitston ko'prigining muvozanat sharti qaysi?",
      "options": [
        "R₁ + R₂ = R₃ + Rₓ",
        "R₁·R₂ = R₃/Rₓ",
        "R₁/R₂ = R₃/Rₓ",
        "R₁ = Rₓ"
      ],
      "answer": 2
    },
    {
      "q": "Muvozanatda galvanometr toki nimaga teng?",
      "options": [
        "Nolga",
        "Maksimal",
        "Manba tokiga",
        "Cheksiz"
      ],
      "answer": 0
    },
    {
      "q": "Rₓ qanday topiladi?",
      "options": [
        "Rₓ = R₁R₃/R₂",
        "Rₓ = R₁R₂/R₃",
        "Rₓ = R₁ + R₂",
        "Rₓ = R₂R₃/R₁"
      ],
      "answer": 3
    },
    {
      "q": "Qarshilikning SI birligi nima?",
      "options": [
        "Amper",
        "Om (Ω)",
        "Volt",
        "Vatt"
      ],
      "answer": 1
    },
    {
      "q": "Muvozanatda qaysi nuqtalar potensiallari teng?",
      "options": [
        "A va C",
        "A va B",
        "B va D",
        "C va D"
      ],
      "answer": 2
    },
    {
      "q": "R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 15 Ω bo'lsa, muvozanatda Rₓ nechaga teng?",
      "options": [
        "7,5 Ω",
        "15 Ω",
        "3 Ω",
        "30 Ω"
      ],
      "answer": 3
    },
    {
      "q": "Uitston ko'prigi qaysi usulga asoslangan?",
      "options": [
        "Rezonans usuliga",
        "Nol usuliga",
        "Stoks usuliga",
        "Kalorimetrik usulga"
      ],
      "answer": 1
    },
    {
      "q": "Tenzorezistor nimani o'lchashda ishlatiladi?",
      "options": [
        "Deformatsiyani",
        "Tovush tezligini",
        "Yorug'lik intensivligini",
        "Massani to'g'ridan-to'g'ri"
      ],
      "answer": 0
    }
  ],
  "tasks": [
    {
      "q": "Uitston ko'prigi muvozanatda: R₁ = 100 Ω, R₂ = 300 Ω, R₃ = 45 Ω. Noma'lum qarshilik Rₓ = R₂·R₃/R₁ necha Ω?",
      "answer": 135,
      "unit": "Ω",
      "tol": 0.03,
      "hint": "Rₓ = R₂·R₃/R₁.",
      "solution": "Rₓ = 300 · 45 / 100 = 135 Ω."
    },
    {
      "q": "R₁ = 50 Ω, R₂ = 100 Ω, Rₓ = 240 Ω. Ko'prik muvozanatga kelishi uchun R₃ necha Ω bo'lishi kerak?",
      "answer": 120,
      "unit": "Ω",
      "tol": 0.03,
      "hint": "Muvozanat shartidan R₃ = R₁·Rₓ/R₂.",
      "solution": "R₃ = 50 · 240 / 100 = 120 Ω."
    },
    {
      "q": "Tenzorezistor boshlang'ich qarshiligi 120 Ω, sezgirlik koeffitsiyenti k = 2,0. Deformatsiya ε = 0,002 bo'lsa, qarshilik o'zgarishi ΔR = R·k·ε necha Ω?",
      "answer": 0.48,
      "unit": "Ω",
      "tol": 0.03,
      "hint": "ΔR = R·k·ε.",
      "solution": "ΔR = 120 · 2,0 · 0,002 = 0,48 Ω."
    },
    {
      "q": "Mis chulg'am 20 °C da 50 Ω, temperaturaviy koeffitsiyenti 0,0043 K⁻¹. 60 °C da uning qarshiligi R = R₀(1 + αΔT) ko'prikda o'lchanadi: R₁ = 100 Ω, R₂ = 250 Ω. Muvozanat uchun R₃ necha Ω? (R₃ = R₁·Rₓ/R₂)",
      "answer": 23.44,
      "unit": "Ω",
      "tol": 0.03,
      "hint": "Avval Rₓ = 50·(1 + 0,0043·40), so'ng R₃ = R₁Rₓ/R₂.",
      "solution": "Rₓ = 50·1,172 = 58,6 Ω; R₃ = 100·58,6/250 = 23,44 Ω."
    }
  ],
  "conclusion": "Uitston ko'prigi muvozanatga keltirilganda galvanometr toki nolga teng bo'ldi va muvozanat shartidan noma'lum qarshilik aniqlandi. Natija nol usulining aniqligini va manba kuchlanishiga bog'liq emasligini ko'rsatdi. Bu usul qurilishda deformatsiya va temperatura datchiklarini ulashda ham qo'llaniladi.",
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
