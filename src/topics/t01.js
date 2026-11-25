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
  theory: [
    "Gorizontga α burchak ostida v₀ tezlik bilan otilgan jism bir vaqtning o'zida ikki harakatda qatnashadi: gorizontal yo'nalishda tekis harakat va vertikal yo'nalishda tekis o'zgaruvchan (g tezlanishli) harakat.",
    "Havo qarshiligi hisobga olinmasa, jismga faqat og'irlik kuchi ta'sir qiladi. Shuning uchun gorizontal tezlik o'zgarmaydi (vₓ = v₀·cosα), vertikal tezlik esa v_y = v₀·sinα − g·t qonuni bo'yicha o'zgaradi.",
    "Trayektoriya parabola shaklida bo'ladi. Eng yuqori nuqtada vertikal tezlik nolga teng, jism faqat gorizontal tezlikka ega bo'ladi. Uchish uzoqligi α = 45° da eng katta qiymatga erishadi, α va (90° − α) burchaklarda esa uchish uzoqligi bir xil bo'ladi."
  ],
  formulas: [
    { name: 'Tezlik komponentlari', expr: 'vₓ = v₀·cosα;  v_y = v₀·sinα − g·t', note: 'g = 9,81 m/s²' },
    { name: 'Koordinatalar', expr: 'x = v₀·cosα·t;  y = v₀·sinα·t − g·t²/2', note: 'Boshlang\'ich nuqta koordinata boshida' },
    { name: 'Uchish vaqti', expr: 'T = 2·v₀·sinα / g', note: "Ko'tarilish vaqti T/2 ga teng" },
    { name: "Maksimal balandlik", expr: 'H = v₀²·sin²α / (2g)', note: 'Trayektoriyaning eng yuqori nuqtasi' },
    { name: 'Uchish uzoqligi', expr: 'S = v₀²·sin2α / g', note: 'α = 45° da maksimal' }
  ],
  procedure: [
    "Virtual laboratoriyani ishga tushiring.",
    "Boshlang'ich tezlik v₀ ni kiriting.",
    "Otish burchagi α ni tanlang.",
    "Jismni otib, harakat trayektoriyasini kuzating.",
    "Maksimal balandlik H va uchish vaqti T ni yozib oling.",
    "Uchish masofasi S ni aniqlang.",
    "Tajribani α = 30°, 45°, 60° burchaklarda (v₀ = 20 m/s) takrorlang va natijalarni jadvalga kiriting.",
    "Olingan qiymatlarni formulalar bo'yicha hisoblangan natijalar bilan taqqoslang."
  ],
  questions: [
    "Gorizontga burchak ostida otilgan jism trayektoriyasi qanday shaklga ega va nima uchun?",
    "Harakatning gorizontal va vertikal tashkil etuvchilari qanday harakatlardan iborat?",
    "Eng yuqori nuqtada jismning tezligi qanday bo'ladi?",
    "Qaysi burchakda uchish uzoqligi maksimal bo'ladi? Nima uchun 30° va 60° da uzoqlik bir xil?",
    "Boshlang'ich tezlik ikki marta oshirilsa, H, T va S qanday o'zgaradi?",
    "Havo qarshiligi hisobga olinsa natija qanday o'zgaradi?"
  ],
  quiz: [
    { q: "Gorizontga burchak ostida otilgan jismning trayektoriyasi qanday shaklga ega?", options: ["Aylana", "Parabola", "Ellips", "To'g'ri chiziq"], answer: 1 },
    { q: "Parvoz vaqti qaysi formula bilan topiladi?", options: ["T = v₀·cosα / g", "T = v₀ / g", "T = 2·v₀·sinα / g", "T = v₀·sin2α / g"], answer: 2 },
    { q: "Maksimal balandlik formulasi qaysi?", options: ["H = v₀²/g", "H = v₀²·sin²α / (2g)", "H = v₀·sinα", "H = v₀²/(2g)"], answer: 1 },
    { q: "Trayektoriyaning eng yuqori nuqtasida qanday holat kuzatiladi?", options: ["Umumiy tezlik nolga teng", "Gorizontal tezlik nolga teng", "Vertikal tezlik nolga teng", "Masofa nolga teng"], answer: 2 },
    { q: "Qaysi burchak ostida otilganda uchish uzoqligi maksimal bo'ladi (havo qarshiligisiz)?", options: ["30°", "45°", "60°", "90°"], answer: 1 }
  ],
  conclusion: "Tajribada gorizontga burchak ostida otilgan jism parabola bo'ylab harakatlanishi kuzatildi. α = 45° da uchish uzoqligi eng katta bo'ldi, 30° va 60° da esa uzoqliklar teng chiqdi. Boshlang'ich tezlik ortishi bilan uchish vaqti, maksimal balandlik va uchish uzoqligi ortishi aniqlandi (H va S ~ v₀², T ~ v₀).",
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
