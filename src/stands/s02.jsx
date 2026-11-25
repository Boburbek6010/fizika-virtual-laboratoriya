// Stend 02: zichlikni aniqlash (raqamli tarozi + o'lchov silindri)
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—')
const find = (out, label, fb) => { const r = out && out.results && out.results.find(q => q.label === label); return r && Number.isFinite(r.value) ? r.value : fb }
const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x))

function Lcd({ x, y, w = 128, label, value, unit }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height="44" rx="6" fill="url(#s02-case)" stroke="#5b6670" />
      <rect x="6" y="16" width={w - 12} height="22" rx="3" fill="#16201f" />
      <text x="8" y="12" fontSize="9" fill="#e8edf0" fontFamily="system-ui,sans-serif">{label}</text>
      <text x={w - 10} y="32" fontSize="14" textAnchor="end" fill="#8ff0c8" fontFamily="ui-monospace,Menlo,monospace">{value} {unit}</text>
    </g>
  )
}

export default function Stand({ v = {}, out, state, t = 0 }) {
  const m = Number(v.m) || 0, V1 = Number(v.V1) || 0, V2 = Number(v.V2) || 0
  const V = find(out, 'Jism hajmi V', Math.max(0, V2 - V1))
  const rho = find(out, 'Zichlik ρ', V > 0 ? m / V : NaN)
  // silindr shkalasi
  const top = Math.max(V1, V2) * 1.15
  const cap = top <= 100 ? 100 : top <= 250 ? 250 : 500
  const cx = 420, cw = 70, cyB = 300, ch = 220 // ichki balandlik
  const lvl = (vol) => cyB - (vol / cap) * ch
  // animatsiya bosqichlari (davr 6 s): 0-1 tortish, 1-2.2 ko'chirish, 2.2-4 cho'ktirish, 4-6 o'qish
  const running = state === 'running', active = state !== 'idle'
  const ph = active ? (running ? t % 6 : Math.min(t, 4)) : 0
  const weigh = ease(ph / 1)
  const move = ease((ph - 1) / 1.2)
  const sink = ease((ph - 2.2) / 1.8)
  // jism o'lchami: ko'rinish uchun, hajmga bog'liq (kub ildiz)
  const bs = Math.max(16, Math.min(40, 10 * Math.cbrt(Math.max(V, 1))))
  const scaleX = 150, panY = 236
  const startX = scaleX - bs / 2, startY = panY - bs
  const liftY = lvl(cap) - bs - 30
  const endX = cx - bs / 2
  const waterTopNow = lvl(V1 + V * sink)
  const bottomY = cyB - bs - 2
  let bx = startX, by = startY
  if (ph > 1) {
    if (move < 0.33) { by = startY + (liftY - startY) * (move / 0.33) }
    else { by = liftY; bx = startX + (endX - startX) * ((move - 0.33) / 0.67) }
  }
  if (ph > 2.2) { bx = endX; by = liftY + (bottomY - liftY) * sink }
  const onScale = ph <= 1
  const reading = onScale ? m * weigh : m
  const level = active ? waterTopNow : lvl(V1)
  const ticks = []
  const tstep = cap === 100 ? 2 : cap === 250 ? 5 : 10
  for (let q = 0; q <= cap; q += tstep) ticks.push(q)
  const showRho = active && sink >= 1
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Zichlik o'lchash stendi">
      <defs>
        <linearGradient id="s02-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3f5f6" /><stop offset="1" stopColor="#dfe4e7" /></linearGradient>
        <linearGradient id="s02-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c99a6b" /><stop offset="1" stopColor="#8d6440" /></linearGradient>
        <linearGradient id="s02-case" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4a545c" /><stop offset="1" stopColor="#2c3338" /></linearGradient>
        <linearGradient id="s02-steel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7e8890" /><stop offset=".45" stopColor="#e4e8eb" /><stop offset="1" stopColor="#80898f" /></linearGradient>
        <linearGradient id="s02-glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="rgba(200,225,235,.55)" /><stop offset=".2" stopColor="rgba(255,255,255,.75)" /><stop offset=".5" stopColor="rgba(220,236,242,.25)" /><stop offset="1" stopColor="rgba(170,200,212,.55)" /></linearGradient>
        <linearGradient id="s02-water" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5aa7c7" stopOpacity=".75" /><stop offset=".5" stopColor="#9ed3e6" stopOpacity=".6" /><stop offset="1" stopColor="#4d97b8" stopOpacity=".75" /></linearGradient>
        <linearGradient id="s02-block" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e2e6e9" /><stop offset=".5" stopColor="#a3acb3" /><stop offset="1" stopColor="#6d767d" /></linearGradient>
        <filter id="s02-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s02-bg)" />
      <rect x="20" y="300" width="600" height="22" fill="url(#s02-wood)" filter="url(#s02-sh)" />
      <rect x="40" y="322" width="14" height="38" fill="#6b4c30" /><rect x="586" y="322" width="14" height="38" fill="#6b4c30" />
      {/* tarozi */}
      <g filter="url(#s02-sh)">
        <path d={`M ${scaleX - 80} 300 L ${scaleX - 70} 252 L ${scaleX + 70} 252 L ${scaleX + 80} 300 Z`} fill="url(#s02-case)" />
        <rect x={scaleX - 55} y="264" width="110" height="28" rx="3" fill="#16201f" stroke="#7d8890" />
        <text x={scaleX + 48} y="284" fontSize="17" textAnchor="end" fill="#8ff0c8" fontFamily="ui-monospace,Menlo,monospace">{fmt(reading, 1)} g</text>
        <text x={scaleX - 50} y="274" fontSize="7" fill="#8ff0c8" fontFamily="system-ui,sans-serif">{onScale ? '' : 'XOTIRA'}</text>
        <rect x={scaleX - 60} y={panY + (onScale && active ? weigh * 2 : 0)} width="120" height="8" rx="3" fill="url(#s02-steel)" />
        <rect x={scaleX - 6} y={panY + 8} width="12" height="8" fill="#5b6670" />
        <circle cx={scaleX + 64} cy="292" r="3" fill="#D97757" />
      </g>
      {/* o'lchov silindri */}
      <g filter="url(#s02-sh)">
        <ellipse cx={cx} cy={cyB + 6} rx="58" ry="6" fill="#9aa4ac" />
        <rect x={cx - 52} y={cyB} width="104" height="6" fill="rgba(200,225,235,.8)" stroke="#8aa" />
      </g>
      <rect x={cx - cw / 2} y={level} width={cw} height={cyB - level} fill="url(#s02-water)" />
      <ellipse cx={cx} cy={level} rx={cw / 2} ry="3" fill="#bfe4f0" opacity=".8" />
      {/* jism */}
      <g>
        <rect x={bx} y={by + (onScale && active ? weigh * 2 : 0)} width={bs} height={bs} rx="2" fill="url(#s02-block)" stroke="#4b545b" />
        {active && ph > 1 && <line x1={bx + bs / 2} y1={Math.min(by, liftY) - 60} x2={bx + bs / 2} y2={by} stroke="#555" strokeWidth=".8" />}
      </g>
      <rect x={cx - cw / 2 - 2} y={cyB - ch - 10} width={cw + 4} height={ch + 10} rx="3" fill="url(#s02-glass)" stroke="#8fb0bd" />
      <path d={`M ${cx - cw / 2 - 2} ${cyB - ch - 10} q -8 -4 -4 -8`} fill="none" stroke="#8fb0bd" />
      {ticks.map((q, i) => {
        const big = q % (tstep * 5) === 0
        return (
          <g key={i}>
            <line x1={cx - cw / 2} y1={lvl(q)} x2={cx - cw / 2 + (big ? 14 : 7)} y2={lvl(q)} stroke="#2c3338" strokeWidth=".7" />
            {big && <text x={cx - cw / 2 + 16} y={lvl(q) + 3} fontSize="7.5" fill="#2c3338" fontFamily="system-ui,sans-serif">{q}</text>}
          </g>
        )
      })}
      <text x={cx} y={cyB - ch - 16} fontSize="8" textAnchor="middle" fill="#2c3338" fontFamily="system-ui,sans-serif">sm³ (ml)</text>
      {/* V1 va V2 belgilar */}
      <line x1={cx + cw / 2 + 2} y1={lvl(V1)} x2={cx + cw / 2 + 26} y2={lvl(V1)} stroke="#3D7A6E" strokeWidth="1.2" />
      <text x={cx + cw / 2 + 28} y={lvl(V1) + 4} fontSize="10" fill="#3D7A6E" fontFamily="system-ui,sans-serif">V₁ = {fmt(V1, 1)}</text>
      {active && sink > 0 && <>
        <line x1={cx + cw / 2 + 2} y1={lvl(V2)} x2={cx + cw / 2 + 26} y2={lvl(V2)} stroke="#D97757" strokeWidth="1.2" strokeDasharray="3 2" />
        <text x={cx + cw / 2 + 28} y={lvl(V2) - 2} fontSize="10" fill="#D97757" fontFamily="system-ui,sans-serif">V₂ = {fmt(V2, 1)}</text>
      </>}
      {/* displeylar */}
      <text x="20" y="22" fontSize="12" fontWeight="600" fill="#2c3338" fontFamily="system-ui,sans-serif">Zichlikni aniqlash</text>
      <Lcd x={20} y={40} label="Massa m" value={fmt(m, 1)} unit="g" />
      <Lcd x={20} y={90} label="Hajm V = V₂ − V₁" value={active ? fmt(V * sink, 1) : '0,0'} unit="sm³" />
      <Lcd x={20} y={140} label="Zichlik ρ = m/V" value={showRho ? fmt(rho, 3) : '—'} unit="g/sm³" w={150} />
    </svg>
  )
}
