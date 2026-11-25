export default {
  "id": 14,
  "slug": "kirxgof-qonunlari",
  "title": "Kirxgof qonunlarini elektr zanjirida tekshirish",
  "category": "Elektr",
  "emoji": "🔌",
  "short": "Tarmoqlangan zanjirda toklar va kuchlanishlarni o'lchab, Kirxgofning birinchi va ikkinchi qonunlarini tekshirish.",
  "learn": [
    "Tugun va kontur tushunchalarini hamda Kirxgof qonunlarini qo'llashni",
    "Tarmoqlangan zanjirda toklarni hisoblashni",
    "Ampermetr va voltmetrni to'g'ri ulashni",
    "O'lchash xatoligini baholashni"
  ],
  "civil": [
    "Qurilish maydonidagi vaqtinchalik elektr taqsimot tarmog'ida tugunlarda toklar yig'indisi Kirxgofning birinchi qonuni bilan tekshiriladi.",
    "Uzun kabelda kuchlanish pasayishi U = I·R bo'yicha hisoblanadi va uskuna ish kuchlanishida ishlashi ta'minlanadi.",
    "Binoning elektr tarmog'ini loyihalashda har bir guruh avtomatining toki tugun balansidan tanlanadi.",
    "Elektr o'lchash ishlarida (ampermetr, mega-ommetr) zanjirga ulash qoidalarini bilish xavfsizlik uchun muhim."
  ],
  "keyFact": "Kirxgof qonunlari 1845 yilda yaratilgan va bugun ham eng murakkab elektr tarmoqlarini, shu jumladan binolarning taqsimot shchitlarini hisoblashning asosi bo'lib qoladi.",
  "aim": [
    "Tarmoqlangan zanjirda tok va kuchlanishlarni o'lchash",
    "Kirxgofning birinchi qonunini tajribada tekshirish",
    "Kirxgofning ikkinchi qonunini tajribada tekshirish",
    "Elektr zanjirlarini hisoblash ko'nikmasini shakllantirish"
  ],
  "equipment": [
    "Elektr manbalari E₁ va E₂",
    "O'zgaruvchan qarshiliklar R₁, R₂, R₃",
    "Ampermetrlar A₁, A₂, A₃",
    "Voltmetr",
    "Kalit va ulash simlari",
    "Virtual laboratoriya dasturi"
  ],
  "theory": [
    "Kirxgofning birinchi qonuni (tugunlar qonuni): tugunga kirayotgan toklar yig'indisi undan chiqayotgan toklar yig'indisiga teng, ΣI = 0. U zaryadning saqlanish qonuniga asoslanadi, chunki tugunda zaryad to'planmaydi.",
    "Kirxgofning ikkinchi qonuni (konturlar qonuni): yopiq konturda EYuK larning algebraik yig'indisi kuchlanish tushuvlarining algebraik yig'indisiga teng, ΣE = ΣI·R. U energiyaning saqlanish qonuniga asoslanadi.",
    "Zanjir hisoblanayotganda avval toklarning ixtiyoriy yo'nalishi va kontur aylanish yo'nalishi tanlanadi. Agar yo'nalish bilan mos kelsa, EYuK va tok musbat, aks holda manfiy olinadi.",
    "Ikki manbali zanjirda tenglamalar tizimi tuziladi. Misol uchun, B tugun yerga ulangan bo'lsa, A tugun potensiali U = (E₁/R₁ + E₂/R₂)/(1/R₁ + 1/R₂ + 1/R₃) formulasi bilan topiladi va undan I₁, I₂, I₃ aniqlanadi.",
    "Ampermetr zanjirga ketma-ket, voltmetr esa o'lchanayotgan qismga parallel ulanadi. Ampermetrning qarshiligi kichik, voltmetrniki juda katta bo'lishi o'lchash xatoligini kamaytiradi.",
    "Qurilish muhandisligida Kirxgof qonunlari obyektning vaqtinchalik va doimiy elektr tarmoqlarini hisoblashda, kabel kesimini tanlashda va kuchlanish pasayishini baholashda qo'llaniladi."
  ],
  "formulas": [
    {
      "name": "Birinchi qonun",
      "expr": "ΣI = 0;  I₁ + I₂ = I₃",
      "note": "tugun uchun"
    },
    {
      "name": "Ikkinchi qonun",
      "expr": "ΣE = ΣI·R",
      "note": "yopiq kontur uchun"
    },
    {
      "name": "Tugun potensiali",
      "expr": "U = (E₁/R₁ + E₂/R₂) / (1/R₁ + 1/R₂ + 1/R₃)",
      "note": "B tugun yerga ulangan"
    },
    {
      "name": "Nisbiy xatolik",
      "expr": "ε = |I₁ + I₂ − I₃| / I₃ · 100%",
      "note": ""
    }
  ],
  "procedure": [
    "Virtual laboratoriya dasturini ishga tushiring.",
    "Manbalar EYuK E₁, E₂ va qarshiliklar R₁, R₂, R₃ ni tanlang.",
    "Sxemadagi tugunlarni (A, B) va konturlarni belgilab, toklarning yo'nalishini tanlang.",
    "Ampermetrlarni tegishli tarmoqlarga ketma-ket, voltmetrni parallel ulang.",
    "Kalitni yopib, toklar I₁, I₂, I₃ ni o'lchang va jadvalga qo'shing.",
    "Tugun uchun I₁ + I₂ bilan I₃ ni taqqoslang (birinchi qonun).",
    "Kontur uchun E − ΣIR ni hisoblang (ikkinchi qonun).",
    "Nisbiy xatolik ε = |I₁ + I₂ − I₃|/I₃·100% ni hisoblang.",
    "Qarshiliklarni o'zgartirib, tajribani 3–5 marta takrorlang.",
    "I₃ = f(R₃) grafigini tahlil qilib, xulosa yozing."
  ],
  "mistakes": [
    "Tok yo'nalishini noto'g'ri tanlash: natijada tok manfiy chiqadi. Bu xato emas, haqiqiy yo'nalish teskari ekanini bildiradi.",
    "Ampermetrni parallel ulash: qisqa tutashuv xavfi tug'iladi. Ampermetr doimo ketma-ket ulanadi.",
    "Konturni aylanish yo'nalishiga qarama-qarshi EYuK ning ishorasini hisobga olmaslik.",
    "Qarshilikni kΩ da, tokni mA da olib birliklarni aralashtirish: hisobdan oldin hammasini V, A, Ω ga o'tkazing."
  ],
  "glossary": [
    {
      "t": "Tugun",
      "d": "Uch yoki undan ortiq o'tkazgich tutashgan nuqta."
    },
    {
      "t": "Kontur",
      "d": "Zanjirning ixtiyoriy yopiq yo'li."
    },
    {
      "t": "EYuK",
      "d": "Manbaning elektr yurituvchi kuchi, birligi volt (V)."
    },
    {
      "t": "Kuchlanish tushuvi",
      "d": "Qarshilikdagi kuchlanish U = I·R."
    },
    {
      "t": "Shunt/tarmoq",
      "d": "Zanjirning ikki tugun orasidagi alohida shoxobchasi."
    }
  ],
  "questions": [
    "Elektr zanjirining tuguni deb nimaga aytiladi?",
    "Kontur nima?",
    "Kirxgofning birinchi qonunini ta'riflang.",
    "Birinchi qonun qaysi saqlanish qonuniga asoslangan?",
    "Kirxgofning ikkinchi qonunini yozing.",
    "Ampermetr va voltmetr zanjirga qanday ulanadi?",
    "Kirxgof qonunlari elektr ta'minoti tizimlarini hisoblashda qanday ahamiyatga ega?",
    "Tok manfiy chiqsa, bu nimani bildiradi?",
    "Uzun kabelda kuchlanish pasayishi qanday hisoblanadi va nima uchun muhim?",
    "Nima uchun voltmetrning qarshiligi katta, ampermetrniki kichik bo'lishi kerak?"
  ],
  "quiz": [
    {
      "q": "Kirxgofning birinchi qonuni nimaga asoslangan?",
      "options": [
        "Energiyaning saqlanishiga",
        "Impulsning saqlanishiga",
        "Zaryadning saqlanish qonuniga",
        "Om qonuniga"
      ],
      "answer": 2
    },
    {
      "q": "Tugunda toklar yig'indisi (algebraik) nimaga teng?",
      "options": [
        "Nolga",
        "EYuK ga",
        "Qarshilikka",
        "Kuchlanishga"
      ],
      "answer": 0
    },
    {
      "q": "Ikkinchi qonun qaysi saqlanish qonuniga asoslangan?",
      "options": [
        "Zaryadning saqlanishiga",
        "Massaning saqlanishiga",
        "Impulsning saqlanishiga",
        "Energiyaning saqlanishiga"
      ],
      "answer": 3
    },
    {
      "q": "Ampermetr zanjirga qanday ulanadi?",
      "options": [
        "Parallel",
        "Ketma-ket",
        "Aralash",
        "Ulanmaydi"
      ],
      "answer": 1
    },
    {
      "q": "Konturda ΣE − ΣIR nimaga teng?",
      "options": [
        "Birga",
        "Tokka",
        "Nolga",
        "Quvvatga"
      ],
      "answer": 2
    },
    {
      "q": "Tugunda 3 A va 2 A kiryapti, 1 A chiqyapti. Uchinchi chiqayotgan tok necha A?",
      "options": [
        "6 A",
        "5 A",
        "1 A",
        "4 A"
      ],
      "answer": 3
    },
    {
      "q": "Voltmetr o'lchanayotgan qismga qanday ulanadi?",
      "options": [
        "Ketma-ket",
        "Parallel",
        "Aralash",
        "Ulanmaydi"
      ],
      "answer": 1
    },
    {
      "q": "Tok yo'nalishi to'g'ri tanlanmagan bo'lsa, hisob natijasida tok qanday chiqadi?",
      "options": [
        "Manfiy",
        "Nolga teng",
        "Cheksiz",
        "Kompleks"
      ],
      "answer": 0
    }
  ],
  "tasks": [
    {
      "q": "Tugunga 2,5 A va 1,8 A tok kirmoqda, 1,2 A tok chiqmoqda. Tugundan chiqayotgan ikkinchi tokning qiymati necha A?",
      "answer": 3.1,
      "unit": "A",
      "tol": 0.03,
      "hint": "Kirayotgan toklar yig'indisi = chiqayotganlar yig'indisi.",
      "solution": "I = 2,5 + 1,8 − 1,2 = 3,1 A."
    },
    {
      "q": "Bir konturda ikki manba ketma-ket qarama-qarshi ulangan: E₁ = 12 V, E₂ = 6 V, umumiy qarshilik R₁ + R₂ = 10 + 20 = 30 Ω. Konturdagi tok necha A?",
      "answer": 0.2,
      "unit": "A",
      "tol": 0.03,
      "hint": "I = (E₁ − E₂)/(R₁ + R₂).",
      "solution": "I = (12 − 6)/30 = 0,2 A."
    },
    {
      "q": "Sxemada E₁ = 12 V, E₂ = 6 V, R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω (R₃ umumiy shoxobcha, manbalar parallel). R₃ dagi tok I₃ necha A?",
      "answer": 0.2727,
      "unit": "A",
      "tol": 0.03,
      "hint": "U = (E₁/R₁ + E₂/R₂)/(1/R₁ + 1/R₂ + 1/R₃), so'ng I₃ = U/R₃.",
      "solution": "U = (1,2 + 0,3)/(0,1 + 0,05 + 0,0333) = 8,18 V; I₃ = 8,18/30 ≈ 0,273 A."
    },
    {
      "q": "Qurilish maydonida mis kabel (ρ = 1,7·10⁻⁸ Ω·m) bir tomonga 50 m, kesimi 2,5 mm²; ketma-ket sim va qaytish simi, jami uzunlik 100 m. Tok 16 A. Kabeldagi kuchlanish tushuvi necha V?",
      "answer": 10.88,
      "unit": "V",
      "tol": 0.03,
      "hint": "R = ρ·L/S, S ni m² ga o'tkazing (2,5·10⁻⁶ m²).",
      "solution": "R = 1,7·10⁻⁸·100/2,5·10⁻⁶ = 0,68 Ω; U = 16·0,68 = 10,88 V."
    }
  ],
  "conclusion": "Tajribada tugundagi toklar uchun I₁ + I₂ = I₃ bajarildi, yopiq konturlarda EYuK va kuchlanish tushuvlari yig'indisi tengligi tasdiqlandi. Kichik farq o'lchash xatoliklari bilan bog'liq. Kirxgof qonunlari qurilish maydonidagi elektr tarmoqlarini hisoblash va kabel kesimini tanlashda amaliy ahamiyatga ega.",
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
