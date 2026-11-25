export default {
  id: 16,
  slug: 'yerga-ulash-qarshiligi',
  title: 'Yerga ulash qarshiligini aniqlash',
  category: 'Elektr',
  emoji: '⚡',
  short: 'Himoya yerga ulagichning qarshiligini uch elektrodli usulda o\'lchash va tuproq hamda elektrod parametrlarining ta\'sirini o\'rganish.',
  aim: [
    'Himoya yerga ulash tizimining ishlash prinsipini o\'rganish',
    'Yerga ulagich qarshiligini R = U/I formulasi bilan virtual o\'lchash',
    'Tuproqning solishtirma qarshiligi ρ ning ta\'sirini tahlil qilish',
    'Elektrod uzunligi L va diametri d ning qarshilikka ta\'sirini aniqlash',
  ],
  equipment: [
    'Yerga ulash qarshiligi o\'lchagich (virtual)',
    'Tekshiriladigan yerga ulagich E (vertikal sterjen)',
    'Potensial elektrodi P va tok elektrodi C',
    'Voltmetr va ampermetr',
    'Tuproq turi va namligini tanlash paneli',
  ],
  theory: [
    "Yerga ulash — elektr qurilmasining normal holatda kuchlanish ostida bo'lmaydigan metall qismlarini (korpus, karkas, shchit) yerga ulagich orqali tuproq bilan elektr jihatdan ulashdir. Izolyatsiya buzilganda xavfli tok yerga past qarshilikli yo'l orqali oqadi va elektr toki urishi xavfi kamayadi.",
    "Uch elektrodli (potensial tushuvi) usulida tekshiriladigan yerga ulagich E dan, yordamchi tok elektrodi C ga sinov toki o'tkaziladi, E va potensial elektrodi P oralig'idagi kuchlanish o'lchanadi. Yerga ulash qarshiligi Om qonuniga ko'ra R = U/I formulasidan topiladi.",
    "Qarshilik asosan tuproqning solishtirma qarshiligi ρ ga bog'liq: nam gilli tuproqda ρ kichik (10–100 Ω·m), quruq qum va shag'alda katta (bir necha yuz–minglab Ω·m). Vertikal sterjen uchun R = ρ/(2πL)·[ln(4L/d) − 1]; demak ρ ortsa R chiziqli ortadi.",
    "Elektrod uzunligi L ortsa qarshilik sezilarli kamayadi, diametr d ortsa esa faqat logarifm ostida ta'sir qiladi, shuning uchun amaliyotda sterjenni uzaytirish yo'g'onlashtirishdan ancha samaralidir. Qatlamli tuproqda chuqur qatlam namroq bo'lsa, uzun sterjen yanada foydali.",
    "Tok yerga oqqanda elektrod atrofida potensial tushuvi hosil bo'ladi: elektrodga yaqin joyda potensial yuqori, uzoqlashgan sari kamayadi. Shu sababli sinov elektrodlari E ning ta'sir zonasidan tashqarida bo'lishi kerak, aks holda o'lchangan U noto'g'ri bo'ladi.",
    "Qurilish me'yorlari yerga ulash qarshiligining chegarasini belgilaydi (odatda bir necha om, masalan, 4 Ω atrofida). Bino, kran va yashindan himoya tizimlari uchun qarshilik muntazam, ayniqsa quruq faslda, qayta o'lchanadi."
  ],
  formulas: [
    { name: 'Yerga ulash qarshiligi', expr: 'R = U / I', note: 'U — E–P orasidagi kuchlanish (V), I — E–C zanjiridagi sinov toki (A)' },
    { name: 'Vertikal sterjenning qarshiligi', expr: 'R = ρ/(2πL) · [ln(4L/d) − 1]', note: 'L — sterjenning yerdagi uzunligi (m), d — diametri (m)' },
    { name: 'Tuproqning solishtirma qarshiligi', expr: 'ρ = 2πL·R / (ln(4L/d) − 1)', note: 'o\'lchangan R dan ρ ni topish, birligi Ω·m' },
    { name: 'O\'rtacha qarshilik', expr: 'R_o\'rt = (R₁ + R₂ + ... + Rₙ) / n', note: 'P elektrod holatlarini o\'zgartirib olingan qiymatlar' },
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring va tekshiriladigan yerga ulagich E (vertikal sterjen) ni tanlang.",
    "Tok elektrodi C ni E dan taxminan 40 m, potensial elektrodi P ni E–C chizig'ida E dan 20 m masofaga joylashtiring.",
    "Tuproq turini tanlang va solishtirma qarshilik ρ ni belgilang (nam tuproq, qum, shag'al).",
    "Elektrod uzunligi L va diametri d ni kiriting; d ni metrga o'tkazishni unutmang.",
    "E–C zanjiri orqali sinov tokini o'tkazing va ampermetrdan I ni yozib oling.",
    "Voltmetrda E–P oralig'idagi U kuchlanishni o'lchang.",
    "R = U/I ni hisoblang.",
    "P elektrodni 2–3 m siljitib, o'lchashni kamida 5 marta takrorlang va qiymatlar barqarorligini tekshiring.",
    "Natijalarni jadvalga kiriting, o'rtacha R ni va ρ ni (ρ = 2πL·R/(ln(4L/d)−1)) toping.",
    "R(ρ) va R(L) grafiklarini tuzing, natijani me'yor chegarasi bilan solishtirib xulosa yozing."
  ],
  questions: [
    "Yerga ulash deb nimaga aytiladi va uning vazifasi nima?",
    "Yerga ulash qarshiligi qanday aniqlanadi va SI birligi nima?",
    "Uch elektrodli usulda E, P va C elektrodlari qanday vazifani bajaradi?",
    "Tuproq namligi yerga ulash qarshiligiga qanday ta'sir qiladi?",
    "Elektrod uzunligi oshirilsa, qarshilik qanday o'zgaradi?",
    "Nima uchun yordamchi elektrodlar E dan ma'lum masofada joylashtiriladi?",
    "Qurilish obyektlarida yerga ulashning ahamiyati nimada?",
    "Nima uchun sterjenni yo'g'onlashtirish uzaytirishga qaraganda kam samara beradi?",
    "Yashindan himoya tizimida yerga ulagich qanday rol o'ynaydi?",
    "Qarshilikni nima uchun yilning turli fasllarida qayta o'lchash kerak?"
  ],
  quiz: [
    {
      "q": "Himoya yerga ulashning asosiy vazifasi nima?",
      "options": [
        "Insonni elektr toki urishidan himoya qilish",
        "Kuchlanishni oshirish",
        "Tokni ko'paytirish",
        "Quvvatni oshirish"
      ],
      "answer": 0
    },
    {
      "q": "Yerga ulash qarshiligining SI birligi qaysi?",
      "options": [
        "Volt (V)",
        "Om (Ω)",
        "Amper (A)",
        "Vatt (W)"
      ],
      "answer": 1
    },
    {
      "q": "Yerga ulash qarshiligi qancha kichik bo'lsa:",
      "options": [
        "Himoya yomonlashadi",
        "Farqi yo'q",
        "Himoya shuncha samarali bo'ladi",
        "Tok yo'qoladi"
      ],
      "answer": 2
    },
    {
      "q": "Yerga ulash qarshiligiga eng katta ta'sir qiluvchi omil:",
      "options": [
        "Havo bosimi",
        "Yorug'lik intensivligi",
        "Shamol tezligi",
        "Tuproqning solishtirma qarshiligi"
      ],
      "answer": 3
    },
    {
      "q": "Nam tuproqda yerga ulash qarshiligi:",
      "options": [
        "Kamroq bo'ladi",
        "Ko'proq bo'ladi",
        "O'zgarmaydi",
        "Nolga teng bo'ladi"
      ],
      "answer": 0
    },
    {
      "q": "Uch elektrodli usulda qarshilik qaysi formuladan topiladi?",
      "options": [
        "R = U·I",
        "R = I/U",
        "R = U/I",
        "R = U + I"
      ],
      "answer": 2
    },
    {
      "q": "Sterjen uzunligi L oshirilsa R qanday o'zgaradi?",
      "options": [
        "Ortadi",
        "O'zgarmaydi",
        "Avval ortib, so'ng kamayadi",
        "Kamayadi"
      ],
      "answer": 3
    },
    {
      "q": "ρ ikki baravar ortsa (L, d o'zgarmas) R:",
      "options": [
        "Ikki marta ortadi",
        "Ikki marta kamayadi",
        "O'zgarmaydi",
        "To'rt marta ortadi"
      ],
      "answer": 0
    }
  ],
  conclusion: "Uch elektrodli usulda R = U/I formulasi bilan yerga ulash qarshiligi aniqlandi. Tuproqning solishtirma qarshiligi ortsa qarshilik chiziqli ortishi, elektrod uzunligi ortsa kamayishi tasdiqlandi. Namuna: U = 2,4 V, I = 0,60 A bo'lganda R = 4 Ω. Bino va kranlar uchun qarshilikni me'yordan past saqlash va muntazam tekshirish zarur.",
  learn: [
    "Himoya yerga ulashning vazifasi va ishlash prinsipini",
    "Uch elektrodli (potensial tushuvi) usulida R = U/I ni o'lchashni",
    "Tuproq solishtirma qarshiligi ρ, elektrod uzunligi L va diametri d ning ta'sirini",
    "Natijani me'yor chegarasi bilan solishtirib, yerga ulash yetarli yoki yo'qligini baholashni"
  ],
  civil: [
    "Bino elektr shchitlari, metall karkas va armatura yerga ulanadi: izolyatsiya teshilganda tok yerga ketadi va odam xavfdan saqlanadi.",
    "Yashindan himoya tizimida (chaqmoqqaytargich) tushirgich simlari past qarshilikli yerga ulagichga ulanadi, shunda yashin toki xavfsiz tarqaladi.",
    "Qurilish maydonidagi kran, payvand apparati va vaqtinchalik elektr taqsimot shchitlari ish boshlashdan oldin yerga ulash qarshiligi bo'yicha tekshiriladi.",
    "Poydevor armaturasi tabiiy yerga ulagich sifatida ishlatilib, qo'shimcha vertikal sterjenlar bilan to'ldiriladi."
  ],
  keyFact: "Yerga ulagich qarshiligining asosiy qismi elektrod atrofidagi bir necha metr radiusli tuproq qatlamida to'planadi, shuning uchun yordamchi elektrodlar yetarlicha uzoqqa qo'yilmasa, o'lchash noto'g'ri chiqadi.",
  mistakes: [
    "P va C elektrodlarni E ga juda yaqin qo'yish: ularning ta'sir zonalari kesishadi. Elektrodlarni kamida 20 m va 40 m masofaga joylashtiring.",
    "Quruq fasl natijasini doimiy deb olish: tuproq namligi o'zgaradi. Qarshilikni eng quruq davr uchun zaxira bilan baholang.",
    "d ni mm da formulaga qo'yish: L va d bir xil birlikda (metrda) bo'lishi shart."
  ],
  glossary: [
    {
      "t": "Yerga ulagich",
      "d": "tuproq bilan to'g'ridan-to'g'ri tegib turuvchi o'tkazgich yoki elektrodlar majmuasi"
    },
    {
      "t": "Solishtirma qarshilik ρ",
      "d": "tuproqning elektr tokiga ko'rsatadigan qarshiligi, birligi Ω·m"
    },
    {
      "t": "Potensial tushuvi usuli",
      "d": "E–C zanjiridan tok o'tkazib, E–P kuchlanishini o'lchash usuli"
    },
    {
      "t": "Qadam kuchlanishi",
      "d": "yerda oqayotgan tok maydonida odam ikki oyog'i orasidagi kuchlanish"
    },
    {
      "t": "Chaqmoqqaytargich",
      "d": "yashin urishini qabul qilib, tokni yerga yo'naltiruvchi qurilma"
    }
  ],
  tasks: [
    {
      "q": "Yerga ulagich qarshiligini o'lchashda E–P orasidagi kuchlanish U = 3,6 V, E–C zanjiridagi tok I = 0,9 A bo'ldi. Yerga ulash qarshiligi R necha om?",
      "answer": 4,
      "unit": "Ω",
      "tol": 0.03,
      "hint": "R = U/I.",
      "solution": "R = 3,6 / 0,9 = 4 Ω."
    },
    {
      "q": "Vertikal sterjen: L = 3 m, d = 20 mm, tuproq ρ = 80 Ω·m. R = ρ/(2πL)·[ln(4L/d) − 1] bo'yicha qarshilikni toping.",
      "answer": 22.91,
      "unit": "Ω",
      "tol": 0.03,
      "hint": "d ni metrga o'tkazing: 0,02 m.",
      "solution": "ln(4·3/0,02)=ln600=6,397; R = 80/(2π·3)·(6,397−1) ≈ 22.91 Ω."
    },
    {
      "q": "Elektrod L = 2,5 m, d = 16 mm. O'lchangan R = 15 Ω bo'lsa, tuproqning solishtirma qarshiligi ρ nimaga teng?",
      "answer": 43.33,
      "unit": "Ω·m",
      "tol": 0.03,
      "hint": "ρ = 2πL·R/(ln(4L/d) − 1).",
      "solution": "ln(10/0,016)=ln625=6,438; ρ = 2π·2,5·15/(6,438−1) ≈ 43.33 Ω·m."
    },
    {
      "q": "P elektrod 5 xil holatda qo'yilib, R = 5,2; 4,8; 5,0; 5,4 va 4,6 Ω olindi. O'rtacha qarshilikni toping.",
      "answer": 5,
      "unit": "Ω",
      "tol": 0.03,
      "hint": "Qiymatlar yig'indisini 5 ga bo'ling.",
      "solution": "(5,2+4,8+5,0+5,4+4,6)/5 = 25,0/5 = 5,0 Ω."
    }
  ],
  sim: {
    intro: 'Tuproq va elektrod parametrlarini o\'zgartiring, qarshilik va sinov kuchlanishi avtomatik hisoblanadi.',
    inputs: [
      { id: 'rho', label: 'Tuproqning solishtirma qarshiligi ρ', unit: 'Ω·m', min: 10, max: 1000, step: 10, value: 100 },
      { id: 'L', label: 'Elektrod uzunligi L', unit: 'm', min: 0.5, max: 6, step: 0.1, value: 2.5 },
      { id: 'd', label: 'Elektrod diametri d', unit: 'mm', min: 8, max: 50, step: 1, value: 16 },
      { id: 'I', label: 'Sinov toki I', unit: 'A', min: 0.1, max: 5, step: 0.1, value: 0.6 },
    ],
    compute: (v) => {
      const rho = v.rho, L = v.L, d = v.d / 1000, I = v.I;
      const Rf = (r, l) => r / (2 * Math.PI * l) * (Math.log(4 * l / d) - 1);
      const R = Rf(rho, L);
      const U = R * I;
      const pts = [], ptsU = [];
      for (let i = 0; i <= 40; i++) {
        const l = 0.5 + (6 - 0.5) * i / 40;
        pts.push([+l.toFixed(3), +Math.max(0, Rf(rho, l)).toFixed(4)]);
        ptsU.push([+l.toFixed(3), +Math.max(0, Rf(rho, l) * I).toFixed(4)]);
      }
      return {
        results: [
          { label: 'Yerga ulash qarshiligi R', value: R, unit: 'Ω', digits: 3 },
          { label: 'E–P kuchlanishi U = R·I', value: U, unit: 'V', digits: 3 },
          { label: 'Tekshiruv: ρ = 2πLR/(ln(4L/d)−1)', value: 2 * Math.PI * L * R / (Math.log(4 * L / d) - 1), unit: 'Ω·m', digits: 3 },
        ],
        chart: {
          title: 'R va U ning elektrod uzunligiga bog\'liqligi (joriy ρ, d, I)',
          xLabel: 'L, m',
          yLabel: 'R, Ω  /  U, V',
          series: [
            { name: 'R(L)', points: pts },
            { name: 'U(L)=R·I', points: ptsU },
            { name: 'Joriy', points: [[L, R]] },
          ],
        },
        note: R <= 4 ? 'Qarshilik me\'yor (≈4 Ω) chegarasida — yerga ulash yetarli.' : 'Qarshilik katta: elektrodni uzaytiring yoki tuproqni namlang.',
      };
    },
  },
};
