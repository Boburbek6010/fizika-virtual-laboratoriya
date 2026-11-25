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
  formulas: [
    { name: 'Tovush tezligi', expr: 'v = λ·f' },
    { name: 'To‘lqin uzunligi', expr: 'λ = 2·(l₂ − l₁)' },
    { name: 'Tajribaviy tezlik', expr: 'v = 2f·(l₂ − l₁)' },
    { name: 'Haroratga bog‘liqlik', expr: 'v ≈ 331,4 + 0,6·t', note: 't — °C da' }
  ],
  learn: [
    "Tovushning havodagi tarqalish tezligi v = λ·f munosabatini",
    "Yopiq trubkada turg‘un to‘lqin va rezonans shartini",
    "Ikki ketma-ket rezonans orasidagi masofa λ/2 ekanini",
    "Tovush tezligining haroratga bog‘liqligini va tajriba xatolarini"
  ],
  civil: [
    "Ultratovushli defektoskop va beton mustahkamligini aniqlashda tovush tezligi asosiy ko‘rsatkich: beton zichroq bo‘lsa, tezlik katta.",
    "Akustik me’morchilikda zal va teatrlarning aks sadosi tovush tezligi va to‘lqin uzunligidan hisoblanadi.",
    "Tovush izolyatsiyasi va shovqin to‘siqlarining samaradorligi to‘lqin uzunligi bilan bog‘liq: past chastotali tovush uzun to‘lqinli bo‘lib, to‘siq atrofidan oson o‘tadi.",
    "Quvur va ventilyatsiya shaxtalarida havo ustuni rezonansi shovqin va gumburlashga olib keladi, shu sababli uzunlik chastotaga moslab tanlanadi."
  ],
  keyFact: "Havoda tovush tezligi har 1 °C isishda taxminan 0,6 m/s ortadi, ya’ni qishda (−10 °C) u yozdagidan (+30 °C) taxminan 24 m/s sekinroq. Betonda esa tovush 4000 m/s dan ortiq tezlikda tarqaladi.",
  mistakes: [
    "Rezonanslar orasidagi masofani λ deb olish: u λ/2 ga teng, λ = 2(l₂ − l₁) ekanini yodda tuting.",
    "Trubka uchi tuzatmasini (e ≈ 0,6r) hisobga olmay faqat l₁ dan λ ni topish. Shu sababli ikki rezonans ayirmasidan foydalaning.",
    "Haroratni e’tiborsiz qoldirish: 20 °C va 0 °C da tezlik 12 m/s farq qiladi. Xona haroratini yozib oling."
  ],
  glossary: [
    {
      "t": "To‘lqin uzunligi",
      "d": "Bir tebranish davrida to‘lqin bosib o‘tadigan masofa λ."
    },
    {
      "t": "Rezonans",
      "d": "Tashqi chastota xususiy chastotaga mos kelganda amplituda keskin ortishi."
    },
    {
      "t": "Turg‘un to‘lqin",
      "d": "Qarama-qarshi to‘lqinlar qo‘shilishidan tugun va do‘ngliklar hosil bo‘lishi."
    },
    {
      "t": "Chastota",
      "d": "Soniyadagi tebranishlar soni f, birligi Hz."
    },
    {
      "t": "Uchi tuzatmasi",
      "d": "Trubka uchidan tashqarida do‘ngliklar siljishi, e ≈ 0,6·r."
    }
  ],
  theory: [
    "Tovush — elastik muhitda tarqaladigan bo‘ylama mexanik to‘lqin. To‘lqin tezligi v, chastotasi f va to‘lqin uzunligi λ orasida v = λ·f bog‘lanish bor. Havoda tezlik asosan haroratga bog‘liq: v ≈ 331,4 + 0,6·t (t — °C).",
    "Bir uchi yopiq trubka ustidagi tovush generatori havo ustunini tebrantiradi. Porshen bilan ustun uzunligini o‘zgartirib, to‘lqinning tushuvchi va qaytuvchi qismlari qo‘shilishidan turg‘un to‘lqin hosil qilinadi.",
    "Rezonans birinchi marta l₁ ≈ λ/4 − e da, ikkinchi marta l₂ ≈ 3λ/4 − e da kuzatiladi. Yopiq uchda tugun, ochiq uchda do‘nglik bo‘ladi, shu sababli ketma-ket rezonanslar orasidagi masofa λ/2 ga teng.",
    "Ikki rezonansdan λ = 2(l₂ − l₁) topiladi, undan v = 2f·(l₂ − l₁). Bu usulda trubka uchi tuzatmasi e ayirmada yo‘qoladi, shu sababli tajriba aniq natija beradi.",
    "Havo ustunining rezonansi qurilishda ham muhim: ventilyatsiya kanallari, quvurlar va akustik kameralarda ma’lum chastotalarda tovush kuchayadi. Tovush tezligi va to‘lqin uzunligi shovqin to‘siqlari va akustik materiallarni tanlashda hisobga olinadi."
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring va havo haroratini yozib oling.",
    "Generator chastotasini f = 500 Hz ga o‘rnating.",
    "Trubka radiusini o‘lchang va porshenni yuqori holatga qo‘ying.",
    "Porshenni asta-sekin pastga siljitib, tovush eng baland eshitiladigan birinchi holatni toping.",
    "Birinchi rezonans l₁ ni chizg‘ichdan o‘qib yozing.",
    "Porshenni yana siljitib, ikkinchi rezonans l₂ ni toping va yozing.",
    "Farq l₂ − l₁ ni hisoblab, λ = 2(l₂ − l₁) formulasidan to‘lqin uzunligini toping.",
    "Tovush tezligini v = 2f(l₂ − l₁) formulasidan hisoblang.",
    "Tajribani 400, 600 va 800 Hz chastotalarda takrorlang va o‘rtacha v ni toping.",
    "Nazariy v ≈ 331,4 + 0,6t bilan solishtiring va nisbiy xatoni hisoblang."
  ],
  questions: [
    "Tovush nima va u qanday to‘lqin hisoblanadi?",
    "v = λ·f formulasi nimani bildiradi?",
    "Rezonans hodisasi nima va u qachon yuz beradi?",
    "Birinchi va ikkinchi rezonans qaysi uzunliklarda kuzatiladi?",
    "Nima uchun rezonanslar orasidagi masofa λ/2 ga teng?",
    "Trubka uchi tuzatmasi nima va u natijaga qanday ta’sir qiladi?",
    "Havo harorati tovush tezligiga qanday ta’sir qiladi?",
    "Chastota ikki marta oshsa, to‘lqin uzunligi qanday o‘zgaradi?",
    "Beton va havoda tovush tezliklari nima uchun farq qiladi?",
    "Qurilishda rezonans trubkasi hodisasi qayerda ahamiyatli bo‘ladi?"
  ],
  quiz: [
    {
      "q": "Tovush tezligi, chastota va to‘lqin uzunligi orasidagi bog‘lanish:",
      "options": [
        "v = λ/f",
        "v = f/λ",
        "v = λ·f",
        "v = λ + f"
      ],
      "answer": 2
    },
    {
      "q": "Ikki ketma-ket rezonans orasidagi masofa:",
      "options": [
        "λ/2",
        "λ",
        "λ/4",
        "2λ"
      ],
      "answer": 0
    },
    {
      "q": "20 °C da havoda tovush tezligi taxminan:",
      "options": [
        "300 m/s",
        "1500 m/s",
        "3 m/s",
        "343 m/s"
      ],
      "answer": 3
    },
    {
      "q": "Harorat ortsa, havoda tovush tezligi:",
      "options": [
        "Kamayadi",
        "Ortadi",
        "O‘zgarmaydi",
        "Nolga teng bo‘ladi"
      ],
      "answer": 1
    },
    {
      "q": "Bir uchi yopiq trubkada birinchi rezonans:",
      "options": [
        "l₁ ≈ λ",
        "l₁ ≈ λ/4",
        "l₁ ≈ λ/2",
        "l₁ ≈ 2λ"
      ],
      "answer": 1
    },
    {
      "q": "Tovush to‘lqini turi:",
      "options": [
        "Ko‘ndalang",
        "Elektromagnit",
        "Gravitatsion",
        "Bo‘ylama"
      ],
      "answer": 3
    },
    {
      "q": "Chastotani ikki marta oshirsak, λ (v o‘zgarmas):",
      "options": [
        "2 marta kamayadi",
        "2 marta ortadi",
        "O‘zgarmaydi",
        "4 marta ortadi"
      ],
      "answer": 0
    },
    {
      "q": "Tovush tezligi eng katta bo‘lgan muhit:",
      "options": [
        "Havo",
        "Vakuum",
        "Beton (qattiq jism)",
        "Suv bug‘i"
      ],
      "answer": 2
    }
  ],
  conclusion: "Rezonans usulida aniqlangan tovush tezligi v = 2f(l₂ − l₁) nazariy qiymatga (≈343 m/s, 20 °C) yaqin chiqdi. Tezlik chastotaga bog‘liq emasligi, chastota oshganda to‘lqin uzunligi kamayishi tajribada tasdiqlandi. Trubka uchi tuzatmasi ikki rezonans ayirmasida yo‘qolgani uchun usul aniq natija berdi. Natija akustika va tovush izolyatsiyasi hisoblarida qo‘llaniladi.",
  tasks: [
    {
      "q": "Qurilish maydonida havo harorati 25 °C. Havoda tovush tezligini toping (v = 331,4 + 0,6·t).",
      "answer": 346.4,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "t = 25 °C ni qo‘ying.",
      "solution": "v = 331,4 + 0,6·25 = 346,4 m/s."
    },
    {
      "q": "Havoda tovush tezligi 340 m/s, generator chastotasi 680 Hz. To‘lqin uzunligini toping.",
      "answer": 0.5,
      "unit": "m",
      "tol": 0.03,
      "hint": "λ = v / f.",
      "solution": "λ = 340 / 680 = 0,5 m."
    },
    {
      "q": "f = 500 Hz da rezonanslar l₁ = 0,165 m va l₂ = 0,505 m da kuzatildi. Tovush tezligini toping (v = 2f(l₂ − l₁)).",
      "answer": 340,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "Avval l₂ − l₁ ni toping.",
      "solution": "v = 2·500·0,34 = 340 m/s."
    },
    {
      "q": "Tovush devordan qaytib, 0,6 s dan keyin eshitildi (v = 340 m/s). Devorgacha masofani toping.",
      "answer": 102,
      "unit": "m",
      "tol": 0.03,
      "hint": "Tovush masofani ikki marta bosib o‘tadi.",
      "solution": "s = v·t/2 = 340·0,6/2 = 102 m."
    }
  ],
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
