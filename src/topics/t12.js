export default {
  "id": 12,
  "slug": "chiziqli-kengayish",
  "title": "Qattiq jismlarning chiziqli kengayish koeffitsiyentini aniqlash",
  "category": "Issiqlik",
  "emoji": "📐",
  "short": "Metall sterjen qizdirilganda uzunligining o'zgarishini o'lchab, chiziqli kengayish koeffitsiyentini topish.",
  "learn": [
    "Issiqlikdan chiziqli kengayish qonuni Δl = α·l₀·ΔT ni qo'llashni",
    "α koeffitsiyentini o'lchangan Δl, l₀ va ΔT dan topishni",
    "Turli qurilish materiallarining kengayishini taqqoslashni",
    "Kengayish tirqishining kerakli kengligini hisoblashni"
  ],
  "civil": [
    "Ko'prik va yo'l qoplamalarida kengayish tirqishlari (deformatsion choklar) yoz-qish temperaturasi farqidan kengayishni qabul qiladi.",
    "Temir yo'l relslari orasidagi tirqish yoki uzluksiz rels tizimidagi kuchlanish Δl = α·l₀·ΔT bo'yicha baholanadi.",
    "Metall tom, fasad kassetalari va quvurlar issiqlikdan siljishi mumkin bo'lgan mahkamlash bilan o'rnatiladi.",
    "Po'lat armatura va beton α qiymatlari yaqin (≈12·10⁻⁶ va ≈10·10⁻⁶ K⁻¹), shu sababli temir-beton temperatura o'zgarganda yorilmaydi."
  ],
  "keyFact": "Po'lat va beton deyarli bir xil chiziqli kengayish koeffitsiyentiga ega bo'lgani uchun temir-beton konstruksiyasi o'z asosiy afzalligini saqlaydi: armatura issiqdan betonni yormaydi.",
  "aim": [
    "Qattiq jismlar qizdirilganda uzunligi o'zgarishini o'rganish",
    "Chiziqli kengayish koeffitsiyentini tajriba yo'li bilan aniqlash",
    "Turli metallarning kengayishini solishtirish",
    "Kengayishning qurilishdagi ahamiyatini tushunish"
  ],
  "equipment": [
    "Virtual laboratoriya dasturi",
    "Kompyuter yoki mobil qurilma",
    "Kalkulyator",
    "Metall sterjen (virtual)",
    "Mikrometr yoki indikator (virtual)"
  ],
  "theory": [
    "Qattiq jismlar qizdirilganda atomlarning tebranish amplitudasi ortadi va jism o'lchamlari kattalashadi. Sterjenning uzunlikka nisbatan kengayishi issiqlikdan chiziqli kengayish deyiladi.",
    "Uzunlikning o'zgarishi Δl = α·l₀·ΔT formulasi bilan ifodalanadi, bu yerda l₀ — boshlang'ich uzunlik, ΔT = T₂ − T₁ — temperatura o'zgarishi, α — chiziqli kengayish koeffitsiyenti. Bundan α = Δl / (l₀·ΔT), birligi K⁻¹.",
    "Oxirgi uzunlik l = l₀·(1 + α·ΔT) formulasi bilan topiladi. Kichik ΔT da bu bog'lanish chiziqli bo'ladi, shuning uchun Δl(T) grafigi to'g'ri chiziq beradi va uning og'ishidan α aniqlanadi.",
    "Turli materiallarning koeffitsiyenti turlicha: alyuminiy ≈ 23, mis ≈ 17, po'lat ≈ 12, beton ≈ 10, shisha ≈ 9 (×10⁻⁶ K⁻¹). Bir xil sharoitda alyuminiy po'latdan taxminan ikki marta ko'p kengayadi.",
    "Kengayish cheklansa, konstruksiyada termik kuchlanish paydo bo'ladi: σ = E·α·ΔT. Masalan, po'lat (E ≈ 2·10¹¹ Pa) 40 K ga qizdirilib tirqish qoldirilmasa, juda katta kuchlanish hosil bo'ladi.",
    "Shu sababli ko'priklar, uzun binolar, quvurlar va yo'l qoplamalarida kengayish tirqishlari va deformatsion choklar qoldiriladi; bimetall birikmalarda esa materiallarning α si yaqin olinadi."
  ],
  "formulas": [
    {
      "name": "Uzunlik o'zgarishi",
      "expr": "Δl = α·l₀·ΔT",
      "note": "Δl = l − l₀"
    },
    {
      "name": "Kengayish koeffitsiyenti",
      "expr": "α = Δl / (l₀·ΔT)",
      "note": "birligi: K⁻¹"
    },
    {
      "name": "Temperatura farqi",
      "expr": "ΔT = T₂ − T₁",
      "note": ""
    },
    {
      "name": "Oxirgi uzunlik",
      "expr": "l = l₀·(1 + α·ΔT)",
      "note": ""
    }
  ],
  "procedure": [
    "Virtual laboratoriya dasturini ishga tushiring.",
    "Tajriba uchun metall sterjen turini tanlang (po'lat, mis yoki alyuminiy).",
    "Sterjenning boshlang'ich uzunligi l₀ ni metrda qayd eting.",
    "Boshlang'ich temperatura T₁ ni o'lchab yozing.",
    "«Qizdirish» tugmasini bosib, temperatura oshishini kuzating va T₂ ni yozing.",
    "Mikrometr yoki indikator yordamida uzunlik ortishi Δl ni o'lchang va metrga o'tkazing.",
    "ΔT = T₂ − T₁ ni hisoblang.",
    "α = Δl / (l₀·ΔT) formulasi bo'yicha koeffitsiyentni toping va natijani jadvalga qo'shing.",
    "Tajribani turli temperaturalarda 3–5 marta takrorlab, o'rtacha qiymatni toping.",
    "Natijani jadval qiymati bilan solishtirib, ε ni hisoblang va Δl(T) grafigini tahlil qiling."
  ],
  "mistakes": [
    "ΔT ni Selsiy va Kelvin farqini aralashtirib hisoblash: ΔT ning sonli qiymati ikkala shkalada bir xil, lekin mutlaq temperatura bilan adashmang.",
    "Δl ni mm da, l₀ ni m da olib birliklarni aralashtirish: natija 1000 marta noto'g'ri chiqadi. Hammasini metrga o'tkazing.",
    "Eng katta temperatura farqini hisobga olmaslik: tirqish yozgi eng yuqori va qishki eng past haroratga qarab tanlanadi.",
    "α ni ×10⁻⁶ K⁻¹ birligida kiritib, formulada 10⁻⁶ ko'paytmasini unutish."
  ],
  "glossary": [
    {
      "t": "Chiziqli kengayish",
      "d": "Jism qizdirilganda uning uzunligi ortishi."
    },
    {
      "t": "Koeffitsiyent α",
      "d": "1 m uzunlikni 1 K ga qizdirganda uzunlik nisbiy o'zgarishi, K⁻¹."
    },
    {
      "t": "Kengayish tirqishi",
      "d": "Konstruksiyadagi kengayishni qabul qilish uchun qoldiriladigan oraliq."
    },
    {
      "t": "Deformatsion chok",
      "d": "Binoning qismlarini temperatura ta'siridan ajratuvchi vertikal chok."
    },
    {
      "t": "Temperatura farqi ΔT",
      "d": "Oxirgi va boshlang'ich temperaturalar ayirmasi, T₂ − T₁."
    }
  ],
  "questions": [
    "Issiqlikdan chiziqli kengayish hodisasi nima?",
    "Chiziqli kengayish koeffitsiyenti nimani ifodalaydi?",
    "α ning SI tizimidagi birligi qanday?",
    "Qaysi metallarning chiziqli kengayish koeffitsiyenti katta?",
    "Chiziqli kengayish qurilish konstruksiyalarida nima uchun hisobga olinadi?",
    "Temir yo'l relslari va ko'priklarda kengayish tirqishlari nima sababdan qoldiriladi?",
    "Δl(T) grafigi qanday ko'rinishda bo'ladi va uning og'ishi nimani beradi?",
    "Termik kuchlanish σ = E·α·ΔT qanday paydo bo'ladi?",
    "Nima uchun temir-betonda armatura va beton bir-birini yormaydi?",
    "Uzun metall tom yoki fasadni mahkamlashda kengayish qanday hisobga olinadi?"
  ],
  "quiz": [
    {
      "q": "Chiziqli kengayish koeffitsiyentining SI birligi qaysi?",
      "options": [
        "K",
        "m/K",
        "K⁻¹",
        "J/K"
      ],
      "answer": 2
    },
    {
      "q": "Chiziqli kengayish formulasi qaysi?",
      "options": [
        "Δl = α·l₀·ΔT",
        "Δl = l₀/(α·ΔT)",
        "Δl = α·ΔT/l₀",
        "Δl = α + l₀·ΔT"
      ],
      "answer": 0
    },
    {
      "q": "Temperatura oshganda qattiq jism uzunligi qanday o'zgaradi?",
      "options": [
        "Kamayadi",
        "O'zgarmaydi",
        "Nolga teng bo'ladi",
        "Ortadi"
      ],
      "answer": 3
    },
    {
      "q": "Ko'priklarda kengayish tirqishlari nima uchun qoldiriladi?",
      "options": [
        "Chiroyli ko'rinish uchun",
        "Issiqdan kengayganda konstruksiya shikastlanmasligi uchun",
        "Og'irlikni kamaytirish uchun",
        "Tovushni kamaytirish uchun"
      ],
      "answer": 1
    },
    {
      "q": "Bir xil sharoitda qaysi metall ko'proq kengayadi?",
      "options": [
        "Po'lat (α≈12·10⁻⁶ K⁻¹)",
        "Shisha (α≈9·10⁻⁶ K⁻¹)",
        "Alyuminiy (α≈23·10⁻⁶ K⁻¹)",
        "Hammasi bir xil"
      ],
      "answer": 2
    },
    {
      "q": "1 m uzunlikdagi po'lat sterjen (α = 12·10⁻⁶ K⁻¹) 100 K ga qizdirilsa, Δl nechaga teng?",
      "options": [
        "12 mm",
        "0,12 mm",
        "120 mm",
        "1,2 mm"
      ],
      "answer": 3
    },
    {
      "q": "Konstruksiyada kengayish cheklansa, nima paydo bo'ladi?",
      "options": [
        "Massa ortishi",
        "Termik kuchlanish",
        "Zichlik nolga tushishi",
        "Elektr toki"
      ],
      "answer": 1
    },
    {
      "q": "Temir-betonning yorilmasligiga asosiy sabab nima?",
      "options": [
        "Po'lat va betonning α si yaqin",
        "Po'lat betondan yengil",
        "Beton α si juda katta",
        "Armatura issiqlikni o'tkazmaydi"
      ],
      "answer": 0
    }
  ],
  "tasks": [
    {
      "q": "Po'lat rels uzunligi 25 m (α = 12·10⁻⁶ K⁻¹). Temperatura −20 °C dan +40 °C gacha o'zgaradi. Uzunlik ortishi Δl necha mm?",
      "answer": 18,
      "unit": "mm",
      "tol": 0.03,
      "hint": "Δl = α·l₀·ΔT, ΔT = 60 K; natijani mm ga o'tkazing.",
      "solution": "Δl = 12·10⁻⁶ · 25 · 60 = 0,018 m = 18 mm."
    },
    {
      "q": "Alyuminiy fasad profili uzunligi 4 m (α = 23·10⁻⁶ K⁻¹). U 15 °C dan 60 °C gacha qiziydi. Δl necha mm?",
      "answer": 4.14,
      "unit": "mm",
      "tol": 0.03,
      "hint": "ΔT = 45 K.",
      "solution": "Δl = 23·10⁻⁶ · 4 · 45 = 4,14·10⁻³ m = 4,14 mm."
    },
    {
      "q": "2 m uzunlikdagi sterjen 100 K ga qizdirilganda 2,4 mm ga uzaydi. Chiziqli kengayish koeffitsiyenti α ni ×10⁻⁶ K⁻¹ birligida toping.",
      "answer": 12,
      "unit": "×10⁻⁶ K⁻¹",
      "tol": 0.03,
      "hint": "α = Δl / (l₀·ΔT), Δl = 2,4·10⁻³ m.",
      "solution": "α = 2,4·10⁻³ / (2·100) = 1,2·10⁻⁵ K⁻¹ = 12·10⁻⁶ K⁻¹."
    },
    {
      "q": "40 m uzunlikdagi po'lat quvur (α = 12·10⁻⁶ K⁻¹) 10 °C da o'rnatildi, ishlaganda 50 °C gacha qiziydi. Kompensatsiya tirqishi kamida necha mm bo'lishi kerak?",
      "answer": 19.2,
      "unit": "mm",
      "tol": 0.03,
      "hint": "ΔT = 40 K.",
      "solution": "Δl = 12·10⁻⁶ · 40 · 40 = 0,0192 m = 19,2 mm."
    }
  ],
  "conclusion": "Tajribada qizdirilganda sterjen uzunligining temperatura o'zgarishiga to'g'ri proporsional ortishi kuzatildi. Δl, l₀ va ΔT dan α aniqlandi va turli metallar turlicha kengayishi ko'rsatildi. Olingan natijalar ko'prik, quvur va fasadlarda kengayish tirqishining kerakli o'lchamini hisoblash uchun asos bo'ladi.",
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
