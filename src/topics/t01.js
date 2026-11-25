export default {
  id: 1,
  slug: 'otilgan-jism',
  title: "Gorizontga burchak ostida otilgan jism",
  category: 'Mexanika',
  emoji: '🎯',
  short: "Boshlang'ich tezlik va otish burchagiga qarab jism trayektoriyasi, maksimal balandligi, uchish vaqti va uchish uzoqligini o'rganing.",
  aim: [
    "Gorizontga burchak ostida otilgan jism harakati qonuniyatlarini o'rganish",
    "Boshlang'ich tezlik va otish burchagining trayektoriyaga ta'sirini aniqlash",
    "Maksimal ko'tarilish balandligi, uchish vaqti va uchish uzoqligini hisoblash",
    "Amaliy va virtual tajriba natijalarini taqqoslash"
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Kompyuter yoki mobil qurilma', 'Kalkulyator'],
  learn: [
    "Gorizontga burchak ostida otilgan jism harakatini gorizontal va vertikal tashkil etuvchilarga ajratishni",
    "Uchish vaqti, maksimal balandlik va uchish uzoqligini formulalar bo'yicha hisoblashni",
    "Otish burchagi va boshlang'ich tezlik trayektoriyaga qanday ta'sir qilishini",
    "Virtual tajriba natijasini nazariy hisob bilan solishtirib, xatolikni baholashni"
  ],
  civil: [
    "Beton nasosi va kran strelasidan otilayotgan beton aralashmasi yoki suv oqimi parabola chizadi; shu orqali nasos quvuri uchining balandligi va burchagi tanlanadi.",
    "Yong'in shlangidan chiqqan suv oqimi qaysi qavatga yetishi H va S formulalari bilan oldindan baholanadi.",
    "Buzish (demontaj) ishlarida qulayotgan bo'laklar tushish zonasi uchish uzoqligi bo'yicha hisoblanib, xavfli hudud to'siladi.",
    "Qurilish maydonida yuk tashlash tarnovi (truba) burchagi materialning qayerga tushishini belgilaydi."
  ],
  keyFact: "Havo qarshiligisiz eng uzoq uchish 45° da bo'ladi, ammo kran strelasidan tushayotgan yuk uchun bu burchakda ham yon tomonga siljish 10-20 m ga yetishi mumkin, shuning uchun xavfsizlik zonasi doim kengroq olinadi.",
  mistakes: [
    "Burchakni gradusda qoldirib kalkulyatorni radian rejimida ishlatish: sin30° ni 0,5 emas, −0,99 deb olish. Hisoblashdan oldin rejimni tekshiring.",
    "Maksimal balandlik formulasida sin²α o'rniga sinα ni olish; H = v₀²sin²α/(2g) ekanini eslang.",
    "Boshlang'ich balandlikni nol deb olish: agar jism kran strelasi uchidan otilsa, bu formulalar to'g'ridan-to'g'ri ishlamaydi."
  ],
  glossary: [
    {
      "t": "Trayektoriya",
      "d": "jism harakat davomida chizgan chiziq; bu holda parabola"
    },
    {
      "t": "Uchish uzoqligi",
      "d": "otilgan nuqtadan tushgan nuqtagacha gorizontal masofa S"
    },
    {
      "t": "Maksimal balandlik",
      "d": "trayektoriyaning eng yuqori nuqtasi H"
    },
    {
      "t": "Erkin tushish tezlanishi",
      "d": "og'irlik kuchi beradigan tezlanish, g ≈ 9,81 m/s²"
    },
    {
      "t": "Tezlik komponentlari",
      "d": "umumiy tezlikning gorizontal vₓ va vertikal v_y tashkil etuvchilari"
    }
  ],
  tasks: [
    {
      "q": "Beton nasosining quvuri uchidan aralashma v₀ = 15 m/s tezlik bilan gorizontga 30° burchak ostida otilmoqda. Havo qarshiligini hisobga olmay, aralashma uchish nuqtasi bilan bir balandlikda qanday uzoqlikka (S) tushadi? g = 9,81 m/s².",
      "answer": 19.86,
      "unit": "m",
      "tol": 0.03,
      "hint": "S = v₀²·sin2α / g, 2α = 60°.",
      "solution": "S = 15²·sin60°/9,81 = 225·0,866/9,81 ≈ 19.86 m."
    },
    {
      "q": "Yong'in shlangidan suv v₀ = 20 m/s tezlik bilan gorizontga 60° burchak ostida otilmoqda. Suv oqimi qanday maksimal balandlikka (H) ko'tariladi?",
      "answer": 15.29,
      "unit": "m",
      "tol": 0.03,
      "hint": "H = v₀²·sin²α / (2g).",
      "solution": "sin60° = 0,866, sin²α = 0,75; H = 400·0,75/(2·9,81) ≈ 15.29 m."
    },
    {
      "q": "Buzish paytida g'isht bo'lagi v₀ = 12 m/s tezlik bilan gorizontga 40° burchak ostida uchib ketdi. Bo'lakning havoda bo'lish vaqti (T) qancha? Boshlang'ich va oxirgi balandlik bir xil.",
      "answer": 1.573,
      "unit": "s",
      "tol": 0.03,
      "hint": "T = 2·v₀·sinα / g.",
      "solution": "sin40° = 0,6428; T = 2·12·0,6428/9,81 ≈ 1.573 s."
    },
    {
      "q": "Tarnovdan tushayotgan qum 45° burchak ostida otilib, S = 30 m uzoqlikka tushishi kerak. Boshlang'ich tezlik v₀ qancha bo'lishi kerak?",
      "answer": 17.16,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "45° da sin2α = 1, shuning uchun S = v₀²/g.",
      "solution": "v₀ = √(S·g) = √(30·9,81) = √294,3 ≈ 17.16 m/s."
    }
  ],
  learn: [
    "Gorizontga burchak ostida otilgan jism harakatini gorizontal va vertikal tashkil etuvchilarga ajratishni",
    "Uchish vaqti, maksimal balandlik va uchish uzoqligini formulalar bo'yicha hisoblashni",
    "Otish burchagi va boshlang'ich tezlik trayektoriyaga qanday ta'sir qilishini",
    "Virtual tajriba natijasini nazariy hisob bilan solishtirib, xatolikni baholashni"
  ],
  civil: [
    "Beton nasosi va kran strelasidan otilayotgan beton aralashmasi yoki suv oqimi parabola chizadi; shu orqali nasos quvuri uchining balandligi va burchagi tanlanadi.",
    "Yong'in shlangidan chiqqan suv oqimi qaysi qavatga yetishi H va S formulalari bilan oldindan baholanadi.",
    "Buzish (demontaj) ishlarida qulayotgan bo'laklar tushish zonasi uchish uzoqligi bo'yicha hisoblanib, xavfli hudud to'siladi.",
    "Qurilish maydonida yuk tashlash tarnovi (truba) burchagi materialning qayerga tushishini belgilaydi."
  ],
  keyFact: "Havo qarshiligisiz eng uzoq uchish 45° da bo'ladi, ammo kran strelasidan tushayotgan yuk uchun bu burchakda ham yon tomonga siljish 10-20 m ga yetishi mumkin, shuning uchun xavfsizlik zonasi doim kengroq olinadi.",
  mistakes: [
    "Burchakni gradusda qoldirib kalkulyatorni radian rejimida ishlatish: sin30° ni 0,5 emas, −0,99 deb olish. Hisoblashdan oldin rejimni tekshiring.",
    "Maksimal balandlik formulasida sin²α o'rniga sinα ni olish; H = v₀²sin²α/(2g) ekanini eslang.",
    "Boshlang'ich balandlikni nol deb olish: agar jism kran strelasi uchidan otilsa, bu formulalar to'g'ridan-to'g'ri ishlamaydi."
  ],
  glossary: [
    {
      "t": "Trayektoriya",
      "d": "jism harakat davomida chizgan chiziq; bu holda parabola"
    },
    {
      "t": "Uchish uzoqligi",
      "d": "otilgan nuqtadan tushgan nuqtagacha gorizontal masofa S"
    },
    {
      "t": "Maksimal balandlik",
      "d": "trayektoriyaning eng yuqori nuqtasi H"
    },
    {
      "t": "Erkin tushish tezlanishi",
      "d": "og'irlik kuchi beradigan tezlanish, g ≈ 9,81 m/s²"
    },
    {
      "t": "Tezlik komponentlari",
      "d": "umumiy tezlikning gorizontal vₓ va vertikal v_y tashkil etuvchilari"
    }
  ],
  tasks: [
    {
      "q": "Beton nasosining quvuri uchidan aralashma v₀ = 15 m/s tezlik bilan gorizontga 30° burchak ostida otilmoqda. Havo qarshiligini hisobga olmay, aralashma uchish nuqtasi bilan bir balandlikda qanday uzoqlikka (S) tushadi? g = 9,81 m/s².",
      "answer": 19.86,
      "unit": "m",
      "tol": 0.03,
      "hint": "S = v₀²·sin2α / g, 2α = 60°.",
      "solution": "S = 15²·sin60°/9,81 = 225·0,866/9,81 ≈ 19.86 m."
    },
    {
      "q": "Yong'in shlangidan suv v₀ = 20 m/s tezlik bilan gorizontga 60° burchak ostida otilmoqda. Suv oqimi qanday maksimal balandlikka (H) ko'tariladi?",
      "answer": 15.29,
      "unit": "m",
      "tol": 0.03,
      "hint": "H = v₀²·sin²α / (2g).",
      "solution": "sin60° = 0,866, sin²α = 0,75; H = 400·0,75/(2·9,81) ≈ 15.29 m."
    },
    {
      "q": "Buzish paytida g'isht bo'lagi v₀ = 12 m/s tezlik bilan gorizontga 40° burchak ostida uchib ketdi. Bo'lakning havoda bo'lish vaqti (T) qancha? Boshlang'ich va oxirgi balandlik bir xil.",
      "answer": 1.573,
      "unit": "s",
      "tol": 0.03,
      "hint": "T = 2·v₀·sinα / g.",
      "solution": "sin40° = 0,6428; T = 2·12·0,6428/9,81 ≈ 1.573 s."
    },
    {
      "q": "Tarnovdan tushayotgan qum 45° burchak ostida otilib, S = 30 m uzoqlikka tushishi kerak. Boshlang'ich tezlik v₀ qancha bo'lishi kerak?",
      "answer": 17.16,
      "unit": "m/s",
      "tol": 0.03,
      "hint": "45° da sin2α = 1, shuning uchun S = v₀²/g.",
      "solution": "v₀ = √(S·g) = √(30·9,81) = √294,3 ≈ 17.16 m/s."
    }
  ],
  theory: [
    "Gorizontga α burchak ostida v₀ tezlik bilan otilgan jism bir vaqtning o'zida ikkita mustaqil harakatda qatnashadi: gorizontal yo'nalishda tekis harakat va vertikal yo'nalishda g tezlanishli tekis o'zgaruvchan harakat. Bu mustaqillik tamoyili butun kinematikaning asosi hisoblanadi.",
    "Havo qarshiligi hisobga olinmasa, jismga faqat og'irlik kuchi ta'sir qiladi. Gorizontal tezlik o'zgarmaydi (vₓ = v₀·cosα), vertikal tezlik esa v_y = v₀·sinα − g·t qonuni bo'yicha kamayadi, eng yuqori nuqtada nolga tushadi va keyin teskari yo'nalishda ortadi.",
    "Koordinatalar x = v₀·cosα·t va y = v₀·sinα·t − g·t²/2 ko'rinishda yoziladi. Ulardan t ni yo'qotsak, y = x·tgα − g·x²/(2·v₀²·cos²α) parabola tenglamasi hosil bo'ladi. Shuning uchun trayektoriya doim parabola shaklida bo'ladi.",
    "Uchish vaqti T = 2v₀sinα/g, maksimal balandlik H = v₀²sin²α/(2g), uchish uzoqligi S = v₀²sin2α/g formulalari bilan topiladi. Ko'tarilish vaqti tushish vaqtiga teng, trayektoriya eng yuqori nuqtaga nisbatan simmetrik.",
    "Uchish uzoqligi α = 45° da eng katta bo'ladi, chunki sin2α = 1. α va (90° − α) burchaklarda sin2α bir xil qiymat oladi, shuning uchun 30° va 60° da jism bir xil masofaga tushadi, lekin 60° da balandroq va uzoqroq uchadi.",
    "Qurilishda bu qonuniyatlar beton nasosi, gidromonitor, yong'in shlangi va tushayotgan yuklarning xavfli hududini hisoblashda ishlatiladi. Real sharoitda havo qarshiligi va shamol uchish uzoqligini kamaytiradi, shuning uchun hisoblangan qiymat yuqori chegara sifatida olinadi."
  ],
  formulas: [
    { name: 'Tezlik komponentlari', expr: 'vₓ = v₀·cosα;  v_y = v₀·sinα − g·t', note: 'g = 9,81 m/s²' },
    { name: 'Koordinatalar', expr: 'x = v₀·cosα·t;  y = v₀·sinα·t − g·t²/2', note: 'Boshlang\'ich nuqta koordinata boshida' },
    { name: 'Uchish vaqti', expr: 'T = 2·v₀·sinα / g', note: "Ko'tarilish vaqti T/2 ga teng" },
    { name: "Maksimal balandlik", expr: 'H = v₀²·sin²α / (2g)', note: 'Trayektoriyaning eng yuqori nuqtasi' },
    { name: 'Uchish uzoqligi', expr: 'S = v₀²·sin2α / g', note: 'α = 45° da maksimal' }
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring va simulyatsiya bo'limini oching.",
    "Boshlang'ich tezlik v₀ ni 20 m/s ga qo'ying.",
    "Otish burchagi α ni 45° ga o'rnating.",
    "Natijalar (T, H, S, vₓ) va grafikdagi trayektoriyani kuzating.",
    "T, H va S qiymatlarini daftarga yozib oling va 'jadvalga qo'shish' tugmasini bosing.",
    "Burchakni 30° va 60° ga o'zgartirib, S ning bir xil chiqishini tekshiring.",
    "Burchakni 15°, 75° va 85° ga qo'yib, uzoqlik va balandlik o'zgarishini jadvalga kiriting.",
    "v₀ ni 10, 20, 40 m/s qilib (α = 45° da) H va S ning v₀² ga proporsionalligini tekshiring.",
    "Har bir tajriba uchun formulalar bo'yicha qo'lda hisoblang va simulyatsiya natijasi bilan taqqoslang.",
    "Nisbiy xatolikni baholab, CSV faylni yuklab oling va xulosa yozing."
  ],
  questions: [
    "Gorizontga burchak ostida otilgan jism trayektoriyasi qanday shaklga ega va nima uchun?",
    "Harakatning gorizontal va vertikal tashkil etuvchilari qanday harakatlardan iborat?",
    "Eng yuqori nuqtada jismning tezligi qanday bo'ladi va tezlanishi nimaga teng?",
    "Qaysi burchakda uchish uzoqligi maksimal bo'ladi? Nima uchun 30° va 60° da uzoqlik bir xil?",
    "Boshlang'ich tezlik ikki marta oshirilsa, H, T va S qanday o'zgaradi?",
    "Havo qarshiligi hisobga olinsa natija qanday o'zgaradi?",
    "Beton nasosi quvurini qanday burchakka o'rnatsak, aralashma eng uzoqqa tushadi?",
    "Jism balandroq nuqtadan otilsa, uchish uzoqligi formulasi qanday o'zgaradi?",
    "Kran yuki tasodifan tushib ketsa, xavfli zonani qanday baholaysiz?"
  ],
  quiz: [
    {
      "q": "Gorizontga burchak ostida otilgan jismning trayektoriyasi qanday shaklga ega?",
      "options": [
        "Aylana",
        "Parabola",
        "Ellips",
        "To'g'ri chiziq"
      ],
      "answer": 1
    },
    {
      "q": "Parvoz vaqti qaysi formula bilan topiladi?",
      "options": [
        "T = v₀·cosα / g",
        "T = v₀ / g",
        "T = 2·v₀·sinα / g",
        "T = v₀·sin2α / g"
      ],
      "answer": 2
    },
    {
      "q": "Maksimal balandlik formulasi qaysi?",
      "options": [
        "H = v₀²·sin²α / (2g)",
        "H = v₀²/g",
        "H = v₀·sinα",
        "H = v₀²/(2g)"
      ],
      "answer": 0
    },
    {
      "q": "Eng yuqori nuqtada qaysi kattalik nolga teng?",
      "options": [
        "Umumiy tezlanish",
        "Gorizontal tezlik",
        "Og'irlik kuchi",
        "Vertikal tezlik"
      ],
      "answer": 3
    },
    {
      "q": "Havo qarshiligisiz maksimal uzoqlik qaysi burchakda olinadi?",
      "options": [
        "30°",
        "45°",
        "60°",
        "90°"
      ],
      "answer": 1
    },
    {
      "q": "v₀ ikki marta oshirilsa, uchish uzoqligi necha marta ortadi?",
      "options": [
        "2 marta",
        "8 marta",
        "4 marta",
        "o'zgarmaydi"
      ],
      "answer": 2
    },
    {
      "q": "Gorizontal tezlik komponenti qaysi formula bilan topiladi?",
      "options": [
        "vₓ = v₀·cosα",
        "vₓ = v₀·sinα",
        "vₓ = v₀ − g·t",
        "vₓ = v₀·tgα"
      ],
      "answer": 0
    },
    {
      "q": "30° va 60° da uchish uzoqligi nima uchun bir xil?",
      "options": [
        "Tezlik har xil bo'lgani uchun",
        "Massa bir xil bo'lgani uchun",
        "Havo qarshiligi tufayli",
        "sin60° = sin120° bo'lgani uchun (sin2α bir xil)"
      ],
      "answer": 3
    }
  ],
  conclusion: "Tajribada gorizontga burchak ostida otilgan jism parabola bo'ylab harakatlanishi kuzatildi. α = 45° da uchish uzoqligi eng katta bo'ldi, 30° va 60° da esa uzoqliklar teng chiqdi. Boshlang'ich tezlik ortishi bilan T ~ v₀, H va S ~ v₀² qonuniyatlari tasdiqlandi. Bu hisoblar beton nasosi, shlang oqimi va tushayotgan yuk xavfli zonasini baholashda amaliy ahamiyatga ega.",
  sim: {
    intro: "Qiymatlarni o'zgartiring, natija avtomatik hisoblanadi.",
    inputs: [
      { id: 'v0', label: "Boshlang'ich tezlik v₀", unit: 'm/s', min: 1, max: 60, step: 1, value: 20 },
      { id: 'alpha', label: "Otish burchagi α", unit: '°', min: 5, max: 85, step: 1, value: 45 }
    ],
    compute: (v) => {
      const g = 9.81;
      const a = v.alpha * Math.PI / 180;
      const T = 2 * v.v0 * Math.sin(a) / g;
      const H = v.v0 * v.v0 * Math.sin(a) ** 2 / (2 * g);
      const S = v.v0 * v.v0 * Math.sin(2 * a) / g;
      const pts = [];
      const N = 40;
      for (let i = 0; i <= N; i++) {
        const t = T * i / N;
        pts.push([+(v.v0 * Math.cos(a) * t).toFixed(3), +Math.max(0, v.v0 * Math.sin(a) * t - g * t * t / 2).toFixed(3)]);
      }
      const a45 = Math.PI / 4, T45 = 2 * v.v0 * Math.sin(a45) / g;
      const pts45 = [];
      for (let i = 0; i <= N; i++) {
        const t = T45 * i / N;
        pts45.push([+(v.v0 * Math.cos(a45) * t).toFixed(3), +Math.max(0, v.v0 * Math.sin(a45) * t - g * t * t / 2).toFixed(3)]);
      }
      return {
        results: [
          { label: 'Uchish vaqti T', value: T, unit: 's', digits: 3 },
          { label: 'Maksimal balandlik H', value: H, unit: 'm', digits: 3 },
          { label: 'Uchish uzoqligi S', value: S, unit: 'm', digits: 3 },
          { label: 'Gorizontal tezlik vₓ', value: v.v0 * Math.cos(a), unit: 'm/s', digits: 3 }
        ],
        chart: {
          title: 'Trayektoriya y(x)', xLabel: 'x, m', yLabel: 'y, m',
          series: [
            { name: 'Trayektoriya (joriy α)', points: pts },
            { name: 'Taqqoslash: α = 45°', points: pts45 },
            { name: 'Joriy', points: [[+(S / 2).toFixed(3), +H.toFixed(3)]] }
          ]
        },
        note: Math.abs(v.alpha - 45) < 0.5 ? "α = 45°: uchish uzoqligi maksimal." : `Qo'shimcha burchak ${(90 - v.alpha).toFixed(0)}° da uchish uzoqligi xuddi shunday bo'ladi.`
      };
    }
  }
};
