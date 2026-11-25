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
    "Yorug'lik moddaga tushganda bir qismi qaytadi, bir qismi yutiladi va qolgani o'tadi. O'tkazuvchanlik koeffitsiyenti τ = I_t/I₀ o'tgan va tushgan yorug'lik intensivliklari nisbatini beradi va foizda ham ifodalanadi.",
    "Bir jinsli yutuvchi muhitda yorug'likning susayishi Buger–Lambert qonuni bilan ifodalanadi: I = I₀·e^(−μd). Bu yerda μ — yutilish koeffitsiyenti (m⁻¹), d — namuna qalinligi (m). Demak τ = e^(−μd).",
    "Qalinlik ortgan sari yorug'lik eksponensial kamayadi: bir xil qatlam doim bir xil ulushni yutadi. Qalinlik ikki baravar ortsa, τ kvadratga ko'tariladi (τ₂ = τ₁²).",
    "Yutilish koeffitsiyenti materialga va to'lqin uzunligiga bog'liq. O'lchangan I dan μ = −(1/d)·ln(I/I₀) formulasi bilan μ ni topish mumkin; bu materialning shaffofligini taqqoslash imkonini beradi.",
    "Yoritilganlik lyuksda (lx) o'lchanadi va lyuksmetr yordamida I₀ va I_t topiladi. O'lchashda tashqi yorug'lik, ifloslanish va sirtdan qaytish xatolik beradi, shuning uchun sinov qorong'i xonada o'tkaziladi.",
    "Qurilishda deraza, fasad va tom shishalarini tanlash yorug'lik o'tkazuvchanligi va issiqlik o'tkazuvchanligi bo'yicha amalga oshiriladi: ko'p yorug'lik kerak, ammo ortiqcha qizish va yaltirash bo'lmasligi shart."
  ],
  formulas: [
    { name: 'O\'tkazuvchanlik koeffitsiyenti', expr: 'τ = I_t / I₀', note: 'foizda: τ% = τ·100%' },
    { name: 'Buger–Lambert qonuni', expr: 'I = I₀·e^(−μd)', note: 'μ — yutilish koeffitsiyenti (m⁻¹), d — qalinlik (m)' },
    { name: 'O\'tkazuvchanlik', expr: 'τ = e^(−μd)', note: 'qalinlik ortsa τ kamayadi' },
    { name: 'Yutilish koeffitsiyenti', expr: 'μ = −(1/d)·ln(I/I₀)', note: 'o\'lchangan I dan μ ni topish' },
  ],
  procedure: [
    "Tushayotgan yorug'lik manbasini yoqing va lyuksmetr bilan I₀ ni o'lchang (yoki simulyatsiyada kiriting).",
    "Namuna qalinligi d ni o'rnating va mm dan m ga o'tkazing.",
    "Yutilish koeffitsiyenti μ ni tanlang (oyna, plastik, tonirovkali shisha).",
    "Namunani yorug'lik yo'liga qo'ying va o'tgan yoritilganlik I_t ni o'lchang.",
    "τ = I_t/I₀ ni hisoblang va foizda yozing.",
    "τ = e^(−μd) bilan nazariy qiymatni topib, simulyatsiya natijasi bilan solishtiring.",
    "Qalinlikni 5, 10, 20, 40 mm qilib o'zgartiring va I_t ni jadvalga yozing.",
    "ln(I/I₀) ning d ga bog'liqligidan chiziq tuzing; uning qiyaligi −μ ga teng.",
    "μ ni boshqa material uchun ham aniqlang va shaffofliklarni solishtiring.",
    "I_t(d) grafigini tuzing va qaysi qalinlikda yorug'lik yarmiga susayishini aniqlab, xulosa yozing."
  ],
  questions: [
    "Yorug'lik o'tkazuvchanligi τ nima va u qanday hisoblanadi?",
    "Buger–Lambert qonunini yozing va tushuntiring.",
    "Yutilish koeffitsiyenti μ ning birligi nima?",
    "Qalinlik ortsa o'tgan yorug'lik qanday o'zgaradi?",
    "Qalinlik ikki baravar ortsa τ qanday o'zgaradi?",
    "μ ni o'lchangan I va I₀ dan qanday topish mumkin?",
    "Yoritilganlik qaysi asbob bilan va qanday birlikda o'lchanadi?",
    "Oyna ifloslanishi τ ga qanday ta'sir qiladi?",
    "Fasad uchun shisha tanlashda qaysi parametrlar muhim?",
    "Yarim susayish qalinligi d½ qanday topiladi?"
  ],
  quiz: [
    {
      "q": "O'tkazuvchanlik koeffitsiyenti qaysi formula bilan topiladi?",
      "options": [
        "τ = I_t/I₀",
        "τ = I₀·I_t",
        "τ = I₀ − I_t",
        "τ = I₀/d"
      ],
      "answer": 0
    },
    {
      "q": "Buger–Lambert qonuniga ko'ra qalinlik oshganda I:",
      "options": [
        "Chiziqli ortadi",
        "Eksponensial kamayadi",
        "O'zgarmaydi",
        "Chiziqli kamayadi"
      ],
      "answer": 1
    },
    {
      "q": "Yoritilganlik birligi qaysi?",
      "options": [
        "Vatt",
        "Om",
        "Lyuks",
        "Joul"
      ],
      "answer": 2
    },
    {
      "q": "μ ning SI birligi:",
      "options": [
        "m",
        "m²",
        "s⁻¹",
        "m⁻¹"
      ],
      "answer": 3
    },
    {
      "q": "τ = 0,8 bu necha foiz?",
      "options": [
        "80 %",
        "8 %",
        "0,8 %",
        "800 %"
      ],
      "answer": 0
    },
    {
      "q": "Qalinlik ikki baravar ortsa τ:",
      "options": [
        "Ikki baravar ortadi",
        "Ikki baravar kamayadi",
        "Kvadratga ko'tariladi (τ₂ = τ₁²)",
        "Nolga teng bo'ladi"
      ],
      "answer": 2
    },
    {
      "q": "μ = −(1/d)·ln(I/I₀) formulasi nimani topadi?",
      "options": [
        "Qalinlikni",
        "Yutilish koeffitsiyentini",
        "Yoritilganlikni",
        "Vaqtni"
      ],
      "answer": 1
    },
    {
      "q": "Yarim susayish qalinligi uchun to'g'ri formula:",
      "options": [
        "d = 1/μ",
        "d = μ·ln2",
        "d = 2μ",
        "d = ln2/μ"
      ],
      "answer": 3
    }
  ],
  conclusion: "Yorug'likning o'tkazuvchanligi τ = I_t/I₀ aniqlandi va Buger–Lambert qonuni I = I₀·e^(−μd) tasdiqlandi. Qalinlik ortgan sari o'tgan yorug'lik eksponensial kamayishi ko'rsatildi. Yutilish koeffitsiyenti μ materiallarni shaffofligi bo'yicha taqqoslash imkonini beradi. Natijalar deraza va fasad shishalarini tanlashda qo'llanadi.",
  learn: [
    "Yorug'lik o'tkazuvchanligi τ = I_t/I₀ ning ma'nosini",
    "Buger–Lambert qonuni I = I₀·e^(−μd) ni qo'llashni",
    "Qalinlik va yutilish koeffitsiyenti ta'sirini",
    "Namunaning shaffoflik darajasini baholashni"
  ],
  civil: [
    "Deraza oynasi va ikki kamerali stekloplaketlarning yorug'lik o'tkazuvchanligi xonaning tabiiy yoritilishini va energiya sarfini belgilaydi.",
    "Fasad shishalarida (tonirovkali, low-E qoplamali) τ kamaytirilib, issiqlik va yorqinlik nazorat qilinadi.",
    "Tomdagi yorug'lik o'tkazuvchi polikarbonat va akril panellar qalinlik oshgani sari qorong'ilashadi, buni Buger–Lambert qonuni tushuntiradi.",
    "Zavod va omborlarda yoritish me'yori (lyuks) tekshirilib, oyna ifloslanishi hisobga olinadi."
  ],
  keyFact: "Yorug'lik qalinlik oshishi bilan chiziqli emas, eksponensial kamayadi: har bir bir xil qalinlik qatlami yorug'likning bir xil ulushini yutadi.",
  mistakes: [
    "d ni mm da formulaga qo'yish: μ m⁻¹ da bo'lsa, d ni metrga o'tkazing.",
    "τ ni foiz va birlik ulushida aralashtirish: τ = 0,8 bu 80 % ga teng.",
    "Sirtdan qaytishni hisobga olmaslik: haqiqiy oynada yutilishdan tashqari qaytish ham yorug'likni kamaytiradi."
  ],
  glossary: [
    {
      "t": "O'tkazuvchanlik τ",
      "d": "o'tgan va tushgan yorug'lik oqimlari nisbati"
    },
    {
      "t": "Yutilish koeffitsiyenti μ",
      "d": "moddaning yorug'likni yutish qobiliyati, birligi m⁻¹"
    },
    {
      "t": "Buger–Lambert qonuni",
      "d": "I = I₀·e^(−μd), yorug'likning qalinlik bo'yicha eksponensial susayishi"
    },
    {
      "t": "Yoritilganlik",
      "d": "sirt birligiga tushuvchi yorug'lik oqimi, birligi lyuks (lx)"
    },
    {
      "t": "Shaffoflik",
      "d": "modda yorug'likni yaxshi o'tkazish xususiyati"
    }
  ],
  tasks: [
    {
      "q": "Oyna uchun μ = 30 m⁻¹, qalinligi d = 8 mm. O'tkazuvchanlik τ = e^(−μd) ni foizda toping.",
      "answer": 78.66,
      "unit": "%",
      "tol": 0.03,
      "hint": "d = 0,008 m, μd = 0,24.",
      "solution": "τ = e^(−0,24) ≈ 0,787, ya'ni 78.66 %."
    },
    {
      "q": "I₀ = 1200 lx yorug'lik μ = 50 m⁻¹ va d = 15 mm bo'lgan namunadan o'tdi. O'tgan yoritilganlik I_t necha lyuks?",
      "answer": 566.8,
      "unit": "lx",
      "tol": 0.03,
      "hint": "μd = 0,75; I_t = I₀·e^(−μd).",
      "solution": "I_t = 1200·e^(−0,75) ≈ 566.8 lx."
    },
    {
      "q": "d = 10 mm qalinlikdagi namuna yorug'likning 45 % ini o'tkazadi (I/I₀ = 0,45). Yutilish koeffitsiyenti μ necha m⁻¹?",
      "answer": 79.85,
      "unit": "m⁻¹",
      "tol": 0.03,
      "hint": "μ = −(1/d)·ln(I/I₀).",
      "solution": "μ = −ln(0,45)/0,01 = 0,7985/0,01 ≈ 79.85 m⁻¹."
    },
    {
      "q": "μ = 40 m⁻¹ bo'lgan materialning qanday qalinligida yorug'lik ikki baravar susayadi (τ = 0,5)? Javobni mm da bering.",
      "answer": 17.33,
      "unit": "mm",
      "tol": 0.03,
      "hint": "e^(−μd) = 0,5 ⇒ d = ln2/μ.",
      "solution": "d = 0,6931/40 = 0,01733 m ≈ 17.33 mm."
    }
  ],
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
