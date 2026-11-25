// Stend 15: Uitston ko'prigi R1, R2, R3, Rx va galvanometr
const f = (x, d = 3) => (typeof x === 'number' && isFinite(x) ? x.toFixed(d) : '—')
const clamp = (x, a, b) => Math.max(a, Math.min(b, x))

function along(a, b, s) { const k = ((s % 1) + 1) % 1; return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k] }

function Dots({ a, b, I, tt, color }) {
  if (!isFinite(I) || Math.abs(I) < 1e-7) return null
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.max(3, Math.round(L / 32))
  const sp = (16 + 60 * clamp(Math.abs(I) / 0.1, 0, 1)) * Math.sign(I)
  return <g>{Array.from({ length: n }, (_, i) => { const [x, y] = along(a, b, i / n + sp * tt / L); return <circle key={i} cx={x} cy={y} r="3" fill={color} stroke="#fff" strokeWidth=".7" /> })}</g>
}

function Res({ a, b, label, val }) {
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI
  const lx = mx, ly = my + (my < 180 ? -22 : 30)
  return <g>
    <g transform={`translate(${mx} ${my}) rotate(${ang})`} filter="url(#s15sh)">
      <rect x="-30" y="-10" width="60" height="20" rx="4" fill="url(#s15res)" stroke="#5c4630" />
      {[-16, -5, 6, 17].map(x => <rect key={x} x={x - 2} y="-10" width="4" height="20" fill={x < 0 ? '#6b3e1a' : '#b8322a'} opacity=".8" />)}
    </g>
    <text x={lx} y={ly} textAnchor="middle" fontSize="11" fill="#222">{label} = {val} Ω</text>
  </g>
}

export default function Stand({ v, out, state, t }) {
  const tt = state === 'idle' ? 0 : t || 0
  const r = (out && out.results) || []
  const ig = r[0] ? r[0].value : 0 // mA
  const on = state !== 'idle'
  const A = [140, 180], B = [320, 70], C = [500, 180], D = [320, 290]
  // galvanometr strelkasi: so'nuvchi tebranish bilan og'adi
  const target = clamp(Math.tanh(ig / 2) * 55, -55, 55)
  const needle = on ? target * (1 - Math.exp(-tt / 0.7) * Math.cos(tt * 5)) : 0
  const Iabc = v.E / (v.R1 + v.R3), Iadc = v.E / (v.R2 + v.Rx)
  const bal = Math.abs(ig) < 0.01
  const G = [320, 180]
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Uitston ko'prigi stendi">
      <defs>
        <linearGradient id="s15bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f0f2f4" /><stop offset="1" stopColor="#dce1e5" /></linearGradient>
        <linearGradient id="s15res" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f0dcb4" /><stop offset="1" stopColor="#c9a874" /></linearGradient>
        <radialGradient id="s15face" cx=".5" cy=".4" r=".7"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#e2e6e9" /></radialGradient>
        <linearGradient id="s15case" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4b5258" /><stop offset="1" stopColor="#24282c" /></linearGradient>
        <filter id="s15sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1.5" dy="3" stdDeviation="2" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s15bg)" />
      <rect x="20" y="20" width="600" height="324" rx="12" fill="#fafbfb" stroke="#cfd6da" />
      {/* simlar */}
      <g fill="none" stroke="#b5651d" strokeWidth="4" strokeLinejoin="round">
        <polyline points={[A, B, C, D, A].map(p => p.join(',')).join(' ')} />
        <polyline points="140,180 70,180 70,320 260,320" />
        <polyline points="380,320 570,320 570,180 500,180" />
        <line x1={B[0]} y1={B[1]} x2={B[0]} y2={D[1]} />
      </g>
      {on && <>
        <Dots a={A} b={B} I={Iabc} tt={tt} color="#D97757" />
        <Dots a={B} b={C} I={Iabc} tt={tt} color="#D97757" />
        <Dots a={A} b={D} I={Iadc} tt={tt} color="#3D7A6E" />
        <Dots a={D} b={C} I={Iadc} tt={tt} color="#3D7A6E" />
        <Dots a={B} b={D} I={bal ? 0 : ig / 1000} tt={tt} color="#2d5fa8" />
      </>}
      <Res a={A} b={B} label="R₁" val={v.R1} />
      <Res a={B} b={C} label="R₃" val={v.R3} />
      <Res a={A} b={D} label="R₂" val={v.R2} />
      <Res a={D} b={C} label="Rₓ" val={v.Rx} />
      {[['A', A, -16, 4], ['B', B, 10, -6], ['C', C, 10, 4], ['D', D, 14, 4]].map(([n, p, dx, dy]) =>
        <g key={n}><circle cx={p[0]} cy={p[1]} r="5" fill="#333" /><text x={p[0] + dx} y={p[1] + dy} fontSize="11" fill="#333">{n}</text></g>)}

      {/* galvanometr */}
      <g transform={`translate(${G[0]} ${G[1]})`} filter="url(#s15sh)">
        <rect x="-46" y="-40" width="92" height="80" rx="8" fill="url(#s15case)" />
        <path d="M-38 10 A40 40 0 0 1 38 10 L38 -32 L-38 -32 Z" fill="url(#s15face)" />
        {Array.from({ length: 11 }, (_, i) => { const a = (-55 + i * 11) * Math.PI / 180; return <line key={i} x1={34 * Math.sin(a)} y1={14 - 34 * Math.cos(a)} x2={(i === 5 ? 26 : 29) * Math.sin(a)} y2={14 - (i === 5 ? 26 : 29) * Math.cos(a)} stroke="#333" strokeWidth={i === 5 ? 1.6 : .8} /> })}
        <line x1="0" y1="14" x2={32 * Math.sin(needle * Math.PI / 180)} y2={14 - 32 * Math.cos(needle * Math.PI / 180)} stroke="#D97757" strokeWidth="2" />
        <circle cx="0" cy="14" r="3" fill="#333" />
        <text x="0" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">G</text>
      </g>
      <g transform="translate(510 56)" filter="url(#s15sh)">
        <rect width="96" height="40" rx="6" fill="#2a2e33" />
        <text x="6" y="12" fontSize="9" fill="#ddd">I_G, mA</text>
        <rect x="5" y="16" width="86" height="20" rx="3" fill="#0f1a12" />
        <text x="87" y="31" textAnchor="end" fontSize="13" fontFamily="monospace" fill={bal && on ? '#7CFC9A' : '#ffb35c'}>{on ? f(ig, 3) : '0.000'}</text>
      </g>

      {/* doimiy tok manbai */}
      <g transform="translate(260 300)" filter="url(#s15sh)">
        <rect width="120" height="44" rx="6" fill="url(#s15case)" />
        <rect x="8" y="6" width="62" height="24" rx="3" fill="#1a1a1a" />
        <text x="66" y="24" textAnchor="end" fontSize="14" fontFamily="monospace" fill="#ff5a3c">{f(on ? v.E : 0, 1)}</text>
        <text x="74" y="24" fontSize="11" fill="#eee">V</text>
        <circle cx="96" cy="16" r="7" fill="#c0392b" stroke="#111" /><circle cx="110" cy="16" r="5" fill="#222" stroke="#666" />
        <text x="8" y="40" fontSize="8" fill="#ccc">DC manba</text>
      </g>
      <text x="30" y="40" fontSize="12" fontWeight="600" fill="#2b2b2b">Uitston ko'prigi</text>
      <text x="30" y="58" fontSize="11" fill={bal && on ? '#3D7A6E' : '#555'}>{on ? (bal ? 'Muvozanat: I_G ≈ 0' : 'Muvozanat yo\'q: R₃ ni sozlang') : 'Manba o\'chiq'}</text>
      <text x="470" y="40" fontSize="11" fill="#333">Rₓ = R₂R₃/R₁ = {r[1] ? f(r[1].value, 1) : '—'} Ω</text>
    </svg>
  )
}
