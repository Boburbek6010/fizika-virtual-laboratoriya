# Fizika virtual laboratoriya sayti — SPEC

Mijoz: Ziyoda Jumayeva (o'qituvchi). Til: o'zbek (lotin). Mavzu: qurilish muhandislari uchun fizika, 20 ta virtual laboratoriya.
Stek: React + Vite, HashRouter, tashqi kutubxonasiz (grafik ham inline SVG), GitHub Pages (`base: './'`). Ranglar: ko'k #0b3d91, sariq #ffc400, och fon.

## Mavzular (id → nom → manba raw/)
1 Gorizontga burchak ostida otilgan jism → lab_1, test_1
2 Jismlarning zichligini aniqlash → lab_2, test_2
3 Egilish usuli bilan Yung modulini aniqlash → lab_3, test_3  (DETAIL SAHIFA)
4 Mexanik energiya va impulsning saqlanishi → lab_4, test_4
5 Statika (muvozanat shartlari) → lab_5, test_5
6 Qattiq jismlarning inersiya momenti → lab_6, test_6
7 Matematik mayatnik bilan g ni aniqlash → lab_7, test_7  (DETAIL SAHIFA)
8 Havoda tovush tezligi (rezonans) → lab_8, test_8
9 Majburiy tebranishlar va rezonans → lab_9, test_9
10 Stoks usuli bilan ichki ishqalanish → lab_10, test_10  (DETAIL SAHIFA)
11 Qattiq jismlarning solishtirma issiqlik sig'imi → manba YO'Q (o'zingiz yozing, kalorimetriya)
12 Chiziqli kengayish koeffitsiyenti → lab_12 (test yo'q)
13 Quyosh kollektori samaradorligi → lab_14 (test yo'q)
14 Kirxgof qonunlari → lab_15 (lab_16 ham shu, ikkalasini birlashtirib oling), test yo'q
15 Uitston ko'prigi → lab_17 (test yo'q)
16 Yerga ulash qarshiligi → lab_18, test_16
17 Elektromagnit induksiya → manba YO'Q (o'zingiz yozing: ЭYuK = −N·ΔΦ/Δt, Φ = B·S·cosα)
18 Linza kamchiliklari → lab_19, test_18
19 Yorug'lik o'tkazuvchanligi → lab_20, test_19
20 Radioaktiv nurlanishni qayd etish → lab_21, test_20

Manba fayllar: `site/raw/lab_N.txt` (docx matni; formulalar buzilgan unicode, fizikadan to'g'rilang), `test_N.txt` ("*" to'g'ri javobdan keyin/oldin), `lab_N_img0.png` (docxdagi rasm, ixtiyoriy).

## Mavzu fayli kontrakti: `src/topics/tNN.js` (NN = 01..20), `export default {...}`
```js
{
  id: 3, slug: 'yung-moduli', title: 'Egilish usuli bilan Yung modulini aniqlash',
  category: 'Mexanika',                // Mexanika | Tebranishlar va tovush | Issiqlik | Elektr | Optika va yadro
  emoji: '📏', short: '1-2 gap',        // bosh sahifa kartasi uchun
  aim: ['maqsad 1', ...],               // 3-5 band
  equipment: ['jihoz', ...],
  theory: ['paragraf', ...],            // 2-4 qisqa paragraf, o'zbekcha
  formulas: [{ name: 'Yung moduli', expr: 'E = F·L³ / (4·b·h³·f)', note: 'f — egilish strelkasi' }],
  procedure: ['qadam', ...],            // 5-8 qadam
  questions: ['nazorat savoli', ...],   // 5-7 ta
  quiz: [{ q: '...', options: ['A','B','C','D'], answer: 0 }],   // 5 ta (test_N dan oling, bo'lmasa o'zingiz)
  conclusion: 'namunaviy xulosa',
  sim: {
    intro: 'Qiymatlarni o\'zgartiring, natija avtomatik hisoblanadi.',
    inputs: [{ id:'F', label:'Yuk kuchi', unit:'N', min:1, max:100, step:1, value:20 }],
    compute: (v) => ({                  // sof funksiya, import YO'Q, v = {id: number}
      results: [{ label:'Yung moduli E', value: 2.1e11, unit:'Pa', digits: 3 }],  // digits = ahamiyatli raqamlar
      chart: { title:'', xLabel:'', yLabel:'', series:[{ name:'', points:[[x,y],...] }] },  // 1-2 seriya, 20-60 nuqta
      note: 'ixtiyoriy tushuntirish / hukm (masalan: "Rezonans!")'
    })
  }
}
```
Fayl faqat `export default` bo'lsin, boshqa import yo'q. Hisoblash fizik jihatdan TO'G'RI bo'lishi shart (birliklarni SI ga o'tkazing). Chart har doim bo'lsin (nazariy bog'liqlik, joriy qiymat nuqtasini ikkinchi seriya `name:'Joriy'`, bitta nuqta bilan ko'rsating).

## Rasmlar
`site/public/img/topic-NN.jpg` (NN=01..20), 16:10. Kod ularni `${import.meta.env.BASE_URL}img/topic-NN.jpg` bilan oladi; yo'q bo'lsa gradient zaxira.

## Sahifalar
- `/` bosh sahifa: hero, kategoriya filtri, 20 ta mavzu to'liq kenglikdagi bo'lim (rasm + sarlavha + short + jonli mini-simulyator + maqsad), navbar anchor.
- `/topic/:id` faqat 3, 7, 10 uchun batafsil (tablar: Nazariya, Formulalar, Jihozlar, Ishni bajarish, Simulyatsiya, Test, Nazorat savollari). Qolganlarda "Tez orada" belgisi.

## ADDENDUM v2 (boyitish) — barcha 20 mavzu uchun BATAFSIL sahifa
Har bir mavzu faylida (kontrakt maydonlariga qo'shimcha) quyidagilar bo'ladi (o'zbek lotin, qurilish muhandisligi konteksti):
```js
learn: ['Nimani o\'rganasiz 1', ... 4 ta],
civil: ['Qurilishda qo\'llanishi: 1-2 gaplik aniq misol', ... 3-4 ta],   // masalan: ko'prik, kran, poydevor, izolyatsiya
keyFact: 'bitta qiziqarli fakt (1-2 gap)',
mistakes: ['Odatiy xato va qanday oldini olish', ... 3 ta],
glossary: [{ t: 'termin', d: 'qisqa ta\'rif' }, ... 5 ta],
tasks: [{ q: 'Aniq sonli masala matni', answer: 12.5, unit: 'm', tol: 0.03, hint: 'ishora', solution: 'qisqa yechim bosqichlari' }, ... 4 ta],  // "Nazorat ishi": talaba javob kiritadi, nisbiy xato tol dan kichik bo'lsa to'g'ri
// boyitilgan: theory 4-6 paragraf, procedure 8-10 qadam, questions 8-10 ta, quiz 8 ta savol, conclusion 3-4 gap
```
UI: `/topic/:id` HAMMA 20 mavzu uchun ochiladi. Tablar: Umumiy ko'rinish (learn, civil, keyFact), Nazariya (+glossary), Formulalar, Jihozlar, Ishni bajarish (+mistakes), Simulyatsiya (+ "Natijani jadvalga qo'shish": barcha kirish va natijalardan avtomatik ustunlar, CSV yuklash, tozalash, chop etish), Test, Nazorat ishi (tasks, javobni tekshirish, ball), Nazorat savollari, Xulosa. Oldingi/keyingi mavzu navigatsiyasi.
Bosh sahifa: boyitilgan kirish (statistika, "Qanday ishlaydi" 3 qadam, dissertatsiya himoyasi bloki), har bir bo'lim kartasi boyitilgan (kategoriya, nimani o'rganasiz, qurilishda qo'llanishi, asosiy formula, mini-simulyator, "Nazorat ishi: 4 ta masala" belgisi, "Batafsil" tugmasi hammasida).
