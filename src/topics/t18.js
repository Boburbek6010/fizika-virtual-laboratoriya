export default {
  id: 18,
  slug: 'linza-kamchiliklari',
  title: 'Linzaning kamchiliklarini o\'rganish',
  category: 'Optika va yadro',
  emoji: '🔍',
  short: 'Sferik va xromatik aberratsiyalarni virtual tajribada kuzatish va ularni kamaytirish usullarini tahlil qilish.',
  aim: [
    'Real linzadagi optik nuqsonlarni kuzatish',
    'Sferik aberratsiyaning diafragmaga bog\'liqligini o\'rganish',
    'Xromatik aberratsiyani Δf = |f_q − f_k| orqali miqdoriy baholash',
    'Aberratsiyalarni kamaytirish usullarini tahlil qilish',
  ],
  equipment: [
    'Yorug\'lik manbai',
    'Optik taglik',
    'Yig\'uvchi linza',
    'Ekran',
    'O\'zgaruvchan diafragma',
    'Rangli filtrlar (qizil, yashil, ko\'k)',
  ],
  theory: [
    'Ideal linzada nuqtaviy manbadan chiqqan nurlar bir nuqtada to\'planishi kerak. Real linzada geometrik shakl va dispersiya sababli tasvirda nuqsonlar paydo bo\'ladi: sferik va xromatik aberratsiya, koma, astigmatizm, maydon egriligi, distorsiya.',
    'Sferik aberratsiyada linzaning markaziy va chekka qismidan o\'tgan nurlar turli nuqtalarda fokuslanadi, tasvir xiralashadi. Diafragma bilan chekka nurlarni to\'sib, uni kamaytirish mumkin.',
    'Xromatik aberratsiya sindirish ko\'rsatkichi to\'lqin uzunligiga bog\'liqligidan (n = n(λ)) kelib chiqadi. Ko\'k nurlar kuchliroq sinadi, shuning uchun f_ko\'k < f_qizil. Kamaytirish uchun turli dispersiyali linzalardan tuzilgan axromatik sistema ishlatiladi.',
  ],
  formulas: [
    { name: 'Yupqa linza fokusi', expr: '1/f = (n − 1)·(1/R₁ + 1/R₂)', note: 'R₁, R₂ — sirt egrilik radiuslari (ikki tomonlama qavariq linza)' },
    { name: 'Xromatik aberratsiya', expr: 'Δf = |f_q − f_k|', note: 'qizil va ko\'k nurlar fokuslari farqi' },
    { name: 'Sferik aberratsiya (taxminiy)', expr: 'Δf_sf ≈ h² / f', note: 'h — nur balandligi (diafragma yarim diametri)' },
  ],
  procedure: [
    'Virtual laboratoriyani ishga tushiring va yig\'uvchi linzani tanlang.',
    'Parallel yorug\'lik nurlarini linzaga yo\'naltiring.',
    'Markaziy va chekka nurlarning kesishish nuqtalarini kuzating.',
    'Diafragma diametrini kamaytirib, tasvir o\'zgarishini baholang.',
    'Oq yorug\'lik manbaini tanlab, qizil, yashil va ko\'k nurlar fokusini aniqlang.',
    'Δf = |f_q − f_k| ni hisoblang.',
    'Obyektni o\'qdan chetga siljitib, koma va astigmatizmni kuzating.',
    'Natijalarni jadvalga kiriting.',
  ],
  questions: [
    'Linza aberratsiyasi nima?',
    'Sferik aberratsiya nima uchun yuzaga keladi va diafragma uni qanday kamaytiradi?',
    'Xromatik aberratsiyaning fizik sababi nima?',
    'Nima uchun turli rangdagi nurlarning fokus masofalari farq qiladi?',
    'Axromatik linza nima?',
    'Koma, astigmatizm va distorsiya qanday nuqsonlar?',
    'Aberratsiyani kamaytirish fotoapparat va teleskoplarda nima uchun muhim?',
  ],
  quiz: [
    { q: 'Linzaning kamchiligi nima?', options: ['Tasvirning ideal holatdan chetlanishi', 'Tasvirning kattalashishi', 'Yorug\'likning sinishi', 'Fokus masofasining o\'zgarishi'], answer: 0 },
    { q: 'Sferik aberratsiya nimadan kelib chiqadi?', options: ['Yorug\'likning qaytishidan', 'Linzaning chet va markaz qismidan o\'tgan nurlar turli nuqtada fokuslanishidan', 'Difraksiyadan', 'Interferensiyadan'], answer: 1 },
    { q: 'Xromatik aberratsiya sababi:', options: ['Linzaning qalinligi', 'Obyektning uzoqligi', 'Turli rangdagi nurlarning turlicha sinishi', 'Yorug\'lik intensivligi'], answer: 2 },
    { q: 'Xromatik aberratsiyani kamaytirish uchun nima ishlatiladi?', options: ['Tekis ko\'zgu', 'Prisma', 'Difraksion panjara', 'Axromatik linza'], answer: 3 },
    { q: 'Sferik aberratsiya natijasida tasvir:', options: ['Xiralashadi', 'Yorqinlashadi', 'Kattalashadi', 'Rangsiz bo\'ladi'], answer: 0 },
  ],
  conclusion: 'Real linzada sferik va xromatik aberratsiya mavjudligi ko\'rsatildi. Diafragmani kichraytirish sferik aberratsiyani kamaytirdi; qizil va ko\'k nurlar fokuslari farqi (Δf) xromatik aberratsiyani miqdoran baholadi.',
  sim: {
    intro: 'Linza radiusi, sindirish ko\'rsatkichlari va diafragmani o\'zgartiring (taxminiy model: ikki tomonlama qavariq yupqa linza).',
    inputs: [
      { id: 'R', label: 'Sirt egrilik radiusi R', unit: 'cm', min: 5, max: 40, step: 0.5, value: 20.5 },
      { id: 'nq', label: 'Qizil nur uchun n (650 nm)', unit: '', min: 1.4, max: 1.8, step: 0.001, value: 1.513 },
      { id: 'nk', label: 'Ko\'k nur uchun n (450 nm)', unit: '', min: 1.4, max: 1.8, step: 0.001, value: 1.532 },
      { id: 'h', label: 'Diafragma yarim diametri h', unit: 'mm', min: 1, max: 30, step: 1, value: 15 },
    ],
    compute: (v) => {
      const R = v.R / 100; // m
      const focus = (n) => R / (2 * (n - 1));
      const fq = focus(v.nq), fk = focus(v.nk);
      const df = Math.abs(fq - fk);
      const fm = (fq + fk) / 2;
      const h = v.h / 1000;
      const sph = h * h / fm;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const hh = (1 + 29 * i / 40) / 1000;
        pts.push([+(hh * 1000).toFixed(2), +(hh * hh / fm * 1000).toFixed(4)]);
      }
      return {
        results: [
          { label: 'Qizil nur fokusi f_q', value: fq * 100, unit: 'cm', digits: 4 },
          { label: 'Ko\'k nur fokusi f_k', value: fk * 100, unit: 'cm', digits: 4 },
          { label: 'Xromatik aberratsiya Δf', value: df * 100, unit: 'cm', digits: 3 },
          { label: 'Sferik aberratsiya Δf_sf ≈ h²/f', value: sph * 1000, unit: 'mm', digits: 3 },
        ],
        chart: {
          title: 'Sferik aberratsiyaning diafragmaga bog\'liqligi',
          xLabel: 'h, mm',
          yLabel: 'Δf_sf, mm',
          series: [
            { name: 'Δf_sf(h)', points: pts },
            { name: 'Joriy', points: [[v.h, sph * 1000]] },
          ],
        },
        note: v.nk > v.nq ? 'n_ko\'k > n_qizil, shuning uchun f_ko\'k < f_qizil (normal dispersiya).' : 'Diqqat: odatiy shishada n_ko\'k > n_qizil bo\'ladi.',
      };
    },
  },
};
