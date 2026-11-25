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
    'Berk kontur orqali o\'tuvchi magnit oqimi o\'zgarsa, konturda induksiya EYuK paydo bo\'ladi. Magnit oqimi Φ = B·S·cosα, bunda B — magnit induksiya, S — kontur yuzi, α — B va kontur normali orasidagi burchak.',
    'Faradey qonuniga ko\'ra, N o\'ramli g\'altakda induksiya EYuK ε = −N·ΔΦ/Δt. Minus ishorasi Lens qoidasini bildiradi: induksiya toki o\'zini hosil qilgan o\'zgarishga qarshilik qiladi.',
    'Oqim tez o\'zgarsa (Δt kichik), EYuK katta bo\'ladi. Bu hodisa generatorlar, transformatorlar va metall detektorlarida qo\'llanadi.',
  ],
  formulas: [
    { name: 'Magnit oqimi', expr: 'Φ = B·S·cosα', note: 'birligi Veber (Vb); B — Tl, S — m²' },
    { name: 'Faradey qonuni', expr: 'ε = −N·ΔΦ/Δt', note: 'N — o\'ramlar soni, Δt — vaqt oralig\'i (s)' },
    { name: 'Oqim o\'zgarishi', expr: 'ΔΦ = B·S·(cosα₂ − cosα₁)', note: 'B va S o\'zgarmas bo\'lganda' },
    { name: 'Induksiya toki', expr: 'I = |ε| / R', note: 'R — kontur qarshiligi' },
  ],
  procedure: [
    'G\'altakni o\'lchash asbobiga ulang va o\'ramlar sonini N belgilang.',
    'Magnit induksiyasi B va g\'altak yuzi S ni kiriting.',
    'Boshlang\'ich burchak α ni o\'rnating va oqim Φ ni hisoblang.',
    'Magnitni g\'altakka Δt vaqt ichida kiriting va ε ni o\'lchang.',
    'Δt ni o\'zgartirib, ε ning Δt ga bog\'liqligini kuzating.',
    'N ni o\'zgartirib, ε ning o\'ramlar soniga to\'g\'ri proporsionalligini tekshiring.',
    'Natijalarni jadvalga kiriting va ε = −N·ΔΦ/Δt formula bilan solishtiring.',
  ],
  questions: [
    'Elektromagnit induksiya hodisasi nima?',
    'Magnit oqimi qanday aniqlanadi va birligi nima?',
    'Faradey qonunini ta\'riflang.',
    'Lens qoidasi nimani bildiradi?',
    'EYuK o\'ramlar soniga qanday bog\'liq?',
    'Oqim o\'zgarish tezligi oshsa, EYuK qanday o\'zgaradi?',
    'Elektromagnit induksiya qayerlarda qo\'llanadi?',
  ],
  quiz: [
    { q: 'Magnit oqimining formulasi qaysi?', options: ['Φ = B·S·cosα', 'Φ = B/S', 'Φ = B·S·sinα·N', 'Φ = S/B'], answer: 0 },
    { q: 'Magnit oqimining SI birligi:', options: ['Tesla', 'Veber', 'Genri', 'Amper'], answer: 1 },
    { q: 'Faradey qonuniga ko\'ra N o\'ramli g\'altakdagi EYuK:', options: ['ε = N·Φ', 'ε = Φ/Δt', 'ε = −N·ΔΦ/Δt', 'ε = B·S'], answer: 2 },
    { q: 'Induksiya toki yo\'nalishini qaysi qoida aniqlaydi?', options: ['Om qonuni', 'Kirxgof qoidasi', 'Joul–Lens qonuni', 'Lens qoidasi'], answer: 3 },
    { q: 'Magnit oqimi tezroq o\'zgarsa induksiya EYuK:', options: ['Ortadi', 'Kamayadi', 'O\'zgarmaydi', 'Nolga teng bo\'ladi'], answer: 0 },
  ],
  conclusion: 'Magnit oqimi o\'zgarganda g\'altakda EYuK paydo bo\'lishi kuzatildi. EYuK o\'ramlar soni N va oqim o\'zgarish tezligi ΔΦ/Δt ga to\'g\'ri proporsionalligi Faradey qonuniga mos keldi.',
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
