export default {
  id: 3,
  slug: 'yung-moduli',
  title: 'Egilish usuli bilan Yung modulini aniqlash',
  category: 'Mexanika',
  emoji: '📏',
  short: "Ikki tayanchga qo'yilgan balkaning o'rtasiga yuk osib, egilish kattaligi orqali materialning Yung modulini aniqlang.",
  aim: [
    "Qattiq jismlarning elastik deformatsiyasini o'rganish",
    "Balkaning tashqi kuch ta'siridagi egilish deformatsiyasini kuzatish",
    "Yuk miqdori va balkaning egilishi orasidagi bog'lanishni aniqlash",
    "Tajriba natijalari asosida materialning Yung modulini hisoblash",
    "Turli materiallarning elastiklik xususiyatlarini taqqoslash"
  ],
  equipment: [
    'Virtual laboratoriya dasturi',
    'Kompyuter yoki mobil qurilma',
    "Ikki tayanchga o'rnatilgan balka",
    'Yuklar to\'plami',
    'Virtual mikrometr yoki indikator',
    'Chizg\'ich',
    'Shtangensirkul',
    'Kalkulyator'
  ],
  learn: [
    "Kuchlanish, deformatsiya va Yung moduli o'rtasidagi bog'liqlikni (Guk qonuni)",
    "Ikki tayanchli balkaning egilishini o'lchab, E ni formuladan hisoblashni",
    "Kesim inersiya momenti I = b·h³/12 ning balka bikrligiga ta'sirini",
    "Natijani po'lat, alyuminiy, yog'och jadval qiymatlari bilan solishtirishni"
  ],
  civil: [
    "Ko'prik va ustun-to'sin oraliqlari uchun to'sinning ruxsat etilgan egilishi (ugi) Yung moduli orqali tekshiriladi.",
    "Temir-beton plitasi va po'lat balkaning bikrligi (E·I) loyihalashda asosiy ko'rsatkich hisoblanadi.",
    "Kran strelasi og'ir yuk ostida egilib, uchi pastga siljiydi; bu siljish E va kesim o'lchamlariga bog'liq.",
    "Bir xil yukda yog'och to'sin po'latnikidan ~20 marta ko'proq egiladi, shuning uchun material tanlash E ga asoslanadi."
  ],
  keyFact: "To'sin qalinligi ikki marta oshirilsa, egilish 8 marta kamayadi (h³ ga teskari proporsional): shuning uchun ko'priklarda balka balandligi eng ta'sirchan parametr hisoblanadi.",
  mistakes: [
    "Millimetrni metrga o'tkazishni unutish: h³ da bu xato 10⁹ marta ta'sir qiladi. Barcha uzunliklarni metrga o'tkazing.",
    "Yukni kg da qoldirib, F = m·g ni hisoblamaslik; formulaga kuch (N) qo'yiladi.",
    "Katta egilishlarda (y > l/50) elastiklik sharti buzilib, formula noto'g'ri natija beradi; yukni kamaytiring."
  ],
  glossary: [
    {
      "t": "Yung moduli",
      "d": "materialning cho'zilish/siqilishga qarshiligi, E = σ/ε, birligi Pa"
    },
    {
      "t": "Kuchlanish",
      "d": "kesim yuzasiga to'g'ri keladigan kuch, σ = F/S"
    },
    {
      "t": "Nisbiy deformatsiya",
      "d": "uzayishning boshlang'ich uzunlikka nisbati, ε = Δl/l"
    },
    {
      "t": "Inersiya momenti (kesim)",
      "d": "kesim shaklining egilishga qarshiligi, I = b·h³/12"
    },
    {
      "t": "Egilish strelkasi",
      "d": "balka o'rtasining yuk ostida pastga siljishi y"
    }
  ],
  tasks: [
    {
      "q": "Po'lat chizg'ich ikki tayanchga qo'yilgan: l = 0,5 m, eni b = 20 mm, qalinligi h = 3 mm. O'rtasiga m = 2 kg yuk osilganda egilish y = 5,7 mm bo'ldi. Yung moduli E ni GPa da toping (E = F·l³/(4·b·h³·y), g = 9,81).",
      "answer": 199.2,
      "unit": "GPa",
      "tol": 0.03,
      "hint": "F = m·g; barcha o'lchamlarni metrga o'tkazing.",
      "solution": "F = 19,62 N; E = 19,62·0,125/(4·0,02·2,7·10⁻⁸·5,7·10⁻³) ≈ 199.2 GPa."
    },
    {
      "q": "Po'lat balka kesimi to'g'ri to'rtburchak: eni b = 0,10 m, balandligi h = 0,20 m. Kesim inersiya momenti I ni sm⁴ da toping.",
      "answer": 6667,
      "unit": "sm⁴",
      "tol": 0.03,
      "hint": "I = b·h³/12 (m⁴), 1 m⁴ = 10⁸ sm⁴.",
      "solution": "I = 0,1·0,008/12 = 6,667·10⁻⁵ m⁴ = 6667 sm⁴."
    },
    {
      "q": "Ko'prik osmasi (tros) kesimi S = 0,0025 m² bo'lib, unga F = 50 kN cho'zuvchi kuch ta'sir qiladi. Kuchlanish σ necha MPa?",
      "answer": 20,
      "unit": "MPa",
      "tol": 0.03,
      "hint": "σ = F/S, 1 MPa = 10⁶ Pa.",
      "solution": "σ = 50000/0,0025 = 2·10⁷ Pa = 20 MPa."
    },
    {
      "q": "Uzunligi l = 2 m bo'lgan po'lat sterjen (E = 200 GPa) σ = 100 MPa kuchlanish ostida. Uning uzayishi Δl necha mm?",
      "answer": 1,
      "unit": "mm",
      "tol": 0.03,
      "hint": "ε = σ/E, Δl = ε·l.",
      "solution": "ε = 10⁸/(2·10¹¹) = 5·10⁻⁴; Δl = 5·10⁻⁴·2 = 10⁻³ m = 1 mm."
    }
  ],
  learn: [
    "Kuchlanish, deformatsiya va Yung moduli o'rtasidagi bog'liqlikni (Guk qonuni)",
    "Ikki tayanchli balkaning egilishini o'lchab, E ni formuladan hisoblashni",
    "Kesim inersiya momenti I = b·h³/12 ning balka bikrligiga ta'sirini",
    "Natijani po'lat, alyuminiy, yog'och jadval qiymatlari bilan solishtirishni"
  ],
  civil: [
    "Ko'prik va ustun-to'sin oraliqlari uchun to'sinning ruxsat etilgan egilishi (ugi) Yung moduli orqali tekshiriladi.",
    "Temir-beton plitasi va po'lat balkaning bikrligi (E·I) loyihalashda asosiy ko'rsatkich hisoblanadi.",
    "Kran strelasi og'ir yuk ostida egilib, uchi pastga siljiydi; bu siljish E va kesim o'lchamlariga bog'liq.",
    "Bir xil yukda yog'och to'sin po'latnikidan ~20 marta ko'proq egiladi, shuning uchun material tanlash E ga asoslanadi."
  ],
  keyFact: "To'sin qalinligi ikki marta oshirilsa, egilish 8 marta kamayadi (h³ ga teskari proporsional): shuning uchun ko'priklarda balka balandligi eng ta'sirchan parametr hisoblanadi.",
  mistakes: [
    "Millimetrni metrga o'tkazishni unutish: h³ da bu xato 10⁹ marta ta'sir qiladi. Barcha uzunliklarni metrga o'tkazing.",
    "Yukni kg da qoldirib, F = m·g ni hisoblamaslik; formulaga kuch (N) qo'yiladi.",
    "Katta egilishlarda (y > l/50) elastiklik sharti buzilib, formula noto'g'ri natija beradi; yukni kamaytiring."
  ],
  glossary: [
    {
      "t": "Yung moduli",
      "d": "materialning cho'zilish/siqilishga qarshiligi, E = σ/ε, birligi Pa"
    },
    {
      "t": "Kuchlanish",
      "d": "kesim yuzasiga to'g'ri keladigan kuch, σ = F/S"
    },
    {
      "t": "Nisbiy deformatsiya",
      "d": "uzayishning boshlang'ich uzunlikka nisbati, ε = Δl/l"
    },
    {
      "t": "Inersiya momenti (kesim)",
      "d": "kesim shaklining egilishga qarshiligi, I = b·h³/12"
    },
    {
      "t": "Egilish strelkasi",
      "d": "balka o'rtasining yuk ostida pastga siljishi y"
    }
  ],
  tasks: [
    {
      "q": "Po'lat chizg'ich ikki tayanchga qo'yilgan: l = 0,5 m, eni b = 20 mm, qalinligi h = 3 mm. O'rtasiga m = 2 kg yuk osilganda egilish y = 5,7 mm bo'ldi. Yung moduli E ni GPa da toping (E = F·l³/(4·b·h³·y), g = 9,81).",
      "answer": 199.2,
      "unit": "GPa",
      "tol": 0.03,
      "hint": "F = m·g; barcha o'lchamlarni metrga o'tkazing.",
      "solution": "F = 19,62 N; E = 19,62·0,125/(4·0,02·2,7·10⁻⁸·5,7·10⁻³) ≈ 199.2 GPa."
    },
    {
      "q": "Po'lat balka kesimi to'g'ri to'rtburchak: eni b = 0,10 m, balandligi h = 0,20 m. Kesim inersiya momenti I ni sm⁴ da toping.",
      "answer": 6667,
      "unit": "sm⁴",
      "tol": 0.03,
      "hint": "I = b·h³/12 (m⁴), 1 m⁴ = 10⁸ sm⁴.",
      "solution": "I = 0,1·0,008/12 = 6,667·10⁻⁵ m⁴ = 6667 sm⁴."
    },
    {
      "q": "Ko'prik osmasi (tros) kesimi S = 0,0025 m² bo'lib, unga F = 50 kN cho'zuvchi kuch ta'sir qiladi. Kuchlanish σ necha MPa?",
      "answer": 20,
      "unit": "MPa",
      "tol": 0.03,
      "hint": "σ = F/S, 1 MPa = 10⁶ Pa.",
      "solution": "σ = 50000/0,0025 = 2·10⁷ Pa = 20 MPa."
    },
    {
      "q": "Uzunligi l = 2 m bo'lgan po'lat sterjen (E = 200 GPa) σ = 100 MPa kuchlanish ostida. Uning uzayishi Δl necha mm?",
      "answer": 1,
      "unit": "mm",
      "tol": 0.03,
      "hint": "ε = σ/E, Δl = ε·l.",
      "solution": "ε = 10⁸/(2·10¹¹) = 5·10⁻⁴; Δl = 5·10⁻⁴·2 = 10⁻³ m = 1 mm."
    }
  ],
  theory: [
    "Qattiq jismlar tashqi kuch ostida shaklini o'zgartiradi (deformatsiyalanadi). Kichik deformatsiyalarda Guk qonuni o'rinli: kuchlanish σ = F/S nisbiy deformatsiya ε = Δl/l ga to'g'ri proporsional, σ = E·ε. Proporsionallik koeffitsiyenti E — Yung moduli.",
    "Yung moduli faqat materialga bog'liq va Pa (odatda GPa) da o'lchanadi. Po'lat uchun taxminan 200 GPa, mis ~110, alyuminiy ~70, shisha ~65, yog'och ~10 GPa. Qanchalik E katta bo'lsa, material shunchalik bikr.",
    "Ikki tayanchga qo'yilgan balkaning o'rtasiga F kuch qo'yilsa, balka y = F·l³/(48·E·I) strelkaga egiladi. To'g'ri to'rtburchak kesim uchun I = b·h³/12 bo'lgani uchun y = F·l³/(4·E·b·h³).",
    "Bundan egilish usulida Yung moduli ishchi formulasi kelib chiqadi: E = F·l³/(4·b·h³·y). Tajribada F = m·g, l, b, h va y o'lchanib, E hisoblanadi.",
    "Balkaning bikrligi balandlikka kuchli bog'liq: h ikki marta oshsa, egilish 8 marta kamayadi; oraliq l ikki marta oshsa, egilish 8 marta ortadi. Shuning uchun ko'priklarda balandligi katta balka va qisqa oraliq tanlanadi.",
    "Nisbiy xatolik ΔE/E = ΔF/F + 3Δl/l + Δb/b + 3Δh/h + Δy/y formulasi bilan baholanadi; eng katta hissa h va l ning xatosidan keladi. Formulalar faqat elastik deformatsiyada o'rinli: egilish l/50 dan oshsa, hisob noto'g'ri bo'ladi."
  ],
  formulas: [
    { name: 'Yung moduli (umumiy)', expr: 'E = σ / ε', note: 'σ = F/S, ε = Δl/l' },
    { name: 'Balkaning egilishi', expr: 'y = F·l³ / (48·E·I)', note: "O'rtasiga yuk qo'yilgan, ikki tayanchli balka" },
    { name: "Kesim inersiya momenti", expr: 'I = b·h³ / 12', note: "To'g'ri to'rtburchak kesim; b — eni, h — qalinligi" },
    { name: 'Yung moduli (egilish usuli)', expr: 'E = F·l³ / (4·b·h³·y)', note: 'Ishchi formula; F = m·g' },
    { name: 'Yuk kuchi', expr: 'F = m·g', note: 'g = 9,81 m/s²' },
    { name: "Nisbiy xatolik", expr: 'ΔE/E = ΔF/F + 3Δl/l + Δb/b + 3Δh/h + Δy/y', note: 'Darajalar xatolikka ko\'paytiriladi' }
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring va simulyatsiya bo'limini oching.",
    "Tayanchlar orasidagi masofa l ni o'rnating (masalan, 0,5 m).",
    "Balka eni b va qalinligi h ni mm da kiriting.",
    "Yuk massasi m ni 2 kg ga qo'ying; F = m·g hisoblanadi.",
    "Egilish y ni (mm) kiriting va natijadagi E ni GPa da o'qing.",
    "Natijani jadvalga qo'shing.",
    "Yukni 1, 2, 3, 4 kg ga o'zgartirib, har safar y ni yozing.",
    "F ga bog'liq y grafigini kuzating: u to'g'ri chiziq bo'lishi kerak.",
    "Hisoblangan E ni po'lat (200 GPa) va alyuminiy (70 GPa) bilan solishtirib materialni aniqlang; h ni 3 mm dan 6 mm ga o'zgartirib, egilishning 8 marta kamayishini tekshiring.",
    "O'rtacha E va nisbiy xatolikni hisoblab, CSV yuklab oling."
  ],
  questions: [
    "Yung moduli nimani bildiradi va qanday birlikda o'lchanadi?",
    "Guk qonuni qanday yoziladi va qachon o'rinli?",
    "Balkaning egilishi qaysi o'lchamlarga qanday bog'liq?",
    "Nima uchun balka qalinligi h ni eng aniq o'lchash kerak?",
    "Kesim inersiya momenti nima? To'g'ri to'rtburchak uchun formulasi qanday?",
    "Nima uchun yukni tajriba davomida katta qilmaslik kerak?",
    "Po'lat va yog'och balkaning bir xil yukdagi egilishi qanday farq qiladi?",
    "Ko'prik balkasi balandligini ikki marta oshirsak, egilish qanday o'zgaradi?",
    "Nisbiy xatolik formulasida nima uchun h va l oldida 3 koeffitsiyent bor?",
    "Egilish y yuk F ga qanday bog'liq va grafik qanday ko'rinadi?"
  ],
  quiz: [
    {
      "q": "Guk qonuni qaysi ko'rinishda?",
      "options": [
        "σ = F·l",
        "σ = E/ε",
        "σ = E·ε",
        "σ = m·g"
      ],
      "answer": 2
    },
    {
      "q": "Yung moduli birligi?",
      "options": [
        "Pa (paskal)",
        "N",
        "J",
        "kg/m³"
      ],
      "answer": 0
    },
    {
      "q": "Egilish usulida ishchi formula?",
      "options": [
        "E = F·l / (b·h·y)",
        "E = F·l³ / (4·b·h³·y)",
        "E = F·y / l",
        "E = m·g·h"
      ],
      "answer": 1
    },
    {
      "q": "h ikki marta oshsa, egilish y qanday o'zgaradi?",
      "options": [
        "8 marta kamayadi",
        "2 marta kamayadi",
        "4 marta kamayadi",
        "o'zgarmaydi"
      ],
      "answer": 0
    },
    {
      "q": "Qaysi material Yung moduli eng katta?",
      "options": [
        "Alyuminiy",
        "Yog'och",
        "Shisha",
        "Po'lat"
      ],
      "answer": 3
    },
    {
      "q": "To'g'ri to'rtburchak kesim uchun I = ?",
      "options": [
        "b·h³/12",
        "b·h/2",
        "b³·h/12",
        "b·h²/6"
      ],
      "answer": 0
    },
    {
      "q": "Egilish tajribasida F qanday topiladi?",
      "options": [
        "F = m/g",
        "F = m·g",
        "F = m·l",
        "F = E·y"
      ],
      "answer": 1
    },
    {
      "q": "Yuk 2 marta oshsa (elastik chegarada), y qanday o'zgaradi?",
      "options": [
        "2 marta ortadi",
        "o'zgarmaydi",
        "4 marta ortadi",
        "2 marta kamayadi"
      ],
      "answer": 0
    }
  ],
  conclusion: "Virtual tajribada ikki tayanchli balkaning egilishi o'rganildi. Yuk ortishi bilan egilish chiziqli ortishi (y ~ F) kuzatildi. E = F·l³/(4·b·h³·y) formulasi bilan Yung moduli hisoblanib, jadval qiymati bilan solishtirildi. Natijaning aniqligi ayniqsa h va l ni o'lchashga bog'liq ekani aniqlandi. Bu usul ko'prik va to'sinlarning bikrligini baholash uchun asos bo'ladi.",
  sim: {
    intro: "Balka o'lchamlari va o'lchangan egilishni kiriting, Yung moduli hisoblanadi va ma'lum materiallar bilan taqqoslanadi.",
    inputs: [
      { id: 'm', label: 'Yuk massasi m', unit: 'kg', min: 0.1, max: 20, step: 0.1, value: 2 },
      { id: 'l', label: 'Tayanchlar orasidagi masofa l', unit: 'm', min: 0.1, max: 1.5, step: 0.01, value: 0.5 },
      { id: 'b', label: 'Balka eni b', unit: 'mm', min: 5, max: 60, step: 0.5, value: 20 },
      { id: 'h', label: 'Balka qalinligi h', unit: 'mm', min: 1, max: 15, step: 0.1, value: 3 },
      { id: 'y', label: "O'lchangan egilish y", unit: 'mm', min: 0.1, max: 30, step: 0.1, value: 5.7 }
    ],
    compute: (v) => {
      const g = 9.81;
      const F = v.m * g;
      const l = v.l, b = v.b / 1000, h = v.h / 1000, y = v.y / 1000;
      const E = F * Math.pow(l, 3) / (4 * b * Math.pow(h, 3) * y);
      const I = b * Math.pow(h, 3) / 12;
      const sigmaMax = (F * l / 4) * (h / 2) / I; // eng katta kuchlanish
      const mats = [['alyuminiy', 70e9], ['mis', 110e9], ['po\'lat', 200e9], ['shisha', 65e9], ['yog\'och', 10e9]];
      let best = mats[0], bd = Infinity;
      for (const mt of mats) { const d = Math.abs(mt[1] - E) / mt[1]; if (d < bd) { bd = d; best = mt; } }
      const k = y / F; // y = k F
      const pts = [];
      for (let i = 0; i <= 20; i++) { const f = 2 * F * i / 20; pts.push([+f.toFixed(3), +(k * f * 1000).toFixed(4)]); }
      const ptsSteel = [], ptsAl = [];
      for (let i = 0; i <= 20; i++) {
        const f = 2 * F * i / 20;
        const c = Math.pow(l, 3) / (4 * b * Math.pow(h, 3)) * 1000;
        ptsSteel.push([+f.toFixed(3), +(f * c / 200e9).toFixed(4)]);
        ptsAl.push([+f.toFixed(3), +(f * c / 70e9).toFixed(4)]);
      }
      return {
        results: [
          { label: 'Yuk kuchi F', value: F, unit: 'N', digits: 3 },
          { label: 'Yung moduli E', value: E, unit: 'Pa', digits: 3 },
          { label: 'Yung moduli E', value: E / 1e9, unit: 'GPa', digits: 3 },
          { label: 'Kesim inersiya momenti I', value: I, unit: 'm⁴', digits: 3 },
          { label: 'Eng katta kuchlanish σ', value: sigmaMax / 1e6, unit: 'MPa', digits: 3 }
        ],
        chart: {
          title: 'Egilishning yuk kuchiga bog\'liqligi', xLabel: 'F, N', yLabel: 'y, mm',
          series: [{ name: "O'lchangan (hisoblangan E)", points: pts }, { name: "Nazariy: po'lat (200 GPa)", points: ptsSteel }, { name: 'Nazariy: alyuminiy (70 GPa)', points: ptsAl }, { name: 'Joriy', points: [[+F.toFixed(3), +v.y]] }]
        },
        note: (bd < 0.15 ? `Natija ${best[0]} uchun jadval qiymatiga (≈ ${best[1] / 1e9} GPa) yaqin.` : "Natija jadvaldagi materiallardan farq qiladi; o'lchashlarni tekshiring.") + (v.y > v.l * 1000 / 50 ? " Diqqat: egilish katta, elastiklik sharti buzilishi mumkin." : "")
      };
    }
  }
};
