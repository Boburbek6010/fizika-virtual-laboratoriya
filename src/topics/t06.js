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
  theory: [
    'Qattiq jismning aylanma harakatdagi inertlik o‘lchovi inersiya momenti deyiladi. Moddiy nuqta uchun I = m·r², qattiq jism uchun esa I = Σ mᵢ·rᵢ². SI birligi — kg·m².',
    'Aylanma harakat dinamikasining asosiy tenglamasi M = I·ε. Kuch momenti M = F·r, ε esa burchak tezlanish (rad/s²). Demak, tajribada I = M/ε.',
    'Massa aylanish o‘qidan qanchalik uzoq joylashsa, inersiya momenti shunchalik katta bo‘ladi: bir xil m va R da halqa (I = mR²) diskka (I = ½mR²) qaraganda ikki marta «og‘ir» aylanadi.',
    'Qurilishda kran, ekskavator, shamol turbinasi va mexanizmlarning aylanuvchi qismlarini hisoblashda inersiya momenti muhim.'
  ],
  formulas: [
    { name: 'Moddiy nuqta', expr: 'I = m·r²', note: 'r — o‘qqacha masofa' },
    { name: 'Asosiy tenglama', expr: 'M = I·ε', note: 'ε — burchak tezlanish' },
    { name: 'Disk / yaxlit silindr', expr: 'I = ½·m·R²' },
    { name: 'Yupqa halqa', expr: 'I = m·R²' },
    { name: 'Yaxlit shar', expr: 'I = (2/5)·m·R²' },
    { name: 'Sterjen (markazdan)', expr: 'I = m·l² / 12' },
    { name: 'Tajribaviy qiymat', expr: 'I = F·r / ε' }
  ],
  procedure: [
    'Virtual laboratoriyani ishga tushiring va jismni (disk, halqa, shar yoki sterjen) tanlang.',
    'Jism massasi m va radiusi R ni o‘lchang.',
    'Jismni aylanish o‘qiga o‘rnating va shkiv radiusi r ni belgilang.',
    'Ip uchiga M massali yukni osing.',
    '“Boshlash” tugmasini bosib, yuk tushishi natijasida jismning aylanishini kuzating.',
    'Burchak tezlanish ε ni o‘lchang, ip tarangligi F va M = F·r ni hisoblang.',
    'Tajribaviy I = M/ε va nazariy I ni hisoblab, jadvalga yozing.',
    'Tajribani boshqa shakldagi jismlar uchun takrorlang va xulosa chiqaring.'
  ],
  questions: [
    'Inersiya momenti deb nimaga aytiladi va uning SI birligi qanday?',
    'Moddiy nuqtaning inersiya momenti qanday aniqlanadi?',
    'Aylanma harakat dinamikasining asosiy tenglamasini yozing.',
    'Disk va halqaning inersiya momentlari bir xil m va R da nima uchun farq qiladi?',
    'Jism radiusi ikki marta oshirilsa, uning inersiya momenti necha marta o‘zgaradi?',
    'Inersiya momenti katta jismning burchak tezlanishi qanday bo‘ladi?',
    'Tajribaviy va nazariy qiymatlar orasidagi farq qaysi sabablardan kelib chiqadi?'
  ],
  quiz: [
    { q: 'Inersiya momenti nimani tavsiflaydi?', options: ['Jismning aylanishga qarshiligini', 'Jismning massasini', 'Jismning hajmini', 'Jismning zichligini'], answer: 0 },
    { q: 'Inersiya momentining SI birligi:', options: ['kg·m²', 'kg', 'N·m', 'm²'], answer: 0 },
    { q: 'Moddiy nuqta uchun inersiya momenti formulasi:', options: ['I = mr²', 'I = mv', 'I = ma', 'I = Fr'], answer: 0 },
    { q: 'Diskning markaziy o‘qiga nisbatan inersiya momenti:', options: ['I = ½mR²', 'I = mR²', 'I = ⅓mR³', 'I = 2mR²'], answer: 0 },
    { q: 'Radius ikki marta ortsa (massa o‘zgarmasa), inersiya momenti:', options: ['To‘rt marta ortadi', 'Ikki marta ortadi', 'O‘zgarmaydi', 'Kamayadi'], answer: 0 }
  ],
  conclusion: 'Tajribada aniqlangan inersiya momenti nazariy qiymatga yaqin chiqdi, bu M = I·ε qonuni to‘g‘riligini tasdiqlaydi. Bir xil massa va radiusli jismlardan massasi o‘qdan uzoqroq joylashgani (halqa) eng katta inersiya momentiga ega bo‘ldi. Farq asosan shkiv va o‘q ishqalanishi hamda o‘lchash xatoliklaridan kelib chiqadi.',
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
