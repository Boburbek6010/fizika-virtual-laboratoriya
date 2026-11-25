// Stend 12: pech metall sterjenni qizdiradi, uchidagi mikrometr Δl ni ko'rsatadi
const f = (x, d = 1) => (typeof x === 'number' && isFinite(x) ? x.toFixed(d).replace('.', ',') : '—')
const clamp = (x, a, b) => Math.max(a, Math.min(b, x))

export default function Stand({ v, out, state, t }) {
  const tt = state === 'idle' ? 0 : t || 0
  const r = (out && out.results) || []
  const dlEnd = r[0] ? r[0].value : 0 // mm
  const heat = clamp(tt / 8, 0, 1) // 8 s davomida T1 -> T2
  const T = state === 'idle' ? v.T1 : v.T1 + (v.T2 - v.T1) * heat
  const dl = dlEnd * (state === 'idle' ? 0 : heat) // mm
  const l0mm = v.l0 * 1000
  const glow = clamp((T - 20) / 280, 0, 1)
  const ext = (state === 'idle' ? 0 : heat) * 10 * Math.sign(dlEnd || 0) // vizual uzayish, px
  const rodX0 = 150, rodX1 = 470 + ext
  const needle = (dl * 100) % 100 * 3.6 // 0.01 mm bo'linma, 1 aylanish = 1 mm
  const running = state === 'running'
  const rodHot = `rgb(${Math.round(170 + 85 * glow)},${Math.round(175 - 70 * glow)},${Math.round(180 - 120 * glow)})`
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Chiziqli kengayish stendi">
      <defs>
        <linearGradient id="s12bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e9e6e1" /><stop offset="1" stopColor="#d3cfc8" /></linearGradient>
        <linearGradient id="s12tab" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c9c6c0" /><stop offset="1" stopColor="#a8a49d" /></linearGradient>
        <linearGradient id="s12box" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6d747a" /><stop offset="1" stopColor="#40464b" /></linearGradient>
        <linearGradient id="s12rod" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f2f4f6" /><stop offset=".5" stopColor={rodHot} /><stop offset="1" stopColor="#6f767c" /></linearGradient>
        <radialGradient id="s12fire" cx=".5" cy=".6" r=".7"><stop offset="0" stopColor="#ffe08a" stopOpacity={0.4 + 0.6 * glow} /><stop offset=".6" stopColor="#ff8a2a" stopOpacity={0.3 + 0.7 * glow} /><stop offset="1" stopColor="#8a2c10" stopOpacity=".9" /></radialGradient>
        <linearGradient id="s12steel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5b6166" /><stop offset=".5" stopColor="#c9ced2" /><stop offset="1" stopColor="#4d5357" /></linearGradient>
        <filter id="s12sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity=".35" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s12bg)" />
      <rect y="262" width="640" height="98" fill="url(#s12tab)" />

      {/* chizg'ich */}
      <g transform="translate(200 40)">
        <rect width="300" height="22" fill="#f7f7f4" stroke="#999" />
        {Array.from({ length: 51 }, (_, i) => <line key={i} x1={i * 6} x2={i * 6} y1="22" y2={i % 5 ? 16 : 10} stroke="#333" strokeWidth=".7" />)}
        {Array.from({ length: 11 }, (_, i) => <text key={i} x={i * 30} y="8" fontSize="7" textAnchor="middle" fill="#333">{i * 10}</text>)}
      </g>

      {/* pech */}
      <g filter="url(#s12sh)">
        <rect x="20" y="110" width="150" height="150" rx="6" fill="url(#s12box)" />
        <rect x="88" y="128" width="70" height="110" rx="4" fill="#d9cfc2" />
        <rect x="96" y="136" width="54" height="94" rx="2" fill="url(#s12fire)" />
      </g>
      <rect x="32" y="128" width="50" height="26" rx="3" fill="#1a1a1a" />
      <text x="57" y="147" textAnchor="middle" fontSize="15" fontFamily="monospace" fill="#ff3b2f">{f(T, 0)}°C</text>
      <text x="34" y="170" fontSize="9" fill="#e6e6e6">Harorat</text>
      <rect x="34" y="220" width="14" height="18" rx="2" fill={running ? '#e23b2b' : '#5a2a26'} stroke="#222" />
      <text x="52" y="233" fontSize="9" fill="#e6e6e6">Yoqish</text>
      <rect x="30" y="260" width="16" height="8" fill="#222" /><rect x="144" y="260" width="16" height="8" fill="#222" />

      {/* sterjen */}
      <rect x={rodX0} y="176" width={rodX1 - rodX0} height="10" rx="2" fill="url(#s12rod)" />
      {/* tayanchlar */}
      {[260, 380].map(x => <g key={x} filter="url(#s12sh)"><rect x={x - 9} y="170" width="18" height="22" rx="4" fill="#2c2f33" /><rect x={x - 4} y="192" width="8" height="64" fill="#2c2f33" /><rect x={x - 16} y="254" width="32" height="8" rx="2" fill="#2c2f33" /></g>)}

      {/* mikrometr / indikator */}
      <g filter="url(#s12sh)">
        <rect x="548" y="190" width="10" height="66" fill="url(#s12steel)" />
        <rect x="522" y="254" width="62" height="12" rx="3" fill="#1f2226" />
        <rect x={rodX1} y="178" width={516 - rodX1} height="6" fill="#a9afb4" />
        <rect x="508" y="120" width="92" height="74" rx="10" fill="#2b2f33" />
        <rect x="516" y="128" width="76" height="26" rx="3" fill="#b9cdb0" />
        <text x="554" y="147" textAnchor="middle" fontSize="13" fontFamily="monospace" fill="#1b2616">{f(l0mm + dl, 3)}</text>
        <circle cx="554" cy="174" r="15" fill="#f4f4f0" stroke="#888" />
        {Array.from({ length: 20 }, (_, i) => { const a = i * 18 * Math.PI / 180; return <line key={i} x1={554 + 11 * Math.sin(a)} y1={174 - 11 * Math.cos(a)} x2={554 + 14 * Math.sin(a)} y2={174 - 14 * Math.cos(a)} stroke="#333" strokeWidth=".7" /> })}
        <line x1="554" y1="174" x2={554 + 12 * Math.sin(needle * Math.PI / 180)} y2={174 - 12 * Math.cos(needle * Math.PI / 180)} stroke="#D97757" strokeWidth="1.6" />
        <circle cx="554" cy="174" r="2" fill="#333" />
      </g>
      <text x="554" y="112" textAnchor="middle" fontSize="10" fill="#333">Mikrometr, mm</text>

      {/* termometr displeyi */}
      <g transform="translate(210 280)" filter="url(#s12sh)">
        <rect width="96" height="64" rx="8" fill="#26292d" />
        <rect x="8" y="8" width="80" height="34" rx="3" fill="#b9cdb0" />
        <text x="48" y="31" textAnchor="middle" fontSize="16" fontFamily="monospace" fill="#1b2616">{f(T, 1)}°C</text>
        <text x="48" y="56" textAnchor="middle" fontSize="9" fill="#ddd">Termometr T</text>
      </g>
      {/* natijalar */}
      <g transform="translate(330 280)" filter="url(#s12sh)">
        <rect width="290" height="64" rx="8" fill="#ffffff" stroke="#c9c4bc" />
        <text x="12" y="20" fontSize="11" fill="#333">l₀ = {f(l0mm, 1)} mm    ΔT = {f(T - v.T1, 1)} °C</text>
        <text x="12" y="38" fontSize="12" fill="#3D7A6E" fontWeight="600">Δl = {f(dl, 4)} mm</text>
        <text x="12" y="55" fontSize="11" fill="#333">α = {f(v.alpha, 1)}×10⁻⁶ K⁻¹</text>
      </g>
      <text x="20" y="24" fontSize="13" fontWeight="600" fill="#2b2b2b">Qizdirish pechi va metall sterjen</text>
    </svg>
  )
}
