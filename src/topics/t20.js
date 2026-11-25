export default {
  id: 20,
  slug: 'radioaktiv-nurlanish',
  title: 'Radioaktiv nurlanishni qayd etish',
  category: 'Optika va yadro',
  emoji: '☢️',
  short: 'Geyger–Myuller hisoblagichi bilan nurlanishning masofaga va to\'siq materialiga bog\'liqligini o\'rganish.',
  aim: [
    'Radioaktiv nurlanishni virtual tajribada qayd etish',
    'Geyger–Myuller hisoblagichining ishlash prinsipini o\'rganish',
    'Sanash tezligi va fon nurlanishini hisobga olish',
    'Nurlanishning masofa va to\'siq qalinligiga bog\'liqligini aniqlash',
  ],
  equipment: [
    'Radioaktiv manba',
    'Geyger–Myuller hisoblagichi',
    'Raqamli impuls hisoblagich',
    'Sekundomer',
    'Masofa shkalasi',
    'Ekranlovchi materiallar (qog\'oz, plastik, metall, qo\'rg\'oshin)',
  ],
  theory: [
    "Radioaktiv nurlanish (alfa, beta, gamma) ionlovchi ta'sirga ega bo'lib, uni sezgilar bilmaydi; shuning uchun Geyger–Myuller hisoblagichi kabi detektorlar ishlatiladi. Har bir ionlovchi zarra gaz razryadi va bitta elektr impulsi hosil qiladi.",
    "Sanash tezligi n = N/t (imp/s) manba va detektorning o'zaro joylashuvini ifodalaydi. Hisoblagich manbasiz ham fon nurlanishni (kosmik nurlar, tabiiy radionuklidlar) qayd etadi, shuning uchun sof tezlik n_s = n − n_fon ga teng.",
    "Nuqtaviy manba uchun nurlanish intensivligi masofa kvadratiga teskari proporsional: n_s(r) = n₀(r₀/r)². Masofa ikki baravar ortsa tezlik to'rt baravar kamayadi. Bu eng oddiy himoya usulidir.",
    "To'siq (beton, qo'rg'oshin, po'lat) nurlanishni eksponensial susaytiradi: n = n₀·e^(−μx). μ materialning zichligi va nurlanish turiga bog'liq. Betonni nuqsonlarga tekshirishda shu qonun asosida yarim qatlam qalinligi baholanadi.",
    "Radioaktiv parchalanish qonuni N = N₀·e^(−λt), yarim yemirilish davri T½ = ln2/λ, aktivlik A = λN (birligi Bq). Parchalanish tasodifiy bo'lgani uchun sanash Puasson taqsimotiga bo'ysunadi va nisbiy xato 1/√N kabi kamayadi.",
    "Qurilishda gamma-defektoskopiya beton va payvand choklarni buzmasdan tekshiradi. Xavfsizlik uchta asosda: vaqtni qisqartirish, masofani oshirish, to'siq qo'yish. Foydalanilgan hisoblash me'yorlar va dozimetrik nazorat bilan tasdiqlanadi."
  ],
  formulas: [
    { name: 'Sanash tezligi', expr: 'n = N / t', note: 'N — impulslar soni, t — vaqt (s)' },
    { name: 'Sof sanash tezligi', expr: 'n_s = n − n_fon', note: 'fon nurlanishi ayiriladi' },
    { name: 'Masofa qonuni', expr: 'n_s(r) = n₀·(r₀/r)²', note: 'nuqtaviy manba uchun' },
    { name: 'To\'siqda susayish', expr: 'n = n₀·e^(−μx)', note: 'μ — susayish koeffitsiyenti (m⁻¹), x — qalinlik (m)' },
    { name: 'Parchalanish qonuni', expr: 'N = N₀·e^(−λt),  T½ = ln2 / λ', note: 'aktivlik A = λN, birligi Bq' },
  ],
  procedure: [
    "Hisoblagichni yoqing va manbasiz fon sanash tezligi n_fon ni t = 60 s da o'lchang.",
    "Manbani hisoblagichdan r₀ = 5 sm masofaga qo'ying va sanash tezligini o'lchang (n₀).",
    "Sof tezlikni n_s = n − n_fon deb hisoblang.",
    "Masofani 5, 10, 15, 20, 30 sm qilib o'zgartiring; har biri uchun N va n ni yozing.",
    "n_s(r) grafigini tuzing va n_s·r² ≈ const ekanini tekshiring.",
    "Manba va hisoblagich orasiga to'siq plastinkalar qo'yib, x ni oshiring va n ni o'lchang.",
    "ln(n_s) ning x ga bog'liqligidan μ ni toping (chiziq qiyaligi −μ).",
    "Sanash vaqtini 10, 60, 300 s qilib o'zgartirib, nisbiy xato 1/√N kamayishini ko'ring.",
    "Fon bilan manba signalini solishtiring va qayd etish ishonchliligi haqida xulosa qiling.",
    "Parchalanish qonuni bo'yicha manba aktivligining vaqt bo'yicha kamayishini hisoblang va natijalarni jadvalga kiriting."
  ],
  questions: [
    "Ionlovchi nurlanish turlarini sanab bering.",
    "Geyger hisoblagichi qanday ishlaydi?",
    "Fon nurlanish nima va nima uchun ayiriladi?",
    "Masofa qonuni qanday ifodalanadi va uning amaliy ahamiyati nima?",
    "To'siqda nurlanish qanday susayadi?",
    "Yarim yemirilish davri nima va qanday topiladi?",
    "Aktivlik nima va birligi qaysi?",
    "Nima uchun sanash vaqti uzoq bo'lsa natija aniqroq bo'ladi?",
    "Qurilishda gamma-defektoskopiya qanday maqsadda qo'llanadi?",
    "Radiatsiya xavfsizligining uchta asosiy prinsipi qaysilar?"
  ],
  quiz: [
    {
      "q": "Sanash tezligi qaysi formula bilan topiladi?",
      "options": [
        "n = N/t",
        "n = N·t",
        "n = t/N",
        "n = N + t"
      ],
      "answer": 0
    },
    {
      "q": "Sof sanash tezligi qanday topiladi?",
      "options": [
        "n_s = n + n_fon",
        "n_s = n − n_fon",
        "n_s = n·n_fon",
        "n_s = n/n_fon"
      ],
      "answer": 1
    },
    {
      "q": "Masofa ikki baravar ortsa nuqtaviy manba tezligi:",
      "options": [
        "2 marta kamayadi",
        "2 marta ortadi",
        "4 marta kamayadi",
        "O'zgarmaydi"
      ],
      "answer": 2
    },
    {
      "q": "Aktivlikning SI birligi:",
      "options": [
        "Gray",
        "Zivert",
        "Kyuri",
        "Bekkerel"
      ],
      "answer": 3
    },
    {
      "q": "To'siqda nurlanish qanday qonun bilan susayadi?",
      "options": [
        "Eksponensial",
        "Chiziqli",
        "Kvadratik",
        "Logarifmik o'sish"
      ],
      "answer": 0
    },
    {
      "q": "T½ = ... formulasi:",
      "options": [
        "λ/ln2",
        "1/λ²",
        "ln2/λ",
        "λ·ln2"
      ],
      "answer": 2
    },
    {
      "q": "Hisoblagich 4 yarim davrdan keyin aktivlik boshlang'ichning qancha qismini tashkil etadi?",
      "options": [
        "1/4",
        "1/8",
        "1/2",
        "1/16"
      ],
      "answer": 3
    },
    {
      "q": "Radiatsiya xavfsizligi prinsiplariga kirmaydi:",
      "options": [
        "Vaqtni qisqartirish",
        "Masofani oshirish",
        "To'siq qo'yish",
        "Manbani qizdirish"
      ],
      "answer": 3
    }
  ],
  conclusion: "Hisoblagich yordamida sanash tezligi n = N/t aniqlandi va fon ayirilib sof tezlik topildi. Nuqtaviy manba uchun 1/r² qonuni va to'siqda e^(−μx) susayish tasdiqlandi. Parchalanish qonuni yarim yemirilish davri orqali aktivlik kamayishini beradi. Bu qonunlar beton nazorati va radiatsiya xavfsizligida qo'llanadi.",
  learn: [
    "Geyger hisoblagichi bilan impulslar sonini qayd etishni",
    "Sanash tezligi n = N/t va fonni hisobga olishni",
    "Masofa qonuni (1/r²) va to'siqda susayish e^(−μx) ni",
    "Parchalanish qonuni va yarim yemirilish davrini"
  ],
  civil: [
    "Betonning nuqsonlari va armatura joylashuvi gamma-nurlar yordamida buzmasdan nazorat qilinadi; nurlanish qalinlikka qarab susayadi.",
    "Qurilish maydonida radiatsiya xavfsizligi masofa, to'siq va vaqt prinsiplariga asoslanadi: manbadan uzoqroq, qalinroq to'siq, qisqaroq vaqt.",
    "Qurilish materiallari (granit, shlak, beton) tabiiy radioaktivligi dozimetr bilan tekshiriladi, me'yordan oshgan materiallar ishlatilmaydi.",
    "Payvand choklarni rentgen va gamma-defektoskopiya bilan tekshirishda manba atrofida himoya zonasi belgilanadi."
  ],
  keyFact: "Nuqtaviy manba nurlanishi masofa ikki baravar ortganda to'rt baravar kamayadi, shuning uchun radiatsiya xavfsizligida eng arzon himoya — manbadan uzoqlashishdir.",
  mistakes: [
    "Fonni ayirmaslik: sof tezlik n_s = n − n_fon bo'lishi kerak.",
    "Masofani manba markazidan emas, korpusidan o'lchash: r markazdan hisoblanadi.",
    "Qisqa vaqt o'lchash: impulslar tasodifiy, shuning uchun sanash vaqtini uzaytirib, o'rtacha oling."
  ],
  glossary: [
    {
      "t": "Geyger hisoblagichi",
      "d": "ionlovchi nurlanishdan impuls hosil qiluvchi gaz razryadli detektor"
    },
    {
      "t": "Fon nurlanish",
      "d": "manbasiz mavjud tabiiy radiatsiya, hisoblagich uni ham qayd etadi"
    },
    {
      "t": "Aktivlik",
      "d": "1 sekundda parchalanayotgan yadrolar soni, birligi Bekkerel (Bq)"
    },
    {
      "t": "Yarim yemirilish davri",
      "d": "yadrolarning yarmi parchalanadigan vaqt T½ = ln2/λ"
    },
    {
      "t": "Susayish koeffitsiyenti μ",
      "d": "to'siq nurlanishni susaytirish qobiliyati, birligi m⁻¹"
    }
  ],
  tasks: [
    {
      "q": "Hisoblagich t = 60 s da N = 1800 impuls qayd etdi, fon tezligi 0,5 imp/s. Sof sanash tezligi n_s necha imp/s?",
      "answer": 29.5,
      "unit": "imp/s",
      "tol": 0.03,
      "hint": "n = N/t, so'ng fonni ayiring.",
      "solution": "n = 1800/60 = 30 imp/s; n_s = 30 − 0,5 = 29,5 imp/s."
    },
    {
      "q": "5 sm masofada sanash tezligi n₀ = 200 imp/s. Masofa qonuni n_s = n₀(r₀/r)² bo'yicha r = 20 sm da n_s necha imp/s?",
      "answer": 12.5,
      "unit": "imp/s",
      "tol": 0.03,
      "hint": "(5/20)² = 1/16.",
      "solution": "n_s = 200·(1/4)² = 200/16 = 12,5 imp/s."
    },
    {
      "q": "Beton to'siq uchun μ = 100 m⁻¹, qalinligi x = 10 mm. Tushayotgan tezlik n₀ = 400 imp/s. To'siqdan keyin n = n₀·e^(−μx) necha imp/s?",
      "answer": 147.2,
      "unit": "imp/s",
      "tol": 0.03,
      "hint": "μx = 1; x ni metrga o'tkazing.",
      "solution": "n = 400·e^(−1) ≈ 147.2 imp/s."
    },
    {
      "q": "Manba aktivligi A₀ = 640 kBq, yarim yemirilish davri T½ = 5 kun. 15 kundan keyin aktivlik necha kBq?",
      "answer": 80,
      "unit": "kBq",
      "tol": 0.03,
      "hint": "15 kun = 3 ta yarim davr: A = A₀/2³.",
      "solution": "A = 640/2³ = 640/8 = 80 kBq."
    }
  ],
  sim: {
    intro: 'Masofa, to\'siq va o\'lchash vaqtini o\'zgartiring; hisoblagich ko\'rsatishi avtomatik hisoblanadi.',
    inputs: [
      { id: 'n0', label: 'Manba tezligi 5 sm da (n₀)', unit: 'imp/s', min: 10, max: 1000, step: 10, value: 200 },
      { id: 'r', label: 'Manbadan masofa r', unit: 'cm', min: 5, max: 50, step: 1, value: 10 },
      { id: 'x', label: 'To\'siq qalinligi x', unit: 'mm', min: 0, max: 20, step: 0.5, value: 0 },
      { id: 'mu', label: 'To\'siq susayish koeffitsiyenti μ', unit: 'm⁻¹', min: 0, max: 500, step: 5, value: 100 },
      { id: 'nb', label: 'Fon tezligi', unit: 'imp/s', min: 0, max: 5, step: 0.1, value: 0.5 },
      { id: 't', label: 'O\'lchash vaqti t', unit: 's', min: 10, max: 300, step: 10, value: 60 },
    ],
    compute: (v) => {
      const r0 = 5;
      const att = Math.exp(-v.mu * v.x / 1000);
      const ns = v.n0 * (r0 / v.r) * (r0 / v.r) * att;
      const n = ns + v.nb;
      const N = n * v.t;
      const pts = [], ptsB = [];
      for (let i = 0; i <= 40; i++) {
        const rr = 5 + 45 * i / 40;
        pts.push([+rr.toFixed(2), +Math.max(0, (v.n0 * (r0 / rr) * (r0 / rr) * att + v.nb) * v.t).toFixed(3)]);
        ptsB.push([+rr.toFixed(2), +Math.max(0, v.nb * v.t).toFixed(3)]);
      }
      return {
        results: [
          { label: 'Sof sanash tezligi n_s', value: ns, unit: 'imp/s', digits: 3 },
          { label: 'Umumiy sanash tezligi n', value: n, unit: 'imp/s', digits: 3 },
          { label: 'Impulslar soni N = n·t', value: N, unit: 'imp', digits: 4 },
        ],
        chart: {
          title: 'Impulslar sonining masofaga bog\'liqligi (joriy n₀, x, μ, fon, t)',
          xLabel: 'r, cm',
          yLabel: 'N, imp',
          series: [
            { name: 'N(r)=(n_s+fon)·t', points: pts },
            { name: 'Fon N_f=fon·t', points: ptsB },
            { name: 'Joriy', points: [[v.r, N]] },
          ],
        },
        note: ns < v.nb ? 'Manba signali fon darajasidan past — sanashni uzaytiring.' : 'Manba signali fondan yuqori, qayd etish ishonchli.',
      };
    },
  },
};
