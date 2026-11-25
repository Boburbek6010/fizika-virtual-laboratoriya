// Stend 05: richag muvozanati (tayanch, yelkalar, yuklar, moment displeylari)
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—')
const res = (out, i, fb) => { const r = out && out.results && out.results[i]; return r && Number.isFinite(r.value) ? r.value : fb }

function Lcd({ x, y, w = 128, label, value, unit }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height="44" rx="6" fill="url(#s05-case)" stroke="#5b6670" />
      <rect x="6" y="16" width={w - 12} height="22" rx="3" fill="#16201f" />
      <text x="8" y="12" fontSize="9" fill="#e8edf0" fontFamily="system-ui,sans-serif">{label}</text>
      <text x={w - 10} y="32" fontSize="14" textAnchor="end" fill="#8ff0c8" fontFamily="ui-monospace,Menlo,monospace">{value} {unit}</text>
    </g>
  )
}

function Weight({ x, y, m, color, sw = 0 }) {
  const w = 16 + Math.min(30, Math.sqrt(m) * 7), hh = 14 + Math.min(36, Math.sqrt(m) * 8)
  return (
    <g transform={`rotate(${sw} ${x} ${y})`}>
      <line x1={x} y1={y} x2={x} y2={y + 30} stroke="#444" strokeWidth="1.2" />
      <path d={`M ${x - 4} ${y + 30} q 4 6 8 0`} fill="none" stroke="#444" />
      <rect x={x - w / 2} y={y + 34} width={w} height={hh} rx="3" fill="url(#s05-weight)" stroke="#333" strokeWidth=".6" filter="url(#s05-sh)" />
      <rect x={x - w / 2} y={y + 34} width={w} height="4" rx="2" fill={color} />
      <text x={x} y={y + 48 + hh} fontSize="9" textAnchor="middle" fill="#2c3338" fontFamily="system-ui,sans-serif">{fmt(m, 1)} kg</text>
    </g>
  )
}

export default function Stand({ v = {}, out, state, t = 0 }) {
  const m1 = Number(v.m1) || 0, l1 = Number(v.l1) || 0, m2 = Number(v.m2) || 0, l2 = Number(v.l2) || 0
  const M1 = res(out, 2, m1 * 9.81 * l1), M2 = res(out, 3, m2 * 9.81 * l2), net = res(out, 4, M1 - M2), R = res(out, 5, (m1 + m2) * 9.81)
  const tol = 0.01 * Math.max(M1, M2, 1e-9)
  // og'ish burchagi: noaniqlik ulushiga proporsional, tirgaklar ±10° da to'xtatadi
  const target = Math.abs(net) <= tol ? 0 : Math.max(-10, Math.min(10, 10 * net / Math.max(M1, M2) * 2))
  const running = state === 'running', active = state !== 'idle'
  const tt = active ? t : 0
  // Boshlashda tirgak olinadi: kichik turtki (6°) bilan so'nuvchi tebranib, muvozanat og'ishiga o'rnashadi
  const env = Math.exp(-0.9 * tt)
  const th = Math.max(-12, Math.min(12, target + env * (-target * Math.cos(3.2 * tt) + 6 * Math.sin(3.2 * tt))))
  // yuklar ipda sekin tebranadi
  const sw = active ? (1.5 + 5 * Math.exp(-0.5 * tt)) * Math.sin(4.4 * tt) : 0
  const a = th * Math.PI / 180 // musbat: chap tomon pastga
  const cx = 320, cy = 190, K = 130 // 1 m = 130 px
  const L = 2.15 * K
  const pt = (d) => [cx + d * Math.cos(a), cy - d * Math.sin(a)] // d: o'ngga musbat
  const [lx, ly] = pt(-l1 * K), [rx, ry] = pt(l2 * K)
  const ticks = []
  for (let q = -2; q <= 2.0001; q += 0.1) ticks.push(+q.toFixed(1))
  const status = !active ? 'Tirgak bilan ushlab turilgan' : Math.abs(net) <= tol ? 'Muvozanat: M₁ = M₂' : net > 0 ? "M₁ > M₂: chapga og'adi" : "M₁ < M₂: o'ngga og'adi"
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Richag muvozanati stendi">
      <defs>
        <linearGradient id="s05-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3f5f6" /><stop offset="1" stopColor="#dfe4e7" /></linearGradient>
        <linearGradient id="s05-case" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4a545c" /><stop offset="1" stopColor="#2c3338" /></linearGradient>
        <linearGradient id="s05-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eef1f3" /><stop offset=".5" stopColor="#a3acb3" /><stop offset="1" stopColor="#68717a" /></linearGradient>
        <linearGradient id="s05-frame" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5d6a72" /><stop offset=".5" stopColor="#8b979e" /><stop offset="1" stopColor="#4d5960" /></linearGradient>
        <linearGradient id="s05-weight" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5a5f63" /><stop offset=".4" stopColor="#c9ced2" /><stop offset="1" stopColor="#3b4044" /></linearGradient>
        <linearGradient id="s05-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c99a6b" /><stop offset="1" stopColor="#8d6440" /></linearGradient>
        <filter id="s05-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s05-bg)" />
      <rect x="20" y="318" width="600" height="20" fill="url(#s05-wood)" filter="url(#s05-sh)" />
      {/* tirgaklar */}
      {[cx - 250, cx + 250].map((x, i) => <rect key={i} x={x - 5} y={cy + 50} width="10" height={318 - cy - 50} fill="url(#s05-frame)" />)}
      {/* tayanch (prizma) */}
      <path d={`M ${cx - 34} 318 L ${cx} ${cy + 6} L ${cx + 34} 318 Z`} fill="url(#s05-frame)" stroke="#3b4044" filter="url(#s05-sh)" />
      {/* richag */}
      <g transform={`rotate(${-th} ${cx} ${cy})`}>
        <rect x={cx - L} y={cy - 6} width={2 * L} height="12" rx="2" fill="url(#s05-beam)" stroke="#4b545b" filter="url(#s05-sh)" />
        {ticks.map((q) => <line key={q} x1={cx + q * K} y1={cy - 6} x2={cx + q * K} y2={cy - (Math.round(q * 10) % 5 === 0 ? 0 : 3)} stroke="#2c3338" strokeWidth=".6" />)}
        {[-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2].map((q) => <text key={q} x={cx + q * K} y={cy + 4} fontSize="6.5" textAnchor="middle" fill="#2c3338" fontFamily="system-ui,sans-serif">{fmt(Math.abs(q), 1)}</text>)}
        {/* yelkalar */}
        <line x1={cx} y1={cy - 14} x2={cx - l1 * K} y2={cy - 14} stroke="#D97757" strokeWidth="1.5" />
        <text x={cx - l1 * K / 2} y={cy - 18} fontSize="10" textAnchor="middle" fill="#D97757" fontFamily="system-ui,sans-serif">l₁ = {fmt(l1, 2)} m</text>
        <line x1={cx} y1={cy - 14} x2={cx + l2 * K} y2={cy - 14} stroke="#3D7A6E" strokeWidth="1.5" />
        <text x={cx + l2 * K / 2} y={cy - 18} fontSize="10" textAnchor="middle" fill="#3D7A6E" fontFamily="system-ui,sans-serif">l₂ = {fmt(l2, 2)} m</text>
      </g>
      <circle cx={cx} cy={cy} r="5" fill="#3b4044" stroke="#ccc" />
      {/* yuklar: ipda vertikal osiladi */}
      <Weight x={lx} y={ly} m={m1} color="#D97757" sw={sw} />
      <Weight x={rx} y={ry} m={m2} color="#3D7A6E" sw={-0.8 * sw} />
      {/* og'ish ko'rsatkichi */}
      <g transform={`translate(${cx},${cy})`}>
        <path d="M -30 -46 A 56 56 0 0 1 30 -46" fill="none" stroke="#9aa4ac" />
        <line x1="0" y1="-50" x2="0" y2="-58" stroke="#2c3338" />
        <line x1="0" y1="0" x2={-56 * Math.sin(a)} y2={-56 * Math.cos(a)} stroke={running ? '#D97757' : '#5b6670'} strokeWidth="1.5" />
      </g>
      {/* displeylar */}
      <text x="20" y="22" fontSize="12" fontWeight="600" fill="#2c3338" fontFamily="system-ui,sans-serif">Richag muvozanati</text>
      <text x="20" y="38" fontSize="10" fill="#4b545b" fontFamily="system-ui,sans-serif">{status}</text>
      <Lcd x={20} y={48} label="Chap moment M₁" value={fmt(M1, 2)} unit="N·m" />
      <Lcd x={492} y={10} label="O'ng moment M₂" value={fmt(M2, 2)} unit="N·m" />
      <Lcd x={492} y={60} label="M₁ − M₂" value={fmt(net, 2)} unit="N·m" />
      <Lcd x={20} y={98} label="Tayanch reaksiyasi R" value={fmt(R, 1)} unit="N" />
    </svg>
  )
}
