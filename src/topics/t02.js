export default {
  id: 2,
  slug: 'zichlik',
  title: 'Jismlarning zichligini aniqlash',
  category: 'Mexanika',
  emoji: '⚖️',
  short: "Jism massasini tarozida, hajmini menzurkada o'lchab, zichligini hisoblang va materialni aniqlang.",
  aim: [
    "Jism zichligi tushunchasini tajriba asosida o'rganish",
    "Massani virtual elektron tarozi yordamida aniqlash",
    "Hajmni menzurka yordamida aniqlash",
    "Zichlikni hisoblab, turli jismlarning zichliklarini taqqoslash"
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Kompyuter yoki mobil qurilma', 'Virtual elektron tarozi', 'Menzurka', 'Suv', 'Turli materiallardan tayyorlangan jismlar', 'Kalkulyator'],
  learn: [
    "Zichlik tushunchasi va ρ = m/V formulasini",
    "Tartibsiz shakldagi jism hajmini suv siqib chiqarish (menzurka) usulida aniqlashni",
    "g/sm³ va kg/m³ birliklari orasida o'tishni",
    "Zichlik bo'yicha qurilish materialini aniqlash va xatolikni baholashni"
  ],
  civil: [
    "Beton, g'isht va shag'alning zichligi bo'yicha poydevorga tushadigan yuk (massa) hisoblanadi.",
    "Yuk mashinasi va kran ko'taradigan material massasi hajm va zichlikdan aniqlanadi: m = ρ·V.",
    "Beton sifati nazoratida namunaning zichligi loyihaviy qiymat (≈ 2400 kg/m³) bilan solishtiriladi.",
    "Issiqlik izolyatsiyasi (penoplast, mineral paxta) tanlashda yengil, ya'ni kam zichlikli material afzal ko'riladi."
  ],
  keyFact: "Oddiy temir-beton zichligi taxminan 2500 kg/m³, ya'ni 1 m³ beton ~ 2,5 tonna: bitta 6 m³ li beton mikseri 15 tonnadan ortiq yuk beradi.",
  mistakes: [
    "Hajmni o'lchaganda jism ostida havo pufakchalari qolishi; jismni ip bilan sekin botiring va pufakchalarni chiqarib yuboring.",
    "g/sm³ ni kg/m³ ga o'tkazishni unutish: 1 g/sm³ = 1000 kg/m³.",
    "Menzurka menisk pastki chetidan emas, yuqorisidan o'qilishi; ko'zni suyuqlik sathi bilan bir chiziqda tuting."
  ],
  glossary: [
    {
      "t": "Zichlik",
      "d": "modda massasining hajmiga nisbati, ρ = m/V"
    },
    {
      "t": "Menzurka",
      "d": "suyuqlik hajmini o'lchaydigan darajalangan idish"
    },
    {
      "t": "Menisk",
      "d": "suyuqlik sirtining idish devori yonidagi egilgan shakli"
    },
    {
      "t": "Hajm",
      "d": "jism egallagan fazo kattaligi, V"
    },
    {
      "t": "Solishtirma og'irlik",
      "d": "birlik hajmdagi jismning og'irlik kuchi, γ = ρ·g"
    }
  ],
  tasks: [
    {
      "q": "Qurilish toshining massasi 156 g. Menzurkadagi suv 50 sm³ dan 70 sm³ gacha ko'tarildi. Tosh zichligi ρ ni kg/m³ da toping.",
      "answer": 7800,
      "unit": "kg/m³",
      "tol": 0.03,
      "hint": "V = V₂ − V₁, ρ = m/V, so'ngra g/sm³ ni 1000 ga ko'paytiring.",
      "solution": "V = 20 sm³; ρ = 156/20 = 7,8 g/sm³ = 7800 kg/m³."
    },
    {
      "q": "Qirrasi 20 sm bo'lgan beton kubning massasi 19,2 kg. Beton zichligi qancha (kg/m³)?",
      "answer": 2400,
      "unit": "kg/m³",
      "tol": 0.03,
      "hint": "V = a³, a = 0,2 m.",
      "solution": "V = 0,2³ = 0,008 m³; ρ = 19,2/0,008 = 2400 kg/m³."
    },
    {
      "q": "Shag'alning zichligi 2650 kg/m³. Kran 0,75 m³ shag'al solingan idishni ko'taradi. Shag'al massasi qancha (kg)?",
      "answer": 1987.5,
      "unit": "kg",
      "tol": 0.03,
      "hint": "m = ρ·V.",
      "solution": "m = 2650·0,75 = 1987,5 kg."
    },
    {
      "q": "Bitta g'ishtning massasi 3,6 kg, zichligi 1800 kg/m³. G'isht hajmi necha dm³?",
      "answer": 2,
      "unit": "dm³",
      "tol": 0.03,
      "hint": "V = m/ρ, 1 m³ = 1000 dm³.",
      "solution": "V = 3,6/1800 = 0,002 m³ = 2 dm³."
    }
  ],
  learn: [
    "Zichlik tushunchasi va ρ = m/V formulasini",
    "Tartibsiz shakldagi jism hajmini suv siqib chiqarish (menzurka) usulida aniqlashni",
    "g/sm³ va kg/m³ birliklari orasida o'tishni",
    "Zichlik bo'yicha qurilish materialini aniqlash va xatolikni baholashni"
  ],
  civil: [
    "Beton, g'isht va shag'alning zichligi bo'yicha poydevorga tushadigan yuk (massa) hisoblanadi.",
    "Yuk mashinasi va kran ko'taradigan material massasi hajm va zichlikdan aniqlanadi: m = ρ·V.",
    "Beton sifati nazoratida namunaning zichligi loyihaviy qiymat (≈ 2400 kg/m³) bilan solishtiriladi.",
    "Issiqlik izolyatsiyasi (penoplast, mineral paxta) tanlashda yengil, ya'ni kam zichlikli material afzal ko'riladi."
  ],
  keyFact: "Oddiy temir-beton zichligi taxminan 2500 kg/m³, ya'ni 1 m³ beton ~ 2,5 tonna: bitta 6 m³ li beton mikseri 15 tonnadan ortiq yuk beradi.",
  mistakes: [
    "Hajmni o'lchaganda jism ostida havo pufakchalari qolishi; jismni ip bilan sekin botiring va pufakchalarni chiqarib yuboring.",
    "g/sm³ ni kg/m³ ga o'tkazishni unutish: 1 g/sm³ = 1000 kg/m³.",
    "Menzurka menisk pastki chetidan emas, yuqorisidan o'qilishi; ko'zni suyuqlik sathi bilan bir chiziqda tuting."
  ],
  glossary: [
    {
      "t": "Zichlik",
      "d": "modda massasining hajmiga nisbati, ρ = m/V"
    },
    {
      "t": "Menzurka",
      "d": "suyuqlik hajmini o'lchaydigan darajalangan idish"
    },
    {
      "t": "Menisk",
      "d": "suyuqlik sirtining idish devori yonidagi egilgan shakli"
    },
    {
      "t": "Hajm",
      "d": "jism egallagan fazo kattaligi, V"
    },
    {
      "t": "Solishtirma og'irlik",
      "d": "birlik hajmdagi jismning og'irlik kuchi, γ = ρ·g"
    }
  ],
  tasks: [
    {
      "q": "Qurilish toshining massasi 156 g. Menzurkadagi suv 50 sm³ dan 70 sm³ gacha ko'tarildi. Tosh zichligi ρ ni kg/m³ da toping.",
      "answer": 7800,
      "unit": "kg/m³",
      "tol": 0.03,
      "hint": "V = V₂ − V₁, ρ = m/V, so'ngra g/sm³ ni 1000 ga ko'paytiring.",
      "solution": "V = 20 sm³; ρ = 156/20 = 7,8 g/sm³ = 7800 kg/m³."
    },
    {
      "q": "Qirrasi 20 sm bo'lgan beton kubning massasi 19,2 kg. Beton zichligi qancha (kg/m³)?",
      "answer": 2400,
      "unit": "kg/m³",
      "tol": 0.03,
      "hint": "V = a³, a = 0,2 m.",
      "solution": "V = 0,2³ = 0,008 m³; ρ = 19,2/0,008 = 2400 kg/m³."
    },
    {
      "q": "Shag'alning zichligi 2650 kg/m³. Kran 0,75 m³ shag'al solingan idishni ko'taradi. Shag'al massasi qancha (kg)?",
      "answer": 1987.5,
      "unit": "kg",
      "tol": 0.03,
      "hint": "m = ρ·V.",
      "solution": "m = 2650·0,75 = 1987,5 kg."
    },
    {
      "q": "Bitta g'ishtning massasi 3,6 kg, zichligi 1800 kg/m³. G'isht hajmi necha dm³?",
      "answer": 2,
      "unit": "dm³",
      "tol": 0.03,
      "hint": "V = m/ρ, 1 m³ = 1000 dm³.",
      "solution": "V = 3,6/1800 = 0,002 m³ = 2 dm³."
    }
  ],
  theory: [
    "Zichlik moddaning asosiy fizik xarakteristikasi bo'lib, birlik hajmdagi massani bildiradi: ρ = m/V. SI da birligi kg/m³, laboratoriyada ko'pincha g/sm³ ishlatiladi; 1 g/sm³ = 1000 kg/m³.",
    "Massa tarozida o'lchanadi. To'g'ri shaklli jism hajmi o'lchamlari bo'yicha hisoblanadi (V = a·b·c), tartibsiz shaklli jism hajmi esa Arximed usulida aniqlanadi: jism suvga botirilganda suv sathi ko'tarilishi jism hajmiga teng.",
    "Menzurka bilan hajm V = V₂ − V₁ formulasi bo'yicha topiladi. Bu yerda V₁ — boshlang'ich, V₂ — jism botirilgandan keyingi hajm. Jism suvda erimasligi va butunlay botishi shart.",
    "Bir jinsli moddaning zichligi uning xarakterli ko'rsatkichi: alyuminiy ≈ 2700, po'lat ≈ 7800, mis ≈ 8900, shisha ≈ 2500, suv 1000, quruq yog'och 400-700 kg/m³. O'lchangan zichlikni jadval bilan solishtirib, material turi taxmin qilinadi.",
    "O'lchash xatoligi asosan hajmga bog'liq: menzurka darajasi bo'linmasining yarmicha noaniqlik hajmning kichik qiymatlarida katta nisbiy xato beradi. Shuning uchun jism hajmi iloji boricha katta bo'lishi lozim.",
    "Qurilishda zichlik yuklarni hisoblash, material sifatini tekshirish va issiqlik izolyatsiyasini tanlashda ishlatiladi. Beton, grunt va izolyatsiya materiallari zichligi loyihalash me'yorlarida beriladi."
  ],
  formulas: [
    { name: 'Zichlik', expr: 'ρ = m / V', note: 'kg/m³ yoki g/sm³' },
    { name: 'Jism hajmi', expr: 'V = V₂ − V₁', note: 'V₁ — boshlang\'ich, V₂ — jism botirilgandan keyingi hajm' },
    { name: "Birliklar", expr: '1 g/sm³ = 1000 kg/m³', note: 'Suvning zichligi ≈ 1000 kg/m³' }
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring.",
    "Jism massasi m ni tarozi bo'yicha kiriting.",
    "Menzurkaga suv quyib, boshlang'ich hajm V₁ ni kiriting.",
    "Jismni suvga botirib, V₂ qiymatini o'qing (menisk bo'yicha).",
    "Jism hajmi V = V₂ − V₁ ni hisoblang.",
    "Zichlik ρ = m/V ni g/sm³ da toping va natijalardan o'qing.",
    "Natijani kg/m³ ga o'tkazing (×1000).",
    "Natijani jadvaldagi materiallar bilan solishtiring va materialni aniqlang.",
    "Tajribani boshqa massa va hajmlar bilan kamida uch marta takrorlab, jadvalga kiriting.",
    "O'rtacha zichlik va nisbiy xatolikni hisoblab, xulosa yozing."
  ],
  questions: [
    "Zichlik nima va qaysi birliklarda o'lchanadi?",
    "1 g/sm³ necha kg/m³ ga teng?",
    "Tartibsiz shakldagi jism hajmi qanday aniqlanadi?",
    "Nima uchun jism butunlay suvga botishi kerak?",
    "Menzurkada menisk qanday o'qiladi?",
    "Jism suvda erisa yoki suzsa, usulni qanday o'zgartirasiz?",
    "Havo pufakchalari natijaga qanday ta'sir qiladi?",
    "Massa va hajm grafigining qiyaligi nimani bildiradi?",
    "Beton blokning massasini zichlik va hajmdan qanday topasiz?"
  ],
  quiz: [
    {
      "q": "Zichlik formulasi qaysi?",
      "options": [
        "ρ = V / m",
        "ρ = m·V",
        "ρ = m / V",
        "ρ = m·g"
      ],
      "answer": 2
    },
    {
      "q": "1 g/sm³ necha kg/m³?",
      "options": [
        "1000",
        "1",
        "100",
        "10 000"
      ],
      "answer": 0
    },
    {
      "q": "Tartibsiz jism hajmi qanday aniqlanadi?",
      "options": [
        "Tarozida tortib",
        "Suv sathining ko'tarilishi bo'yicha",
        "Dinamometr bilan",
        "Termometr bilan"
      ],
      "answer": 1
    },
    {
      "q": "Qaysi material zichligi eng katta?",
      "options": [
        "Alyuminiy",
        "Shisha",
        "Suv",
        "Mis (≈ 8900 kg/m³)"
      ],
      "answer": 3
    },
    {
      "q": "Massa 78 g, hajm 10 sm³ bo'lsa, zichlik?",
      "options": [
        "7,8 g/sm³",
        "0,13 g/sm³",
        "780 g/sm³",
        "78 g/sm³"
      ],
      "answer": 0
    },
    {
      "q": "Zichlik o'lchashda katta xato manbai qaysi?",
      "options": [
        "Hajmni noto'g'ri o'qish",
        "Suv rangi",
        "Xona yoritilishi",
        "Menzurka rangi"
      ],
      "answer": 0
    },
    {
      "q": "2 m³ betonning (2400 kg/m³) massasi?",
      "options": [
        "1200 kg",
        "2400 kg",
        "4800 kg",
        "480 kg"
      ],
      "answer": 2
    },
    {
      "q": "Suv zichligi taxminan qancha?",
      "options": [
        "100 kg/m³",
        "1000 kg/m³",
        "10 kg/m³",
        "10 000 kg/m³"
      ],
      "answer": 1
    }
  ],
  conclusion: "Tajribada jism massasi tarozida, hajmi esa suv siqib chiqarish usulida o'lchanib, ρ = m/V formulasi bilan zichlik aniqlandi. Natija jadvaldagi materiallar bilan solishtirilib, jism materiali taxmin qilindi. Hajmni o'lchash xatoligi asosiy xato manbai ekani ko'rindi. Usul qurilishda material sifatini nazorat qilish va yuklarni hisoblashda foydalidir.",
  sim: {
    intro: "Qiymatlarni o'zgartiring, natija avtomatik hisoblanadi.",
    inputs: [
      { id: 'm', label: 'Jism massasi m', unit: 'g', min: 5, max: 500, step: 1, value: 78 },
      { id: 'V1', label: "Suvning boshlang'ich hajmi V₁", unit: 'sm³', min: 20, max: 200, step: 1, value: 50 },
      { id: 'V2', label: 'Jism botirilgandan keyingi hajm V₂', unit: 'sm³', min: 21, max: 260, step: 0.5, value: 60 }
    ],
    compute: (v) => {
      const V = v.V2 - v.V1;
      if (V <= 0) {
        return {
          results: [{ label: 'Jism hajmi V', value: 0, unit: 'sm³', digits: 3 }],
          chart: { title: 'Massa va hajm', xLabel: 'V, sm³', yLabel: 'm, g', series: [{ name: 'm = ρV', points: [[0, 0], [1, 0]] }, { name: 'Joriy', points: [[0, v.m]] }] },
          note: "V₂ qiymati V₁ dan katta bo'lishi kerak."
        };
      }
      const rho = v.m / V; // g/sm3
      const rhoSI = rho * 1000; // kg/m3
      const mats = [['alyuminiy', 2700], ['shisha', 2500], ['temir (po\'lat)', 7800], ['mis', 8900], ['suv', 1000], ['yog\'och', 600]];
      let best = mats[0], bd = Infinity;
      for (const m of mats) { const d = Math.abs(m[1] - rhoSI) / m[1]; if (d < bd) { bd = d; best = m; } }
      const Vmax = Math.max(V * 1.5, 1);
      const pts = [];
      for (let i = 0; i <= 20; i++) { const x = Vmax * i / 20; pts.push([+x.toFixed(3), +(rho * x).toFixed(3)]); }
      return {
        results: [
          { label: 'Jism hajmi V', value: V, unit: 'sm³', digits: 3 },
          { label: 'Zichlik ρ', value: rho, unit: 'g/sm³', digits: 3 },
          { label: 'Zichlik ρ (SI)', value: rhoSI, unit: 'kg/m³', digits: 4 }
        ],
        chart: {
          title: 'Massaning hajmga bog\'liqligi (qiyalik = ρ)', xLabel: 'V, sm³', yLabel: 'm, g',
          series: [{ name: 'm = ρ·V', points: pts }, { name: 'Joriy', points: [[+V.toFixed(3), +v.m]] }]
        },
        note: bd < 0.1 ? `Eng yaqin material: ${best[0]} (≈ ${best[1]} kg/m³).` : "Jadvaldagi materiallardan birortasiga aniq mos kelmadi; o'lchashlarni tekshiring."
      };
    }
  }
};
