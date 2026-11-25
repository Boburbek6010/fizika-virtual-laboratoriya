export default {
  id: 3,
  slug: 'yung-moduli',
  title: 'Egilish usuli bilan Yung modulini aniqlash',
  category: 'Mexanika',
  emoji: '📏',
  short: "Ikki tayanchga qo'yilgan balkaning o'rtasiga yuk osib, egilish kattaligi orqali materialning Yung modulini aniqlang.",
  aim: [
    "Qattiq jismlarning elastik deformatsiyasini o'rganish",
    "Balkaning tashqi kuch ta'siridagi egilish deformatsiyasini kuzatish",
    "Yuk miqdori va balkaning egilishi orasidagi bog'lanishni aniqlash",
    "Tajriba natijalari asosida materialning Yung modulini hisoblash",
    "Turli materiallarning elastiklik xususiyatlarini taqqoslash"
  ],
  equipment: [
    'Virtual laboratoriya dasturi',
    'Kompyuter yoki mobil qurilma',
    "Ikki tayanchga o'rnatilgan balka",
    'Yuklar to\'plami',
    'Virtual mikrometr yoki indikator',
    'Chizg\'ich',
    'Shtangensirkul',
    'Kalkulyator'
  ],
  theory: [
    "Tashqi kuch ta'sirida jism shakli yoki o'lchamining o'zgarishi deformatsiya deyiladi. Kuch olib tashlangandan keyin jism dastlabki holatiga qaytsa, deformatsiya elastik deformatsiya hisoblanadi. Kichik elastik deformatsiyalarda Guk qonuni bajariladi: σ = E·ε.",
    "Yung moduli E — materialning elastiklik (qattiqlik) xususiyatini tavsiflovchi kattalik: E = σ/ε, bu yerda σ — mexanik kuchlanish (Pa), ε — nisbiy deformatsiya (o'lchamsiz). Yung moduli material turiga bog'liq, o'lcham va shaklga bog'liq emas. Po'lat uchun taxminan 200 GPa, alyuminiy uchun ≈ 70 GPa, mis uchun ≈ 110 GPa.",
    "Ikki tayanchga erkin qo'yilgan, to'g'ri to'rtburchak kesimli balkaning o'rtasiga F kuch ta'sir qilsa, o'rtadagi egilish (strelka) y = F·l³ / (48·E·I) bo'ladi. Kesimning inersiya momenti I = b·h³/12, shuning uchun E = F·l³ / (4·b·h³·y).",
    "Egilish l³ ga to'g'ri, h³ ga teskari proporsional. Ya'ni balka qalinligi 2 marta oshsa, egilish 8 marta kamayadi, tayanchlar orasidagi masofa 2 marta oshsa, egilish 8 marta ortadi. Shu sababli qurilishda to'sinlarni baland kesimli qilib loyihalash samarali. Tajribada egilish kichik bo'lishi (elastiklik chegarasidan oshmasligi) shart.",
    "Yuk kuchi F = m·g (g = 9,81 m/s²) formulasi bilan topiladi. Yung modulini bilvosita aniqlash uchun bevosita o'lchanadigan kattaliklar: m, l, b, h va y. Eng katta xatolik odatda egilish y ni o'lchashdan (juda kichik qiymat) va qalinlik h ni o'lchashdan kelib chiqadi (h kub darajada kiradi)."
  ],
  formulas: [
    { name: 'Yung moduli (umumiy)', expr: 'E = σ / ε', note: 'σ = F/S, ε = Δl/l' },
    { name: 'Balkaning egilishi', expr: 'y = F·l³ / (48·E·I)', note: "O'rtasiga yuk qo'yilgan, ikki tayanchli balka" },
    { name: "Kesim inersiya momenti", expr: 'I = b·h³ / 12', note: "To'g'ri to'rtburchak kesim; b — eni, h — qalinligi" },
    { name: 'Yung moduli (egilish usuli)', expr: 'E = F·l³ / (4·b·h³·y)', note: 'Ishchi formula; F = m·g' },
    { name: 'Yuk kuchi', expr: 'F = m·g', note: 'g = 9,81 m/s²' },
    { name: "Nisbiy xatolik", expr: 'ΔE/E = ΔF/F + 3Δl/l + Δb/b + 3Δh/h + Δy/y', note: 'Darajalar xatolikka ko\'paytiriladi' }
  ],
  procedure: [
    "Virtual laboratoriya dasturini ishga tushiring va tajriba uchun balka materialini tanlang.",
    "Shtangensirkul (mikrometr) yordamida balkaning eni b va qalinligi h ni bir necha marta o'lchab, o'rtacha qiymatni oling.",
    "Tayanchlar orasidagi masofa l ni chizg'ich bilan aniqlang.",
    "Indikatorning boshlang'ich ko'rsatishini nolga keltiring.",
    "Balkaning o'rtasiga m massali yukni joylashtiring.",
    "Yuk ta'sirida hosil bo'lgan egilish y ni indikatordan o'qing va yozib oling.",
    "F = m·g formulasi bilan kuchni, so'ng E = F·l³/(4·b·h³·y) formulasi bilan Yung modulini hisoblang.",
    "Yuk massasini bosqichma-bosqich oshirib, tajribani kamida 5 marta takrorlang va natijalarni jadvalga kiriting.",
    "F ga bog'liq y grafigini chizing (to'g'ri chiziq bo'lishi kerak), E ning o'rtacha qiymatini va xatoligini hisoblang.",
    "Tajriba qiymatini jadvaldagi Yung moduli bilan taqqoslab, xulosa chiqaring."
  ],
  questions: [
    "Deformatsiya deb nimaga aytiladi? Elastik deformatsiya nima?",
    "Yung modulining fizik ma'nosi nimadan iborat va u qanday formula bilan aniqlanadi?",
    "Yung modulining SI sistemasidagi birligi qanday?",
    "Egilish deformatsiyasida balkaning pastki va yuqori qatlamlari qanday holatda bo'ladi?",
    "Yuk massasi oshirilsa, balkaning egilishi qanday o'zgaradi? Grafik qanday ko'rinishda bo'ladi?",
    "Balka qalinligi 2 marta oshirilsa, egilish necha marta o'zgaradi? Nima uchun?",
    "Tayanchlar orasidagi masofa ortishi egilishga qanday ta'sir qiladi?",
    "Nima uchun turli materiallarning Yung modullari turlicha?",
    "Tajribada Yung modulini aniqlashda qanday o'lchash xatoliklari yuzaga kelishi mumkin?",
    "Qurilish muhandisligida Yung moduli nima uchun muhim?"
  ],
  quiz: [
    { q: "Yung moduli qaysi formula bilan aniqlanadi?", options: ["E = ε / σ", "E = F / l", "E = σ / ε", "E = m·g"], answer: 2 },
    { q: "Egilish usulida balka qanday joylashtiriladi va yuk qayerga qo'yiladi?", options: ["Bir uchi mahkamlangan, yuk erkin uchiga", "Ikki tayanchga erkin qo'yilgan, yuk o'rtasiga", "Osma holatda, yuk tayanchga", "Aylanuvchi holatda, yuk chetiga"], answer: 1 },
    { q: "Balka qalinligi h ikki marta oshirilsa, egilish qanday o'zgaradi?", options: ["2 marta kamayadi", "4 marta kamayadi", "8 marta kamayadi", "O'zgarmaydi"], answer: 2 },
    { q: "Yung moduli quyidagilardan qaysi biriga bog'liq emas?", options: ["Material turiga", "Atomlararo kuchlarga", "Balka uzunligiga", "Kristall panjaraga"], answer: 2 },
    { q: "Egilish tajribasida natija ishonchli bo'lishi uchun egilish qanday bo'lishi kerak?", options: ["Kichik (elastik chegarada)", "Imkon qadar katta", "Plastik deformatsiya hosil qiladigan", "Balka sinish darajasida"], answer: 0 }
  ],
  conclusion: "Virtual tajribada ikki tayanchli balkaning egilish deformatsiyasi o'rganildi. Yuk massasi ortishi bilan egilish chiziqli ortishi (y ~ F) kuzatildi. Balkaning o'lchamlari, ta'sir etuvchi kuch va egilish asosida E = F·l³/(4·b·h³·y) formulasi bilan Yung moduli hisoblandi va jadval qiymati bilan taqqoslandi. Yung moduli materialning elastiklik xususiyatini tavsiflovchi muhim kattalik ekanligi aniqlandi.",
  sim: {
    intro: "Balka o'lchamlari va o'lchangan egilishni kiriting, Yung moduli hisoblanadi va ma'lum materiallar bilan taqqoslanadi.",
    inputs: [
      { id: 'm', label: 'Yuk massasi m', unit: 'kg', min: 0.1, max: 20, step: 0.1, value: 2 },
      { id: 'l', label: 'Tayanchlar orasidagi masofa l', unit: 'm', min: 0.1, max: 1.5, step: 0.01, value: 0.5 },
      { id: 'b', label: 'Balka eni b', unit: 'mm', min: 5, max: 60, step: 0.5, value: 20 },
      { id: 'h', label: 'Balka qalinligi h', unit: 'mm', min: 1, max: 15, step: 0.1, value: 3 },
      { id: 'y', label: "O'lchangan egilish y", unit: 'mm', min: 0.1, max: 30, step: 0.1, value: 5.7 }
    ],
    compute: (v) => {
      const g = 9.81;
      const F = v.m * g;
      const l = v.l, b = v.b / 1000, h = v.h / 1000, y = v.y / 1000;
      const E = F * Math.pow(l, 3) / (4 * b * Math.pow(h, 3) * y);
      const I = b * Math.pow(h, 3) / 12;
      const sigmaMax = (F * l / 4) * (h / 2) / I; // eng katta kuchlanish
      const mats = [['alyuminiy', 70e9], ['mis', 110e9], ['po\'lat', 200e9], ['shisha', 65e9], ['yog\'och', 10e9]];
      let best = mats[0], bd = Infinity;
      for (const mt of mats) { const d = Math.abs(mt[1] - E) / mt[1]; if (d < bd) { bd = d; best = mt; } }
      const k = y / F; // y = k F
      const pts = [];
      for (let i = 0; i <= 20; i++) { const f = 2 * F * i / 20; pts.push([+f.toFixed(3), +(k * f * 1000).toFixed(4)]); }
      const ptsSteel = [], ptsAl = [];
      for (let i = 0; i <= 20; i++) {
        const f = 2 * F * i / 20;
        const c = Math.pow(l, 3) / (4 * b * Math.pow(h, 3)) * 1000;
        ptsSteel.push([+f.toFixed(3), +(f * c / 200e9).toFixed(4)]);
        ptsAl.push([+f.toFixed(3), +(f * c / 70e9).toFixed(4)]);
      }
      return {
        results: [
          { label: 'Yuk kuchi F', value: F, unit: 'N', digits: 3 },
          { label: 'Yung moduli E', value: E, unit: 'Pa', digits: 3 },
          { label: 'Yung moduli E', value: E / 1e9, unit: 'GPa', digits: 3 },
          { label: 'Kesim inersiya momenti I', value: I, unit: 'm⁴', digits: 3 },
          { label: 'Eng katta kuchlanish σ', value: sigmaMax / 1e6, unit: 'MPa', digits: 3 }
        ],
        chart: {
          title: 'Egilishning yuk kuchiga bog\'liqligi', xLabel: 'F, N', yLabel: 'y, mm',
          series: [{ name: "O'lchangan (hisoblangan E)", points: pts }, { name: "Nazariy: po'lat (200 GPa)", points: ptsSteel }, { name: 'Nazariy: alyuminiy (70 GPa)', points: ptsAl }, { name: 'Joriy', points: [[+F.toFixed(3), +v.y]] }]
        },
        note: (bd < 0.15 ? `Natija ${best[0]} uchun jadval qiymatiga (≈ ${best[1] / 1e9} GPa) yaqin.` : "Natija jadvaldagi materiallardan farq qiladi; o'lchashlarni tekshiring.") + (v.y > v.l * 1000 / 50 ? " Diqqat: egilish katta, elastiklik sharti buzilishi mumkin." : "")
      };
    }
  }
};
