// Stend 09: Majburiy tebranish — vibrator (tebratgich) ga osilgan prujina va yuk.
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');

export default function Stand({ v = {}, out, state, t = 0 }) {
  const res = (out && out.results) || [];
  const f0 = res[0] ? res[0].value : 0;
  const A = res[1] ? res[1].value : 0;
  const phase = res[4] ? res[4].value : 0;
  const f = v.f || 1.5;
  const running = state === 'running';
  const tt = state === 'idle' ? 0 : t;
  const w = 2 * Math.PI * f;

  const pxm = 300; // 1 m = 300 px (shkala bo'yicha)
  const Apx = Math.min(A * pxm, 70);
  const Dpx = Math.max(3, Math.min(((v.F0 || 1) / (v.k || 50)) * pxm, 12));
  const drive = state === 'idle' ? 0 : Dpx * Math.sin(w * tt);
  const x = state === 'idle' ? 0 : Apx * Math.sin(w * tt - (phase * Math.PI) / 180);

  const cx = 250;
  const attachY = 92 + drive;
  const massEq = 200;
  const massY = massEq + x;
  const mH = 22 + Math.min(v.m || 0.5, 5) * 5;
  const mW = 36 + Math.min(v.m || 0.5, 5) * 4;

  // Prujina zigzag
  const coils = 14;
  const sTop = attachY + 8, sBot = massY - mH / 2;
  const sp = [`${cx},${attachY}`, `${cx},${sTop}`];
  for (let i = 1; i < coils * 2; i++) {
    const y = sTop + ((sBot - sTop) * i) / (coils * 2);
    sp.push(`${cx + (i % 2 ? 13 : -13)},${y.toFixed(1)}`);
  }
  sp.push(`${cx},${sBot}`);

  const near = f0 > 0 && Math.abs(f - f0) / f0 < 0.05;

  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Majburiy tebranish stendi">
      <defs>
        <linearGradient id="s09-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef1f4" /><stop offset="1" stopColor="#dde3e9" />
        </linearGradient>
        <linearGradient id="s09-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c99a6b" /><stop offset="1" stopColor="#9c7048" />
        </linearGradient>
        <linearGradient id="s09-pole" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6f7780" /><stop offset="0.45" stopColor="#e3e7eb" /><stop offset="1" stopColor="#5d646c" />
        </linearGradient>
        <linearGradient id="s09-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e3e7eb" /><stop offset="1" stopColor="#6f7780" />
        </linearGradient>
        <linearGradient id="s09-mass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3D7A6E" /><stop offset="0.4" stopColor="#6fb0a2" /><stop offset="1" stopColor="#24493f" />
        </linearGradient>
        <linearGradient id="s09-box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e4e7ea" /><stop offset="1" stopColor="#a7adb4" />
        </linearGradient>
        <linearGradient id="s09-ruler" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e9c98d" /><stop offset="1" stopColor="#d1a85f" />
        </linearGradient>
        <filter id="s09-sh" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2.5" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect width="640" height="360" fill="url(#s09-wall)" />
      <rect y="310" width="640" height="50" fill="url(#s09-table)" />

      {/* Ramka */}
      <g filter="url(#s09-sh)">
        <rect x="110" y="300" width="250" height="14" rx="3" fill="#2e3338" />
        <rect x="130" y="28" width="10" height="276" fill="url(#s09-pole)" />
        <rect x="136" y="30" width={cx - 100} height="12" fill="url(#s09-beam)" />
      </g>

      {/* Vibrator (elektromexanik tebratgich) */}
      <g filter="url(#s09-sh)">
        <rect x={cx - 34} y="42" width="68" height="40" rx="5" fill="#3a4047" stroke="#1f2327" />
        <rect x={cx - 28} y="48" width="56" height="12" rx="2" fill="#555d66" />
        <text x={cx} y="74" fontSize="8" fill="#e5e7ea" textAnchor="middle">VIBRATOR</text>
        <rect x={cx - 4} y={82} width="8" height={attachY - 82 + 2} fill="#9aa2aa" />
        <circle cx={cx} cy={attachY} r="4" fill="#444" />
      </g>

      {/* Prujina va yuk */}
      <polyline points={sp.join(' ')} fill="none" stroke="#7c848c" strokeWidth="2.2" strokeLinejoin="round" />
      <g filter="url(#s09-sh)">
        <rect x={cx - mW / 2} y={massY - mH / 2} width={mW} height={mH} rx="3" fill="url(#s09-mass)" stroke="#1c3a33" />
        <text x={cx} y={massY + 4} fontSize="10" fill="#fff" textAnchor="middle">{fmt(v.m || 0.5, 1)} kg</text>
      </g>
      <line x1={cx + mW / 2} y1={massY} x2="300" y2={massY} stroke="#D97757" strokeWidth="1.2" />
      <polygon points={`300,${massY} 294,${massY - 3} 294,${massY + 3}`} fill="#D97757" />

      {/* Shkala (sm), 0 — muvozanat holati */}
      <g>
        <rect x="302" y={massEq - 75} width="26" height="150" fill="url(#s09-ruler)" stroke="#9c7a3a" />
        {Array.from({ length: 51 }, (_, i) => {
          const c = i - 25;
          const y = massEq + c * 3;
          return <line key={i} x1="302" x2={302 + (c % 10 === 0 ? 12 : c % 5 === 0 ? 8 : 4)} y1={y} y2={y} stroke="#4a3812" strokeWidth="0.6" />;
        })}
        {[-20, -10, 0, 10, 20].map((c) => (
          <text key={c} x="327" y={massEq + c * 3 + 3} fontSize="7" fill="#3a2c0e" textAnchor="end">{Math.abs(c)}</text>
        ))}
        <text x="315" y={massEq - 80} fontSize="9" fill="#333" textAnchor="middle">cm</text>
      </g>
      {running && Apx > 1 && (
        <g stroke="#3D7A6E" strokeDasharray="3 3">
          <line x1={cx - mW / 2 - 10} x2="302" y1={massEq - Apx} y2={massEq - Apx} />
          <line x1={cx - mW / 2 - 10} x2="302" y1={massEq + Apx} y2={massEq + Apx} />
        </g>
      )}

      {/* Generator */}
      <g filter="url(#s09-sh)">
        <rect x="400" y="40" width="220" height="140" rx="9" fill="url(#s09-box)" stroke="#7d848b" />
        <text x="510" y="58" fontSize="11" fill="#222" textAnchor="middle">Past chastotali generator</text>
        <text x="414" y="86" fontSize="10" fill="#333">f, Hz</text>
        <rect x="456" y="68" width="110" height="30" rx="3" fill="#0f1a14" />
        <text x="558" y="90" fontSize="19" fontFamily="monospace" fill="#7CF2A6" textAnchor="end">{fmt(f, 2)}</text>
        <text x="414" y="124" fontSize="10" fill="#333">A, mm</text>
        <rect x="456" y="106" width="110" height="30" rx="3" fill="#0f1a14" />
        <text x="558" y="128" fontSize="19" fontFamily="monospace" fill="#7CF2A6" textAnchor="end">{running ? fmt(A * 1000, 1) : '----'}</text>
        <circle cx="590" cy="102" r="14" fill="#d7dbe0" stroke="#666" />
        <line x1="590" y1="102" x2={590 + 10 * Math.sin((f / 5) * 5)} y2={102 - 10 * Math.cos((f / 5) * 5)} stroke="#333" strokeWidth="2" />
        <circle cx="418" cy="160" r="5" fill={running ? '#4ade80' : '#555'} />
        <text x="428" y="163" fontSize="9" fill="#333">{running ? 'ishlamoqda' : 'o‘chiq'}</text>
        <circle cx="600" cy="160" r="6" fill="#222" />
      </g>
      <path d={`M 600 166 C 620 260, 330 10, ${cx + 34} 60`} fill="none" stroke="#222" strokeWidth="2" />

      <g fontSize="11" fill="#333">
        <text x="400" y="220">f₀ = {fmt(f0, 3)} Hz</text>
        <text x="400" y="240">φ = {fmt(phase, 1)}°</text>
        <text x="400" y="262" fill={near ? '#D97757' : '#333'}>{near ? 'Rezonans: f ≈ f₀' : f < f0 ? 'f < f₀' : 'f > f₀'}</text>
      </g>
    </svg>
  );
}
