// Stend 03: ikki tayanchli po'lat balkaning egilishi (Yung moduli), indikator soat
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—')
const find = (out, label, unit, fb) => { const r = out && out.results && out.results.find(q => q.label === label && q.unit === unit); return r && Number.isFinite(r.value) ? r.value : fb }
const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : 1 - Math.pow(1 - x, 3))

function Lcd({ x, y, w = 124, label, value, unit }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height="44" rx="6" fill="url(#s03-case)" stroke="#5b6670" />
      <rect x="6" y="16" width={w - 12} height="22" rx="3" fill="#16201f" />
      <text x="8" y="12" fontSize="9" fill="#e8edf0" fontFamily="system-ui,sans-serif">{label}</text>
      <text x={w - 10} y="32" fontSize="14" textAnchor="end" fill="#8ff0c8" fontFamily="ui-monospace,Menlo,monospace">{value} {unit}</text>
    </g>
  )
}

export default function Stand({ v = {}, out, state, t = 0 }) {
  const m = Number(v.m) || 0, l = Number(v.l) || 0.5, b = Number(v.b) || 20, h = Number(v.h) || 3, y = Number(v.y) || 0
  const F = find(out, 'Yuk kuchi F', 'N', m * 9.81)
  const EG = find(out, 'Yung moduli E', 'GPa', NaN)
  // animatsiya: yuk 2 s davomida ilinadi, balka egiladi; 1 s ushlab turiladi, takror
  const running = state === 'running', active = state !== 'idle'
  const ph = active ? (running ? t % 4 : Math.min(t, 2)) : 0
  const p = ease(ph / 2)
  const d = y * p // joriy egilish, mm
  // geometriya: oraliq l ga proporsional, egilish mm ga proporsional (kattalashtirilgan)
  const span = 160 + 320 * (Math.min(1.5, Math.max(0.1, l)) - 0.1) / 1.4
  const cx = 300, x1 = cx - span / 2, x2 = cx + span / 2, by = 190
  const K = 2.2 // px/mm
  const dpx = Math.min(70, d * K)
  const thick = 4 + h * 1.1
  const shape = (x) => { const u = Math.min(x, span - x) / span; return dpx * (3 * u - 4 * u * u * u) } // u<=0.5 da 1 ga normalangan elastik chiziq
  const pts = []
  const ext = 22
  // tayanchdan tashqaridagi uchlar urinma bo'ylab ko'tariladi (qiyalik 3·f/l)
  for (let i = 0; i <= 50; i++) {
    const x = -ext + (span + 2 * ext) * i / 50
    const yy = x < 0 ? -dpx * 3 * (-x / span) : x > span ? -dpx * 3 * ((x - span) / span) : shape(x)
    pts.push([x1 + x, by + yy])
  }
  const top = pts.map(([x, yy]) => `${x.toFixed(1)},${(yy - thick / 2).toFixed(1)}`).join(' ')
  const bot = pts.slice().reverse().map(([x, yy]) => `${x.toFixed(1)},${(yy + thick / 2).toFixed(1)}`).join(' ')
  const mid = by + dpx
  // yuk: osma ilgak
  const loadH = 18 + Math.min(40, Math.sqrt(m) * 9)
  const hangDrop = active ? (1 - p) * -24 : -24
  // indikator soat: katta strelka 1 mm = 1 aylanma, kichik strelka mm sanaydi
  const gx = cx, gy = 70, gr = 34
  const bigA = (d % 1) * 360, smallA = (d / 10) * 360
  const ticks = []
  for (let i = 0; i < 100; i += 2) ticks.push(i)
  // chizg'ich: tayanchlar orasida, 0..l metr
  const rs = l <= 0.3 ? 0.05 : l <= 0.8 ? 0.1 : 0.2
  const rticks = []
  for (let q = 0; q <= l + 1e-9; q += rs) rticks.push(q)
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Balka egilishi stendi">
      <defs>
        <linearGradient id="s03-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3f5f6" /><stop offset="1" stopColor="#dfe4e7" /></linearGradient>
        <linearGradient id="s03-case" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4a545c" /><stop offset="1" stopColor="#2c3338" /></linearGradient>
        <linearGradient id="s03-steel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eef1f3" /><stop offset=".5" stopColor="#9aa4ac" /><stop offset="1" stopColor="#5f686f" /></linearGradient>
        <linearGradient id="s03-frame" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5d6a72" /><stop offset=".5" stopColor="#8b979e" /><stop offset="1" stopColor="#4d5960" /></linearGradient>
        <linearGradient id="s03-weight" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5a5f63" /><stop offset=".4" stopColor="#b9bec2" /><stop offset="1" stopColor="#3b4044" /></linearGradient>
        <radialGradient id="s03-dial" cx=".5" cy=".45" r=".6"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#dde3e6" /></radialGradient>
        <filter id="s03-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".3" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s03-bg)" />
      {/* asos (stanina) */}
      <rect x="40" y="300" width="520" height="20" rx="3" fill="url(#s03-frame)" filter="url(#s03-sh)" />
      {/* tayanchlar (prizmalar) */}
      {[x1, x2].map((x, i) => (
        <g key={i} filter="url(#s03-sh)">
          <rect x={x - 10} y={by + 40} width="20" height="70" fill="url(#s03-frame)" />
          <path d={`M ${x - 12} ${by + 42} L ${x} ${by + thick / 2 + 1} L ${x + 12} ${by + 42} Z`} fill="#3D7A6E" />
        </g>
      ))}
      {/* indikator soat ustuni */}
      <rect x={gx + 70} y="40" width="10" height="262" fill="url(#s03-frame)" />
      <rect x={gx + 6} y={gy - 6} width="66" height="10" fill="url(#s03-frame)" />
      {/* balka */}
      <polygon points={`${top} ${bot}`} fill="url(#s03-steel)" stroke="#4b545b" strokeWidth=".8" filter="url(#s03-sh)" />
      {/* indikator shtogi */}
      <rect x={gx - 2} y={gy + gr} width="4" height={Math.max(4, mid - thick / 2 - gy - gr)} fill="#c7ccd0" stroke="#666" strokeWidth=".5" />
      {/* indikator soat */}
      <g filter="url(#s03-sh)">
        <circle cx={gx} cy={gy} r={gr + 4} fill="#8b979e" stroke="#4b545b" />
        <circle cx={gx} cy={gy} r={gr} fill="url(#s03-dial)" />
        {ticks.map((i) => { const a = (i / 100) * 2 * Math.PI, L = i % 10 === 0 ? 6 : 3; return <line key={i} x1={gx + gr * Math.sin(a)} y1={gy - gr * Math.cos(a)} x2={gx + (gr - L) * Math.sin(a)} y2={gy - (gr - L) * Math.cos(a)} stroke="#222" strokeWidth=".6" /> })}
        {[0, 20, 40, 60, 80].map((i) => { const a = (i / 100) * 2 * Math.PI; return <text key={i} x={gx + (gr - 12) * Math.sin(a)} y={gy - (gr - 12) * Math.cos(a) + 3} fontSize="6" textAnchor="middle" fill="#222" fontFamily="system-ui,sans-serif">{i}</text> })}
        <circle cx={gx} cy={gy + 13} r="7" fill="none" stroke="#999" strokeWidth=".5" />
        <line x1={gx} y1={gy + 13} x2={gx + 6 * Math.sin(smallA * Math.PI / 180)} y2={gy + 13 - 6 * Math.cos(smallA * Math.PI / 180)} stroke="#3D7A6E" strokeWidth="1" />
        <line x1={gx} y1={gy} x2={gx + (gr - 6) * Math.sin(bigA * Math.PI / 180)} y2={gy - (gr - 6) * Math.cos(bigA * Math.PI / 180)} stroke="#D97757" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx={gx} cy={gy} r="2.5" fill="#333" />
        <text x={gx} y={gy - 10} fontSize="5.5" textAnchor="middle" fill="#555" fontFamily="system-ui,sans-serif">0,01 mm</text>
      </g>
      {/* yuk */}
      <g transform={`translate(0,${hangDrop})`}>
        <path d={`M ${cx - 8} ${mid + thick / 2} L ${cx} ${mid + thick / 2 + 8} L ${cx + 8} ${mid + thick / 2}`} fill="none" stroke="#555" strokeWidth="1.5" />
        <line x1={cx} y1={mid + thick / 2 + 8} x2={cx} y2={mid + thick / 2 + 22} stroke="#555" strokeWidth="1.5" />
        <rect x={cx - 20} y={mid + thick / 2 + 22} width="40" height={loadH} rx="3" fill="url(#s03-weight)" stroke="#333" strokeWidth=".6" filter="url(#s03-sh)" />
        <text x={cx} y={mid + thick / 2 + 26 + loadH / 2} fontSize="9" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif">{fmt(m, 1)} kg</text>
      </g>
      {/* egilish o'lchami */}
      {dpx > 2 && <>
        <line x1={cx + 26} y1={by} x2={cx + 26} y2={mid} stroke="#D97757" strokeWidth="1" />
        <line x1={cx + 20} y1={by} x2={cx + 32} y2={by} stroke="#D97757" /><line x1={cx + 20} y1={mid} x2={cx + 32} y2={mid} stroke="#D97757" />
        <text x={cx + 36} y={(by + mid) / 2 + 3} fontSize="10" fill="#D97757" fontFamily="system-ui,sans-serif">y</text>
        <line x1={x1} y1={by} x2={x2} y2={by} stroke="#9aa4ac" strokeDasharray="3 3" />
      </>}
      {/* chizg'ich */}
      <rect x={x1 - 6} y="324" width={span + 12} height="14" fill="#f7f1d8" stroke="#a89a60" strokeWidth=".8" />
      {rticks.map((q, i) => { const x = x1 + span * q / l; return <g key={i}><line x1={x} y1="324" x2={x} y2="331" stroke="#333" strokeWidth=".8" /><text x={x} y="349" fontSize="8" textAnchor="middle" fill="#444" fontFamily="system-ui,sans-serif">{fmt(q, rs < 0.1 ? 2 : 1)}</text></g> })}
      <text x={x2 + 12} y="349" fontSize="8" fill="#444" fontFamily="system-ui,sans-serif">m</text>
      {/* displeylar */}
      <text x="20" y="22" fontSize="12" fontWeight="600" fill="#2c3338" fontFamily="system-ui,sans-serif">Balka egilishi (Yung moduli)</text>
      <text x="20" y="38" fontSize="10" fill="#4b545b" fontFamily="system-ui,sans-serif">l = {fmt(l, 2)} m, b = {fmt(b, 1)} mm, h = {fmt(h, 1)} mm</text>
      <Lcd x={490} y={20} label="Yuk kuchi F" value={fmt(F * p, 2)} unit="N" />
      <Lcd x={490} y={70} label="Egilish y" value={fmt(d, 2)} unit="mm" />
      <Lcd x={490} y={120} label="Yung moduli E" value={active && p >= 1 ? fmt(EG, 1) : '—'} unit="GPa" />
    </svg>
  )
}
