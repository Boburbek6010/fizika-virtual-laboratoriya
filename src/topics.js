const mods = import.meta.glob('./topics/*.js', { eager: true })
const T = [[1,'Gorizontga burchak ostida otilgan jism','Mexanika','🎯'],[2,'Jismlarning zichligini aniqlash','Mexanika','⚖️'],[3,'Egilish usuli bilan Yung modulini aniqlash','Mexanika','📏'],[4,'Mexanik energiya va impulsning saqlanishi','Mexanika','🎱'],[5,'Statika (muvozanat shartlari)','Mexanika','🏗️'],[6,'Qattiq jismlarning inersiya momenti','Mexanika','🌀'],[7,'Matematik mayatnik bilan g ni aniqlash','Tebranishlar va tovush','🕰️'],[8,'Havoda tovush tezligi (rezonans)','Tebranishlar va tovush','🔊'],[9,'Majburiy tebranishlar va rezonans','Tebranishlar va tovush','〰️'],[10,'Stoks usuli bilan ichki ishqalanish','Mexanika','🧪'],[11,"Qattiq jismlarning solishtirma issiqlik sig'imi",'Issiqlik','🔥'],[12,'Chiziqli kengayish koeffitsiyenti','Issiqlik','🌡️'],[13,'Quyosh kollektori samaradorligi','Issiqlik','☀️'],[14,'Kirxgof qonunlari','Elektr','⚡'],[15,"Uitston ko'prigi",'Elektr','🔌'],[16,'Yerga ulash qarshiligi','Elektr','🌍'],[17,'Elektromagnit induksiya','Elektr','🧲'],[18,'Linza kamchiliklari','Optika va yadro','🔍'],[19,"Yorug'lik o'tkazuvchanligi",'Optika va yadro','💡'],[20,'Radioaktiv nurlanishni qayd etish','Optika va yadro','☢️']]
// Test javoblarini deterministik aralashtirish (to'g'ri javob doim birinchi bo'lmasligi uchun)
const shuffleQuiz = t => !t.quiz ? t : { ...t, quiz: t.quiz.map((q, qi) => {
  const idx = q.options.map((_, i) => i)
  let s = (t.id * 131 + qi * 17 + 7) % 2147483647
  for (let i = idx.length - 1; i > 0; i--) { s = (s * 48271) % 2147483647; const j = s % (i + 1); [idx[i], idx[j]] = [idx[j], idx[i]] }
  return { ...q, options: idx.map(i => q.options[i]), answer: idx.indexOf(q.answer) }
}) }
const loaded = Object.keys(mods).sort().map(k => mods[k].default).filter(Boolean).map(shuffleQuiz)
const byId = Object.fromEntries(loaded.map(t => [t.id, t]))
export const DETAIL = [3, 7, 10]
export const topics = T.map(([id, title, category, emoji]) => ({ id, title, category, emoji, short: '', ...(byId[id] || {}), ready: !!byId[id] }))
loaded.filter(t => !T.some(x => x[0] === t.id)).forEach(t => topics.push({ ...t, ready: true }))
topics.sort((a, b) => a.id - b.id)
export const categories = [...new Set(topics.map(t => t.category))]
export const imgUrl = id => `${import.meta.env.BASE_URL}img/topic-${String(id).padStart(2, '0')}.jpg`
