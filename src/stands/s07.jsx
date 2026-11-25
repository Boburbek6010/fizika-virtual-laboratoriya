// Stend 07: Matematik mayatnik — shtativ, ip uzunligi l, sekundomer va hisoblagich.
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');

export default function Stand({ v = {}, out, state, t = 0 }) {
  const res = (out && out.results) || [];
  const T = res[1] ? res[1].value : 2;
  const tN = res[2] ? res[2].value : 0;
  const N = Math.round(v.N || 20);
  const th0 = v.th || 8;
  const tt = state === 'idle' ? 0 : t;

  // Mayatnik o'ng chekkadan qo'yib yuboriladi: θ(t) = θ0·cos(2πt/T)
  const theta = state === 'idle' ? th0 : th0 * Math.cos((2 * Math.PI * tt) / (T || 1));
  const count = T > 0 ? Math.min(Math.floor(tt / T), N) : 0;
  const watch = Math.min(tt, tN || tt);
  const done = count >= N;

  const px = 240, py = 38;
  const Lpx = 30 + Math.min(v.l || 1, 2) * 125;
  const thr = (theta * Math.PI) / 180;
  const bx = px + Lpx * Math.sin(thr);
  const by = py + Lpx * Math.cos(thr);
  const bobR = 9;

  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Matematik mayatnik stendi">
      <defs>
        <linearGradient id="s07-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef1f4" /><stop offset="1" stopColor="#dde3e9" />
        </linearGradient>
        <linearGradient id="s07-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c99a6b" /><stop offset="1" stopColor="#9c7048" />
        </linearGradient>
        <linearGradient id="s07-pole" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6f7780" /><stop offset="0.45" stopColor="#e3e7eb" /><stop offset="1" stopColor="#5d646c" />
        </linearGradient>
        <linearGradient id="s07-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e3e7eb" /><stop offset="1" stopColor="#6f7780" />
        </linearGradient>
        <radialGradient id="s07-bob" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffffff" /><stop offset="0.45" stopColor="#b8c0c8" /><stop offset="1" stopColor="#4b535b" />
        </radialGradient>
        <filter id="s07-sh" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2.5" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect width="640" height="360" fill="url(#s07-wall)" />
      <rect y="330" width="640" height="30" fill="url(#s07-table)" />

      {/* Shtativ (uch oyoq) */}
      <g filter="url(#s07-sh)">
        <polygon points="110,334 150,322 190,334 150,328" fill="#2f343a" />
        <line x1="150" y1="326" x2="104" y2="336" stroke="#2f343a" strokeWidth="6" strokeLinecap="round" />
        <line x1="150" y1="326" x2="196" y2="336" stroke="#2f343a" strokeWidth="6" strokeLinecap="round" />
        <line x1="150" y1="326" x2="150" y2="340" stroke="#2f343a" strokeWidth="6" strokeLinecap="round" />
        <rect x="145" y="22" width="10" height="306" fill="url(#s07-pole)" />
        <rect x="140" y="28" width="22" height="22" rx="3" fill="#3a4047" />
        <rect x="160" y="33" width={px - 150} height="9" fill="url(#s07-beam)" />
        <rect x={px - 6} y="30" width="14" height="14" rx="2" fill="#3a4047" />
      </g>

      {/* Burchak shkalasi (transportir) */}
      <path d={`M ${px - 44} ${py} A 44 44 0 0 0 ${px + 44} ${py}`} fill="rgba(255,255,255,0.55)" stroke="#8b939b" />
      {Array.from({ length: 13 }, (_, i) => {
        const ang = ((-60 + i * 10) * Math.PI) / 180;
        const r1 = i % 3 === 0 ? 34 : 38;
        return (
          <line key={i} x1={px + r1 * Math.sin(ang)} y1={py + r1 * Math.cos(ang)} x2={px + 44 * Math.sin(ang)} y2={py + 44 * Math.cos(ang)} stroke="#555" strokeWidth="0.8" />
        );
      })}
      <line x1={px} y1={py} x2={px} y2={py + Lpx + 14} stroke="#3D7A6E" strokeDasharray="3 4" strokeWidth="0.8" />

      {/* Ip va sharcha */}
      <line x1={px} y1={py} x2={bx} y2={by} stroke="#222" strokeWidth="1.1" />
      <circle cx={bx} cy={by} r={bobR} fill="url(#s07-bob)" stroke="#3b4249" filter="url(#s07-sh)" />
      <circle cx={px} cy={py} r="2.5" fill="#222" />

      {/* l o'lchami */}
      <line x1={px - 70} y1={py} x2={px - 70} y2={py + Lpx} stroke="#D97757" strokeWidth="1" />
      <line x1={px - 75} y1={py} x2={px - 65} y2={py} stroke="#D97757" />
      <line x1={px - 75} y1={py + Lpx} x2={px - 65} y2={py + Lpx} stroke="#D97757" />
      <text x={px - 76} y={py + Lpx / 2} fontSize="11" fill="#D97757" textAnchor="end">l = {fmt(v.l || 1, 2)} m</text>
      <text x={px + 50} y={py + 18} fontSize="10" fill="#333">θ = {fmt(theta, 1)}°</text>

      {/* Sekundomer */}
      <g transform="translate(545 70)" filter="url(#s07-sh)">
        <rect x="-8" y="-24" width="16" height="12" rx="2" fill="#555c64" />
        <circle cx="0" cy="58" r="72" fill="#2b3036" stroke="#15181b" strokeWidth="3" />
        <circle cx="0" cy="58" r="64" fill="#3a4047" />
        <rect x="-50" y="34" width="100" height="40" rx="5" fill="#c9d6c3" stroke="#111" />
        <text x="44" y="64" fontSize="24" fontFamily="monospace" fill="#1d2a1d" textAnchor="end">{fmt(watch, 2)}</text>
        <text x="0" y="22" fontSize="10" fill="#d6dbe0" textAnchor="middle">Sekundomer, s</text>
        <circle cx="-22" cy="96" r="8" fill={state === 'running' && !done ? '#3D7A6E' : '#666'} />
        <circle cx="22" cy="96" r="8" fill="#D97757" />
        <text x="-22" y="113" fontSize="7" fill="#ccc" textAnchor="middle">START</text>
        <text x="22" y="113" fontSize="7" fill="#ccc" textAnchor="middle">STOP</text>
      </g>

      {/* Tebranish hisoblagichi */}
      <g transform="translate(430 220)" filter="url(#s07-sh)">
        <rect width="190" height="84" rx="8" fill="#2d3238" />
        <text x="95" y="17" fontSize="10" fill="#d6dbe0" textAnchor="middle">Tebranishlar hisoblagichi</text>
        <rect x="14" y="26" width="76" height="32" rx="3" fill="#0f1a14" />
        <text x="84" y="50" fontSize="20" fontFamily="monospace" fill="#7CF2A6" textAnchor="end">{count}</text>
        <text x="100" y="47" fontSize="12" fill="#d6dbe0">/ {N}</text>
        <text x="14" y="74" fontSize="10" fill="#aeb6bf">T = {fmt(T, 3)} s</text>
        <text x="110" y="74" fontSize="10" fill={done ? '#7CF2A6' : '#aeb6bf'}>{done ? 'tayyor' : 'sanash'}</text>
      </g>
    </svg>
  );
}
