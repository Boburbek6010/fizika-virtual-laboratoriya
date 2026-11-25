export default {
  id: 17,
  slug: 'elektromagnit-induksiya',
  title: 'Elektromagnit induksiya',
  category: 'Elektr',
  emoji: '🧲',
  short: 'Magnit oqimi o\'zgarganda g\'altakda hosil bo\'ladigan induksiya EYuK ni Faradey qonuni bo\'yicha o\'rganish.',
  aim: [
    'Elektromagnit induksiya hodisasini kuzatish',
    'Faradey qonuni ε = −N·ΔΦ/Δt ni tekshirish',
    'Magnit oqimining B, S va burchak α ga bog\'liqligini aniqlash',
    'Lens qoidasi yordamida induksiya toki yo\'nalishini aniqlash',
  ],
  equipment: [
    'G\'altak (N o\'ramli)',
    'Doimiy magnit yoki elektromagnit',
    'Milliampermetr / voltmetr',
    'Sekundomer',
    'Burchak o\'lchagich',
  ],
  theory: [
    "Magnit oqimi Φ = B·S·cosα kontur yuzasidan o'tuvchi magnit maydon chiziqlari miqdorini ifodalaydi. B — magnit induksiya (Tl), S — kontur yuzi (m²), α — B vektori bilan yuza normali orasidagi burchak. Birligi — Veber (1 Vb = 1 Tl·m²).",
    "Faradey ochgan elektromagnit induksiya hodisasiga ko'ra, yopiq kontur orqali o'tuvchi oqim o'zgarganda unda EYuK paydo bo'ladi: ε = −N·ΔΦ/Δt. N o'ramli g'altakda har bir o'ramdagi EYuK qo'shiladi, shuning uchun EYuK N ga proporsional.",
    "Oqimni uch usulda o'zgartirish mumkin: B ni o'zgartirish (elektromagnit toki), S ni o'zgartirish (kontur shaklini) yoki α ni o'zgartirish (konturni aylantirish). Aylantirilganda generatorda sinusoidal o'zgaruvchan EYuK hosil bo'ladi.",
    "Lens qoidasiga ko'ra, induksiya toki shunday yo'nalganki, uning magnit maydoni oqim o'zgarishiga qarshilik qiladi. Formuladagi minus ishora shuni bildiradi. Bu energiyaning saqlanish qonunining natijasidir.",
    "Induksiya toki I = |ε|/R formulasi bilan topiladi. Kontur qarshiligi kichik bo'lsa, bir xil EYuK da tok katta bo'ladi; massiv metall detallarda hosil bo'ladigan Fuko toklari ularni qizdiradi va tormozlaydi.",
    "Qurilishda bu hodisa kran va lift elektr yuritmalarida, generatorlarda, transformatorlarda, magnit tormozlarda va induksion datchiklarda ishlatiladi. Muhandis N, B va Δt ni o'zgartirib, EYuK ni talab qilingan darajaga moslaydi."
  ],
  formulas: [
    { name: 'Magnit oqimi', expr: 'Φ = B·S·cosα', note: 'birligi Veber (Vb); B — Tl, S — m²' },
    { name: 'Faradey qonuni', expr: 'ε = −N·ΔΦ/Δt', note: 'N — o\'ramlar soni, Δt — vaqt oralig\'i (s)' },
    { name: 'Oqim o\'zgarishi', expr: 'ΔΦ = B·S·(cosα₂ − cosα₁)', note: 'B va S o\'zgarmas bo\'lganda' },
    { name: 'Induksiya toki', expr: 'I = |ε| / R', note: 'R — kontur qarshiligi' },
  ],
  procedure: [
    "Virtual g'altak parametrlarini tanlang: o'ramlar soni N, yuz S, magnit induksiya B.",
    "Birliklarni SI ga o'tkazing: S ni sm² dan m² ga, B ni mTl dan Tl ga.",
    "Boshlang'ich burchak α ni o'rnating va Φ = B·S·cosα ni hisoblang.",
    "Oqim o'zgarish vaqti Δt ni o'rnating (masalan, 0,2 s).",
    "Simulyatsiyada EYuK ε ni o'qing va qo'lda ε = N·|ΔΦ|/Δt bilan solishtiring.",
    "N ni 100, 200, 400 qilib o'zgartiring va EYuK N ga proporsional ekanini tekshiring.",
    "Δt ni 0,05; 0,1; 0,2; 0,5 s qilib o'zgartiring va ε Δt ga teskari proporsional ekanini aniqlang.",
    "α ni 0°, 30°, 60° qilib o'zgartirib, boshlang'ich oqim va EYuK o'zgarishini kuzating.",
    "Kontur qarshiligi R bo'lsa, I = ε/R toki hisoblanadi; Lens qoidasi bo'yicha yo'nalishini belgilang.",
    "Natijalarni jadvalga kiriting, ε(Δt) grafigini tuzing va xulosa yozing."
  ],
  questions: [
    "Magnit oqimi nima va qanday birlikda o'lchanadi?",
    "Faradey qonunini yozing; minus ishora nimani bildiradi?",
    "Induksiya EYuK qaysi kattaliklarga bog'liq?",
    "Lens qoidasini ta'riflang va energiya saqlanishi bilan bog'lang.",
    "α burchak qanday aniqlanadi va u oqimga qanday ta'sir qiladi?",
    "O'ramlar soni ikki baravar ortsa EYuK qanday o'zgaradi?",
    "Nima uchun o'zgarmas magnit maydonda tinch turgan g'altakda EYuK hosil bo'lmaydi?",
    "Fuko toklari nima va qurilishda ular qanday ahamiyatga ega?",
    "Lift yoki kran generator rejimida qanday energiya qaytaradi?",
    "Induksiya tokini topish uchun qaysi formulalar ketma-ketligi kerak?"
  ],
  quiz: [
    {
      "q": "Magnit oqimining SI birligi qaysi?",
      "options": [
        "Tesla",
        "Veber",
        "Genri",
        "Amper"
      ],
      "answer": 1
    },
    {
      "q": "Faradey qonuniga ko'ra EYuK nimaga proporsional?",
      "options": [
        "Oqimning o'zgarish tezligiga",
        "Oqimning o'zgarmas qiymatiga",
        "Kontur qarshiligiga",
        "Kontur massasiga"
      ],
      "answer": 0
    },
    {
      "q": "Oqim o'zgarmasa induksiya EYuK:",
      "options": [
        "Maksimal bo'ladi",
        "Nolga teng bo'ladi",
        "Ikki baravar ortadi",
        "Manfiy bo'ladi"
      ],
      "answer": 1
    },
    {
      "q": "Lens qoidasi qaysi saqlanish qonunining natijasi?",
      "options": [
        "Impuls",
        "Zaryad",
        "Energiya",
        "Massa"
      ],
      "answer": 2
    },
    {
      "q": "Φ = B·S·cosα da α qaysi burchak?",
      "options": [
        "B va S orasidagi",
        "B va yuza normali orasidagi",
        "S va tok orasidagi",
        "B va tezlik orasidagi"
      ],
      "answer": 1
    },
    {
      "q": "N = 100, ΔΦ = 0,02 Vb, Δt = 0,1 s bo'lsa |ε| nechaga teng?",
      "options": [
        "0,2 V",
        "2 V",
        "200 V",
        "20 V"
      ],
      "answer": 3
    },
    {
      "q": "Faradey formulasidagi minus ishora nimani bildiradi?",
      "options": [
        "EYuK manfiy ekanini",
        "Tok yo'qligini",
        "Induksiya toki oqim o'zgarishiga qarshi yo'nalishini",
        "Qarshilik ortishini"
      ],
      "answer": 2
    },
    {
      "q": "O'ramlar soni 3 baravar ortsa (boshqalar o'zgarmas) EYuK:",
      "options": [
        "3 baravar ortadi",
        "3 baravar kamayadi",
        "O'zgarmaydi",
        "9 baravar ortadi"
      ],
      "answer": 0
    }
  ],
  conclusion: "Virtual tajribada Φ = B·S·cosα va ε = −N·ΔΦ/Δt qonunlari tekshirildi. EYuK o'ramlar soni N ga to'g'ri, vaqt Δt ga teskari proporsional ekani aniqlandi. Lens qoidasi induksiya toki yo'nalishini belgiladi. Bu qonuniyatlar kran va lift yuritmalari hamda generatorlarni hisoblashning asosidir.",
  learn: [
    "Magnit oqimi Φ = B·S·cosα va uning o'lchov birligini (Veber)",
    "Faradey qonuni ε = −N·ΔΦ/Δt bo'yicha induksiya EYuK ni hisoblashni",
    "Lens qoidasi yordamida induksiya toki yo'nalishini aniqlashni",
    "EYuK ning o'ramlar soni, oqim va vaqtga bog'liqligini"
  ],
  civil: [
    "Kran va lift dvigatellarida, generatorlarda magnit oqimi o'zgarishi hisobiga EYuK hosil bo'ladi; tormozlashda energiya tarmoqqa qaytariladi (rekuperatsiya).",
    "Lift kabinasi tezlashganda va to'xtaganda g'altak oqimi o'zgaradi; induksion datchiklar qavat va tezlikni aniqlaydi.",
    "Qurilish maydonida kuchli tok o'tadigan kabel yaqinidagi metall konstruksiyalarda induksion toklar (Fuko toklari) qiziydi, bu hisobga olinadi.",
    "Induksion cho'g'lanish va transformatorlar payvandlash apparatlarining asosi bo'lib, ularning o'ramlar soni EYuK ni belgilaydi."
  ],
  keyFact: "Induksiya EYuK oqimning o'zi bilan emas, uning o'zgarish tezligi ΔΦ/Δt bilan aniqlanadi: o'zgarmas kuchli magnit maydon g'altakda EYuK hosil qilmaydi.",
  mistakes: [
    "S ni sm² da formulaga qo'yish: yuzani m² ga (1 sm² = 10⁻⁴ m²), B ni Tl ga (1 mTl = 10⁻³ Tl) o'tkazing.",
    "α burchakni normal bilan emas, maydon chiziqlari bilan o'lchash: Φ = B·S·cosα da α — B va yuza normali orasidagi burchak.",
    "Minus ishorani tashlab yuborish: u Lens qoidasini (induksiya toki oqim o'zgarishiga qarshilik qilishini) ifodalaydi."
  ],
  glossary: [
    {
      "t": "Magnit oqimi",
      "d": "Φ = B·S·cosα, kontur orqali o'tuvchi maydon chiziqlari miqdori, birligi Vb"
    },
    {
      "t": "Induksiya EYuK",
      "d": "kontur orqali oqim o'zgarganda unda paydo bo'ladigan elektr yurituvchi kuch"
    },
    {
      "t": "Lens qoidasi",
      "d": "induksiya toki o'zi hosil qilgan oqim bilan sababni susaytirishga intiladi"
    },
    {
      "t": "Veber",
      "d": "magnit oqimi birligi, 1 Vb = 1 Tl·m²"
    },
    {
      "t": "Fuko toklari",
      "d": "massiv o'tkazgichda o'zgaruvchan oqim hosil qilgan uyurmaviy toklar"
    }
  ],
  tasks: [
    {
      "q": "N = 500 o'ramli g'altak, B = 0,2 Tl, S = 0,02 m². Oqim α = 0° dan 90° gacha (nolgacha) Δt = 0,1 s da o'zgaradi. Induksiya EYuK ni toping.",
      "answer": 20,
      "unit": "V",
      "tol": 0.03,
      "hint": "Φ₁ = B·S, Φ₂ = 0; ε = N·|ΔΦ|/Δt.",
      "solution": "Φ₁ = 0,2·0,02 = 4·10⁻³ Vb; ε = 500·4·10⁻³/0,1 = 20 V."
    },
    {
      "q": "Lift motori g'altagida (N = 100) oqim 0,05 Vb dan 0,02 Vb gacha 0,5 s da kamaydi. EYuK ning moduli necha volt?",
      "answer": 6,
      "unit": "V",
      "tol": 0.03,
      "hint": "ΔΦ = 0,03 Vb.",
      "solution": "|ε| = 100·0,03/0,5 = 6 V."
    },
    {
      "q": "N = 50, B = 0,5 Tl, S = 100 cm². Burchak α = 60° dan 90° gacha Δt = 0,05 s da o'zgaradi. EYuK moduli necha volt?",
      "answer": 2.5,
      "unit": "V",
      "tol": 0.03,
      "hint": "S = 0,01 m²; Φ₁ = B·S·cos60°.",
      "solution": "Φ₁ = 0,5·0,01·0,5 = 2,5·10⁻³ Vb; ε = 50·2,5·10⁻³/0,05 = 2,5 V."
    },
    {
      "q": "N = 200 o'ramli kontur qarshiligi R = 10 Ω. Oqim 3 mVb ga 0,03 s ichida o'zgaradi. Induksiya toki necha amper?",
      "answer": 2,
      "unit": "A",
      "tol": 0.03,
      "hint": "Avval ε = N·ΔΦ/Δt, so'ng I = ε/R.",
      "solution": "ε = 200·0,003/0,03 = 20 V; I = 20/10 = 2 A."
    }
  ],
  sim: {
    intro: 'Qiymatlarni o\'zgartiring: g\'altakning oqimi Δt vaqt ichida α burchakdan 90° gacha (oqim nolgacha) o\'zgaradi.',
    inputs: [
      { id: 'N', label: 'O\'ramlar soni N', unit: '', min: 1, max: 1000, step: 1, value: 200 },
      { id: 'B', label: 'Magnit induksiya B', unit: 'mTl', min: 1, max: 500, step: 1, value: 100 },
      { id: 'S', label: 'G\'altak yuzi S', unit: 'cm²', min: 1, max: 200, step: 1, value: 50 },
      { id: 'alpha', label: 'Boshlang\'ich burchak α', unit: '°', min: 0, max: 90, step: 1, value: 0 },
      { id: 'dt', label: 'Vaqt oralig\'i Δt', unit: 's', min: 0.01, max: 2, step: 0.01, value: 0.2 },
    ],
    compute: (v) => {
      const B = v.B * 1e-3, S = v.S * 1e-4, a = v.alpha * Math.PI / 180;
      const phi1 = B * S * Math.cos(a);
      const phi2 = 0;
      const dPhi = phi2 - phi1;
      const emf = -v.N * dPhi / v.dt;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const dtt = 0.05 + (2 - 0.05) * i / 40;
        pts.push([+dtt.toFixed(3), +(v.N * phi1 / dtt).toFixed(5)]);
      }
      return {
        results: [
          { label: 'Boshlang\'ich oqim Φ', value: phi1 * 1000, unit: 'mVb', digits: 3 },
          { label: 'Oqim o\'zgarishi ΔΦ', value: dPhi * 1000, unit: 'mVb', digits: 3 },
          { label: 'Induksiya EYuK ε', value: emf, unit: 'V', digits: 3 },
        ],
        chart: {
          title: 'Induksiya EYuKining Δt ga bog\'liqligi (joriy N, B, S, α)',
          xLabel: 'Δt, s',
          yLabel: 'ε, V',
          series: [
            { name: 'ε(Δt)', points: pts },
            { name: 'Joriy', points: [[v.dt, emf]] },
          ],
        },
        note: emf > 0 ? 'EYuK > 0: oqim kamaymoqda, induksiya toki oqimni saqlashga intiladi (Lens qoidasi).' : 'Oqim o\'zgarmaydi — EYuK hosil bo\'lmaydi.',
      };
    },
  },
};
