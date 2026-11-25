// Stend 13: tomdagi quyosh kollektori, izolyatsiya qatlami qalinligi δ, kirish/chiqish termometrlari
const f = (x, d = 1) => (typeof x === 'number' && isFinite(x) ? x.toFixed(d).replace('.', ',') : '—')
const clamp = (x, a, b) => Math.max(a, Math.min(b, x))

function Thermo({ x, y, T, label }) {
  const h = 90, col = clamp(T / 100, 0, 1) * (h - 10)
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-9" y="-6" width="18" height={h + 22} rx="9" fill="#f6f8fa" stroke="#9aa3aa" />
      <rect x="-2.5" y="0" width="5" height={h} rx="2.5" fill="#e4e9ec" />
      <rect x="-2.5" y={h - 4 - col} width="5" height={col + 6} fill="#D97757" />
      <circle cx="0" cy={h + 6} r="6" fill="#D97757" />
      {[0, 50, 100].map(g => <line key={g} x1="4" x2="8" y1={h - 4 - g / 100 * (h - 10)} y2={h - 4 - g / 100 * (h - 10)} stroke="#333" strokeWidth=".7" />)}
      <rect x="-30" y={h + 18} width="60" height="30" rx="4" fill="#222" />
      <text x="0" y={h + 31} textAnchor="middle" fontSize="8" fill="#bbb">{label}</text>
      <text x="0" y={h + 44} textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#7CFC9A">{f(T, 1)}°C</text>
    </g>
  )
}

export default function Stand({ v, out, state, t }) {
  const tt = state === 'idle' ? 0 : t || 0
  const r = (out && out.results) || []
  const eta = r[0] ? r[0].value : 0
  const T2 = r[3] ? r[3].value : v.T1
  const prog = state === 'idle' ? 0 : clamp(tt / 10, 0, 1)
  const Tout = v.T1 + (T2 - v.T1) * prog
  const running = state === 'running'
  const ins = 3 + clamp((v.d - 5) / 95, 0, 1) * 22 // izolyatsiya qalinligi, px
  const sunA = clamp((v.I - 300) / 700, 0, 1)
  // panel: qiya to'rtburchak (tom ustida)
  const P = { x: 150, y: 150, w: 190, h: 70 }
  const ang = -24
  const rayOff = running ? -(tt * 40) % 24 : 0
  const flowOff = running ? -(tt * 30) % 16 : 0
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Quyosh kollektori stendi">
      <defs>
        <linearGradient id="s13sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8fc3ea" /><stop offset="1" stopColor="#e3f1fa" /></linearGradient>
        <radialGradient id="s13sun" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fff6c4" /><stop offset=".6" stopColor="#ffd23f" /><stop offset="1" stopColor="#ffb020" stopOpacity="0" /></radialGradient>
        <linearGradient id="s13panel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1e3a5c" /><stop offset=".5" stopColor="#2f5f8f" /><stop offset="1" stopColor="#16304d" /></linearGradient>
        <linearGradient id="s13roof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a5523a" /><stop offset="1" stopColor="#7a3a28" /></linearGradient>
        <pattern id="s13ins" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#f3d36b" /><path d="M0 8 L8 0" stroke="#d9b445" strokeWidth="1.5" /></pattern>
        <filter id="s13sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s13sky)" />
      {/* quyosh */}
      <circle cx="70" cy="60" r={40 + 12 * sunA} fill="url(#s13sun)" />
      <circle cx="70" cy="60" r="24" fill="#ffd23f" />
      {/* nurlar */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={i} x1={95 + i * 6} y1={78 + i * 4} x2={190 + i * 28} y2={172 - i * 15}
          stroke="#ffb020" strokeWidth={1.2 + sunA * 1.5} strokeDasharray="12 12" strokeDashoffset={rayOff} opacity={0.5 + 0.5 * sunA} />
      ))}
      {/* uy va tom */}
      <rect x="140" y="230" width="380" height="130" fill="#e8e1d4" />
      <rect x="200" y="270" width="50" height="50" fill="#9cc4de" stroke="#7a6e5c" strokeWidth="3" />
      <rect x="410" y="270" width="50" height="50" fill="#9cc4de" stroke="#7a6e5c" strokeWidth="3" />
      <polygon points="110,238 330,140 550,238" fill="url(#s13roof)" />

      {/* kollektor (izolyatsiya + panel), tom qiyaligi bo'ylab */}
      <g transform={`rotate(${ang} ${P.x} ${P.y + P.h})`} filter="url(#s13sh)">
        <rect x={P.x} y={P.y + P.h - 6 - ins} width={P.w} height={ins + 6} fill="url(#s13ins)" stroke="#a58a2e" strokeWidth=".8" />
        <rect x={P.x} y={P.y + P.h - 6 - ins - 34} width={P.w} height="34" rx="2" fill="url(#s13panel)" stroke="#9aa3aa" strokeWidth="2" />
        {Array.from({ length: 7 }, (_, i) => <line key={i} x1={P.x + 14 + i * 27} x2={P.x + 14 + i * 27} y1={P.y + P.h - ins - 37} y2={P.y + P.h - ins - 9} stroke="#7fa7cc" strokeWidth="1.5" opacity=".6" />)}
        <rect x={P.x} y={P.y + P.h - 6 - ins - 34} width={P.w} height="10" fill="#fff" opacity=".12" />
        <text x={P.x + P.w + 6} y={P.y + P.h - ins / 2 - 2} fontSize="10" fill="#5a4a10">δ = {f(v.d, 0)} mm</text>
      </g>

      {/* quvurlar: kirish va chiqish */}
      <path d="M152 222 L120 222 L120 300 L100 300" fill="none" stroke="#3d7ab0" strokeWidth="6" />
      <path d="M305 108 L590 108 L590 134" fill="none" stroke="#c0503a" strokeWidth="6" />
      <path d="M152 222 L120 222 L120 300 L100 300" fill="none" stroke="#bfe0ff" strokeWidth="2" strokeDasharray="4 12" strokeDashoffset={-flowOff} />
      <path d="M305 108 L590 108 L590 134" fill="none" stroke="#ffd2c4" strokeWidth="2" strokeDasharray="4 12" strokeDashoffset={flowOff} />

      <Thermo x={60} y={170} T={v.T1} label="Kirish T₁" />
      <Thermo x={590} y={140} T={Tout} label="Chiqish T₂" />

      {/* displey */}
      <g transform="translate(250 20)" filter="url(#s13sh)">
        <rect width="250" height="62" rx="8" fill="#26292d" />
        <text x="12" y="18" fontSize="10" fill="#ccc">I = {f(v.I, 0)} W/m²   A = {f(v.A, 1)} m²   λ = {f(v.lam, 3)}</text>
        <text x="12" y="38" fontSize="14" fontFamily="monospace" fill="#7CFC9A">η = {f(eta, 1)} %</text>
        <text x="12" y="54" fontSize="10" fill="#ccc">Vaqt: {f(v.t * prog, 0)} / {f(v.t, 0)} s</text>
      </g>
    </svg>
  )
}
