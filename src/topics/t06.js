export default {
  id: 6, slug: 'inersiya-momenti', title: 'Qattiq jismlarning inersiya momentini aniqlash',
  category: 'Mexanika', emoji: '🎡',
  short: 'Disk, halqa, shar va sterjenning inersiya momentini ip orqali aylantirib aniqlang va nazariy qiymat bilan solishtiring.',
  aim: [
    'Qattiq jismlarning aylanma harakatini o‘rganish',
    'Inersiya momentining fizik mohiyatini tushunish',
    'Inersiya momentining massa va uning o‘qqa nisbatan taqsimlanishiga bog‘liqligini aniqlash',
    'Tajribaviy va nazariy inersiya momentlarini taqqoslash'
  ],
  equipment: ['Aylanish o‘qiga o‘rnatilgan disk, halqa, shar va sterjen', 'Shkiv va ip', 'Yuklar to‘plami', 'Sekundomer', 'Chizg‘ich', 'Kalkulyator'],
  formulas: [
    { name: 'Moddiy nuqta', expr: 'I = m·r²', note: 'r — o‘qqacha masofa' },
    { name: 'Asosiy tenglama', expr: 'M = I·ε', note: 'ε — burchak tezlanish' },
    { name: 'Disk / yaxlit silindr', expr: 'I = ½·m·R²' },
    { name: 'Yupqa halqa', expr: 'I = m·R²' },
    { name: 'Yaxlit shar', expr: 'I = (2/5)·m·R²' },
    { name: 'Sterjen (markazdan)', expr: 'I = m·l² / 12' },
    { name: 'Tajribaviy qiymat', expr: 'I = F·r / ε' }
  ],
  learn: [
    "Inersiya momenti I ning fizik ma’nosini va SI birligini (kg·m²)",
    "Massaning aylanish o‘qiga nisbatan taqsimlanishi I ga qanday ta’sir qilishini",
    "Aylanma harakat dinamikasi tenglamasi M = I·ε dan foydalanishni",
    "Tajribaviy va nazariy inersiya momentlarini solishtirib, xatoni baholashni"
  ],
  civil: [
    "Minora krani strelasi va aylanuvchi platformasining inersiya momenti burilish tezlanishini va tormozlash vaqtini belgilaydi: og‘ir yuk uzoqroq vyletda aylanishni sekinlashtiradi.",
    "Shamol turbinasi parraklarida massa o‘qdan uzoq joylashgani uchun I katta bo‘ladi, shu sababli ishga tushirish momenti hisoblanadi.",
    "Po‘lat balka va ustun kesimining inersiya momenti (I = bh³/12) egilishga qarshilikni belgilaydi: balandroq kesim bir xil sarfda ancha bikr.",
    "Beton aralashtirgich barabani va vibrodoska mexanizmlarida volan (mahovik) tekis ishlash uchun katta I bilan tanlanadi."
  ],
  keyFact: "Ikki marta balandroq to‘g‘ri to‘rtburchak balka kesimi egilishdagi inersiya momentini 8 marta oshiradi (I = bh³/12), shu sababli ikkitavr (dvutavr) balkalarning materiali o‘qdan uzoqqa — tokchalarga joylashtirilgan.",
  mistakes: [
    "Radius R ni diametr bilan almashtirib yuborish: I ~ R² bo‘lgani uchun xato 4 marta bo‘ladi. Har doim R = d/2 ekanini tekshiring.",
    "Sterjen uchun markaz va uch orqali o‘tuvchi o‘qlarni aralashtirish (ml²/12 va ml²/3). O‘q o‘rnini chizmada belgilang.",
    "Ip tarangligini F = Mg deb olish: yuk tezlanish bilan tushgani uchun F = M(g − a). Shkiv ishqalanishini ham unutmang."
  ],
  glossary: [
    {
      "t": "Inersiya momenti",
      "d": "Jismning aylanma harakatdagi inertlik o‘lchovi, I = Σ m·r²."
    },
    {
      "t": "Kuch momenti",
      "d": "Kuch va yelka ko‘paytmasi, M = F·r, birligi N·m."
    },
    {
      "t": "Burchak tezlanish",
      "d": "Burchak tezligining o‘zgarish tezligi ε, birligi rad/s²."
    },
    {
      "t": "Shteyner teoremasi",
      "d": "Parallel o‘qqa o‘tishda I = I₀ + m·d²."
    },
    {
      "t": "Mahovik (volan)",
      "d": "Katta inersiya momentli g‘ildirak, aylanish notekisligini silliqlaydi."
    }
  ],
  theory: [
    "Qattiq jismning aylanma harakatdagi inertlik o‘lchovi inersiya momenti deyiladi. Moddiy nuqta uchun I = m·r², jism uchun esa barcha zarralar yig‘indisi I = Σ mᵢ·rᵢ². SI birligi — kg·m². Ilgarilanma harakatda massa nimani anglatsa, aylanishda I shuni bildiradi.",
    "Aylanma harakat dinamikasining asosiy tenglamasi M = I·ε. Kuch momenti M = F·r, ε esa burchak tezlanish (rad/s²). Shu sababli tajribada I = M/ε ko‘rinishida aniqlash mumkin: ma’lum kuch momenti beriladi va burchak tezlanish o‘lchanadi.",
    "Massa aylanish o‘qidan qanchalik uzoq joylashsa, inersiya momenti shunchalik katta bo‘ladi. Bir xil m va R da yupqa halqa (I = mR²) diskka (I = ½mR²) qaraganda ikki marta, sharga (I = ⅖mR²) esa 2,5 marta katta. Radius ikki marta oshsa, I to‘rt marta ortadi.",
    "Tajribada shkiv orqali o‘ralgan ipga M massali yuk osiladi. Yuk a tezlanish bilan tushadi, ip tarangligi F = M(g − a), burchak tezlanish ε = a/r, kuch momenti esa F·r. Yuk va jism dinamikasidan a = Mg / (M + I/r²) kelib chiqadi.",
    "Parallel o‘qlar uchun Shteyner teoremasi I = I₀ + m·d² o‘rinli. Bu teorema ekssentrik o‘rnatilgan qismlarni, masalan kran strelasi va qarshi yukning umumiy inersiya momentini topishda ishlatiladi.",
    "Qurilishda kran, ekskavator, shamol turbinasi va aylanuvchi mexanizmlar hisoblanadi. Balka kesimining egilishdagi inersiya momenti esa boshqa (geometrik) kattalik bo‘lib, shu tushunchaning umumlashmasi hisoblanadi va konstruksiya bikrligini belgilaydi."
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring va jismni (disk, halqa, shar yoki sterjen) tanlang.",
    "Jism massasi m va radiusi R ni o‘lchang yoki simulyatorda belgilang; sterjen uchun l = 2R ekanini hisobga oling.",
    "Jismni aylanish o‘qiga o‘rnating va o‘q ishqalanishi minimal ekanini tekshiring.",
    "Shkiv radiusi r ni belgilang va ipni shkivga bir tekis o‘rang.",
    "Ip uchiga M massali yukni osing; boshlang‘ich balandlikni belgilang.",
    "“Boshlash” tugmasini bosib, yuk tushishi natijasida jismning aylanishini kuzating.",
    "Yukning tezlanishi a ni toping va ε = a/r, F = M(g − a) formulalaridan burchak tezlanish va ip tarangligini hisoblang.",
    "Kuch momenti M = F·r ni va tajribaviy I = M/ε ni hisoblang.",
    "Nazariy I ni jism shakliga mos formuladan toping va ikkala qiymatni jadvalga yozing.",
    "Tajribani boshqa shakllar va radiuslar uchun takrorlang, nisbiy xatoni baholang va xulosa chiqaring."
  ],
  questions: [
    "Inersiya momenti deb nimaga aytiladi va uning SI birligi qanday?",
    "Moddiy nuqtaning inersiya momenti qanday aniqlanadi?",
    "Aylanma harakat dinamikasining asosiy tenglamasini yozing.",
    "Disk va halqaning inersiya momentlari bir xil m va R da nima uchun farq qiladi?",
    "Jism radiusi ikki marta oshirilsa, uning inersiya momenti necha marta o‘zgaradi?",
    "Inersiya momenti katta jismning burchak tezlanishi qanday bo‘ladi?",
    "Tajribaviy va nazariy qiymatlar orasidagi farq qaysi sabablardan kelib chiqadi?",
    "Shteyner teoremasini ta’riflang va qurilish mexanizmidan misol keltiring.",
    "Nima uchun ikkitavr balkada material o‘qdan uzoqroqqa joylashtiriladi?",
    "Kranning aylanuvchi strelasida yuk vyleti ortsa, tormozlash vaqti qanday o‘zgaradi?"
  ],
  quiz: [
    {
      "q": "Inersiya momenti nimani tavsiflaydi?",
      "options": [
        "Jismning aylanishga qarshiligini",
        "Jismning massasini",
        "Jismning hajmini",
        "Jismning zichligini"
      ],
      "answer": 0
    },
    {
      "q": "Inersiya momentining SI birligi:",
      "options": [
        "kg",
        "N·m",
        "kg·m²",
        "m²"
      ],
      "answer": 2
    },
    {
      "q": "Moddiy nuqta uchun inersiya momenti formulasi:",
      "options": [
        "I = mv",
        "I = mr²",
        "I = ma",
        "I = Fr"
      ],
      "answer": 1
    },
    {
      "q": "Diskning markaziy o‘qiga nisbatan inersiya momenti:",
      "options": [
        "I = mR²",
        "I = ⅓mR³",
        "I = 2mR²",
        "I = ½mR²"
      ],
      "answer": 3
    },
    {
      "q": "Radius ikki marta ortsa (massa o‘zgarmasa), inersiya momenti:",
      "options": [
        "To‘rt marta ortadi",
        "Ikki marta ortadi",
        "O‘zgarmaydi",
        "Kamayadi"
      ],
      "answer": 0
    },
    {
      "q": "Bir xil m va R da eng katta inersiya momentiga ega jism:",
      "options": [
        "Disk",
        "Yaxlit shar",
        "Yupqa halqa",
        "Barchasida bir xil"
      ],
      "answer": 2
    },
    {
      "q": "Burchak tezlanish ε uchun to‘g‘ri munosabat:",
      "options": [
        "ε = I / M",
        "ε = M / I",
        "ε = M·I",
        "ε = M·r"
      ],
      "answer": 1
    },
    {
      "q": "Parallel o‘qqa o‘tishda inersiya momenti (Shteyner):",
      "options": [
        "I = I₀ − m·d²",
        "I = I₀·m·d",
        "I = I₀ / d²",
        "I = I₀ + m·d²"
      ],
      "answer": 3
    }
  ],
  conclusion: "Tajribada aniqlangan inersiya momenti nazariy qiymatga yaqin chiqdi, bu M = I·ε qonuni to‘g‘riligini tasdiqlaydi. Bir xil massa va radiusli jismlardan massasi o‘qdan uzoqroq joylashgani (halqa) eng katta inersiya momentiga ega bo‘ldi, sharda esa eng kichik bo‘ldi. Farq asosan shkiv va o‘q ishqalanishi, ipning cho‘zilishi hamda o‘lchash xatoliklaridan kelib chiqadi. Bu natijalar kran va aylanuvchi mexanizmlarni hisoblashda ishlatiladi.",
  tasks: [
    {
      "q": "Minora kranining qarshi yuk diski: massasi 20 kg, radiusi 0,5 m. Markaziy o‘qqa nisbatan inersiya momentini toping (I = ½mR²).",
      "answer": 2.5,
      "unit": "kg·m²",
      "tol": 0.03,
      "hint": "Disk uchun koeffitsiyent ½.",
      "solution": "I = ½·20·0,5² = 2,5 kg·m²."
    },
    {
      "q": "Beton aralashtirgichning yupqa halqasimon gardishi: m = 8 kg, R = 0,6 m. Inersiya momentini toping (I = mR²).",
      "answer": 2.88,
      "unit": "kg·m²",
      "tol": 0.03,
      "hint": "Yupqa halqada butun massa R masofada.",
      "solution": "I = 8·0,6² = 2,88 kg·m²."
    },
    {
      "q": "Inersiya momenti 2,5 kg·m² bo‘lgan disk 50 N·m kuch momenti ta’sirida aylanadi. Burchak tezlanishini toping.",
      "answer": 20,
      "unit": "rad/s²",
      "tol": 0.03,
      "hint": "ε = M / I.",
      "solution": "ε = 50 / 2,5 = 20 rad/s²."
    },
    {
      "q": "Uzunligi 3 m, massasi 12 kg bo‘lgan bir jinsli sterjen (armatura) markazidan o‘tuvchi o‘qqa nisbatan aylanadi. I ni toping (I = ml²/12).",
      "answer": 9,
      "unit": "kg·m²",
      "tol": 0.03,
      "hint": "l² = 9 m².",
      "solution": "I = 12·3² / 12 = 9 kg·m²."
    }
  ],
  sim: {
    intro: 'Jism shaklini tanlang (1 — disk, 2 — halqa, 3 — shar, 4 — sterjen), qiymatlarni o‘zgartiring, natija avtomatik hisoblanadi.',
    inputs: [
      { id: 'shape', label: 'Shakl (1 disk, 2 halqa, 3 shar, 4 sterjen)', unit: '', min: 1, max: 4, step: 1, value: 1 },
      { id: 'm', label: 'Jism massasi', unit: 'kg', min: 0.5, max: 10, step: 0.1, value: 2 },
      { id: 'R', label: 'Radius R (sterjenda l = 2R)', unit: 'm', min: 0.05, max: 0.5, step: 0.01, value: 0.2 },
      { id: 'r', label: 'Shkiv radiusi', unit: 'm', min: 0.01, max: 0.2, step: 0.005, value: 0.05 },
      { id: 'M', label: 'Osilgan yuk massasi', unit: 'kg', min: 0.05, max: 2, step: 0.05, value: 0.5 }
    ],
    compute: (v) => {
      const g = 9.81;
      const names = ['', 'Disk', 'Halqa', 'Shar', 'Sterjen'];
      const coef = (s) => (s === 1 ? 0.5 : s === 2 ? 1 : s === 3 ? 0.4 : 4 / 12);
      const s = Math.round(v.shape);
      const c = coef(s);
      const I = c * v.m * v.R * v.R;
      const a = v.M * g / (v.M + I / (v.r * v.r));
      const eps = a / v.r;
      const T = v.M * (g - a);
      const Mom = T * v.r;
      const Iexp = Mom / eps;
      const epsOf = (R) => {
        const Ir = c * v.m * R * R;
        return v.M * g / (v.r * (v.M * v.r + Ir / v.r));
      };
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const R = 0.05 + (0.5 - 0.05) * i / 40;
        pts.push([R, epsOf(R)]);
      }
      return {
        results: [
          { label: 'Nazariy inersiya momenti (' + names[s] + ')', value: I, unit: 'kg·m²', digits: 3 },
          { label: 'Yukning tezlanishi a', value: a, unit: 'm/s²', digits: 3 },
          { label: 'Burchak tezlanish ε', value: eps, unit: 'rad/s²', digits: 3 },
          { label: 'Ip tarangligi F', value: T, unit: 'N', digits: 3 },
          { label: 'Kuch momenti M = F·r', value: Mom, unit: 'N·m', digits: 3 },
          { label: 'Tajribaviy I = M/ε', value: Iexp, unit: 'kg·m²', digits: 3 }
        ],
        chart: {
          title: 'Burchak tezlanishning jism radiusiga bog‘liqligi', xLabel: 'R, m', yLabel: 'ε, rad/s²',
          series: [{ name: names[s], points: pts }, { name: 'Joriy', points: [[v.R, eps]] }]
        },
        note: 'Massa o‘qdan uzoqlashsa I ortadi: I ~ R². Halqada I eng katta, sharda eng kichik.'
      };
    }
  }
};
