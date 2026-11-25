export default {
  id: 16,
  slug: 'yerga-ulash-qarshiligi',
  title: 'Yerga ulash qarshiligini aniqlash',
  category: 'Elektr',
  emoji: '⚡',
  short: 'Himoya yerga ulagichning qarshiligini uch elektrodli usulda o\'lchash va tuproq hamda elektrod parametrlarining ta\'sirini o\'rganish.',
  aim: [
    'Himoya yerga ulash tizimining ishlash prinsipini o\'rganish',
    'Yerga ulagich qarshiligini R = U/I formulasi bilan virtual o\'lchash',
    'Tuproqning solishtirma qarshiligi ρ ning ta\'sirini tahlil qilish',
    'Elektrod uzunligi L va diametri d ning qarshilikka ta\'sirini aniqlash',
  ],
  equipment: [
    'Yerga ulash qarshiligi o\'lchagich (virtual)',
    'Tekshiriladigan yerga ulagich E (vertikal sterjen)',
    'Potensial elektrodi P va tok elektrodi C',
    'Voltmetr va ampermetr',
    'Tuproq turi va namligini tanlash paneli',
  ],
  theory: [
    'Yerga ulash — elektr qurilmasining normal holatda kuchlanish ostida bo\'lmaydigan metall qismlarini yerga ulagich orqali tuproq bilan elektr jihatdan ulashdir. Izolyatsiya buzilganda xavfli tok yerga past qarshilikli yo\'l orqali oqadi va elektr toki urishi xavfi kamayadi.',
    'Uch elektrodli (potensial tushuvi) usulida sinov toki E–C zanjiridan o\'tkaziladi, E–P oralig\'idagi kuchlanish o\'lchanadi. Yerga ulash qarshiligi R = U/I formulasidan topiladi.',
    'Qarshilik tuproqning solishtirma qarshiligi ρ ga bog\'liq: nam tuproqda ρ kichik, quruq tuproqda katta. Vertikal sterjen uchun R = ρ/(2πL)·[ln(4L/d) − 1]; demak ρ ortsa R ortadi, L ortsa R kamayadi.',
    'Qurilish obyektlarida yerga ulash qarshiligi me\'yorlarda belgilangan chegaradan (odatda bir necha om) oshmasligi kerak.',
  ],
  formulas: [
    { name: 'Yerga ulash qarshiligi', expr: 'R = U / I', note: 'U — E–P orasidagi kuchlanish (V), I — E–C zanjiridagi sinov toki (A)' },
    { name: 'Vertikal sterjenning qarshiligi', expr: 'R = ρ/(2πL) · [ln(4L/d) − 1]', note: 'L — sterjenning yerdagi uzunligi (m), d — diametri (m)' },
    { name: 'Tuproqning solishtirma qarshiligi', expr: 'ρ = 2πL·R / (ln(4L/d) − 1)', note: 'o\'lchangan R dan ρ ni topish, birligi Ω·m' },
    { name: 'O\'rtacha qarshilik', expr: 'R_o\'rt = (R₁ + R₂ + ... + Rₙ) / n', note: 'P elektrod holatlarini o\'zgartirib olingan qiymatlar' },
  ],
  procedure: [
    'Virtual laboratoriyani ishga tushiring va tekshiriladigan yerga ulagich E ni tanlang.',
    'Yordamchi tok elektrodi C va potensial elektrodi P ni E dan yetarli masofada joylashtiring.',
    'Tuproq turini tanlang va uning solishtirma qarshiligi ρ ni belgilang.',
    'Elektrod uzunligi L va diametri d ni kiriting.',
    'E–C zanjiri orqali sinov tokini o\'tkazing va ampermetrdan I ni oling.',
    'Voltmetrda E–P oralig\'idagi U kuchlanishni o\'lchang.',
    'R = U/I ni hisoblang; P elektrod o\'rnini o\'zgartirib o\'lchashni 5 marta takrorlang.',
    'Natijalarni jadvalga kiriting, o\'rtacha qiymatni toping va R(ρ), R(L) grafiklarini tuzing.',
  ],
  questions: [
    'Yerga ulash deb nimaga aytiladi va uning vazifasi nima?',
    'Yerga ulash qarshiligi qanday aniqlanadi va SI birligi nima?',
    'Uch elektrodli usulda E, P va C elektrodlari qanday vazifani bajaradi?',
    'Tuproq namligi yerga ulash qarshiligiga qanday ta\'sir qiladi?',
    'Elektrod uzunligi oshirilsa, qarshilik qanday o\'zgaradi?',
    'Nima uchun yordamchi elektrodlar E dan ma\'lum masofada joylashtiriladi?',
    'Qurilish obyektlarida yerga ulashning ahamiyati nimada?',
  ],
  quiz: [
    { q: 'Himoya yerga ulashning asosiy vazifasi nima?', options: ['Insonni elektr toki urishidan himoya qilish', 'Kuchlanishni oshirish', 'Tokni ko\'paytirish', 'Quvvatni oshirish'], answer: 0 },
    { q: 'Yerga ulash qarshiligining SI birligi qaysi?', options: ['Volt (V)', 'Om (Ω)', 'Amper (A)', 'Vatt (W)'], answer: 1 },
    { q: 'Yerga ulash qarshiligi qancha kichik bo\'lsa:', options: ['Himoya yomonlashadi', 'Farqi yo\'q', 'Himoya shuncha samarali bo\'ladi', 'Tok yo\'qoladi'], answer: 2 },
    { q: 'Yerga ulash qarshiligiga eng katta ta\'sir qiluvchi omil:', options: ['Havo bosimi', 'Yorug\'lik intensivligi', 'Shamol tezligi', 'Tuproqning solishtirma qarshiligi'], answer: 3 },
    { q: 'Nam tuproqda yerga ulash qarshiligi:', options: ['Kamroq bo\'ladi', 'Ko\'proq bo\'ladi', 'O\'zgarmaydi', 'Nolga teng bo\'ladi'], answer: 0 },
  ],
  conclusion: 'Uch elektrodli usulda R = U/I formulasi bilan yerga ulash qarshiligi aniqlandi. Tuproqning solishtirma qarshiligi ortsa qarshilik ortishi, elektrod uzunligi ortsa kamayishi tasdiqlandi. Namuna: U = 2,4 V, I = 0,60 A bo\'lganda R = 4 Ω.',
  sim: {
    intro: 'Tuproq va elektrod parametrlarini o\'zgartiring, qarshilik va sinov kuchlanishi avtomatik hisoblanadi.',
    inputs: [
      { id: 'rho', label: 'Tuproqning solishtirma qarshiligi ρ', unit: 'Ω·m', min: 10, max: 1000, step: 10, value: 100 },
      { id: 'L', label: 'Elektrod uzunligi L', unit: 'm', min: 0.5, max: 6, step: 0.1, value: 2.5 },
      { id: 'd', label: 'Elektrod diametri d', unit: 'mm', min: 8, max: 50, step: 1, value: 16 },
      { id: 'I', label: 'Sinov toki I', unit: 'A', min: 0.1, max: 5, step: 0.1, value: 0.6 },
    ],
    compute: (v) => {
      const rho = v.rho, L = v.L, d = v.d / 1000, I = v.I;
      const Rf = (r, l) => r / (2 * Math.PI * l) * (Math.log(4 * l / d) - 1);
      const R = Rf(rho, L);
      const U = R * I;
      const pts = [], ptsU = [];
      for (let i = 0; i <= 40; i++) {
        const l = 0.5 + (6 - 0.5) * i / 40;
        pts.push([+l.toFixed(3), +Math.max(0, Rf(rho, l)).toFixed(4)]);
        ptsU.push([+l.toFixed(3), +Math.max(0, Rf(rho, l) * I).toFixed(4)]);
      }
      return {
        results: [
          { label: 'Yerga ulash qarshiligi R', value: R, unit: 'Ω', digits: 3 },
          { label: 'E–P kuchlanishi U = R·I', value: U, unit: 'V', digits: 3 },
          { label: 'Tekshiruv: ρ = 2πLR/(ln(4L/d)−1)', value: 2 * Math.PI * L * R / (Math.log(4 * L / d) - 1), unit: 'Ω·m', digits: 3 },
        ],
        chart: {
          title: 'R va U ning elektrod uzunligiga bog\'liqligi (joriy ρ, d, I)',
          xLabel: 'L, m',
          yLabel: 'R, Ω  /  U, V',
          series: [
            { name: 'R(L)', points: pts },
            { name: 'U(L)=R·I', points: ptsU },
            { name: 'Joriy', points: [[L, R]] },
          ],
        },
        note: R <= 4 ? 'Qarshilik me\'yor (≈4 Ω) chegarasida — yerga ulash yetarli.' : 'Qarshilik katta: elektrodni uzaytiring yoki tuproqni namlang.',
      };
    },
  },
};
