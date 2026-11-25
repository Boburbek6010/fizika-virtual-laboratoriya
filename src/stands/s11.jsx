// Stend 11: kalorimetr, issiq metall namuna suvga tushiriladi, termometr muvozanat θ ga boradi
const f = (x, d = 1) => (typeof x === 'number' && isFinite(x) ? x.toFixed(d).replace('.', ',') : '—')
const clamp = (x, a, b) => Math.max(a, Math.min(b, x))

export default function Stand({ v, out, state, t }) {
  const tt = state === 'idle' ? 0 : t || 0
  const r = (out && out.results) || []
  const theta = r[0] ? r[0].value : (v.T2 || 20)
  const T1 = v.T1, T2 = v.T2
  // 0..2 s namuna tushadi, keyin eksponensial muvozanatlashish
  const drop = clamp(tt / 2, 0, 1)
  const k = tt > 2 ? Math.exp(-(tt - 2) / 3) : 1
  const Tw = theta - (theta - T2) * k
  const Ts = theta + (T1 - theta) * k
  // termometr: 0..100 °C -> ustun balandligi
  const thTop = 52, thBot = 250
  const colH = clamp(Tw / 100, 0, 1) * (thBot - thTop - 10)
  // suv sathi suv massasiga bog'liq
  const waterTop = 300 - clamp(v.m2 / 500, 0.1, 1) * 120
  const sz = 14 + clamp(v.m1 / 500, 0, 1) * 22
  const sampleY = 40 + drop * (296 - sz - 6 - 40)
  const hot = clamp((Ts - 20) / 80, 0, 1)
  const sampleCol = `rgb(${Math.round(150 + 100 * hot)},${Math.round(150 - 60 * hot)},${Math.round(150 - 90 * hot)})`
  const running = state === 'running'
  const bubbles = running && tt > 2 && k > 0.05
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Kalorimetr stendi">
      <defs>
        <linearGradient id="s11bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eef1f3" /><stop offset="1" stopColor="#dde2e6" /></linearGradient>
        <linearGradient id="s11tab" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b9a58c" /><stop offset="1" stopColor="#8f7c66" /></linearGradient>
        <linearGradient id="s11steel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8d959c" /><stop offset=".45" stopColor="#e6eaed" /><stop offset="1" stopColor="#7b838a" /></linearGradient>
        <linearGradient id="s11glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ffffff" stopOpacity=".55" /><stop offset=".3" stopColor="#ffffff" stopOpacity=".1" /><stop offset="1" stopColor="#ffffff" stopOpacity=".35" /></linearGradient>
        <linearGradient id="s11water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7fb8d8" stopOpacity=".85" /><stop offset="1" stopColor="#3f7fa8" stopOpacity=".9" /></linearGradient>
        <radialGradient id="s11smp" cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#ffffff" stopOpacity=".6" /><stop offset="1" stopColor="#000" stopOpacity=".15" /></radialGradient>
        <filter id="s11sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s11bg)" />
      <rect y="300" width="640" height="60" fill="url(#s11tab)" />
      <rect y="300" width="640" height="4" fill="#6e5f4f" opacity=".5" />

      {/* shtativ va ip */}
      <rect x="40" y="290" width="90" height="12" rx="3" fill="#2f3337" filter="url(#s11sh)" />
      <rect x="78" y="30" width="7" height="262" fill="url(#s11steel)" />
      <rect x="78" y="34" width="160" height="6" rx="2" fill="url(#s11steel)" />
      <line x1="230" y1="40" x2="230" y2={sampleY} stroke="#555" strokeWidth="1.2" />

      {/* kalorimetr: tashqi va ichki idish */}
      <g filter="url(#s11sh)">
        <rect x="160" y="160" width="140" height="140" rx="6" fill="url(#s11steel)" />
        <rect x="172" y="168" width="116" height="128" rx="4" fill="#cfd6db" />
      </g>
      <rect x="176" y={waterTop} width="108" height={296 - waterTop} fill="url(#s11water)" />
      <ellipse cx="230" cy={waterTop} rx="54" ry="3" fill="#a9d3ea" opacity=".8" />
      {/* namuna */}
      <g transform={`translate(${230 - sz / 2} ${sampleY})`}>
        <rect width={sz} height={sz} rx="3" fill={sampleCol} stroke="#444" strokeWidth=".8" />
        <rect width={sz} height={sz} rx="3" fill="url(#s11smp)" />
      </g>
      {bubbles && [0, 1, 2, 3].map(i => {
        const p = ((tt * 0.8 + i * 0.25) % 1)
        return <circle key={i} cx={222 + i * 6} cy={sampleY - p * Math.max(0, sampleY - waterTop)} r={1.6 + i * 0.3} fill="#fff" opacity={0.7 * (1 - p)} />
      })}
      <rect x="172" y="168" width="116" height="128" rx="4" fill="url(#s11glass)" />
      {/* aralashtirgich */}
      <line x1="268" y1="140" x2="268" y2="285" stroke="#9aa2a8" strokeWidth="3" />
      <rect x="258" y="283" width="20" height="4" fill="#9aa2a8" transform={running ? `translate(0 ${Math.sin(tt * 4) * 6})` : undefined} />
      <text x="230" y="318" textAnchor="middle" fontSize="11" fill="#2b2b2b">Kalorimetr</text>

      {/* termometr */}
      <g transform="translate(330 0)">
        <rect x="0" y={thTop - 6} width="22" height={thBot - thTop + 30} rx="11" fill="#f4f7f9" stroke="#9aa3aa" filter="url(#s11sh)" />
        <rect x="8" y={thTop} width="6" height={thBot - thTop} rx="3" fill="#e9eef1" />
        <rect x="8" y={thBot - 10 - colH} width="6" height={colH + 12} fill="#D97757" />
        <circle cx="11" cy={thBot + 8} r="8" fill="#D97757" />
        {[0, 20, 40, 60, 80, 100].map(g => {
          const y = thBot - 10 - (g / 100) * (thBot - thTop - 10)
          return <g key={g}><line x1="15" x2="21" y1={y} y2={y} stroke="#333" /><text x="26" y={y + 3} fontSize="9" fill="#333">{g}</text></g>
        })}
      </g>

      {/* raqamli displey */}
      <g transform="translate(410 70)" filter="url(#s11sh)">
        <rect width="200" height="170" rx="10" fill="#2b3035" />
        <rect x="12" y="12" width="176" height="146" rx="6" fill="#c9d8b6" />
        <text x="22" y="34" fontSize="11" fill="#2b3a22">Suv temperaturasi</text>
        <text x="22" y="62" fontSize="26" fontFamily="monospace" fill="#1d2a16">{f(Tw, 1)} °C</text>
        <text x="22" y="86" fontSize="11" fill="#2b3a22">Namuna temperaturasi</text>
        <text x="22" y="108" fontSize="18" fontFamily="monospace" fill="#1d2a16">{f(Ts, 1)} °C</text>
        <text x="22" y="130" fontSize="11" fill="#2b3a22">Muvozanat θ</text>
        <text x="22" y="150" fontSize="16" fontFamily="monospace" fill="#3D7A6E">{f(theta, 2)} °C</text>
      </g>
      <g transform="translate(410 255)">
        <rect width="200" height="34" rx="6" fill="#fff" stroke="#c4cbd0" />
        <text x="12" y="15" fontSize="10" fill="#444">m₁={f(v.m1, 0)} g   m₂={f(v.m2, 0)} g</text>
        <text x="12" y="28" fontSize="10" fill="#444">c₁={r[1] ? f(r[1].value, 0) : '—'} J/(kg·K)</text>
      </g>
      <text x="20" y="22" fontSize="13" fontWeight="600" fill="#2b2b2b">Issiqlik balansi usuli</text>
      <text x="20" y="345" fontSize="11" fill="#fff">{state === 'idle' ? 'Namuna isitilgan, tushirishga tayyor' : k < 0.05 ? 'Issiqlik muvozanati o\'rnatildi' : 'Issiqlik almashinuvi...'}</text>
    </svg>
  )
}
