// Stend 01: gorizontga burchak ostida otilgan jism (ballistik otgich, transportir, chizg'ich)
const G = 9.81
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—')
const res = (out, i, fb) => { const r = out && out.results && out.results[i]; return r && Number.isFinite(r.value) ? r.value : fb }
const niceStep = (span, n = 6) => { const raw = span / n, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p; return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * p }

function Lcd({ x, y, w = 120, label, value, unit }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height="44" rx="6" fill="url(#s01-case)" stroke="#5b6670" />
      <rect x="6" y="16" width={w - 12} height="22" rx="3" fill="#16201f" />
      <text x="8" y="12" fontSize="9" fill="#e8edf0" fontFamily="system-ui,sans-serif">{label}</text>
      <text x={w - 10} y="32" fontSize="14" textAnchor="end" fill="#8ff0c8" fontFamily="ui-monospace,Menlo,monospace">{value} {unit}</text>
    </g>
  )
}

export default function Stand({ v = {}, out, state, t = 0 }) {
  const v0 = Number(v.v0) || 0, aDeg = Number(v.alpha) || 0, a = aDeg * Math.PI / 180
  const T = res(out, 0, 2 * v0 * Math.sin(a) / G)
  const H = res(out, 1, v0 * v0 * Math.sin(a) ** 2 / (2 * G))
  const S = res(out, 2, v0 * v0 * Math.sin(2 * a) / G)
  // masshtab: trayektoriya stend maydoniga sig'adi, chizg'ich metrda
  const ox = 92, oy = 282, W = 500, Hpx = 190
  const k = Math.min(W / Math.max(S, 0.01), Hpx / Math.max(H, 0.01))
  const px = (x) => ox + x * k, py = (y) => oy - y * k
  // animatsiya: uchish 1,5..4 s real vaqtda, so'ng 1 s pauza va takror
  const dur = Math.min(4, Math.max(1.5, T))
  const running = state === 'running', active = state !== 'idle'
  const ph = active ? (running ? t % (dur + 1) : Math.min(t, dur)) : 0
  const p = Math.min(1, ph / dur)
  const tau = p * T
  const bx = v0 * Math.cos(a) * tau, by = Math.max(0, v0 * Math.sin(a) * tau - G * tau * tau / 2)
  const N = 60, trace = [], full = []
  for (let i = 0; i <= N; i++) {
    const tt = T * i / N, x = v0 * Math.cos(a) * tt, y = Math.max(0, v0 * Math.sin(a) * tt - G * tt * tt / 2)
    full.push(`${px(x).toFixed(1)},${py(y).toFixed(1)}`)
    if (tt <= tau) trace.push(`${px(x).toFixed(1)},${py(y).toFixed(1)}`)
  }
  trace.push(`${px(bx).toFixed(1)},${py(by).toFixed(1)}`)
  const step = niceStep(W / k)
  const ticks = []
  for (let m = 0; m * k <= W + 0.5; m += step) ticks.push(m)
  const vx = v0 * Math.cos(a), vy = v0 * Math.sin(a) - G * tau
  const sp = Math.hypot(vx, vy) || 1
  const fmtM = (m) => (step < 1 ? m.toFixed(1) : Math.round(m)).toString().replace('.', ',')
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Ballistik otgich stendi">
      <defs>
        <linearGradient id="s01-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3f5f6" /><stop offset="1" stopColor="#dfe4e7" /></linearGradient>
        <linearGradient id="s01-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c99a6b" /><stop offset="1" stopColor="#8d6440" /></linearGradient>
        <linearGradient id="s01-metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d9dee2" /><stop offset=".5" stopColor="#9aa4ac" /><stop offset="1" stopColor="#6c757d" /></linearGradient>
        <linearGradient id="s01-case" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4a545c" /><stop offset="1" stopColor="#2c3338" /></linearGradient>
        <radialGradient id="s01-ball" cx=".35" cy=".35" r=".7"><stop offset="0" stopColor="#ffe1d3" /><stop offset=".4" stopColor="#D97757" /><stop offset="1" stopColor="#7a3520" /></radialGradient>
        <filter id="s01-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s01-bg)" />
      {/* orqa setka */}
      {Array.from({ length: 16 }, (_, i) => <line key={'g' + i} x1={i * 40} y1="0" x2={i * 40} y2="296" stroke="#c9d0d5" strokeWidth=".5" />)}
      {/* stol */}
      <rect x="20" y="296" width="600" height="22" fill="url(#s01-wood)" filter="url(#s01-sh)" />
      <rect x="40" y="318" width="14" height="42" fill="#6b4c30" /><rect x="586" y="318" width="14" height="42" fill="#6b4c30" />
      {/* chizg'ich */}
      <rect x={ox - 6} y={oy + 2} width={W + 14} height="12" fill="#f7f1d8" stroke="#a89a60" strokeWidth=".8" />
      {ticks.map((m, i) => (
        <g key={'t' + i}>
          <line x1={px(m)} y1={oy + 2} x2={px(m)} y2={oy + 9} stroke="#333" strokeWidth=".8" />
          <text x={px(m)} y={oy - 3} fontSize="8" textAnchor="middle" fill="#444" fontFamily="system-ui,sans-serif">{fmtM(m)}</text>
        </g>
      ))}
      <text x={ox + W + 6} y={oy - 3} fontSize="8" fill="#444" fontFamily="system-ui,sans-serif">m</text>
      {/* vertikal shkala (H) */}
      <line x1={px(S / 2)} y1={oy} x2={px(S / 2)} y2={py(H)} stroke="#3D7A6E" strokeDasharray="4 3" />
      <text x={px(S / 2) + 4} y={(oy + py(H)) / 2} fontSize="10" fill="#3D7A6E" fontFamily="system-ui,sans-serif">H</text>
      {/* to'liq trayektoriya (xira) va iz */}
      {active && <polyline points={full.join(' ')} fill="none" stroke="#9aa4ac" strokeDasharray="3 4" strokeWidth="1" />}
      {active && <polyline points={trace.join(' ')} fill="none" stroke="#D97757" strokeWidth="2" strokeLinecap="round" />}
      {/* qo'nish nishoni */}
      <rect x={px(S) - 10} y={oy - 3} width="20" height="4" rx="1" fill="#3D7A6E" />
      {/* otgich: tayanch, transportir, quvur */}
      <g filter="url(#s01-sh)">
        <rect x={ox - 34} y={oy - 6} width="56" height="14" rx="2" fill="url(#s01-metal)" />
        <path d={`M ${ox - 40} ${oy} A 40 40 0 0 1 ${ox + 40} ${oy} Z`} fill="rgba(240,248,255,.55)" stroke="#5b6670" strokeWidth="1" />
        {Array.from({ length: 19 }, (_, i) => { const r = i * 5 * Math.PI / 180, L = i % 3 === 0 ? 7 : 4; return <line key={'p' + i} x1={ox + 40 * Math.cos(r)} y1={oy - 40 * Math.sin(r)} x2={ox + (40 - L) * Math.cos(r)} y2={oy - (40 - L) * Math.sin(r)} stroke="#334" strokeWidth=".7" /> })}
        <text x={ox + 30} y={oy - 30} fontSize="8" fill="#334" fontFamily="system-ui,sans-serif">{aDeg}°</text>
        <g transform={`rotate(${-aDeg} ${ox} ${oy})`}>
          <rect x={ox - 6} y={oy - 7} width="46" height="14" rx="3" fill="url(#s01-metal)" stroke="#4b545b" />
          <rect x={ox + 36} y={oy - 8} width="6" height="16" rx="1" fill="#4b545b" />
        </g>
        <circle cx={ox} cy={oy} r="6" fill="#3D7A6E" stroke="#1f3f39" />
      </g>
      {/* shar */}
      <g transform={`translate(${active ? px(bx) : ox + 40 * Math.cos(a)},${active ? py(by) : oy - 40 * Math.sin(a)})`}>
        <circle r="7" fill="url(#s01-ball)" />
        {running && p < 1 && <line x1="0" y1="0" x2={22 * vx / sp} y2={-22 * vy / sp} stroke="#3D7A6E" strokeWidth="1.5" markerEnd="" />}
      </g>
      {/* displeylar */}
      <Lcd x={330} y={10} label="Maks. balandlik H" value={fmt(H)} unit="m" />
      <Lcd x={456} y={10} label="Uchish uzoqligi S" value={fmt(S)} unit="m" />
      <Lcd x={330} y={60} label="Uchish vaqti T" value={fmt(T)} unit="s" />
      <Lcd x={456} y={60} label="Sekundomer τ" value={fmt(tau)} unit="s" />
      <text x="20" y="22" fontSize="12" fontWeight="600" fill="#2c3338" fontFamily="system-ui,sans-serif">Ballistik otgich</text>
      <text x="20" y="38" fontSize="10" fill="#4b545b" fontFamily="system-ui,sans-serif">v₀ = {fmt(v0, 1)} m/s, α = {aDeg}°</text>
    </svg>
  )
}
