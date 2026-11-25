export default {
  id: 5,
  slug: 'statika',
  title: 'Statika (muvozanat shartlari)',
  category: 'Mexanika',
  emoji: '⚖️',
  short: "Richagga ta'sir etuvchi kuchlar momentlarini hisoblab, jismning muvozanat shartlarini tekshiring.",
  aim: [
    "Jismlarning muvozanat shartlarini tajriba asosida o'rganish",
    "Jismga ta'sir etuvchi kuchlarni aniqlash",
    "Kuch momenti va kuch yelkasi tushunchalarini o'rganish",
    "Richagning muvozanat shartini virtual tajribada tekshirish",
    "Tajriba natijalarini nazariy hisob-kitoblar bilan taqqoslash"
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Kompyuter yoki mobil qurilma', 'Virtual richag va tayanch', "Yuklar to'plami", 'Dinamometr', 'Masshtabli chizg\'ich', 'Kalkulyator'],
  theory: [
    "Jismning tinch holatini yoki to'g'ri chiziqli tekis harakatini saqlashi mexanik muvozanat deyiladi. Birinchi shart: jismga ta'sir etuvchi barcha kuchlarning vektor yig'indisi nolga teng, ΣF = 0.",
    "Kuchning aylanish o'qiga nisbatan momenti M = F·l, bu yerda l — kuch yelkasi (o'qdan kuch ta'sir chizig'igacha bo'lgan eng qisqa masofa). Birligi N·m. Ikkinchi shart: aylanma harakat bo'lmasligi uchun barcha momentlarning algebraik yig'indisi nolga teng, ΣM = 0 (soat mili bo'yicha va unga teskari momentlar teng).",
    "Richag muvozanatda bo'lganda F₁l₁ = F₂l₂, ya'ni m₁·g·l₁ = m₂·g·l₂ va m₁l₁ = m₂l₂. Tayanch reaksiya kuchi R = (m₁ + m₂)g (richag massasi hisobga olinmaydi). Qurilishda statika to'sin, ferma, kran va ko'priklarni hisoblashning asosi hisoblanadi."
  ],
  formulas: [
    { name: 'Muvozanatning 1-sharti', expr: 'ΣF = 0', note: "Kuchlarning vektor yig'indisi" },
    { name: 'Kuch momenti', expr: 'M = F·l', note: 'N·m; l — kuch yelkasi' },
    { name: 'Muvozanatning 2-sharti', expr: 'ΣM = 0', note: "Momentlarning algebraik yig'indisi" },
    { name: 'Richag qoidasi', expr: 'F₁·l₁ = F₂·l₂', note: 'F = m·g bo\'lsa m₁l₁ = m₂l₂' },
    { name: 'Tayanch reaksiyasi', expr: 'R = (m₁ + m₂)·g', note: 'Richag massasiz deb olinganda' }
  ],
  procedure: [
    "Virtual laboratoriya dasturini ishga tushiring va richagni tayanchga gorizontal holatda o'rnating.",
    "Tayanch nuqtasini aylanish o'qi sifatida belgilang.",
    "Chap tomonga m₁ massali yukni qo'ying va uning o'qdan masofasi l₁ ni aniqlang.",
    "O'ng tomonga m₂ massali yukni qo'ying va masofasi l₂ ni belgilang.",
    "F = m·g formulasi bilan og'irlik kuchlarini hisoblang.",
    "M₁ = F₁l₁ va M₂ = F₂l₂ momentlarni toping.",
    "Yuklardan birining massasi yoki yelkasini o'zgartirib, richagni gorizontal muvozanatga keltiring.",
    "Muvozanatda M₁ va M₂ ni taqqoslang, tajribani turli qiymatlarda takrorlab, jadvalni to'ldiring."
  ],
  questions: [
    "Statika nimani o'rganadi?",
    "Mexanik muvozanat deb nimaga aytiladi?",
    "Jism muvozanatining birinchi va ikkinchi shartlari qanday?",
    "Kuch momenti va kuch yelkasi nima? Kuch momentining birligi qanday?",
    "Richagning muvozanat sharti qanday ifodalanadi?",
    "Kuch yelkasi ikki marta oshirilsa, kuch momenti qanday o'zgaradi?",
    "Kuchlar yig'indisi nolga teng bo'lsa, bu har doim to'liq muvozanat uchun yetarlimi?"
  ],
  quiz: [
    { q: "Jism muvozanatining birinchi sharti qaysi?", options: ["ΣM ≠ 0", "ΣF = 0", "v = 0 bo'lmasligi", "a > 0"], answer: 1 },
    { q: "Kuch momenti formulasi qaysi?", options: ["M = F/l", "M = m·a", "M = F·l", "M = m·v"], answer: 2 },
    { q: "Kuch momentining SI birligi qaysi?", options: ["N", "N·m", "J/s", "kg"], answer: 1 },
    { q: "Richagning muvozanat sharti qaysi?", options: ["F₁l₁ = F₂l₂", "F = m·a", "p = m·v", "A = F·s"], answer: 0 },
    { q: "Muvozanatning ikkinchi sharti qaysi?", options: ["ΣF = 1", "a = 0", "ΣM = 0", "v = 0"], answer: 2 }
  ],
  conclusion: "Virtual tajribada richagga ta'sir etuvchi kuchlar va ularning aylanish o'qiga nisbatan momentlari aniqlandi. Soat mili bo'yicha va unga teskari momentlar teng bo'lganda (F₁l₁ = F₂l₂) richag gorizontal muvozanatda bo'ldi. Shunday qilib, muvozanatda ΣF = 0 va ΣM = 0 shartlari bajarilishi tasdiqlandi.",
  sim: {
    intro: "Richagning ikki tomoniga yuk qo'ying: momentlar teng bo'lsa muvozanat bo'ladi.",
    inputs: [
      { id: 'm1', label: 'Chap yuk massasi m₁', unit: 'kg', min: 0.1, max: 20, step: 0.1, value: 4 },
      { id: 'l1', label: 'Chap yelka l₁', unit: 'm', min: 0.05, max: 2, step: 0.05, value: 0.5 },
      { id: 'm2', label: "O'ng yuk massasi m₂", unit: 'kg', min: 0.1, max: 20, step: 0.1, value: 2 },
      { id: 'l2', label: "O'ng yelka l₂", unit: 'm', min: 0.05, max: 2, step: 0.05, value: 1 }
    ],
    compute: (v) => {
      const g = 9.81;
      const F1 = v.m1 * g, F2 = v.m2 * g;
      const M1 = F1 * v.l1, M2 = F2 * v.l2;
      const net = M1 - M2; // musbat: chap tomon pastga
      const R = (v.m1 + v.m2) * g;
      const l2eq = v.m1 * v.l1 / v.m2;
      const xmax = 2 * Math.max(v.l2, l2eq);
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const x = xmax * i / 40;
        pts.push([+x.toFixed(3), +(M1 - F2 * x).toFixed(4)]);
      }
      const tol = 0.01 * Math.max(M1, M2);
      let note;
      if (Math.abs(net) <= tol) note = "Muvozanat: M₁ = M₂, richag gorizontal.";
      else if (net > 0) note = `M₁ > M₂: richag chap tomonga og'adi. Muvozanat uchun l₂ ≈ ${l2eq.toFixed(3)} m bo'lishi kerak.`;
      else note = `M₁ < M₂: richag o'ng tomonga og'adi. Muvozanat uchun l₂ ≈ ${l2eq.toFixed(3)} m bo'lishi kerak.`;
      return {
        results: [
          { label: 'Chap og\'irlik kuchi F₁', value: F1, unit: 'N', digits: 3 },
          { label: "O'ng og'irlik kuchi F₂", value: F2, unit: 'N', digits: 3 },
          { label: 'Chap moment M₁', value: M1, unit: 'N·m', digits: 3 },
          { label: "O'ng moment M₂", value: M2, unit: 'N·m', digits: 3 },
          { label: 'Natijaviy moment M₁ − M₂', value: net, unit: 'N·m', digits: 3 },
          { label: 'Tayanch reaksiyasi R', value: R, unit: 'N', digits: 3 }
        ],
        chart: {
          title: "Natijaviy moment M₁ − M₂ ning l₂ ga bog'liqligi", xLabel: 'l₂, m', yLabel: 'M₁ − M₂, N·m',
          series: [{ name: 'M₁ − M₂', points: pts }, { name: 'Joriy', points: [[v.l2, +net.toFixed(4)]] }, { name: 'Muvozanat (M₁ = M₂)', points: [[+l2eq.toFixed(4), 0]] }]
        },
        note
      };
    }
  }
};
