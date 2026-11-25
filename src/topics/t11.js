export default {
  "id": 11,
  "slug": "solishtirma-issiqlik-sigimi",
  "title": "Qattiq jismlarning solishtirma issiqlik sig'imini aniqlash",
  "category": "Issiqlik",
  "emoji": "🌡️",
  "short": "Kalorimetr yordamida qizdirilgan metall namunaning solishtirma issiqlik sig'imini issiqlik balansi usulida aniqlash.",
  "learn": [
    "Issiqlik miqdori Q = c·m·ΔT formulasini qo'llashni",
    "Kalorimetriya va issiqlik balansi tenglamasini tuzishni",
    "Noma'lum materialning solishtirma issiqlik sig'imini tajribadan topishni",
    "Materialning issiqlik sig'imi bino energiya sarfiga qanday ta'sir qilishini baholashni"
  ],
  "civil": [
    "Beton, g'isht va po'lat massivlarining issiqlik sig'imi binoning kunlik harorat tebranishini yumshatadi: massiv devor kechasi issiqlikni saqlab, kunduzi sekin qiziydi.",
    "Qishda qurilish maydonida betonni isitish uchun sarflanadigan energiya Q = c·m·ΔT bilan hisoblanadi.",
    "Suvli akkumulyator baklar va issiq polning issiqlik sig'imi yuqori bo'lgani uchun isitish tizimi bir tekis ishlaydi.",
    "Yangi qurilish materialini sertifikatlashda uning c qiymati kalorimetrik usulda tekshiriladi."
  ],
  "keyFact": "Suvning solishtirma issiqlik sig'imi (4200 J/(kg·K)) beton (≈880) va po'latnikidan (≈460) bir necha marta katta, shuning uchun suvli isitish tizimlari binolarda eng samarali issiqlik tashuvchi hisoblanadi.",
  "aim": [
    "Issiqlik balansi tenglamasini o'rganish",
    "Kalorimetriya usulini o'zlashtirish",
    "Metall namunaning solishtirma issiqlik sig'imini tajribada aniqlash",
    "Natijani jadval qiymati bilan solishtirib, xatolikni baholash"
  ],
  "equipment": [
    "Kalorimetr (ichki idish bilan)",
    "Termometr",
    "Metall namuna (po'lat, alyuminiy yoki mis)",
    "Suv",
    "Isitgich va qaynoq suv idishi",
    "Tarozi",
    "Virtual laboratoriya dasturi"
  ],
  "theory": [
    "Moddaning temperaturasini o'zgartirish uchun zarur issiqlik miqdori Q = c·m·ΔT formulasi bilan topiladi. Bu yerda c — solishtirma issiqlik sig'imi, J/(kg·K); u 1 kg moddani 1 K ga isitish uchun kerak bo'lgan energiyani bildiradi.",
    "Turli materiallar turlicha issiqlik sig'imiga ega: suv ≈ 4200, alyuminiy ≈ 900, beton ≈ 880, po'lat ≈ 460, mis ≈ 380 J/(kg·K). Shu sababli bir xil massadagi suv metallga qaraganda bir necha marta ko'p issiqlik saqlaydi.",
    "Kalorimetrik usul energiyaning saqlanish qonuniga asoslanadi: izolyatsiyalangan tizimda issiq jism bergan issiqlik sovuq jismlar (suv va kalorimetr idishi) olgan issiqlikka teng.",
    "Namunaning boshlang'ich temperaturasi T₁, suv va kalorimetrniki T₂, muvozanat temperaturasi θ bo'lsa: c₁·m₁·(T₁ − θ) = (c_s·m₂ + C_k)·(θ − T₂). Bundan c₁ ni topish mumkin; C_k — kalorimetrning issiqlik sig'imi (J/K).",
    "Haqiqiy tajribada issiqlikning bir qismi havoga yo'qoladi, shuning uchun kalorimetr devorlari issiqlik izolyatsiyalanadi, namuna tez tushiriladi va suv aralashtirib turiladi. Qolgan yo'qotish xatolik manbai bo'lib qoladi.",
    "Qurilishda c qiymati binoning issiqlik inersiyasini belgilaydi: katta issiqlik sig'imli massiv devor va pol harorat tebranishini silliqlaydi, shuningdek qishki beton ishlarida isitishga ketadigan energiyani hisoblashda qo'llaniladi."
  ],
  "formulas": [
    {
      "name": "Issiqlik miqdori",
      "expr": "Q = c·m·ΔT",
      "note": "c — solishtirma issiqlik sig'imi, J/(kg·K)"
    },
    {
      "name": "Issiqlik balansi",
      "expr": "c₁·m₁·(T₁ − θ) = (c_s·m₂ + C_k)·(θ − T₂)",
      "note": "θ — muvozanat temperaturasi"
    },
    {
      "name": "Namuna sig'imi",
      "expr": "c₁ = (c_s·m₂ + C_k)·(θ − T₂) / [m₁·(T₁ − θ)]",
      "note": "c_s = 4200 J/(kg·K)"
    },
    {
      "name": "Nisbiy xatolik",
      "expr": "ε = |c₁ − c_jadval| / c_jadval · 100%",
      "note": ""
    }
  ],
  "procedure": [
    "Virtual laboratoriya dasturini ishga tushiring va namuna materialini tanlang.",
    "Namuna massasi m₁ va kalorimetrdagi suv massasi m₂ ni tarozida o'lchang, qiymatlarni kg ga o'tkazing.",
    "Kalorimetrning issiqlik sig'imi C_k ni (J/K) yozib oling yoki dastur qiymatidan foydalaning.",
    "Kalorimetrga suv quying va uning boshlang'ich temperaturasi T₂ ni o'lchang.",
    "Namunani qaynoq suvda qizdirib, uning temperaturasi T₁ ni qayd eting.",
    "Qizigan namunani tezda kalorimetrga tushiring va qopqoqni yoping.",
    "Aralashtirib turib, termometr ko'rsatishi barqarorlashguncha kuting va θ ni yozing.",
    "Formula bo'yicha c₁ ni hisoblang va natijani «jadvalga qo'shing».",
    "Tajribani turli massa va temperaturalar bilan 3–5 marta takrorlang, o'rtacha qiymatni toping.",
    "Natijani jadval qiymati bilan solishtirib, nisbiy xatolik ε ni hisoblang va uning sabablarini tahlil qiling."
  ],
  "mistakes": [
    "Namunani kalorimetrga o'tkazishda uzoq kechiktirish: namuna issiqlikni havoga yo'qotadi va c₁ kam chiqadi. Namunani tez va ehtiyotkorlik bilan tushiring.",
    "Kalorimetr sig'imi C_k ni hisobga olmaslik: natijada c₁ noto'g'ri bo'ladi. C_k ni oldindan aniqlang yoki formulaga kiriting.",
    "Massani gramm, issiqlik sig'imini J/(kg·K) da olib birliklarni aralashtirish. Hisoblashdan oldin hamma kattalikni SI ga o'tkazing.",
    "Suvni aralashtirmasdan θ ni o'lchash: termometr haqiqiy muvozanat haroratini ko'rsatmaydi."
  ],
  "glossary": [
    {
      "t": "Solishtirma issiqlik sig'imi",
      "d": "1 kg moddani 1 K ga qizdirish uchun kerak bo'lgan issiqlik miqdori, J/(kg·K)."
    },
    {
      "t": "Kalorimetr",
      "d": "Issiqlik almashinuvini issiqlik yo'qotishsiz o'lchash uchun izolyatsiyalangan idish."
    },
    {
      "t": "Issiqlik balansi",
      "d": "Berilgan va olingan issiqlik miqdorlarining tengligi (energiyaning saqlanishi)."
    },
    {
      "t": "Muvozanat temperaturasi",
      "d": "Aralashma tarkibiy qismlarining temperaturasi tenglashgandagi umumiy qiymat θ."
    },
    {
      "t": "Issiqlik sig'imi",
      "d": "Butun jismni 1 K ga qizdirish uchun kerak bo'lgan issiqlik, C = c·m, J/K."
    }
  ],
  "questions": [
    "Solishtirma issiqlik sig'imi nima va uning birligi qanday?",
    "Issiqlik balansi tenglamasini yozing.",
    "Kalorimetr nima uchun issiqlik izolyatsiyalangan bo'ladi?",
    "Kalorimetrning issiqlik sig'imi natijaga qanday ta'sir qiladi?",
    "Namunani kalorimetrga tushirishda nima uchun tez harakat qilish kerak?",
    "Suv nima uchun kalorimetrik suyuqlik sifatida qulay?",
    "Solishtirma issiqlik sig'imi va butun jismning issiqlik sig'imi qanday farqlanadi?",
    "Tajribada c₁ jadval qiymatidan odatda kichik chiqadi. Sababi nima?",
    "Massiv beton devor binoning yozgi sovutish yukiga qanday ta'sir qiladi?",
    "Qishki betonlashda isitish energiyasi qanday hisoblanadi?"
  ],
  "quiz": [
    {
      "q": "Solishtirma issiqlik sig'imining SI birligi qaysi?",
      "options": [
        "J/K",
        "W/(m·K)",
        "J/(kg·K)",
        "J/kg"
      ],
      "answer": 2
    },
    {
      "q": "Issiqlik miqdori formulasi qaysi?",
      "options": [
        "Q = c·m·ΔT",
        "Q = m/ΔT",
        "Q = c·ΔT/m",
        "Q = m·g·h"
      ],
      "answer": 0
    },
    {
      "q": "Issiqlik balansi tenglamasi nimaga asoslangan?",
      "options": [
        "Nyutonning 3-qonuniga",
        "Arximed qonuniga",
        "Om qonuniga",
        "Energiyaning saqlanish qonuniga"
      ],
      "answer": 3
    },
    {
      "q": "Namuna bergan issiqlik qaysi jismlar tomonidan olinadi?",
      "options": [
        "Faqat havo",
        "Suv va kalorimetr idishi",
        "Faqat termometr",
        "Hech kim"
      ],
      "answer": 1
    },
    {
      "q": "Namuna massasi ortsa, θ qanday o'zgaradi (c₁ va T₁ o'zgarmas)?",
      "options": [
        "Kamayadi",
        "O'zgarmaydi",
        "Ortadi",
        "Nolga teng bo'ladi"
      ],
      "answer": 2
    },
    {
      "q": "2 kg suvni 10 K ga isitish uchun qancha issiqlik kerak (c = 4200)?",
      "options": [
        "8400 J",
        "840 J",
        "420 000 J",
        "84 000 J"
      ],
      "answer": 3
    },
    {
      "q": "Kalorimetrni issiqlik izolyatsiyalashdan maqsad nima?",
      "options": [
        "Tizim massasini oshirish",
        "Atrofga issiqlik yo'qotilishini kamaytirish",
        "Suvni tezroq qaynatish",
        "Namunani sovutish"
      ],
      "answer": 1
    },
    {
      "q": "Qaysi material eng katta solishtirma issiqlik sig'imiga ega?",
      "options": [
        "Suv",
        "Po'lat",
        "Mis",
        "Beton"
      ],
      "answer": 0
    }
  ],
  "tasks": [
    {
      "q": "Massasi 0,2 kg bo'lgan alyuminiy profil (c = 900 J/(kg·K)) 20 °C dan 100 °C gacha qizdirildi. U qancha issiqlik oldi? Javobni joulda kiriting.",
      "answer": 14400,
      "unit": "J",
      "tol": 0.03,
      "hint": "Q = c·m·ΔT, ΔT = 80 K.",
      "solution": "Q = 900 · 0,2 · 80 = 14 400 J."
    },
    {
      "q": "100 °C gacha qizdirilgan 0,15 kg po'lat bo'lak (c = 460 J/(kg·K)) 20 °C li 0,3 kg suvga (c = 4200 J/(kg·K)) tushirildi. Kalorimetr sig'imini e'tiborga olmang. Muvozanat temperaturasi θ necha °C?",
      "answer": 24.15,
      "unit": "°C",
      "tol": 0.03,
      "hint": "θ = (m₁c₁T₁ + m₂c_sT₂) / (m₁c₁ + m₂c_s).",
      "solution": "θ = (6900 + 25200) / (69 + 1260) = 32100/1329 ≈ 24,15 °C."
    },
    {
      "q": "Massasi 0,2 kg namuna 100 °C gacha qizdirilib, 20 °C li 0,25 kg suvga tushirildi; muvozanat temperaturasi 26 °C bo'ldi. Kalorimetr sig'imi e'tiborga olinmaydi. Namunaning c₁ ini J/(kg·K) da toping (c_s = 4200).",
      "answer": 425.7,
      "unit": "J/(kg·K)",
      "tol": 0.03,
      "hint": "c₁ = c_s·m₂·(θ − T₂) / [m₁·(T₁ − θ)].",
      "solution": "c₁ = 4200·0,25·6 / (0,2·74) = 6300/14,8 ≈ 425,7 J/(kg·K)."
    },
    {
      "q": "Qishda 10 m³ beton (zichligi 2400 kg/m³, c = 880 J/(kg·K)) ni 5 K ga isitish kerak. Qancha issiqlik sarflanadi? Javobni megajoulda kiriting.",
      "answer": 105.6,
      "unit": "MJ",
      "tol": 0.03,
      "hint": "Avval massa m = ρ·V, so'ng Q = c·m·ΔT.",
      "solution": "m = 24 000 kg; Q = 880·24 000·5 = 1,056·10⁸ J ≈ 105,6 MJ."
    }
  ],
  "conclusion": "Kalorimetrik tajribada qizdirilgan namuna bergan issiqlik suv va kalorimetr olgan issiqlikka tengligi asosida namunaning solishtirma issiqlik sig'imi aniqlandi. Natija jadval qiymatiga yaqin bo'lib, farq issiqlik yo'qotilishi va o'lchash xatoliklari bilan izohlanadi. Olingan bilim qurilishda materiallarning issiqlik inersiyasini baholash va qishki beton ishlari energiyasini hisoblashda qo'llaniladi.",
  sim: {
    intro: "Namuna va suv parametrlarini o'zgartiring: muvozanat temperaturasi va aniqlangan sig'im avtomatik hisoblanadi.",
    inputs: [
      { id: 'm1', label: 'Namuna massasi', unit: 'g', min: 20, max: 500, step: 5, value: 150 },
      { id: 'T1', label: 'Namuna temperaturasi', unit: '°C', min: 40, max: 100, step: 1, value: 95 },
      { id: 'm2', label: 'Suv massasi', unit: 'g', min: 50, max: 500, step: 5, value: 200 },
      { id: 'T2', label: 'Suv temperaturasi', unit: '°C', min: 5, max: 30, step: 1, value: 20 },
      { id: 'c', label: "Namuna haqiqiy c", unit: 'J/(kg·K)', min: 130, max: 900, step: 10, value: 380 },
      { id: 'Ck', label: 'Kalorimetr sig\'imi', unit: 'J/K', min: 0, max: 200, step: 5, value: 40 }
    ],
    compute: (v) => {
      const cs = 4200;
      const m1 = v.m1 / 1000, m2 = v.m2 / 1000;
      const W = cs * m2 + v.Ck;
      const theta = (m1 * v.c * v.T1 + W * v.T2) / (m1 * v.c + W);
      const c1 = W * (theta - v.T2) / (m1 * (v.T1 - theta));
      const Q = W * (theta - v.T2);
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const x = v.m1 * (0.2 + i * 0.06);
        const mm = x / 1000;
        pts.push([x, (mm * v.c * v.T1 + W * v.T2) / (mm * v.c + W)]);
      }
      return {
        results: [
          { label: 'Muvozanat temperaturasi θ', value: theta, unit: '°C', digits: 4 },
          { label: "Aniqlangan solishtirma sig'im c₁", value: c1, unit: 'J/(kg·K)', digits: 3 },
          { label: 'Suv va kalorimetr olgan issiqlik', value: Q, unit: 'J', digits: 3 }
        ],
        chart: { title: 'θ ning namuna massasiga bog\'liqligi', xLabel: 'm₁, g', yLabel: 'θ, °C',
          series: [{ name: 'Nazariy', points: pts }, { name: 'Joriy', points: [[v.m1, theta]] }] },
        note: 'Issiqlik yo\'qotilishi hisobga olinmagan ideal kalorimetr.'
      };
    }
  }
};
