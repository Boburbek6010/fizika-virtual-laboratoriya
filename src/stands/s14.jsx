// Stend 14: ikki manbali tarmoqlangan zanjir (Kirxgof qonunlari)
const f = (x, d = 3) => (typeof x === 'number' && isFinite(x) ? x.toFixed(d) : '—')
const clamp = (x, a, b) => Math.max(a, Math.min(b, x))

function along(pts, s) {
  const seg = []; let L = 0
  for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d }
  let p = (((s % 1) + 1) % 1) * L
  for (let i = 0; i < seg.length; i++) {
    if (p <= seg[i]) { const k = p / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * k, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * k] }
    p -= seg[i]
  }
  return pts[pts.length - 1]
}
const plen = pts => pts.slice(1).reduce((a, p, i) => a + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0)

function Dots({ pts, I, tt, color }) {
  if (!isFinite(I) || Math.abs(I) < 1e-6) return null
  const L = plen(pts), n = Math.max(4, Math.round(L / 34))
  const speed = (18 + 70 * clamp(Math.abs(I) / 1.5, 0, 1)) * Math.sign(I)
  return <g>{Array.from({ length: n }, (_, i) => { const [x, y] = along(pts, i / n + speed * tt / L); return <circle key={i} cx={x} cy={y} r="3.2" fill={color} stroke="#fff" strokeWidth=".8" /> })}</g>
}

function Meter({ x, y, label, value, unit, accent }) {
  return (
    <g transform={`translate(${x - 40} ${y - 20})`} filter="url(#s14sh)">
      <rect width="80" height="40" rx="6" fill="#2a2e33" />
      <rect x="5" y="15" width="70" height="20" rx="3" fill="#0f1a12" />
      <text x="8" y="12" fontSize="9" fill="#ddd">{label}</text>
      <text x="72" y="12" fontSize="9" textAnchor="end" fill={accent}>{unit}</text>
      <text x="71" y="30" fontSize="13" textAnchor="end" fontFamily="monospace" fill="#7CFC9A">{value}</text>
    </g>
  )
}

function Resistor({ x, y, vertical, label, val }) {
  return (
    <g>
      <g transform={`translate(${x} ${y}) ${vertical ? 'rotate(90)' : ''}`}>
        <rect x="-32" y="-10" width="64" height="20" rx="4" fill="url(#s14res)" stroke="#5c4630" />
        {[-18, -6, 6, 18].map(b => <rect key={b} x={b - 2} y="-10" width="4" height="20" fill={b < 0 ? '#7a4a1e' : '#b8322a'} opacity=".8" />)}
      </g>
      <text x={vertical ? x - 16 : x} y={vertical ? y + 4 : y - 16} textAnchor={vertical ? 'end' : 'middle'} fontSize="11" fill="#222">{label} = {val} Ω</text>
    </g>
  )
}

function Battery({ x, y, label, val }) {
  // vertikal, musbat (uzun plastina) yuqorida
  return (
    <g transform={`translate(${x} ${y})`} filter="url(#s14sh)">
      <rect x="-22" y="-26" width="44" height="52" rx="5" fill="url(#s14bat)" stroke="#333" />
      <line x1="-14" x2="14" y1="-6" y2="-6" stroke="#fff" strokeWidth="3" />
      <line x1="-8" x2="8" y1="6" y2="6" stroke="#fff" strokeWidth="5" />
      <text x="-10" y="-12" fontSize="10" fill="#fff">+</text>
      <text x="28" y="4" fontSize="11" fill="#222">{label} = {val} V</text>
    </g>
  )
}

export default function Stand({ v, out, state, t }) {
  const tt = state === 'idle' ? 0 : t || 0
  const r = (out && out.results) || []
  const I1 = r[0] ? r[0].value : 0, I2 = r[1] ? r[1].value : 0, I3 = r[2] ? r[2].value : 0
  const U = I3 * v.R3
  const on = state !== 'idle'
  const L = [[320, 300], [80, 300], [80, 60], [320, 60]]
  const R = [[320, 300], [560, 300], [560, 60], [320, 60]]
  const M = [[320, 60], [320, 300]]
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Kirxgof zanjiri stendi">
      <defs>
        <linearGradient id="s14bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f1f3f2" /><stop offset="1" stopColor="#dfe4e2" /></linearGradient>
        <linearGradient id="s14res" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f0dcb4" /><stop offset="1" stopColor="#c9a874" /></linearGradient>
        <linearGradient id="s14bat" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#2b2f33" /><stop offset=".5" stopColor="#4c535a" /><stop offset="1" stopColor="#2b2f33" /></linearGradient>
        <filter id="s14sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1.5" dy="3" stdDeviation="2" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s14bg)" />
      <rect x="20" y="20" width="600" height="320" rx="12" fill="#fafbfa" stroke="#cfd6d3" />
      {/* simlar */}
      <g fill="none" stroke="#b5651d" strokeWidth="4" strokeLinejoin="round">
        <polyline points={L.map(p => p.join(',')).join(' ')} />
        <polyline points={R.map(p => p.join(',')).join(' ')} />
        <polyline points={M.map(p => p.join(',')).join(' ')} />
      </g>
      {on && <>
        <Dots pts={L} I={I1} tt={tt} color="#D97757" />
        <Dots pts={R} I={I2} tt={tt} color="#3D7A6E" />
        <Dots pts={M} I={I3} tt={tt} color="#2d5fa8" />
      </>}
      <circle cx="320" cy="60" r="6" fill="#333" /><circle cx="320" cy="300" r="6" fill="#333" />
      <text x="328" y="52" fontSize="11" fill="#333">A</text><text x="328" y="318" fontSize="11" fill="#333">B</text>

      <Resistor x={190} y={60} label="R₁" val={v.R1} />
      <Resistor x={450} y={60} label="R₂" val={v.R2} />
      <Resistor x={320} y={140} vertical label="R₃" val={v.R3} />
      <Battery x={80} y={200} label="E₁" val={v.E1} />
      <Battery x={560} y={200} label="E₂" val={v.E2} />
      <Meter x={80} y={120} label="A₁" unit="A" value={on ? f(I1) : '0.000'} accent="#D97757" />
      <Meter x={560} y={120} label="A₂" unit="A" value={on ? f(I2) : '0.000'} accent="#3D7A6E" />
      <Meter x={320} y={240} label="A₃" unit="A" value={on ? f(I3) : '0.000'} accent="#7fa7e0" />
      {/* voltmetr R3 ga parallel */}
      <path d="M320 100 L420 100 L420 120 M420 160 L420 180 L320 180" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="4 3" />
      <Meter x={420} y={140} label="V (R₃)" unit="V" value={on ? f(U, 2) : '0.00'} accent="#ddd" />
      <text x="24" y="14" fontSize="12" fontWeight="600" fill="#2b2b2b">Tarmoqlangan zanjir: I₁ + I₂ = I₃</text>
    </svg>
  )
}
