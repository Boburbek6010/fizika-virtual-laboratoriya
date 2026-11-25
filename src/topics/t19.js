export default {
  id: 19,
  slug: 'yorug-lik-otkazuvchanligi',
  title: 'Jismlarning yorug\'lik o\'tkazuvchanligini aniqlash',
  category: 'Optika va yadro',
  emoji: '💡',
  short: 'Shaffof va yarim shaffof jismlarning yorug\'likni o\'tkazish koeffitsiyentini Buger–Lambert qonuni bo\'yicha aniqlash.',
  aim: [
    'Jismlarning yorug\'lik o\'tkazish xossasini o\'rganish',
    'Tushayotgan va o\'tgan yorug\'lik intensivliklarini solishtirish',
    'Yorug\'lik o\'tkazuvchanlik koeffitsiyenti τ ni hisoblash',
    'Buger–Lambert qonunini tekshirish va τ(d) grafigini qurish',
  ],
  equipment: [
    'Yorug\'lik manbai',
    'Kollimator',
    'Tekshiriladigan namunalar (shisha, pleksiglas, polikarbonat, plyonka)',
    'Fotodatchik yoki lyuksmetr',
    'Qalinlik slayderi',
  ],
  theory: [
    'Yorug\'lik jismga tushganda uning bir qismi qaytadi, bir qismi yutiladi, qolgani o\'tadi: I₀ = I_r + I_a + I_t. Yorug\'lik o\'tkazuvchanlik koeffitsiyenti τ = I_t/I₀ bo\'lib, 0 ≤ τ ≤ 1.',
    'Yutuvchi muhitda intensivlik qalinlik bilan eksponensial kamayadi (Buger–Lambert qonuni): I = I₀·e^(−μd). Bu yerda μ — yutilish koeffitsiyenti (m⁻¹), d — qalinlik (m).',
    'Qurilishda oyna va tom yopmalarini tanlashda tabiiy yoritilganlikni hisoblash uchun τ muhim ko\'rsatkichdir.',
  ],
  formulas: [
    { name: 'O\'tkazuvchanlik koeffitsiyenti', expr: 'τ = I_t / I₀', note: 'foizda: τ% = τ·100%' },
    { name: 'Buger–Lambert qonuni', expr: 'I = I₀·e^(−μd)', note: 'μ — yutilish koeffitsiyenti (m⁻¹), d — qalinlik (m)' },
    { name: 'O\'tkazuvchanlik', expr: 'τ = e^(−μd)', note: 'qalinlik ortsa τ kamayadi' },
    { name: 'Yutilish koeffitsiyenti', expr: 'μ = −(1/d)·ln(I/I₀)', note: 'o\'lchangan I dan μ ni topish' },
  ],
  procedure: [
    'Yorug\'lik manbaini yoqing.',
    'Namunasiz holda fotodatchik bilan boshlang\'ich intensivlik I₀ ni o\'lchang.',
    'Namunani yorug\'lik yo\'liga joylashtiring va materialini tanlang.',
    'Namuna qalinligi d ni belgilang.',
    'O\'tgan yorug\'lik intensivligi I_t ni o\'lchang.',
    'τ = I_t/I₀ va τ% ni hisoblang.',
    'Qalinlikni o\'zgartirib tajribani takrorlang, turli materiallar uchun ham bajaring.',
    'τ = f(d) grafigini tuzing va μ ni aniqlang.',
  ],
  questions: [
    'Yorug\'lik o\'tkazuvchanligi nima?',
    'Energiya balansi tenglamasini yozing.',
    'O\'tkazuvchanlik koeffitsiyenti qanday aniqlanadi va qanday qiymatlar oladi?',
    'Buger–Lambert qonunini ta\'riflang.',
    'Qalinlik ortsa τ qanday o\'zgaradi?',
    'Shaffof, yarim shaffof va shaffof bo\'lmagan jismlarga misollar keltiring.',
    'Qurilishda yorug\'lik o\'tkazuvchanlikni bilish nima uchun muhim?',
  ],
  quiz: [
    { q: 'Yorug\'lik o\'tkazuvchanligi nima?', options: ['Jismning yorug\'likni o\'zidan o\'tkazish xossasi', 'Yorug\'likni qaytarish xossasi', 'Yorug\'likni yutish xossasi', 'Yorug\'likni sindirish xossasi'], answer: 0 },
    { q: 'Yarim shaffof jismga misol:', options: ['Po\'lat', 'Xira shisha', 'Alyuminiy', 'G\'isht'], answer: 1 },
    { q: 'Yorug\'lik o\'tkazuvchanligi qanday kattalik bilan baholanadi?', options: ['Zichlik', 'Massa', 'O\'tkazuvchanlik koeffitsiyenti', 'Bosim'], answer: 2 },
    { q: 'Yorug\'lik o\'tkazuvchanligini o\'lchashda qaysi asbob ishlatiladi?', options: ['Voltmetr', 'Ampermetr', 'Termometr', 'Lyuksmetr (fotometr)'], answer: 3 },
    { q: 'Qurilishda yorug\'lik o\'tkazuvchanligini bilish nima uchun muhim?', options: ['Tabiiy yoritishni loyihalash uchun', 'Elektr tokini hisoblash uchun', 'Issiqlik sig\'imini aniqlash uchun', 'Bosimni hisoblash uchun'], answer: 0 },
  ],
  conclusion: 'Namuna orqali o\'tgan yorug\'lik intensivligi o\'lchanib, τ = I_t/I₀ hisoblandi. Qalinlik ortishi bilan o\'tkazuvchanlik eksponensial kamayishi (Buger–Lambert qonuni) tasdiqlandi.',
  sim: {
    intro: 'Namuna qalinligi va yutilish koeffitsiyentini o\'zgartiring, o\'tgan yorug\'lik avtomatik hisoblanadi.',
    inputs: [
      { id: 'I0', label: 'Tushayotgan yorug\'lik I₀', unit: 'lx', min: 100, max: 2000, step: 50, value: 1000 },
      { id: 'mu', label: 'Yutilish koeffitsiyenti μ', unit: 'm⁻¹', min: 1, max: 500, step: 1, value: 25 },
      { id: 'd', label: 'Namuna qalinligi d', unit: 'mm', min: 0.5, max: 50, step: 0.5, value: 10 },
    ],
    compute: (v) => {
      const d = v.d / 1000;
      const tau = Math.exp(-v.mu * d);
      const It = v.I0 * tau;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const dd = 0.5 + 49.5 * i / 40;
        pts.push([+dd.toFixed(2), +(v.I0 * Math.exp(-v.mu * dd / 1000)).toFixed(4)]);
      }
      return {
        results: [
          { label: 'O\'tgan yorug\'lik I_t', value: It, unit: 'lx', digits: 4 },
          { label: 'O\'tkazuvchanlik τ', value: tau, unit: '', digits: 3 },
          { label: 'O\'tkazuvchanlik τ%', value: tau * 100, unit: '%', digits: 3 },
        ],
        chart: {
          title: 'O\'tgan yorug\'lik intensivligining qalinlikka bog\'liqligi',
          xLabel: 'd, mm',
          yLabel: 'I_t, lx',
          series: [
            { name: 'I_t(d)', points: pts },
            { name: 'Joriy', points: [[v.d, It]] },
          ],
        },
        note: tau > 0.7 ? 'Namuna yuqori shaffoflikka ega.' : tau > 0.2 ? 'Yarim shaffof namuna.' : 'Yorug\'likning katta qismi yutiladi.',
      };
    },
  },
};
