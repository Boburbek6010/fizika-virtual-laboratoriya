export default {
  "id": 13,
  "slug": "quyosh-kollektori",
  "title": "Quyosh kollektori samaradorligini izolyatsiya funksiyasi sifatida aniqlash",
  "category": "Issiqlik",
  "emoji": "☀️",
  "short": "Issiqlik izolyatsiyasi qalinligi kollektorning foydali ish koeffitsiyentiga qanday ta'sir qilishini o'rganish.",
  "learn": [
    "Quyosh kollektorining energiya balansini tuzishni",
    "Kollektor FIK η ni η = m·c·ΔT / (I·A·t) bo'yicha aniqlashni",
    "Izolyatsiya qalinligi va λ ning yo'qotishga ta'sirini baholashni",
    "Optimal izolyatsiya qalinligini tanlash tamoyilini"
  ],
  "civil": [
    "Turar-joy binolarining tomiga o'rnatiladigan quyosh kollektorlari issiq suv ta'minoti uchun energiyani tejaydi.",
    "Kollektor korpusi va issiq suv bakining issiqlik izolyatsiyasi (mineral paxta, penopoliuretan) yo'qotishni kamaytiradi.",
    "Devor va tom izolyatsiyasi qalinligi issiqlik o'tkazuvchanlik λ va talab etilgan issiqlik qarshiligi bo'yicha tanlanadi.",
    "Binoning energiya sertifikatida isitish va issiq suv uchun quyosh energiyasi ulushi hisoblanadi."
  ],
  "keyFact": "Izolyatsiya qalinligini ikki baravar oshirish yo'qotishni taxminan ikki baravar kamaytiradi, lekin FIK o'sishi sekinlashadi, shuning uchun iqtisodiy jihatdan optimal qalinlik mavjud.",
  "aim": [
    "Quyosh kollektorida issiqlik yutilishi va yo'qotilishini o'rganish",
    "Kollektor FIK ini aniqlash",
    "Izolyatsiya qalinligining FIK ga ta'sirini aniqlash",
    "Optimal izolyatsiya qalinligi tushunchasini bilish"
  ],
  "equipment": [
    "Virtual laboratoriya dasturi",
    "Kompyuter yoki mobil qurilma",
    "Kalkulyator",
    "Quyosh kollektori (virtual)",
    "Termometr"
  ],
  "theory": [
    "Quyosh kollektori quyosh nurlanishi energiyasini issiqlikka aylantiradi. Yutilgan energiyaning bir qismi suyuqlikni qizdirishga, qolgani konvektsiya va nurlanish orqali tashqi muhitga yo'qotishga ketadi.",
    "Kollektorga tushgan energiya Q = I·A·t, bu yerda I — nurlanish intensivligi (W/m²), A — yuza (m²), t — vaqt (s). Foydali issiqlik esa suvni isitishga ketgan Q_f = m·c·(T₂ − T₁) ga teng.",
    "Samaradorlik (FIK) η = Q_f / Q bilan aniqlanadi. Real kollektorda η yutilish ulushi η₀ dan kichik bo'ladi, chunki yo'qotishlar mavjud.",
    "Izolyatsiya orqali issiqlik yo'qotish Q_yo'q = λ·A·ΔT·t/δ formulasi bilan beriladi. λ qancha kichik va δ qancha katta bo'lsa, yo'qotish shuncha kam bo'ladi. Shu sababli zamonaviy izolyatorlar uchun λ ≈ 0,02–0,05 W/(m·K).",
    "Izolyatsiya funksiyasi η(δ) = η₀ − λ·ΔT/(I·δ) giperbolik xususiyatga ega: δ oshgan sari η o'sishi sekinlashadi. Shuning uchun materialning narxi va olingan foydani solishtirib, optimal qalinlik tanlanadi.",
    "Energiya balansi Q_quyosh = Q_f + Q_yo'q ko'rinishida yoziladi. Xuddi shu yondashuv bino devori va tomi uchun issiqlik yo'qotishini baholashda ham qo'llaniladi."
  ],
  "formulas": [
    {
      "name": "Foydali issiqlik",
      "expr": "Q_f = m·c·(T₂ − T₁)",
      "note": "c = 4200 J/(kg·K)"
    },
    {
      "name": "Tushgan energiya",
      "expr": "Q = I·A·t",
      "note": "I — W/m², A — m²"
    },
    {
      "name": "Samaradorlik",
      "expr": "η = Q_f / (I·A·t)",
      "note": ""
    },
    {
      "name": "Izolyatsiyadagi yo'qotish",
      "expr": "Q_yo'q = λ·A·ΔT·t / δ",
      "note": "λ — W/(m·K)"
    },
    {
      "name": "Izolyatsiya funksiyasi",
      "expr": "η(δ) = η₀ − λ·ΔT / (I·δ)",
      "note": "η₀ — yutilish ulushi"
    }
  ],
  "procedure": [
    "Virtual laboratoriyani ishga tushiring.",
    "Kollektor yuzasi A, nurlanish intensivligi I va suv massasi m ni belgilang.",
    "Suvning boshlang'ich T₁ temperaturasini va kollektor–muhit temperatura farqi ΔT ni kiriting.",
    "Izolyatsiya materialini tanlab, λ ni yozing.",
    "Tajriba vaqti t ni belgilang (masalan, 600 s).",
    "Izolyatsiya qalinligini 10, 20, 30, 40, 50 mm qilib o'zgartiring.",
    "Har bir qalinlik uchun T₂ ni o'lchab, natijani jadvalga qo'shing.",
    "Q_f = m·c·(T₂ − T₁), Q = I·A·t va η = Q_f/Q ni hisoblang.",
    "η = f(δ) grafigini chizib, o'sish sekinlashadigan qalinlikni aniqlang.",
    "λ ning boshqa qiymatlarida tajribani takrorlab, izolyator materiallarini taqqoslang va xulosa yozing."
  ],
  "mistakes": [
    "Izolyatsiya qalinligini mm da formulaga qo'yish: δ ni metrga o'tkazing (30 mm = 0,03 m).",
    "Nurlanish intensivligi I (W/m²) ni kollektor yuzasi A ga ko'paytirishni va vaqt t (s) ni unutish natijasida Q xato chiqadi.",
    "Temperaturani °C dan K ga o'tkazishga urinib, ΔT ni noto'g'ri hisoblash: ΔT uchun ayirma yetarli.",
    "FIK ni 1 dan katta chiqarish: yo'qotishlar va yutilish η₀ ni tekshiring."
  ],
  "glossary": [
    {
      "t": "Quyosh kollektori",
      "d": "Quyosh nurlanishini issiqlikka aylantirib, suyuqlikni isituvchi qurilma."
    },
    {
      "t": "Nurlanish intensivligi I",
      "d": "Birlik yuzaga tushuvchi quyosh quvvati, W/m²."
    },
    {
      "t": "FIK η",
      "d": "Foydali issiqlikning kollektorga tushgan energiyaga nisbati."
    },
    {
      "t": "Issiqlik o'tkazuvchanlik λ",
      "d": "Materialning issiqlikni o'tkazish xossasi, W/(m·K); kichik λ yaxshi izolyator."
    },
    {
      "t": "Izolyatsiya qalinligi δ",
      "d": "Issiqlik yo'qotishni kamaytiruvchi qatlam qalinligi, m."
    }
  ],
  "questions": [
    "Quyosh kollektorining vazifasi nima?",
    "Kollektor effektivligi qanday aniqlanadi?",
    "Quyosh nurlanish intensivligining birligi qanday?",
    "Issiqlik izolyatsiyasining vazifasi nima?",
    "Izolyatsiya qalinligi oshganda issiqlik yo'qotilishi qanday o'zgaradi?",
    "Nima uchun η = f(δ) bog'lanishi chiziqli bo'lmaydi?",
    "Kollektorlarda qaysi izolyatsiya materiallaridan foydalanish mumkin?",
    "Issiqlik o'tkazuvchanlik λ nima va uning birligi qanday?",
    "Bino tomiga kollektor o'rnatishda qaysi omillar FIK ga ta'sir qiladi?",
    "Izolyatsiyaning optimal qalinligi nimaga qarab tanlanadi?"
  ],
  "quiz": [
    {
      "q": "Quyosh nurlanish intensivligining birligi qaysi?",
      "options": [
        "J/kg",
        "W/K",
        "W/m²",
        "K/m"
      ],
      "answer": 2
    },
    {
      "q": "Kollektor FIK formulasi qaysi?",
      "options": [
        "η = m·c·ΔT / (I·A·t)",
        "η = I·A·t / (m·c·ΔT)",
        "η = m·c / ΔT",
        "η = I / A"
      ],
      "answer": 0
    },
    {
      "q": "Izolyatsiya qalinligi ortsa issiqlik yo'qotilishi...",
      "options": [
        "Ortadi",
        "O'zgarmaydi",
        "Nolga teng bo'ladi",
        "Kamayadi"
      ],
      "answer": 3
    },
    {
      "q": "Izolyatsiya uchun qanday λ afzal?",
      "options": [
        "Katta",
        "Kichik",
        "Hech farqi yo'q",
        "Cheksiz"
      ],
      "answer": 1
    },
    {
      "q": "Energiya balansi qanday yoziladi?",
      "options": [
        "Q_quyosh = Q_f − Q_yo'q",
        "Q_f = Q_quyosh + Q_yo'q",
        "Q_quyosh = Q_f + Q_yo'q",
        "Q_yo'q = Q_f"
      ],
      "answer": 2
    },
    {
      "q": "I = 500 W/m², A = 2 m², t = 100 s bo'lsa, tushgan energiya qancha?",
      "options": [
        "1000 J",
        "10 000 J",
        "1 000 000 J",
        "100 000 J"
      ],
      "answer": 3
    },
    {
      "q": "Qaysi izolyatsiya materiali yaxshiroq?",
      "options": [
        "λ si katta bo'lgan",
        "λ si kichik bo'lgan",
        "Zichligi eng katta bo'lgan",
        "Eng yupqa bo'lgan"
      ],
      "answer": 1
    },
    {
      "q": "η(δ) grafigida δ ortgan sari o'sish nima uchun sekinlashadi?",
      "options": [
        "Yo'qotish δ ga teskari proporsional",
        "Yo'qotish δ ga to'g'ri proporsional",
        "Quyosh intensivligi kamayadi",
        "Suv massasi kamayadi"
      ],
      "answer": 0
    }
  ],
  "tasks": [
    {
      "q": "Quyosh kollektori yuzasi 2 m², nurlanish intensivligi 800 W/m². 600 s davomida kollektorga qancha energiya tushadi? Javobni megajoulda kiriting.",
      "answer": 0.96,
      "unit": "MJ",
      "tol": 0.03,
      "hint": "Q = I·A·t.",
      "solution": "Q = 800 · 2 · 600 = 960 000 J = 0,96 MJ."
    },
    {
      "q": "5 kg suv (c = 4200 J/(kg·K)) 20 °C dan 44 °C gacha isidi. Kollektorga 0,96 MJ energiya tushgan bo'lsa, FIK η necha foiz?",
      "answer": 52.5,
      "unit": "%",
      "tol": 0.03,
      "hint": "η = m·c·ΔT / Q.",
      "solution": "Q_f = 5·4200·24 = 504 000 J; η = 504 000 / 960 000 = 0,525 = 52,5 %."
    },
    {
      "q": "Kollektor korpusi izolyatsiyasi: λ = 0,04 W/(m·K), yuza A = 2 m², qalinlik δ = 30 mm, temperatura farqi ΔT = 25 K. 600 s davomida yo'qotilgan issiqlik necha kJ?",
      "answer": 40,
      "unit": "kJ",
      "tol": 0.03,
      "hint": "Q = λ·A·ΔT·t/δ, δ ni metrga o'tkazing.",
      "solution": "Q = 0,04·2·25·600 / 0,03 = 40 000 J = 40 kJ."
    },
    {
      "q": "Izolyatsiya funksiyasi η(δ) = η₀ − λ·ΔT/(I·δ). Agar η₀ = 0,85, λ = 0,04 W/(m·K), ΔT = 25 K, I = 800 W/m², δ = 50 mm bo'lsa, η necha foiz?",
      "answer": 82.5,
      "unit": "%",
      "tol": 0.03,
      "hint": "Avval λΔT/(Iδ), δ = 0,05 m.",
      "solution": "λΔT/(Iδ) = 1/(40) = 0,025; η = 0,85 − 0,025 = 0,825 = 82,5 %."
    }
  ],
  "conclusion": "Tajribada kollektor samaradorligi izolyatsiya qalinligiga bog'liqligi aniqlandi: qalinlik ortishi bilan yo'qotish kamayib η ortadi, ammo ma'lum qalinlikdan keyin o'sish sekinlashadi. Shu sababli amalda iqtisodiy jihatdan optimal qalinlik tanlanadi. Natijalar tom ustidagi kollektorlar va bino tashqi devorlari izolyatsiyasini loyihalashda foydalaniladi.",
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
