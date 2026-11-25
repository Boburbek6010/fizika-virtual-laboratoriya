export default {
  id: 8, slug: 'tovush-tezligi', title: 'Havoda tovush tezligini rezonans usulida aniqlash',
  category: 'Tebranishlar va tovush', emoji: '🔊',
  short: 'Rezonans trubkasida ikki ketma-ket rezonans holatini topib, havodagi tovush tezligini aniqlang.',
  aim: [
    'Tovush to‘lqinlarining havoda tarqalishini o‘rganish',
    'Rezonans hodisasini kuzatish',
    'Tajriba natijalari asosida tovush tezligini aniqlash'
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Rezonans trubkasi va porshen', 'Tovush generatori', 'Kompyuter yoki mobil qurilma', 'Kalkulyator'],
  theory: [
    'Tovush — elastik muhitda tarqaluvchi mexanik to‘lqin. Uning tezligi v = λ·f, bunda λ — to‘lqin uzunligi, f — chastota.',
    'Bir uchi yopiq trubkada tovush turg‘un to‘lqin hosil qiladi. Havo ustuni uzunligi l = λ/4, 3λ/4, ... bo‘lganda rezonans yuz beradi va tovush eng baland eshitiladi.',
    'Ketma-ket ikki rezonans orasidagi masofa l₂ − l₁ = λ/2, shuning uchun λ = 2(l₂ − l₁) va v = 2f(l₂ − l₁). Bu usul trubka chetidagi tuzatmani yo‘qotadi.',
    'Havoda tovush tezligi haroratga bog‘liq: v ≈ 331,4 + 0,6·t (t — °C). 20 °C da v ≈ 343 m/s.'
  ],
  formulas: [
    { name: 'Tovush tezligi', expr: 'v = λ·f' },
    { name: 'To‘lqin uzunligi', expr: 'λ = 2·(l₂ − l₁)' },
    { name: 'Tajribaviy tezlik', expr: 'v = 2f·(l₂ − l₁)' },
    { name: 'Haroratga bog‘liqlik', expr: 'v ≈ 331,4 + 0,6·t', note: 't — °C da' }
  ],
  procedure: [
    'Virtual laboratoriyani ishga tushiring.',
    'Tovush generatorida chastotani (masalan, 500 Hz) tanlang.',
    'START tugmasini bosing.',
    'Porshenni sekin siljitib, tovush amplitudasi maksimal bo‘lgan birinchi holatni toping va l₁ ni yozing.',
    'Porshenni yana siljitib, ikkinchi rezonans l₂ ni toping.',
    'λ = 2(l₂ − l₁) va v = λ·f ni hisoblang.',
    'Tajribani 400, 500, 600, 700, 800 Hz chastotalarda takrorlang.',
    'Tezlikning o‘rtacha qiymatini nazariy qiymat bilan taqqoslang.'
  ],
  questions: [
    'Tovush deb nimaga aytiladi va u qanday muhitlarda tarqaladi?',
    'Tovush tezligi nimalarga bog‘liq?',
    'v = λ·f formulasidagi kattaliklarni tushuntiring.',
    'Rezonans hodisasi nima?',
    'Turg‘un to‘lqin qanday hosil bo‘ladi?',
    'Nima uchun ketma-ket ikki rezonans orasidagi masofa λ/2 ga teng?',
    'Xona haroratida havoda tovush tezligi taxminan qancha?'
  ],
  quiz: [
    { q: 'Tovush to‘lqinining tezligi qaysi ifoda bilan topiladi?', options: ['v = f·λ', 'v = f/λ', 'v = f + λ', 'v = f²·λ'], answer: 0 },
    { q: '0 °C da havoda tovush tezligi qancha?', options: ['331,4 m/s', '340 m/s', '300 m/s', '360 m/s'], answer: 0 },
    { q: 'Harorat 10 °C ga oshsa, tovush tezligi taxminan necha m/s ga ortadi?', options: ['6', '3', '0,6', '12'], answer: 0 },
    { q: 'Tovush chastotasi ortsa, havodagi tezlik:', options: ['O‘zgarmaydi', 'Kamayadi', 'Ortadi', 'Nolga teng bo‘ladi'], answer: 0 },
    { q: 'Ketma-ket ikki rezonans orasidagi masofa:', options: ['λ/2', 'λ', 'λ/4', '2λ'], answer: 0 }
  ],
  conclusion: 'Rezonans usulida aniqlangan tovush tezligi v = 2f(l₂ − l₁) nazariy qiymatga (≈343 m/s, 20 °C) yaqin chiqdi. Tezlik chastotaga bog‘liq emasligi, harorat ortishi bilan esa ortishi tasdiqlandi.',
  sim: {
    intro: 'Chastota va haroratni o‘zgartiring: rezonans holatlari va tovush tezligi avtomatik hisoblanadi.',
    inputs: [
      { id: 'f', label: 'Generator chastotasi', unit: 'Hz', min: 300, max: 1000, step: 10, value: 500 },
      { id: 'T', label: 'Havo harorati', unit: '°C', min: -10, max: 40, step: 1, value: 20 },
      { id: 'r', label: 'Trubka radiusi', unit: 'm', min: 0.01, max: 0.05, step: 0.001, value: 0.02 }
    ],
    compute: (v) => {
      const vs = 331.4 + 0.6 * v.T;
      const lam = vs / v.f;
      const e = 0.6 * v.r;
      const l1 = lam / 4 - e;
      const l2 = 3 * lam / 4 - e;
      const vexp = 2 * v.f * (l2 - l1);
      const k = 2 * Math.PI / lam;
      const amp = (L) => 1 / Math.sqrt(0.04 + Math.pow(Math.cos(k * (L + e)), 2));
      const A0 = amp(l1);
      const pts = [];
      for (let i = 0; i <= 60; i++) {
        const L = 0.01 + 1.0 * i / 60;
        pts.push([L, amp(L) / A0]);
      }
      return {
        results: [
          { label: 'Tovush tezligi (nazariy)', value: vs, unit: 'm/s', digits: 4 },
          { label: 'To‘lqin uzunligi λ', value: lam, unit: 'm', digits: 3 },
          { label: 'Birinchi rezonans l₁', value: l1, unit: 'm', digits: 3 },
          { label: 'Ikkinchi rezonans l₂', value: l2, unit: 'm', digits: 3 },
          { label: 'Tajribaviy v = 2f(l₂ − l₁)', value: vexp, unit: 'm/s', digits: 4 }
        ],
        chart: {
          title: 'Tovush amplitudasi va havo ustuni uzunligi', xLabel: 'l, m', yLabel: 'nisbiy amplituda',
          series: [{ name: 'Amplituda', points: pts }, { name: 'Joriy', points: [[l1, 1], [l2, amp(l2) / A0]] }]
        },
        note: 'Rezonanslar orasidagi masofa λ/2 = ' + (lam / 2).toFixed(3) + ' m.'
      };
    }
  }
};
