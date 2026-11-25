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
  theory: [
    'Suyuqlik qatlamlari bir-biriga nisbatan siljiganda ular orasida ichki ishqalanish (yopishqoqlik) kuchi paydo bo‘ladi. Uning o‘lchovi — dinamik yopishqoqlik koeffitsiyenti η (SI da Pa·s).',
    'Radiusi r bo‘lgan shar suyuqlikda sekin (laminar) harakatlanganda unga Stoks kuchi F = 6π·η·r·v qarshilik qiladi. Kuch tezlikka to‘g‘ri proporsional va harakatga qarama-qarshi yo‘nalgan.',
    'Tushayotgan sharchaga uch kuch ta’sir qiladi: og‘irlik mg = ρₛ·V·g (pastga), Arximed kuchi Fₐ = ρ·V·g (yuqoriga) va Stoks kuchi. Tezlik oshgani sari Stoks kuchi ortadi va ma’lum paytda kuchlar muvozanatlashadi: mg = Fₐ + F_St. Shundan keyin sharcha tekis — terminal tezlik bilan harakatlanadi.',
    'Muvozanatdan (4/3)πr³(ρₛ − ρ)g = 6πηrv kelib chiqadi: η = 2r²g(ρₛ − ρ) / (9v). Tezlik v = l/t belgilar orasidagi masofa va vaqtdan topiladi, r = d/2.',
    'Stoks qonuni faqat laminar oqimda, ya’ni Reynolds soni Re = ρ·v·d/η ≪ 1 bo‘lganda va idish devori ta’siri kichik bo‘lganda o‘rinli. Yopishqoqlik haroratga kuchli bog‘liq: harorat ortsa, suyuqliklarda η kamayadi, shuning uchun harorat o‘lchanadi.',
    'Qurilishda yopishqoqlik beton aralashmasi, bitum, bo‘yoq va moylarning oquvchanligini baholashda, shuningdek, zarralarning cho‘kish tezligini hisoblashda ishlatiladi.'
  ],
  formulas: [
    { name: 'Stoks kuchi', expr: 'F_St = 6π·η·r·v' },
    { name: 'Og‘irlik kuchi', expr: 'F_g = ρₛ·V·g,  V = (4/3)π·r³' },
    { name: 'Arximed kuchi', expr: 'F_A = ρ·V·g' },
    { name: 'Muvozanat shartı', expr: 'F_g = F_A + F_St' },
    { name: 'Terminal tezlik', expr: 'v = 2r²·g·(ρₛ − ρ) / (9η),  v = l / t' },
    { name: 'Yopishqoqlik koeffitsiyenti', expr: 'η = 2r²·g·(ρₛ − ρ) / (9v)', note: 'd orqali: η = d²·g·(ρₛ − ρ)·t / (18·l)' },
    { name: 'Reynolds soni', expr: 'Re = ρ·v·d / η', note: 'Stoks uchun Re ≪ 1' },
    { name: 'O‘rtacha qiymat', expr: 'η_o‘rt = (η₁ + η₂ + … + ηₙ) / n' }
  ],
  procedure: [
    'Virtual laboratoriyani ishga tushiring va tajriba uchun suyuqlikni (glitserin, kastor moyi va h.k.) tanlang.',
    'Suyuqlik zichligi ρ va harorati qiymatini kiriting.',
    'Metall sharcha zichligi ρₛ ni belgilang.',
    'Mikrometr bilan sharcha diametri d ni o‘lchab, radius r = d/2 ni toping.',
    'Silindrdagi ikki belgi orasidagi masofa l ni chizg‘ich bilan aniqlang (yuqori belgi suyuqlik sirtidan pastroqda bo‘lsin, sharcha terminal tezlikka erishsin).',
    'Start tugmasini bosib, sharcha belgilar orasini o‘tish vaqti t ni sekundomer bilan o‘lchang.',
    'Tezlikni v = l/t formula bilan hisoblang.',
    'η = 2r²g(ρₛ − ρ)/(9v) formulasidan yopishqoqlikni toping.',
    'Reynolds sonini hisoblab, Stoks qonuni qo‘llanishini tekshiring (Re < 0,5).',
    'Tajribani kamida 5 marta takrorlab, η ning o‘rtacha qiymati va xatosini toping.'
  ],
  questions: [
    'Suyuqlikning yopishqoqligi (ichki ishqalanishi) nima?',
    'Ichki ishqalanish kuchi qanday paydo bo‘ladi?',
    'Stoks qonunini yozing va undagi kattaliklarni tushuntiring.',
    'Suyuqlikda tushayotgan sharchaga qanday kuchlar ta’sir qiladi?',
    'Arximed kuchi qanday aniqlanadi va qayerga yo‘nalgan?',
    'Terminal tezlik nima va u qachon yuzaga keladi?',
    'Yopishqoqlik koeffitsiyentining SI dagi birligi qanday?',
    'Sharcha radiusi 2 marta oshsa, terminal tezlik necha marta o‘zgaradi?',
    'Suyuqlik yopishqoqligi haroratga qanday bog‘liq?',
    'Stoks usulining qo‘llanish shartlari qanday (Reynolds soni, idish devori, sharcha o‘lchami)?'
  ],
  quiz: [
    { q: 'Stoks qonuniga ko‘ra sharga ta’sir etuvchi qarshilik kuchi:', options: ['F = 6π·η·r·v', 'F = ρ·V·g', 'F = m·a', 'F = k·x'], answer: 0 },
    { q: 'Dinamik yopishqoqlik koeffitsiyentining SI birligi:', options: ['Pa·s', 'Pa/m', 'N·m', 'kg/m³'], answer: 0 },
    { q: 'Terminal tezlikda sharchaning tezlanishi:', options: ['Nolga teng', 'g ga teng', '2g ga teng', 'g/2 ga teng'], answer: 0 },
    { q: 'Tajribada yopishqoqlik koeffitsiyenti qaysi formula bilan topiladi?', options: ['η = 2r²g(ρₛ − ρ)/(9v)', 'η = 9v/(2r²g(ρₛ − ρ))', 'η = (ρₛ + ρ)/(9v)', 'η = 2rv/(9g)'], answer: 0 },
    { q: 'Ko‘pchilik suyuqliklarda harorat ortsa, yopishqoqlik:', options: ['Kamayadi', 'Ortadi', 'O‘zgarmaydi', 'Nolga teng bo‘ladi'], answer: 0 }
  ],
  conclusion: 'Tajribada sharcha suyuqlikda terminal tezlik bilan tekis harakatlandi, bunda og‘irlik kuchi Arximed va Stoks kuchlari yig‘indisiga teng bo‘ldi. Tezlik v = l/t dan topilib, η = 2r²g(ρₛ − ρ)/(9v) formulasi bilan yopishqoqlik koeffitsiyenti aniqlandi va jadval qiymatiga yaqin chiqdi. Reynolds soni kichik bo‘lgani uchun Stoks qonuni qo‘llash mumkin edi. Xatolik asosan d ni o‘lchashdan (η ~ d²), vaqtni o‘lchashdan, haroratning o‘zgarishidan va idish devori ta’siridan kelib chiqadi.',
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
