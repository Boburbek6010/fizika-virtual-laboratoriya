export default {
  id: 18,
  slug: 'linza-kamchiliklari',
  title: 'Linzaning kamchiliklarini o\'rganish',
  category: 'Optika va yadro',
  emoji: '🔍',
  short: 'Sferik va xromatik aberratsiyalarni virtual tajribada kuzatish va ularni kamaytirish usullarini tahlil qilish.',
  aim: [
    'Real linzadagi optik nuqsonlarni kuzatish',
    'Sferik aberratsiyaning diafragmaga bog\'liqligini o\'rganish',
    'Xromatik aberratsiyani Δf = |f_q − f_k| orqali miqdoriy baholash',
    'Aberratsiyalarni kamaytirish usullarini tahlil qilish',
  ],
  equipment: [
    'Yorug\'lik manbai',
    'Optik taglik',
    'Yig\'uvchi linza',
    'Ekran',
    'O\'zgaruvchan diafragma',
    'Rangli filtrlar (qizil, yashil, ko\'k)',
  ],
  theory: [
    "Ideal linza bir nuqtadan chiqqan nurlarni bir nuqtaga yig'ishi kerak, ammo haqiqiy linzalarda geometrik va dispersion xatolar — aberratsiyalar mavjud. Ular tasvir sifatini pasaytiradi va o'lchash asboblari aniqligini cheklaydi.",
    "Yupqa linzaning fokus masofasi 1/f = (n−1)(1/R₁+1/R₂) formulasi bilan topiladi. Ikki tomonlama simmetrik qavariq linza uchun R₁ = R₂ = R bo'lib, f = R/(2(n−1)). Demak, n ortsa f kamayadi.",
    "Dispersiya tufayli sindirish ko'rsatkichi n to'lqin uzunligiga bog'liq: ko'k nur uchun n katta, qizil nur uchun kichik. Natijada ko'k nurning fokusi qizilnikidan linzaga yaqin joylashadi, bu xromatik aberratsiya Δf = |f_q − f_k| ni beradi.",
    "Sferik aberratsiya linzaning chekka qismlari nurlarni markaziy qismlarga qaraganda kuchliroq sindirishidan kelib chiqadi. Taxminan Δf_sf ≈ h²/f: h ikki baravar ortsa, aberratsiya to'rt baravar ortadi.",
    "Sferik aberratsiyani diafragmani toraytirish orqali kamaytirish mumkin, ammo tasvir yorqinligi pasayadi. Xromatik aberratsiya turli shisha navlaridan yig'ilgan akromat linzalar bilan tuzatiladi.",
    "Qurilishdagi optik asboblar — nivelir, teodolit, kamera va lazer skanerlari — aniqlik uchun aberratsiyasi kamaytirilgan ob'ektivlardan foydalanadi. Muhandis asbob pasportidagi xatoliklarni hisobga olishi kerak."
  ],
  formulas: [
    { name: 'Yupqa linza fokusi', expr: '1/f = (n − 1)·(1/R₁ + 1/R₂)', note: 'R₁, R₂ — sirt egrilik radiuslari (ikki tomonlama qavariq linza)' },
    { name: 'Xromatik aberratsiya', expr: 'Δf = |f_q − f_k|', note: 'qizil va ko\'k nurlar fokuslari farqi' },
    { name: 'Sferik aberratsiya (taxminiy)', expr: 'Δf_sf ≈ h² / f', note: 'h — nur balandligi (diafragma yarim diametri)' },
  ],
  procedure: [
    "Virtual linzaning sirt egrilik radiusi R ni o'rnating (masalan, 20,5 sm).",
    "Shishaning qizil va ko'k nurlar uchun sindirish ko'rsatkichlari n_q va n_k ni kiriting.",
    "Qizil nur fokusi f_q = R/(2(n_q−1)) ni hisoblang.",
    "Ko'k nur fokusi f_k = R/(2(n_k−1)) ni hisoblang.",
    "Xromatik aberratsiya Δf = |f_q − f_k| ni toping va simulyatsiya bilan solishtiring.",
    "Diafragma yarim diametri h ni o'rnating va sferik aberratsiya Δf_sf ≈ h²/f ni hisoblang.",
    "h ni 5, 10, 15, 20 mm qilib o'zgartiring va Δf_sf ning h² ga proporsionalligini tekshiring.",
    "n_k va n_q farqini oshirib, xromatik aberratsiya qanday o'zgarishini kuzating.",
    "R ni o'zgartirib, fokus va aberratsiyalar o'zgarishini jadvalga yozing.",
    "Δf_sf(h) grafigini tuzing va aberratsiyani kamaytirish usullari haqida xulosa yozing."
  ],
  questions: [
    "Yupqa linza fokusi qaysi formula bilan topiladi?",
    "Aberratsiya nima va nega paydo bo'ladi?",
    "Xromatik aberratsiyaning fizik sababi nima?",
    "Qaysi rangdagi nur linzaga yaqinroq fokuslanadi va nima uchun?",
    "Sferik aberratsiya qanday paydo bo'ladi?",
    "Diafragmani toraytirish tasvirga qanday ta'sir qiladi?",
    "Akromat linza qanday tuziladi?",
    "Δf_sf ≈ h²/f formulasidan h ikki baravar ortsa nima bo'ladi?",
    "Nivelir va teodolitda aberratsiyalar nima uchun muhim?",
    "Lazerli asboblarda linza nur sifatiga qanday ta'sir qiladi?"
  ],
  quiz: [
    {
      "q": "Xromatik aberratsiyaning sababi nima?",
      "options": [
        "Sindirish ko'rsatkichining to'lqin uzunligiga bog'liqligi",
        "Linza massasi",
        "Havo bosimi",
        "Linza harorati"
      ],
      "answer": 0
    },
    {
      "q": "Oddiy shishada qaysi rang nuri linzaga yaqinroq fokuslanadi?",
      "options": [
        "Qizil",
        "Sariq",
        "Ko'k",
        "Yashil"
      ],
      "answer": 2
    },
    {
      "q": "Sferik aberratsiya qaysi kattalikka kuchli bog'liq?",
      "options": [
        "Nur rangiga",
        "Nur balandligi h ga",
        "Tok kuchiga",
        "Vaqtga"
      ],
      "answer": 1
    },
    {
      "q": "Sferik aberratsiyani kamaytirish usuli:",
      "options": [
        "Diafragmani kattalashtirish",
        "Linzani qizdirish",
        "Diafragmani toraytirish",
        "Nur intensivligini oshirish"
      ],
      "answer": 2
    },
    {
      "q": "Simmetrik ikki tomonlama linza uchun f ifodasi:",
      "options": [
        "R(n−1)",
        "2R/(n−1)",
        "R/(n+1)",
        "R/(2(n−1))"
      ],
      "answer": 3
    },
    {
      "q": "n ortsa fokus masofasi f:",
      "options": [
        "Kamayadi",
        "Ortadi",
        "O'zgarmaydi",
        "Cheksiz bo'ladi"
      ],
      "answer": 0
    },
    {
      "q": "Δf_sf ≈ h²/f da h ikki marta ortsa Δf_sf:",
      "options": [
        "2 marta ortadi",
        "4 marta ortadi",
        "2 marta kamayadi",
        "O'zgarmaydi"
      ],
      "answer": 1
    },
    {
      "q": "Xromatik aberratsiyani tuzatuvchi linza turi:",
      "options": [
        "Yupqa oddiy linza",
        "Sferik ko'zgu",
        "Akromat linza",
        "Tekis oyna"
      ],
      "answer": 2
    }
  ],
  conclusion: "Yupqa linza fokusi f = R/(2(n−1)) formulasi bilan topildi va qizil hamda ko'k nurlar fokuslari farqi (xromatik aberratsiya) hisoblandi. Sferik aberratsiya Δf_sf ≈ h²/f diafragma yarim diametrining kvadratiga proporsional ekani aniqlandi. Diafragmani toraytirish va akromat linzalar kamchiliklarni kamaytiradi. Bu optik o'lchash asboblari aniqligini baholashda muhim.",
  learn: [
    "Yupqa linza fokus masofasini 1/f = (n−1)(1/R₁+1/R₂) bo'yicha hisoblashni",
    "Xromatik aberratsiya (dispersiya sababli) mohiyatini",
    "Sferik aberratsiya va uning diafragmaga bog'liqligini",
    "Linza kamchiliklarini kamaytirish usullarini"
  ],
  civil: [
    "Nivelir va teodolit durbinlarida linza kamchiliklari o'lchash aniqligini pasaytiradi, shuning uchun murakkab ob'ektivlar ishlatiladi.",
    "Binolar va ko'priklar deformatsiyasini kuzatuvchi kameralar va lazer asboblarda aberratsiyani hisobga olish kerak.",
    "Lazerli masofa o'lchagich va skaner nuri linza orqali yo'naltiriladi; fokuslash sifati o'lchash masofasi va aniqligini belgilaydi.",
    "Binoning yorug'lik quvurlari va linzali qoplamalarida dispersiya rang tovlanishiga sabab bo'ladi."
  ],
  keyFact: "Oddiy shishada ko'k nurning sindirish ko'rsatkichi qizilnikidan kattaroq, shuning uchun ko'k nur linzaga yaqinroq fokuslanadi: bu xromatik aberratsiyaning asosiy sababidir.",
  mistakes: [
    "R ni sm da qo'yib, f ni metrda kutish: barcha uzunliklarni bitta birlikda (m) yozing.",
    "Diafragma h ni diametr bilan adashtirish: formulada h — nur balandligi (yarim diametr).",
    "Sferik va xromatik aberratsiyani bir narsa deb o'ylash: biri nur balandligiga, ikkinchisi to'lqin uzunligiga bog'liq."
  ],
  glossary: [
    {
      "t": "Fokus masofasi",
      "d": "linza markazidan parallel nurlar yig'iladigan nuqtagacha masofa"
    },
    {
      "t": "Dispersiya",
      "d": "sindirish ko'rsatkichining to'lqin uzunligiga bog'liqligi"
    },
    {
      "t": "Xromatik aberratsiya",
      "d": "turli rangdagi nurlar turli nuqtada fokuslanishi"
    },
    {
      "t": "Sferik aberratsiya",
      "d": "linza chetidan o'tgan nurlar markazga yaqinroq fokuslanishi"
    },
    {
      "t": "Diafragma",
      "d": "linzaga tushuvchi nur dastasini cheklovchi teshik"
    }
  ],
  tasks: [
    {
      "q": "Ikki tomonlama qavariq simmetrik linza: R₁ = R₂ = 0,20 m, n = 1,5. Fokus masofasi f necha santimetr?",
      "answer": 20,
      "unit": "cm",
      "tol": 0.03,
      "hint": "1/f = (n−1)·2/R, f = R/(2(n−1)).",
      "solution": "f = 0,20/(2·0,5) = 0,20 m = 20 cm."
    },
    {
      "q": "R = 20,5 cm. Qizil nur uchun n = 1,513, ko'k nur uchun n = 1,532. Xromatik aberratsiya Δf = |f_q − f_k| necha santimetr?",
      "answer": 0.7136,
      "unit": "cm",
      "tol": 0.03,
      "hint": "f = R/(2(n−1)) ni ikkala nur uchun hisoblang.",
      "solution": "f_q = 20,5/(2·0,513) ≈ 19,98 cm; f_k = 20,5/(2·0,532) ≈ 19,27 cm; Δf ≈ 0.7136 cm."
    },
    {
      "q": "Fokusi f = 0,20 m bo'lgan linzada nur balandligi h = 12 mm. Sferik aberratsiya Δf_sf ≈ h²/f necha millimetr?",
      "answer": 0.72,
      "unit": "mm",
      "tol": 0.03,
      "hint": "h ni metrga o'tkazing: 0,012 m.",
      "solution": "Δf_sf = (0,012)²/0,20 = 7,2·10⁻⁴ m = 0,72 mm."
    },
    {
      "q": "Linza fokusi f = 25 cm, shisha n = 1,6, ikkala sirt radiusi bir xil. R necha santimetr (R = 2f(n−1))?",
      "answer": 30,
      "unit": "cm",
      "tol": 0.03,
      "hint": "1/f = (n−1)·2/R dan R ni toping.",
      "solution": "R = 2·25·0,6 = 30 cm."
    }
  ],
  sim: {
    intro: 'Linza radiusi, sindirish ko\'rsatkichlari va diafragmani o\'zgartiring (taxminiy model: ikki tomonlama qavariq yupqa linza).',
    inputs: [
      { id: 'R', label: 'Sirt egrilik radiusi R', unit: 'cm', min: 5, max: 40, step: 0.5, value: 20.5 },
      { id: 'nq', label: 'Qizil nur uchun n (650 nm)', unit: '', min: 1.4, max: 1.8, step: 0.001, value: 1.513 },
      { id: 'nk', label: 'Ko\'k nur uchun n (450 nm)', unit: '', min: 1.4, max: 1.8, step: 0.001, value: 1.532 },
      { id: 'h', label: 'Diafragma yarim diametri h', unit: 'mm', min: 1, max: 30, step: 1, value: 15 },
    ],
    compute: (v) => {
      const R = v.R / 100; // m
      const focus = (n) => R / (2 * (n - 1));
      const fq = focus(v.nq), fk = focus(v.nk);
      const df = Math.abs(fq - fk);
      const fm = (fq + fk) / 2;
      const h = v.h / 1000;
      const sph = h * h / fm;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const hh = (1 + 29 * i / 40) / 1000;
        pts.push([+(hh * 1000).toFixed(2), +(hh * hh / fm * 1000).toFixed(4)]);
      }
      return {
        results: [
          { label: 'Qizil nur fokusi f_q', value: fq * 100, unit: 'cm', digits: 4 },
          { label: 'Ko\'k nur fokusi f_k', value: fk * 100, unit: 'cm', digits: 4 },
          { label: 'Xromatik aberratsiya Δf', value: df * 100, unit: 'cm', digits: 3 },
          { label: 'Sferik aberratsiya Δf_sf ≈ h²/f', value: sph * 1000, unit: 'mm', digits: 3 },
        ],
        chart: {
          title: 'Sferik aberratsiyaning diafragmaga bog\'liqligi',
          xLabel: 'h, mm',
          yLabel: 'Δf_sf, mm',
          series: [
            { name: 'Δf_sf(h)', points: pts },
            { name: 'Joriy', points: [[v.h, sph * 1000]] },
          ],
        },
        note: v.nk > v.nq ? 'n_ko\'k > n_qizil, shuning uchun f_ko\'k < f_qizil (normal dispersiya).' : 'Diqqat: odatiy shishada n_ko\'k > n_qizil bo\'ladi.',
      };
    },
  },
};
