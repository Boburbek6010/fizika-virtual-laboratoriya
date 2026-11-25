// Stend 04: havo yo'lagidagi ikki aravachaning noelastik to'qnashuvi, energiya ustunlari
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—')
const res = (out, i, fb) => { const r = out && out.results && out.results[i]; return r && Number.isFinite(r.value) ? r.value : fb }

function Lcd({ x, y, w = 112, label, value, unit }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height="44" rx="6" fill="url(#s04-case)" stroke="#5b6670" />
      <rect x="6" y="16" width={w - 12} height="22" rx="3" fill="#16201f" />
      <text x="8" y="12" fontSize="9" fill="#e8edf0" fontFamily="system-ui,sans-serif">{label}</text>
      <text x={w - 10} y="32" fontSize="13" textAnchor="end" fill="#8ff0c8" fontFamily="ui-monospace,Menlo,monospace">{value} {unit}</text>
    </g>
  )
}

function Cart({ x, y, w, m, color, label, vel }) {
  const blocks = Math.max(1, Math.min(5, Math.round(m / 2)))
  const ar = Math.max(-60, Math.min(60, vel * 8))
  return (
    <g>
      {Array.from({ length: blocks }, (_, i) => <rect key={i} x={x - w / 2 + 6} y={y - 34 - i * 7} width={w - 12} height="6" rx="1" fill="url(#s04-weight)" stroke="#333" strokeWidth=".4" />)}
      <rect x={x - w / 2} y={y - 28} width={w} height="20" rx="3" fill={color} stroke="#222" strokeWidth=".6" filter="url(#s04-sh)" />
      <rect x={x - w / 2 + 3} y={y - 26} width={w - 6} height="4" rx="1" fill="#fff" opacity=".25" />
      <text x={x} y={y - 14} fontSize="9" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif">{label}</text>
      <circle cx={x - w / 2 + 9} cy={y - 5} r="5" fill="#333" /><circle cx={x - w / 2 + 9} cy={y - 5} r="2" fill="#bbb" />
      <circle cx={x + w / 2 - 9} cy={y - 5} r="5" fill="#333" /><circle cx={x + w / 2 - 9} cy={y - 5} r="2" fill="#bbb" />
      {Math.abs(ar) > 1 && <g stroke="#D97757" fill="#D97757" strokeWidth="2">
        <line x1={x} y1={y - 72} x2={x + ar} y2={y - 72} />
        <path d={`M ${x + ar} ${y - 76} L ${x + ar + Math.sign(ar) * 7} ${y - 72} L ${x + ar} ${y - 68} Z`} strokeWidth="0" />
      </g>}
    </g>
  )
}

export default function Stand({ v = {}, out, state, t = 0 }) {
  const m1 = Number(v.m1) || 0.1, m2 = Number(v.m2) || 0.1, v1 = Number(v.v1) || 0, v2 = Number(v.v2) || 0, h = Number(v.h) || 0
  const Ep = res(out, 0, m1 * 9.81 * h), vb = res(out, 1, Math.sqrt(2 * 9.81 * h))
  const p = res(out, 3, m1 * v1 + m2 * v2), vf = res(out, 4, p / (m1 + m2))
  const EkB = res(out, 5, m1 * v1 * v1 / 2 + m2 * v2 * v2 / 2), EkA = res(out, 6, (m1 + m2) * vf * vf / 2)
  // yo'lak: 2 m = 480 px
  const X0 = 80, PX = 240, cw = 0.18, ty = 262
  const a0 = 0.4, b0 = 1.1
  const gap = b0 - a0 - cw, rel = v1 - v2
  const collide = rel > 1e-6
  const tc = collide ? gap / rel : Infinity
  const vmax = Math.max(Math.abs(v1), Math.abs(v2), 0.1)
  const s = collide ? tc / 1.5 : 0.5 / vmax // fizik s / real s
  const running = state === 'running', active = state !== 'idle'
  const real = active ? (running ? t % 4 : Math.min(t, 4)) : 0
  const tau = real * s
  let xa, xb, after = false
  if (collide && tau >= tc) { after = true; const dt = tau - tc; xa = a0 + v1 * tc + vf * dt; xb = xa + cw }
  else { xa = a0 + v1 * tau; xb = b0 + v2 * tau }
  // yo'lak chegaralari (buferlar)
  const lo = cw / 2, hi = 2 - cw / 2
  if (after) { const sh = Math.max(lo - xa, 0) - Math.max(xb - hi, 0); xa += sh; xb += sh }
  else { xa = Math.max(lo, Math.min(hi, xa)); xb = Math.max(lo, Math.min(hi, xb)) }
  const cv1 = after ? vf : v1, cv2 = after ? vf : v2
  const e1 = m1 * cv1 * cv1 / 2, e2 = m2 * cv2 * cv2 / 2
  const lost = Math.max(0, EkB - e1 - e2)
  const Emax = Math.max(EkB, 1e-6)
  const bars = [['Eₖ₁', e1, '#D97757'], ['Eₖ₂', e2, '#3D7A6E'], ['Σ Eₖ', e1 + e2, '#5b6670'], ['ΔE', lost, '#b0413e']]
  const rh = Math.max(4, Math.min(60, h * 12))
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Aravachalar to'qnashuvi stendi">
      <defs>
        <linearGradient id="s04-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3f5f6" /><stop offset="1" stopColor="#dfe4e7" /></linearGradient>
        <linearGradient id="s04-case" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4a545c" /><stop offset="1" stopColor="#2c3338" /></linearGradient>
        <linearGradient id="s04-rail" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eef1f3" /><stop offset=".5" stopColor="#a3acb3" /><stop offset="1" stopColor="#68717a" /></linearGradient>
        <linearGradient id="s04-weight" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5a5f63" /><stop offset=".4" stopColor="#c9ced2" /><stop offset="1" stopColor="#3b4044" /></linearGradient>
        <linearGradient id="s04-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c99a6b" /><stop offset="1" stopColor="#8d6440" /></linearGradient>
        <filter id="s04-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s04-bg)" />
      <rect x="20" y="300" width="600" height="22" fill="url(#s04-wood)" filter="url(#s04-sh)" />
      <rect x="40" y="322" width="14" height="38" fill="#6b4c30" /><rect x="586" y="322" width="14" height="38" fill="#6b4c30" />
      {/* qiya tekislik (h) */}
      <path d={`M 24 ${ty} L 24 ${ty - rh} L ${X0} ${ty} Z`} fill="#c7ccd0" stroke="#68717a" />
      <text x="28" y={ty - rh - 4} fontSize="9" fill="#3D7A6E" fontFamily="system-ui,sans-serif">h = {fmt(h, 2)} m</text>
      {/* yo'lak */}
      <rect x={X0} y={ty} width={2 * PX} height="10" rx="2" fill="url(#s04-rail)" stroke="#5b6670" />
      {[0, 0.5, 1, 1.5, 2].map((q) => <rect key={q} x={X0 + q * PX - 3} y={ty + 10} width="6" height={300 - ty - 10} fill="#7d8890" />)}
      <rect x={X0 - 6} y={ty - 22} width="6" height="32" fill="#3b4044" /><rect x={X0 + 2 * PX} y={ty - 22} width="6" height="32" fill="#3b4044" />
      {/* shkala */}
      {Array.from({ length: 21 }, (_, i) => <g key={i}><line x1={X0 + i * PX / 10} y1={ty + 2} x2={X0 + i * PX / 10} y2={ty + (i % 5 === 0 ? 9 : 5)} stroke="#333" strokeWidth=".6" />{i % 5 === 0 && <text x={X0 + i * PX / 10} y={ty + 20} fontSize="7.5" textAnchor="middle" fill="#333" fontFamily="system-ui,sans-serif">{fmt(i / 10, 1)}</text>}</g>)}
      {/* aravachalar */}
      <Cart x={X0 + xa * PX} y={ty} w={cw * PX} m={m1} color="#b85a3c" label={`m₁ ${fmt(m1, 1)}`} vel={cv1} />
      <Cart x={X0 + xb * PX} y={ty} w={cw * PX} m={m2} color="#2f6157" label={`m₂ ${fmt(m2, 1)}`} vel={cv2} />
      {after && <rect x={X0 + (xa + cw / 2) * PX - 3} y={ty - 26} width="6" height="14" fill="#e3c14a" stroke="#7a6620" strokeWidth=".5" />}
      {/* energiya ustunlari */}
      <g transform="translate(470,20)">
        <rect width="150" height="150" rx="6" fill="#fff" stroke="#c0c7cc" />
        <text x="8" y="14" fontSize="9" fill="#2c3338" fontFamily="system-ui,sans-serif">Energiya, J (maks {fmt(EkB, 1)})</text>
        {bars.map(([n, val, c], i) => {
          const hh = 100 * Math.min(1, val / Emax)
          return (
            <g key={n}>
              <rect x={12 + i * 34} y={126 - 100} width="22" height="100" fill="#eef1f3" />
              <rect x={12 + i * 34} y={126 - hh} width="22" height={hh} fill={c} />
              <text x={23 + i * 34} y="140" fontSize="8.5" textAnchor="middle" fill="#2c3338" fontFamily="system-ui,sans-serif">{n}</text>
            </g>
          )
        })}
      </g>
      {/* displeylar */}
      <text x="20" y="22" fontSize="12" fontWeight="600" fill="#2c3338" fontFamily="system-ui,sans-serif">Impuls va energiyaning saqlanishi</text>
      <Lcd x={20} y={36} label="v₁ / v₂" value={`${fmt(cv1, 2)} / ${fmt(cv2, 2)}`} unit="m/s" w={140} />
      <Lcd x={166} y={36} label="To'qnashuvdan keyin v'" value={collide ? fmt(vf, 2) : '—'} unit="m/s" w={140} />
      <Lcd x={312} y={36} label="Impuls p" value={fmt(p, 2)} unit="kg·m/s" w={150} />
      <Lcd x={20} y={86} label="Eₚ = m₁gh" value={fmt(Ep, 2)} unit="J" w={140} />
      <Lcd x={166} y={86} label="v = √(2gh)" value={fmt(vb, 2)} unit="m/s" w={140} />
      <Lcd x={312} y={86} label="Eₖ keyin" value={fmt(EkA, 2)} unit="J" w={150} />
      <text x="20" y="150" fontSize="9" fill="#4b545b" fontFamily="system-ui,sans-serif">Fizik vaqt τ ={fmt(tau, 2)} s{!collide ? " — aravachalar yaqinlashmaydi, to'qnashuv yo'q" : ''}</text>
    </svg>
  )
}
