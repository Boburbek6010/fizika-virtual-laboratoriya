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
  learn: [
    "Jism muvozanatining ikki sharti: ΣF = 0 va ΣM = 0",
    "Kuch momenti va kuch yelkasi tushunchalarini",
    "Richag qoidasi bilan noma'lum massa yoki yelkani topishni",
    "Ikki tayanchli balka tayanch reaksiyalarini hisoblashni"
  ],
  civil: [
    "Minorali kranda strela yuki qarshi og'irlik (kontrvzes) bilan muvozanatlanadi: Q·l₁ = P·l₂, aks holda kran ag'dariladi.",
    "Ko'prik va to'sin tayanchlaridagi reaksiyalar ΣM = 0 shartidan topilib, tayanch o'lchamlari tanlanadi.",
    "Qo'l aravachasi (tachka) va lom (rychag) yordamida og'ir yukni kichik kuch bilan ko'tarish richag qoidasiga asoslangan.",
    "Devor, to'siq va ustunning ag'darilishga turg'unligi og'irlik momenti va ag'daruvchi moment taqqoslanib tekshiriladi."
  ],
  keyFact: "Minorali kranlarning ko'pchiligi aynan moment muvozanati buzilgani tufayli ag'dariladi: yuk bir oz uzoqroqqa surilsa ham moment yelkaga proporsional ortadi.",
  mistakes: [
    "Yelkani kuch qo'yilgan nuqtagacha emas, aylanish o'qidan kuch chizig'igacha bo'lgan perpendikulyar masofa deb olish kerak.",
    "Momentlar ishorasini unutish: soat strelkasiga qarshi va bo'ylab momentlar qarama-qarshi ishorali olinadi.",
    "Massani kg da, kuchni N da aralashtirish: F = m·g ni hisoblab, so'ng moment topiladi (yoki ikki tomonda g qisqaradi)."
  ],
  glossary: [
    {
      "t": "Kuch momenti",
      "d": "kuch va uning yelkasi ko'paytmasi, M = F·l"
    },
    {
      "t": "Kuch yelkasi",
      "d": "aylanish o'qidan kuch ta'sir chizig'igacha bo'lgan eng qisqa masofa"
    },
    {
      "t": "Muvozanat",
      "d": "jismning tinch yoki tekis harakat holati, ΣF = 0 va ΣM = 0"
    },
    {
      "t": "Richag",
      "d": "qo'zg'almas o'q atrofida aylana oladigan qattiq jism"
    },
    {
      "t": "Tayanch reaksiyasi",
      "d": "tayanchning jismga ko'rsatadigan qarshilik kuchi"
    }
  ],
  tasks: [
    {
      "q": "Richagning chap yelkasi l₁ = 1,5 m, unga m₁ = 40 kg yuk osilgan. O'ng yelka l₂ = 0,5 m. Muvozanat uchun o'ng tomonga qancha massa m₂ osish kerak (kg)?",
      "answer": 120,
      "unit": "kg",
      "tol": 0.03,
      "hint": "m₁l₁ = m₂l₂.",
      "solution": "m₂ = m₁l₁/l₂ = 40·1,5/0,5 = 120 kg."
    },
    {
      "q": "Uzunligi L = 6 m bo'lgan ikki tayanchli balkaning chap uchidan 2 m masofada F = 3000 N yuk bor (balka og'irligi hisobga olinmaydi). Chap tayanch reaksiyasi R_A necha N?",
      "answer": 2000,
      "unit": "N",
      "tol": 0.03,
      "hint": "Ong tayanchga nisbatan momentlar yig'indisi nol: R_A·L = F·(L − a).",
      "solution": "R_A = 3000·(6 − 2)/6 = 2000 N (o'ng tayanch 1000 N)."
    },
    {
      "q": "Minorali kranda yuk massasi 2000 kg minoradan 12 m masofada. Qarshi og'irlik minoradan qarama-qarshi tomonda 6 m masofada. Muvozanat uchun qarshi og'irlik massasi necha kg?",
      "answer": 4000,
      "unit": "kg",
      "tol": 0.03,
      "hint": "M_yuk = M_qarshi: 2000·12 = m·6.",
      "solution": "m = 2000·12/6 = 4000 kg."
    },
    {
      "q": "Qo'l aravachasida massasi 80 kg yuk g'ildirak o'qidan 0,4 m masofada joylashgan. Ishchi tutqichni o'qdan 1,2 m uzoqlikda ko'taradi. Qanday kuch F (N) kerak? (g = 9,81 m/s²)",
      "answer": 261.6,
      "unit": "N",
      "tol": 0.03,
      "hint": "F·1,2 = m·g·0,4.",
      "solution": "F = 80·9,81·0,4/1,2 ≈ 261.6 N."
    }
  ],
  learn: [
    "Jism muvozanatining ikki sharti: ΣF = 0 va ΣM = 0",
    "Kuch momenti va kuch yelkasi tushunchalarini",
    "Richag qoidasi bilan noma'lum massa yoki yelkani topishni",
    "Ikki tayanchli balka tayanch reaksiyalarini hisoblashni"
  ],
  civil: [
    "Minorali kranda strela yuki qarshi og'irlik (kontrvzes) bilan muvozanatlanadi: Q·l₁ = P·l₂, aks holda kran ag'dariladi.",
    "Ko'prik va to'sin tayanchlaridagi reaksiyalar ΣM = 0 shartidan topilib, tayanch o'lchamlari tanlanadi.",
    "Qo'l aravachasi (tachka) va lom (rychag) yordamida og'ir yukni kichik kuch bilan ko'tarish richag qoidasiga asoslangan.",
    "Devor, to'siq va ustunning ag'darilishga turg'unligi og'irlik momenti va ag'daruvchi moment taqqoslanib tekshiriladi."
  ],
  keyFact: "Minorali kranlarning ko'pchiligi aynan moment muvozanati buzilgani tufayli ag'dariladi: yuk bir oz uzoqroqqa surilsa ham moment yelkaga proporsional ortadi.",
  mistakes: [
    "Yelkani kuch qo'yilgan nuqtagacha emas, aylanish o'qidan kuch chizig'igacha bo'lgan perpendikulyar masofa deb olish kerak.",
    "Momentlar ishorasini unutish: soat strelkasiga qarshi va bo'ylab momentlar qarama-qarshi ishorali olinadi.",
    "Massani kg da, kuchni N da aralashtirish: F = m·g ni hisoblab, so'ng moment topiladi (yoki ikki tomonda g qisqaradi)."
  ],
  glossary: [
    {
      "t": "Kuch momenti",
      "d": "kuch va uning yelkasi ko'paytmasi, M = F·l"
    },
    {
      "t": "Kuch yelkasi",
      "d": "aylanish o'qidan kuch ta'sir chizig'igacha bo'lgan eng qisqa masofa"
    },
    {
      "t": "Muvozanat",
      "d": "jismning tinch yoki tekis harakat holati, ΣF = 0 va ΣM = 0"
    },
    {
      "t": "Richag",
      "d": "qo'zg'almas o'q atrofida aylana oladigan qattiq jism"
    },
    {
      "t": "Tayanch reaksiyasi",
      "d": "tayanchning jismga ko'rsatadigan qarshilik kuchi"
    }
  ],
  tasks: [
    {
      "q": "Richagning chap yelkasi l₁ = 1,5 m, unga m₁ = 40 kg yuk osilgan. O'ng yelka l₂ = 0,5 m. Muvozanat uchun o'ng tomonga qancha massa m₂ osish kerak (kg)?",
      "answer": 120,
      "unit": "kg",
      "tol": 0.03,
      "hint": "m₁l₁ = m₂l₂.",
      "solution": "m₂ = m₁l₁/l₂ = 40·1,5/0,5 = 120 kg."
    },
    {
      "q": "Uzunligi L = 6 m bo'lgan ikki tayanchli balkaning chap uchidan 2 m masofada F = 3000 N yuk bor (balka og'irligi hisobga olinmaydi). Chap tayanch reaksiyasi R_A necha N?",
      "answer": 2000,
      "unit": "N",
      "tol": 0.03,
      "hint": "Ong tayanchga nisbatan momentlar yig'indisi nol: R_A·L = F·(L − a).",
      "solution": "R_A = 3000·(6 − 2)/6 = 2000 N (o'ng tayanch 1000 N)."
    },
    {
      "q": "Minorali kranda yuk massasi 2000 kg minoradan 12 m masofada. Qarshi og'irlik minoradan qarama-qarshi tomonda 6 m masofada. Muvozanat uchun qarshi og'irlik massasi necha kg?",
      "answer": 4000,
      "unit": "kg",
      "tol": 0.03,
      "hint": "M_yuk = M_qarshi: 2000·12 = m·6.",
      "solution": "m = 2000·12/6 = 4000 kg."
    },
    {
      "q": "Qo'l aravachasida massasi 80 kg yuk g'ildirak o'qidan 0,4 m masofada joylashgan. Ishchi tutqichni o'qdan 1,2 m uzoqlikda ko'taradi. Qanday kuch F (N) kerak? (g = 9,81 m/s²)",
      "answer": 261.6,
      "unit": "N",
      "tol": 0.03,
      "hint": "F·1,2 = m·g·0,4.",
      "solution": "F = 80·9,81·0,4/1,2 ≈ 261.6 N."
    }
  ],
  theory: [
    "Jism muvozanatda bo'lishi uchun ikki shart bajarilishi kerak. Birinchisi, unga ta'sir qiluvchi barcha kuchlarning vektor yig'indisi nolga teng: ΣF = 0. Bu shart ilgarilanma harakat bo'lmasligini ta'minlaydi.",
    "Ikkinchi shart — momentlar yig'indisi nolga teng: ΣM = 0. Kuch momenti M = F·l formula bilan topiladi, bu yerda l — kuch yelkasi, ya'ni aylanish o'qidan kuch chizig'igacha bo'lgan perpendikulyar masofa. Bu shart aylanma harakat bo'lmasligini ta'minlaydi.",
    "Soat strelkasi bo'ylab va unga qarshi aylantiruvchi momentlar qarama-qarshi ishorali olinadi. Richag muvozanatda bo'lsa, chap va o'ng momentlar teng: F₁·l₁ = F₂·l₂, ya'ni m₁l₁ = m₂l₂.",
    "Richag muvozanatida qo'zg'almas tayanchning reaksiyasi barcha yuklar og'irlik kuchlari yig'indisiga teng: R = (m₁ + m₂)·g (richag massasi inobatga olinmaganda).",
    "Ikki tayanchli balkada tayanch reaksiyalari ikkala shartdan topiladi: biror tayanchga nisbatan momentlar yig'indisini nolga tenglab, ikkinchi reaksiya topiladi, so'ng ΣF = 0 dan birinchisi aniqlanadi.",
    "Statika qonunlari kran, ko'prik, tayanch devorlar va ustunlarni loyihalashda asosdir. Muvozanat zaxirasi (turg'unlik koeffitsiyenti) odatda 1,5 dan kam bo'lmasligi talab etiladi."
  ],
  formulas: [
    { name: 'Muvozanatning 1-sharti', expr: 'ΣF = 0', note: "Kuchlarning vektor yig'indisi" },
    { name: 'Kuch momenti', expr: 'M = F·l', note: 'N·m; l — kuch yelkasi' },
    { name: 'Muvozanatning 2-sharti', expr: 'ΣM = 0', note: "Momentlarning algebraik yig'indisi" },
    { name: 'Richag qoidasi', expr: 'F₁·l₁ = F₂·l₂', note: 'F = m·g bo\'lsa m₁l₁ = m₂l₂' },
    { name: 'Tayanch reaksiyasi', expr: 'R = (m₁ + m₂)·g', note: 'Richag massasiz deb olinganda' }
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring.",
    "Chap yuk massasi m₁ ni o'rnating (masalan, 4 kg).",
    "Chap yelka l₁ ni o'rnating (0,5 m).",
    "O'ng yuk massasi m₂ ni kiriting.",
    "O'ng yelka l₂ ni o'zgartirib, richagni muvozanatga keltiring.",
    "M₁, M₂ va natijaviy momentni o'qib, jadvalga qo'shing.",
    "Muvozanat uchun hisoblangan l₂ ni (eslatmada ko'rsatiladi) o'zingiz hisoblagan qiymat bilan taqqoslang.",
    "m₁ ni 2, 4, 6 kg qilib, har bir holat uchun muvozanatdagi l₂ ni toping.",
    "Tayanch reaksiyasi R ni yozing va R = (m₁ + m₂)g ni tekshiring.",
    "Natijaviy moment grafigida nol nuqtani (muvozanat) belgilab, kran strelasi uchun o'z qiymatlaringiz bilan tahlil yozing."
  ],
  questions: [
    "Jism muvozanatining birinchi va ikkinchi shartlari nima?",
    "Kuch momenti nima va qanday birlikda o'lchanadi?",
    "Kuch yelkasi deb nimaga aytiladi?",
    "Richag qoidasini yozing.",
    "Nima uchun richag muvozanatida tayanch reaksiyasi R = (m₁ + m₂)g?",
    "Minorali kranda qarshi og'irlik nima uchun kerak?",
    "Ikki tayanchli balkada reaksiyalar qanday topiladi?",
    "Yuk tayanchga yaqinlashsa reaksiyalar qanday o'zgaradi?",
    "Turg'unlik koeffitsiyenti nima?",
    "Ag'daruvchi va ushlab turuvchi momentlar qanday taqqoslanadi?"
  ],
  quiz: [
    {
      "q": "Muvozanatning ikkinchi sharti qaysi?",
      "options": [
        "ΣF = m·a",
        "ΣE = 0",
        "ΣF ≠ 0",
        "ΣM = 0"
      ],
      "answer": 3
    },
    {
      "q": "Kuch momenti formulasi?",
      "options": [
        "M = F/l",
        "M = m·g·t",
        "M = F·l",
        "M = F + l"
      ],
      "answer": 2
    },
    {
      "q": "Richag muvozanati?",
      "options": [
        "F₁ + l₁ = F₂ + l₂",
        "F₁·l₁ = F₂·l₂",
        "F₁/l₁ = F₂·l₂",
        "F₁ = l₂"
      ],
      "answer": 1
    },
    {
      "q": "Kuch yelkasi nima?",
      "options": [
        "Kuchning moduli",
        "O'qdan kuch chizig'igacha perpendikulyar masofa",
        "Richag og'irligi",
        "Jism massasi markazi"
      ],
      "answer": 1
    },
    {
      "q": "m₁ = 40 kg, l₁ = 1,5 m, l₂ = 0,5 m bo'lsa, m₂?",
      "options": [
        "13,3 kg",
        "60 kg",
        "120 kg",
        "30 kg"
      ],
      "answer": 2
    },
    {
      "q": "Kranda qarshi og'irlik vazifasi?",
      "options": [
        "Kran tezligini oshirish",
        "Yukni sovitish",
        "Shamolni to'xtatish",
        "Yuk momentini muvozanatlash"
      ],
      "answer": 3
    },
    {
      "q": "Momentning SI birligi?",
      "options": [
        "N/m",
        "N·m",
        "J/s",
        "kg·m"
      ],
      "answer": 1
    },
    {
      "q": "Ikki tayanchli balka: F = 3000 N uchidan 2 m, L = 6 m. Uzoq tayanch reaksiyasi?",
      "options": [
        "1000 N",
        "2000 N",
        "3000 N",
        "500 N"
      ],
      "answer": 0
    }
  ],
  conclusion: "Tajribada richag muvozanati M₁ = M₂ sharti bilan tasdiqlandi va muvozanat uchun zarur yelka hisoblab topildi. Tayanch reaksiyasi barcha yuklar og'irligi yig'indisiga tengligi ko'rsatildi. Bu qonuniyatlar kran qarshi og'irligi, balka tayanch reaksiyalari va tayanch devorlar turg'unligini hisoblashda qo'llaniladi.",
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
