export default {
  id: 2,
  slug: 'zichlik',
  title: 'Jismlarning zichligini aniqlash',
  category: 'Mexanika',
  emoji: '⚖️',
  short: "Jism massasini tarozida, hajmini menzurkada o'lchab, zichligini hisoblang va materialni aniqlang.",
  aim: [
    "Jism zichligi tushunchasini tajriba asosida o'rganish",
    "Massani virtual elektron tarozi yordamida aniqlash",
    "Hajmni menzurka yordamida aniqlash",
    "Zichlikni hisoblab, turli jismlarning zichliklarini taqqoslash"
  ],
  equipment: ['Virtual laboratoriya dasturi', 'Kompyuter yoki mobil qurilma', 'Virtual elektron tarozi', 'Menzurka', 'Suv', 'Turli materiallardan tayyorlangan jismlar', 'Kalkulyator'],
  theory: [
    "Jismning birlik hajmiga to'g'ri keladigan massasiga zichlik deyiladi: ρ = m/V. SI sistemasida zichlik kg/m³ da o'lchanadi (1 g/sm³ = 1000 kg/m³).",
    "To'g'ri geometrik shaklga ega bo'lmagan jismning hajmi menzurka yordamida topiladi. Jism suvga to'liq botirilganda suv sathi ko'tariladi, hajm farqi jism hajmiga teng: V = V₂ − V₁.",
    "Hisoblangan zichlikni jadval qiymatlari bilan solishtirib, jism qaysi materialdan tayyorlanganini aniqlash mumkin: alyuminiy ≈ 2700, temir ≈ 7800, mis ≈ 8900, shisha ≈ 2500 kg/m³."
  ],
  formulas: [
    { name: 'Zichlik', expr: 'ρ = m / V', note: 'kg/m³ yoki g/sm³' },
    { name: 'Jism hajmi', expr: 'V = V₂ − V₁', note: 'V₁ — boshlang\'ich, V₂ — jism botirilgandan keyingi hajm' },
    { name: "Birliklar", expr: '1 g/sm³ = 1000 kg/m³', note: 'Suvning zichligi ≈ 1000 kg/m³' }
  ],
  procedure: [
    "Virtual laboratoriya dasturini ishga tushiring.",
    "Tajriba uchun jismni tanlang va tarozi ustiga qo'yib, massa m ni yozib oling.",
    "Menzurkaga ma'lum miqdorda suv quying va boshlang'ich hajm V₁ ni aniqlang.",
    "Jismni suvga to'liq tushiring va yangi hajm V₂ ni o'qing.",
    "V = V₂ − V₁ formulasi bilan jism hajmini hisoblang.",
    "ρ = m/V formulasi bilan zichlikni toping.",
    "Tajribani alyuminiy, temir, mis, shisha va noma'lum jism uchun takrorlang, jadvalni to'ldiring.",
    "Hisoblangan zichliklarni jadval qiymatlari bilan taqqoslab, xulosa chiqaring."
  ],
  questions: [
    "Moddaning zichligi deb nimaga aytiladi?",
    "Zichlikning SI sistemasidagi birligi qanday?",
    "Noto'g'ri geometrik shakldagi jism hajmi qanday aniqlanadi?",
    "Menzurkadagi V₁ va V₂ qiymatlar nimani bildiradi?",
    "Bir xil hajmdagi temir va alyuminiy jismlarning massalari nima uchun turlicha?",
    "Zichlikni bilgan holda jism materialini aniqlash mumkinmi?",
    "Tajribada o'lchash xatoliklari qanday sabablarga ko'ra yuzaga keladi?"
  ],
  quiz: [
    { q: "Zichlik qaysi formula bilan aniqlanadi?", options: ["ρ = V/m", "ρ = m/V", "ρ = m·V", "ρ = F/S"], answer: 1 },
    { q: "SI sistemasida zichlik birligi qaysi?", options: ["g", "N", "kg/m³", "Pa"], answer: 2 },
    { q: "Noto'g'ri shakldagi jism hajmi qaysi usul bilan aniqlanadi?", options: ["Om qonuni", "Arximed usuli (suvga botirish)", "Guk qonuni", "Nyuton qonuni"], answer: 1 },
    { q: "Hajm ortib, massa o'zgarmasa zichlik qanday o'zgaradi?", options: ["Ortadi", "O'zgarmaydi", "Kamayadi", "Nol bo'ladi"], answer: 2 },
    { q: "Suvning zichligi taxminan qancha?", options: ["100 kg/m³", "500 kg/m³", "1000 kg/m³", "2000 kg/m³"], answer: 2 }
  ],
  conclusion: "Virtual tajribada turli jismlarning massasi va hajmi aniqlanib, ρ = m/V formulasi bo'yicha zichligi hisoblandi. Turli moddalarning zichligi turlicha ekanligi ko'rsatildi. Hisoblangan qiymatni jadval qiymatlari bilan solishtirib, noma'lum jism materialini aniqlash mumkin ekanligi o'rganildi.",
  sim: {
    intro: "Qiymatlarni o'zgartiring, natija avtomatik hisoblanadi.",
    inputs: [
      { id: 'm', label: 'Jism massasi m', unit: 'g', min: 5, max: 500, step: 1, value: 78 },
      { id: 'V1', label: "Suvning boshlang'ich hajmi V₁", unit: 'sm³', min: 20, max: 200, step: 1, value: 50 },
      { id: 'V2', label: 'Jism botirilgandan keyingi hajm V₂', unit: 'sm³', min: 21, max: 260, step: 0.5, value: 60 }
    ],
    compute: (v) => {
      const V = v.V2 - v.V1;
      if (V <= 0) {
        return {
          results: [{ label: 'Jism hajmi V', value: 0, unit: 'sm³', digits: 3 }],
          chart: { title: 'Massa va hajm', xLabel: 'V, sm³', yLabel: 'm, g', series: [{ name: 'm = ρV', points: [[0, 0], [1, 0]] }, { name: 'Joriy', points: [[0, v.m]] }] },
          note: "V₂ qiymati V₁ dan katta bo'lishi kerak."
        };
      }
      const rho = v.m / V; // g/sm3
      const rhoSI = rho * 1000; // kg/m3
      const mats = [['alyuminiy', 2700], ['shisha', 2500], ['temir (po\'lat)', 7800], ['mis', 8900], ['suv', 1000], ['yog\'och', 600]];
      let best = mats[0], bd = Infinity;
      for (const m of mats) { const d = Math.abs(m[1] - rhoSI) / m[1]; if (d < bd) { bd = d; best = m; } }
      const Vmax = Math.max(V * 1.5, 1);
      const pts = [];
      for (let i = 0; i <= 20; i++) { const x = Vmax * i / 20; pts.push([+x.toFixed(3), +(rho * x).toFixed(3)]); }
      return {
        results: [
          { label: 'Jism hajmi V', value: V, unit: 'sm³', digits: 3 },
          { label: 'Zichlik ρ', value: rho, unit: 'g/sm³', digits: 3 },
          { label: 'Zichlik ρ (SI)', value: rhoSI, unit: 'kg/m³', digits: 4 }
        ],
        chart: {
          title: 'Massaning hajmga bog\'liqligi (qiyalik = ρ)', xLabel: 'V, sm³', yLabel: 'm, g',
          series: [{ name: 'm = ρ·V', points: pts }, { name: 'Joriy', points: [[+V.toFixed(3), +v.m]] }]
        },
        note: bd < 0.1 ? `Eng yaqin material: ${best[0]} (≈ ${best[1]} kg/m³).` : "Jadvaldagi materiallardan birortasiga aniq mos kelmadi; o'lchashlarni tekshiring."
      };
    }
  }
};
