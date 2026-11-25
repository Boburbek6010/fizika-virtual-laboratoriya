export default {
  id: 10, slug: 'stoks-usuli', title: 'Stoks usuli bilan suyuqlikning ichki ishqalanishini aniqlash',
  category: 'Mexanika', emoji: '🧪',
  short: 'Suyuqlikda tushayotgan sharchaning terminal tezligidan dinamik yopishqoqlik koeffitsiyenti η ni toping.',
  aim: [
    'Suyuqlikdagi sharchaga ta’sir etuvchi kuchlarni o‘rganish',
    'Stoks qonunidan foydalanib dinamik yopishqoqlik koeffitsiyentini aniqlash',
    'Terminal tezlik tushunchasini o‘zlashtirish',
    'Natijalarni tahlil qilib, Stoks usulining qo‘llanish shartlarini baholash'
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Suyuqlik to‘ldirilgan shisha silindr (ikki belgili)', 'Metall sharchalar', 'Mikrometr', 'Sekundomer', 'Chizg‘ich', 'Termometr', 'Kalkulyator'],
  formulas: [
    { name: 'Stoks kuchi', expr: 'F_St = 6π·η·r·v' },
    { name: 'Og‘irlik kuchi', expr: 'F_g = ρₛ·V·g,  V = (4/3)π·r³' },
    { name: 'Arximed kuchi', expr: 'F_A = ρ·V·g' },
    { name: 'Muvozanat sharti', expr: 'F_g = F_A + F_St' },
    { name: 'Terminal tezlik', expr: 'v = 2r²·g·(ρₛ − ρ) / (9η),  v = l / t' },
    { name: 'Yopishqoqlik koeffitsiyenti', expr: 'η = 2r²·g·(ρₛ − ρ) / (9v)', note: 'd orqali: η = d²·g·(ρₛ − ρ)·t / (18·l)' },
    { name: 'Reynolds soni', expr: 'Re = ρ·v·d / η', note: 'Stoks uchun Re ≪ 1' },
    { name: 'O‘rtacha qiymat', expr: 'η_o‘rt = (η₁ + η₂ + … + ηₙ) / n' }
  ],
  learn: [
    "Stoks qonuni va suyuqlikdagi sharcha uchun kuchlar muvozanatini",
    "Terminal tezlikdan dinamik yopishqoqlik η ni hisoblashni",
    "Reynolds soni Re orqali laminar rejimni tekshirishni",
    "Yopishqoqlikning haroratga bog‘liqligini va tajriba xatolarini"
  ],
  civil: [
    "Beton aralashmasi va qorishmaning oquvchanligi (yopishqoqligi) quyilish, nasos bilan uzatish va vibratsiyalash sifatiga ta’sir qiladi.",
    "Bitum va asfalt yopishqoqligi harorat bilan keskin o‘zgaradi: issiqda yo‘l qoplamasi oqib ketadi, sovuqda mo‘rtlashadi.",
    "Gruntdagi mayda zarrachalarning suvda cho‘kish tezligi (cho‘kindi tahlili) Stoks qonuniga asoslanadi va gruntni tasniflashda ishlatiladi.",
    "Qurilish bo‘yoqlari, yelim va germetiklarning yopishqoqligi surtish qulayligini va qatlam qalinligini belgilaydi."
  ],
  keyFact: "Glitserinning yopishqoqligi suvnikidan taxminan 1400 marta katta (20 °C da ≈1,4 Pa·s va ≈0,001 Pa·s), shu sababli Stoks tajribasi uchun qulay: sharcha sekin tushadi va vaqtni aniq o‘lchash mumkin.",
  mistakes: [
    "Diametr o‘rniga radiusni qo‘yish yoki aksincha: formulada r² bor, xato 4 marta bo‘ladi. mm ni m ga o‘tkazishni unutmang.",
    "Sharcha hali tezlanayotgan joyda vaqtni o‘lchash: yuqori belgi suyuqlik yuzasidan 5–6 sm pastda bo‘lishi kerak, shunda harakat tekis bo‘ladi.",
    "Stoks formulasini Re > 0,5 da qo‘llash: sharcha katta yoki suyuqlik suyuq bo‘lsa, turbulentlik paydo bo‘ladi. Re ni albatta hisoblang."
  ],
  glossary: [
    {
      "t": "Dinamik yopishqoqlik",
      "d": "Suyuqlik ichki ishqalanishini ifodalovchi η, birligi Pa·s."
    },
    {
      "t": "Stoks kuchi",
      "d": "Sekin harakatlanuvchi sharga ta’sir qiluvchi qarshilik: F = 6π·η·r·v."
    },
    {
      "t": "Terminal tezlik",
      "d": "Kuchlar muvozanatlashgandan keyin o‘rnatiladigan o‘zgarmas tezlik."
    },
    {
      "t": "Reynolds soni",
      "d": "Re = ρ·v·d/η, oqim laminar yoki turbulentligini baholaydi."
    },
    {
      "t": "Arximed kuchi",
      "d": "Suyuqlikning jismga ko‘taruvchi kuchi F_A = ρ·V·g."
    }
  ],
  theory: [
    "Suyuqlikning ichki ishqalanishi (yopishqoqligi) qo‘shni qatlamlar bir-biriga nisbatan siljiganda paydo bo‘ladi. U dinamik yopishqoqlik koeffitsiyenti η bilan tavsiflanadi, SI birligi Pa·s. η haroratga kuchli bog‘liq: harorat ortishi bilan suyuqliklarda u kamayadi.",
    "Suyuqlikda tushayotgan sharchaga uchta kuch ta’sir qiladi: og‘irlik F_g = ρₛ·V·g, Arximed kuchi F_A = ρ·V·g va Stoks qarshilik kuchi F_St = 6π·η·r·v. Dastlab sharcha tezlashadi, so‘ng kuchlar muvozanatlashib, tezlik o‘zgarmas bo‘ladi.",
    "Muvozanatda F_g = F_A + F_St, bundan terminal tezlik v = 2r²·g·(ρₛ − ρ) / (9η). Tezlik v = l/t ko‘rinishida o‘lchangani uchun η = 2r²·g·(ρₛ − ρ)·t / (9·l) formulasi olinadi, d orqali: η = d²·g·(ρₛ − ρ)·t / (18·l).",
    "Stoks qonuni faqat laminar oqimda, ya’ni Reynolds soni Re = ρ·v·d/η ≪ 1 bo‘lganda o‘rinli. Re > 0,5 bo‘lsa, sharcha ortida uyurmalar paydo bo‘lib, qarshilik Stoks formulasidan katta bo‘ladi.",
    "Tajribada cheksiz keng idish sharti ham muhim: silindr devori ta’siri tuzatma talab qiladi. Shu sababli sharchani silindr o‘qi bo‘ylab tushiring va diametri idishdan ancha kichik sharcha oling.",
    "Qurilishda yopishqoqlik beton aralashmasi va qorishma, bitum, bo‘yoq va gruntli suspenziyalar xususiyatlarida muhim: aralashmaning nasos bilan uzatilishi, zichlanishi va ajralib ketmasligi (segregatsiya) shu kattalikka bog‘liq."
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring va suyuqlik (glitserin) zichligi ρ ni yozib oling.",
    "Sharcha diametri d ni mikrometr bilan 3 marta o‘lchab, o‘rtachasini oling.",
    "Sharcha materiali zichligi ρₛ ni jadvaldan belgilang.",
    "Silindrda yuqori va pastki belgilar orasidagi masofa l ni chizg‘ich bilan o‘lchang.",
    "Sharchani silindr o‘qi bo‘ylab suyuqlik yuzasiga ohista tushiring.",
    "Sekundomerni sharcha yuqori belgidan o‘tganda yoqing va pastki belgida o‘chiring.",
    "Tushish vaqti t ni yozing va v = l/t dan terminal tezlikni toping.",
    "η = d²·g·(ρₛ − ρ)·t / (18·l) formulasidan yopishqoqlikni hisoblang.",
    "Re = ρ·v·d/η ni hisoblab, Stoks formulasi qo‘llanishini tekshiring.",
    "Tajribani 5 marta takrorlang, η ning o‘rtacha qiymati va nisbiy xatosini toping."
  ],
  questions: [
    "Suyuqlikning ichki ishqalanishi nima va qanday kattalik bilan baholanadi?",
    "Stoks kuchi formulasini yozing va shartlarini ayting.",
    "Sharchaga ta’sir qiluvchi uchta kuchni sanab bering.",
    "Terminal tezlik qachon va nima uchun o‘rnatiladi?",
    "Yopishqoqlik koeffitsiyenti qaysi formuladan hisoblanadi?",
    "Reynolds soni nimani bildiradi va Stoks qonuni uchun u qancha bo‘lishi kerak?",
    "Harorat ortsa, suyuqlik yopishqoqligi qanday o‘zgaradi?",
    "Sharcha diametri ikki marta oshsa, terminal tezlik necha marta o‘zgaradi?",
    "Nima uchun yuqori belgi suyuqlik yuzasidan pastroqda olinadi?",
    "Beton aralashmasining yopishqoqligi qurilishda qanday ahamiyatga ega?"
  ],
  quiz: [
    {
      "q": "Dinamik yopishqoqlikning SI birligi:",
      "options": [
        "Pa",
        "N",
        "Pa·s",
        "kg/m³"
      ],
      "answer": 2
    },
    {
      "q": "Stoks kuchi formulasi:",
      "options": [
        "F = 6π·η·r·v",
        "F = 4π·η·r²·v",
        "F = 6π·η·r²",
        "F = η·r·v"
      ],
      "answer": 0
    },
    {
      "q": "Terminal tezlikda sharchaning tezlanishi:",
      "options": [
        "g ga teng",
        "Doimiy ortadi",
        "Cheksiz katta",
        "Nolga teng"
      ],
      "answer": 3
    },
    {
      "q": "Sharcha diametri 2 marta oshsa, terminal tezlik:",
      "options": [
        "2 marta ortadi",
        "4 marta ortadi",
        "O‘zgarmaydi",
        "2 marta kamayadi"
      ],
      "answer": 1
    },
    {
      "q": "Harorat ortsa, glitserin yopishqoqligi:",
      "options": [
        "Ortadi",
        "Kamayadi",
        "O‘zgarmaydi",
        "Nolga teng bo‘ladi"
      ],
      "answer": 1
    },
    {
      "q": "Stoks qonuni uchun Reynolds soni:",
      "options": [
        "Re ≫ 1000",
        "Re = 2000",
        "Re > 4000",
        "Re ≪ 1"
      ],
      "answer": 3
    },
    {
      "q": "Muvozanat sharti:",
      "options": [
        "F_g = F_A + F_St",
        "F_g = F_A − F_St",
        "F_St = F_A + F_g",
        "F_g = F_St"
      ],
      "answer": 0
    },
    {
      "q": "η formulasi:",
      "options": [
        "η = 9v/(2r²g(ρₛ − ρ))",
        "η = r²g/(9v)",
        "η = 2r²g(ρₛ − ρ)/(9v)",
        "η = 6πrv"
      ],
      "answer": 2
    }
  ],
  conclusion: "Tajribada sharcha suyuqlikda terminal tezlik bilan tekis harakatlandi, bunda og‘irlik kuchi Arximed va Stoks kuchlari yig‘indisiga teng bo‘ldi. Tushish vaqtidan hisoblangan yopishqoqlik koeffitsiyenti jadval qiymatiga yaqin chiqdi, Reynolds soni esa birdan ancha kichik bo‘lib, Stoks qonuni qo‘llanishini tasdiqladi. Xatolik asosan sharcha diametri, vaqt va haroratni o‘lchash aniqligi, shuningdek idish devori ta’siri bilan bog‘liq. Usul bitum, qorishma va boshqa qurilish suyuqliklarining yopishqoqligini baholashda qo‘llanadi.",
  tasks: [
    {
      "q": "Po‘lat sharcha (d = 3 mm, ρₛ = 7800 kg/m³) glitserinda (ρ = 1260 kg/m³, η = 1,4 Pa·s) tushmoqda. Terminal tezlikni toping (v = 2r²g(ρₛ − ρ)/(9η)).",
      "answer": 0.02291,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "r = 1,5·10⁻³ m.",
      "solution": "v = 2·(1,5·10⁻³)²·9,81·6540 / (9·1,4) = 0,0229 m/s."
    },
    {
      "q": "Xuddi shu sharcha l = 0,3 m masofani 13 s da o‘tdi (d = 3 mm, ρₛ = 7800, ρ = 1260 kg/m³). Yopishqoqlikni toping (η = 2r²g(ρₛ − ρ)/(9v)).",
      "answer": 1.39,
      "unit": "Pa·s",
      "tol": 0.03,
      "hint": "v = l/t = 0,3/13 m/s.",
      "solution": "v = 0,02308 m/s; η = 2·2,25·10⁻⁶·9,81·6540 / (9·0,02308) = 1,39 Pa·s."
    },
    {
      "q": "η = 1,4 Pa·s, r = 1,5 mm, v = 0,02292 m/s bo‘lganda Stoks kuchini toping (millinyutonda, F = 6π·η·r·v).",
      "answer": 0.907,
      "unit": "mN",
      "tol": 0.03,
      "hint": "Natijani N dan mN ga o‘tkazing (×1000).",
      "solution": "F = 6π·1,4·1,5·10⁻³·0,02292 = 9,07·10⁻⁴ N = 0,907 mN."
    },
    {
      "q": "Reynolds sonini toping: ρ = 1260 kg/m³, v = 0,02292 m/s, d = 3 mm, η = 1,4 Pa·s (Re = ρ·v·d/η).",
      "answer": 0.06187,
      "unit": "",
      "tol": 0.03,
      "hint": "d = 0,003 m.",
      "solution": "Re = 1260·0,02292·0,003 / 1,4 = 0,0619 ≪ 1, Stoks qonuni o‘rinli."
    }
  ],
  sim: {
    intro: 'Suyuqlik va sharcha parametrlarini o‘zgartiring: terminal tezlik, tushish vaqti va Reynolds soni hisoblanadi.',
    inputs: [
      { id: 'd', label: 'Sharcha diametri d', unit: 'mm', min: 0.5, max: 6, step: 0.1, value: 3 },
      { id: 'rs', label: 'Sharcha zichligi ρₛ', unit: 'kg/m³', min: 2000, max: 12000, step: 100, value: 7800 },
      { id: 'rl', label: 'Suyuqlik zichligi ρ', unit: 'kg/m³', min: 700, max: 1500, step: 10, value: 1260 },
      { id: 'eta', label: 'Suyuqlik yopishqoqligi η (glitserin ≈ 1,4)', unit: 'Pa·s', min: 0.05, max: 2, step: 0.01, value: 1.4 },
      { id: 'l', label: 'Belgilar orasidagi masofa l', unit: 'm', min: 0.05, max: 0.6, step: 0.01, value: 0.3 }
    ],
    compute: (v) => {
      const g = 9.81;
      const vel = (dmm) => {
        const r = dmm / 2000;
        return 2 * r * r * g * (v.rs - v.rl) / (9 * v.eta);
      };
      const r = v.d / 2000;
      const vt = vel(v.d);
      const t = v.l / vt;
      const etaBack = 2 * r * r * g * (v.rs - v.rl) / (9 * (v.l / t));
      const Re = v.rl * vt * (v.d / 1000) / v.eta;
      const FSt = 6 * Math.PI * v.eta * r * vt;
      const V = 4 / 3 * Math.PI * r * r * r;
      const Fnet = (v.rs - v.rl) * V * g;
      const tau = 2 * v.rs * r * r / (9 * v.eta);
      const vAt = (x) => vt * (1 - Math.exp(-x / tau));
      const tEnd = Math.max(5 * tau, t > 0 && isFinite(t) ? 1.1 * t : 0);
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const x = tEnd * i / 40;
        pts.push([x, vAt(x)]);
      }
      let note;
      if (v.rs <= v.rl) note = 'ρₛ ≤ ρ: sharcha cho‘kmaydi, tajriba mumkin emas.';
      else if (Re > 0.5) note = 'Re > 0,5: Stoks qonuni qo‘llanmaydi (kichikroq sharcha yoki yopishqoqroq suyuqlik oling).';
      else note = 'Re ≪ 1: laminar rejim, Stoks usuli o‘rinli.';
      return {
        results: [
          { label: 'Terminal tezlik v', value: vt, unit: 'm/s', digits: 3 },
          { label: 'Tushish vaqti t = l/v', value: t, unit: 's', digits: 3 },
          { label: 'Hisoblangan η', value: etaBack, unit: 'Pa·s', digits: 3 },
          { label: 'Stoks kuchi F_St', value: FSt, unit: 'N', digits: 3 },
          { label: 'Og‘irlik − Arximed', value: Fnet, unit: 'N', digits: 3 },
          { label: 'Reynolds soni Re', value: Re, unit: '', digits: 3 }
        ],
        chart: {
          title: 'Tushayotgan sharcha tezligi v(t)', xLabel: 't, s', yLabel: 'v, m/s',
          series: [{ name: 'v(t) = v∞(1 − e^(−t/τ))', points: pts }, { name: 'Joriy', points: [[t, vAt(t)]] }]
        },
        note
      };
    }
  }
};
