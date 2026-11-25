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
    'Beqaror yadrolarning o\'z-o\'zidan parchalanib, ionlashtiruvchi nurlanish chiqarishi radioaktivlik deyiladi. Nurlanish turlari: α (geliy yadrolari), β (elektron yoki pozitronlar) va γ (yuqori energiyali elektromagnit nurlanish).',
    'Geyger–Myuller hisoblagichida zarracha gazni ionlashtiradi, elektr maydonida hosil bo\'lgan zaryadlar qisqa impuls beradi. Sanash tezligi n = N/t, sof tezlik n_s = n − n_fon.',
    'Nuqtaviy manba intensivligi masofa kvadratiga teskari proporsional (I ~ 1/r²), to\'siqdan o\'tganda esa eksponensial susayadi: I = I₀·e^(−μx). Parchalanish qonuni: N = N₀·e^(−λt), T½ = ln2/λ.',
  ],
  formulas: [
    { name: 'Sanash tezligi', expr: 'n = N / t', note: 'N — impulslar soni, t — vaqt (s)' },
    { name: 'Sof sanash tezligi', expr: 'n_s = n − n_fon', note: 'fon nurlanishi ayiriladi' },
    { name: 'Masofa qonuni', expr: 'n_s(r) = n₀·(r₀/r)²', note: 'nuqtaviy manba uchun' },
    { name: 'To\'siqda susayish', expr: 'n = n₀·e^(−μx)', note: 'μ — susayish koeffitsiyenti (m⁻¹), x — qalinlik (m)' },
    { name: 'Parchalanish qonuni', expr: 'N = N₀·e^(−λt),  T½ = ln2 / λ', note: 'aktivlik A = λN, birligi Bq' },
  ],
  procedure: [
    'Virtual laboratoriyani ishga tushiring.',
    'Manbasiz holda fon nurlanishini t = 60 s davomida o\'lchang va n_fon ni toping.',
    'Manbani detektordan belgilangan masofaga joylashtiring.',
    '"Start" tugmasini bosib, 60 s davomida impulslar soni N ni qayd eting.',
    'n = N/t va n_s = n − n_fon ni hisoblang.',
    'Masofani 5, 10, 15, 20, 25 sm qilib o\'lchashni takrorlang.',
    'Manba va detektor orasiga turli materiallar qo\'yib, sanashni solishtiring.',
    'Natijalarni jadvalga kiriting, n_s(r) grafigini tuzing.',
  ],
  questions: [
    'Radioaktivlik hodisasi nima?',
    'α, β va γ nurlanishlar qanday zarrachalardan iborat?',
    'Geyger–Myuller hisoblagichi qanday ishlaydi?',
    'Nima uchun fon nurlanishi hisobga olinadi?',
    'Masofa ortganda sanash tezligi qanday o\'zgaradi?',
    'Aktivlik nima va birligi qanday?',
    'Radiatsiyadan himoyalanish usullarini ayting.',
  ],
  quiz: [
    { q: 'Radioaktiv nurlanishni qayd etishda eng ko\'p ishlatiladigan asbob:', options: ['Geyger–Myuller hisoblagichi', 'Voltmetr', 'Ampermetr', 'Ommetr'], answer: 0 },
    { q: 'Alfa nurlanishning tarkibi:', options: ['Elektronlar', 'Geliy yadrolari', 'Fotonlar', 'Neytronlar'], answer: 1 },
    { q: 'Gamma nurlanish nima?', options: ['Elektronlar oqimi', 'Protonlar oqimi', 'Yuqori energiyali elektromagnit nurlanish', 'Neytronlar oqimi'], answer: 2 },
    { q: 'Radioaktiv manba aktivligining SI birligi:', options: ['Volt (V)', 'Amper (A)', 'Om (Ω)', 'Bekkerel (Bq)'], answer: 3 },
    { q: 'Radioaktiv nurlanishdan himoyalanishning asosiy usullaridan biri:', options: ['Himoya ekranlaridan foydalanish', 'Tokni oshirish', 'Bosimni oshirish', 'Haroratni pasaytirish'], answer: 0 },
  ],
  conclusion: 'Fon nurlanishi ayirilgach, manbaning sof sanash tezligi aniqlandi. Masofa ortishi bilan sanash tezligi 1/r² qonuniga muvofiq kamayishi, to\'siq qalinligi ortishi bilan eksponensial susayishi kuzatildi.',
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
