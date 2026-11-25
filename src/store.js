export const load = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch { return d } }
export const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch { /* ignore */ } }
export const rm = k => { try { localStorage.removeItem(k) } catch { /* ignore */ } }
export const bestQuiz = (id, score, total) => { const o = load('fz:quiz:' + id, null); if (!o || score >= o.score) save('fz:quiz:' + id, { score, total }) }
export const saveTasks = (id, score, total) => save('fz:tasks:' + id, { score, total })
export const getTheme = () => load('fz:theme', 'auto')
export const applyTheme = t => { const r = document.documentElement; if (t === 'auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', t); save('fz:theme', t) }
export const scrollToId = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
