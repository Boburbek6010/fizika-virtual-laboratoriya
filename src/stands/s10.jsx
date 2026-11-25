// Stend 10: Stoks usuli — glitserinli naycha, A va B belgilari, po'lat sharcha, sekundomer, chizg'ich.
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');

export default function Stand({ v = {}, out, state, t = 0 }) {
  const res = (out && out.results) || [];
  const vt = res[0] ? res[0].value : 0;
  const tAB = res[1] ? res[1].value : 0;
  const tt = state === 'idle' ? 0 : t;
  const sinks = (v.rs || 7800) > (v.rl || 1260) && vt > 0;

  const pxm = 300; // 1 m = 300 px (chizg'ich: 3 px = 1 cm)
  const tubeX = 360, tubeW = 50, tubeTop = 40, liqTop = 70, tubeBot = 300;
  const cx = tubeX + tubeW / 2;
  const yA = 100;
  const lm = Math.min(v.l || 0.3, 0.6);
  const yB = yA + lm * pxm;
  const ballR = Math.max(2.5, Math.min((v.d || 3) * 1.4, 8));
  const yEnd = tubeBot - 6 - ballR;

  // Sharcha suyuqlik sirtidan qo'yib yuboriladi: x(t) = v∞(t − τ(1 − e^(−t/τ)))
  const r = (v.d || 3) / 2000;
  const tau = (2 * (v.rs || 7800) * r * r) / (9 * (v.eta || 1.4));
  let ballY = liqTop + ballR;
  if (state !== 'idle' && sinks) {
    const x = vt * (tt - tau * (1 - Math.exp(-tt / (tau || 1e-9))));
    ballY = Math.min(liqTop + ballR + x * pxm, yEnd);
  }
  // Sekundomer: A dan o'tganda ishga tushadi, B da to'xtaydi
  const xA = (yA - liqTop - ballR) / pxm;
  const tAt = sinks ? xA / vt + tau : Infinity;
  const passedA = ballY >= yA;
  const passedB = ballY >= yB;
  let watch = 0;
  if (state !== 'idle' && passedA) watch = passedB ? tAB : Math.max(0, tt - tAt);
  const watchOn = state === 'running' && passedA && !passedB;

  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Stoks usuli stendi">
      <defs>
        <linearGradient id="s10-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1f3f5" /><stop offset="1" stopColor="#dfe4e9" />
        </linearGradient>
        <linearGradient id="s10-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8f7a68" /><stop offset="1" stopColor="#6a5747" />
        </linearGradient>
        <linearGradient id="s10-pole" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6f7780" /><stop offset="0.45" stopColor="#e3e7eb" /><stop offset="1" stopColor="#5d646c" />
        </linearGradient>
        <linearGradient id="s10-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c9d6e0" stopOpacity="0.75" /><stop offset="0.22" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.7" stopColor="#e6eef4" stopOpacity="0.2" /><stop offset="1" stopColor="#a9bccb" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="s10-gly" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e9dfb6" /><stop offset="0.5" stopColor="#f7f0d4" /><stop offset="1" stopColor="#dccf9c" />
        </linearGradient>
        <radialGradient id="s10-ball" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffffff" /><stop offset="0.45" stopColor="#a7afb8" /><stop offset="1" stopColor="#3f464d" />
        </radialGradient>
        <linearGradient id="s10-ruler" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e9c98d" /><stop offset="1" stopColor="#d1a85f" />
        </linearGradient>
        <filter id="s10-sh" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2.5" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect width="640" height="360" fill="url(#s10-wall)" />
      <rect y="316" width="640" height="44" fill="url(#s10-table)" />

      {/* Shtativ */}
      <g filter="url(#s10-sh)">
        <path d="M 250 318 Q 250 300 290 300 L 440 300 Q 470 300 470 318 Z" fill="#2b2f34" />
        <rect x="276" y="22" width="10" height="282" fill="url(#s10-pole)" />
        <rect x="268" y="64" width="26" height="22" rx="4" fill="#23272b" />
        <rect x="262" y="68" width="8" height="14" rx="2" fill="#1f5a9e" />
        <rect x="292" y="70" width={tubeX - 292} height="10" fill="#3a4047" />
        <rect x={tubeX - 4} y="64" width={tubeW + 8} height="22" rx="5" fill="#23272b" />
      </g>

      {/* Naycha */}
      <rect x={tubeX + 2} y={liqTop} width={tubeW - 4} height={tubeBot - liqTop} fill="url(#s10-gly)" opacity="0.9" />
      <ellipse cx={cx} cy={liqTop} rx={tubeW / 2 - 2} ry="3" fill="#efe4bc" />
      {/* A va B belgilari */}
      {[[yA, 'A'], [yB, 'B']].map(([y, lab]) => (
        <g key={lab}>
          <line x1={tubeX} x2={tubeX + tubeW} y1={y} y2={y} stroke="#c0392b" strokeWidth="1.5" />
          <line x1={tubeX + tubeW} x2="470" y1={y} y2={y} stroke="#c0392b" strokeDasharray="4 3" />
          <text x={tubeX + tubeW + 8} y={y - 3} fontSize="12" fontWeight="bold" fill="#c0392b">{lab}</text>
        </g>
      ))}
      <line x1={tubeX + tubeW + 26} x2={tubeX + tubeW + 26} y1={yA + 3} y2={yB - 3} stroke="#333" markerEnd="" />
      <text x={tubeX + tubeW + 30} y={(yA + yB) / 2 + 4} fontSize="12" fontStyle="italic" fill="#333">l</text>

      {/* Sharcha */}
      <circle cx={cx} cy={ballY} r={ballR} fill="url(#s10-ball)" stroke="#2f353b" strokeWidth="0.6" />

      <rect x={tubeX} y={tubeTop} width={tubeW} height={tubeBot - tubeTop} fill="url(#s10-glass)" stroke="#8fa3b3" strokeWidth="1.3" />
      <rect x={tubeX - 4} y={tubeTop - 10} width={tubeW + 8} height="12" rx="3" fill="#1f2327" />
      <rect x={tubeX - 8} y={tubeBot} width={tubeW + 16} height="14" rx="4" fill="#1f2327" />
      <text x={cx} y={tubeTop + 22} fontSize="7" fill="#555" textAnchor="middle">Glitserin</text>

      {/* Chizg'ich: 0 — B pastida, cm */}
      <g filter="url(#s10-sh)">
        <rect x="486" y={liqTop - 6} width="26" height={tubeBot - liqTop + 6} fill="url(#s10-ruler)" stroke="#9c7a3a" />
      </g>
      {Array.from({ length: Math.floor((tubeBot - liqTop) / 3) + 1 }, (_, i) => {
        const y = tubeBot - i * 3;
        return <line key={i} x1="486" x2={486 + (i % 10 === 0 ? 12 : i % 5 === 0 ? 8 : 4)} y1={y} y2={y} stroke="#4a3812" strokeWidth="0.6" />;
      })}
      {Array.from({ length: 8 }, (_, i) => (
        <text key={i} x="516" y={tubeBot - i * 30 + 3} fontSize="8" fill="#333">{i * 10}</text>
      ))}
      <text x="516" y={liqTop - 10} fontSize="9" fill="#333">cm</text>

      {/* Sekundomer */}
      <g transform="translate(150 230)" filter="url(#s10-sh)">
        <rect x="-10" y="-62" width="20" height="12" rx="3" fill="#2b2f34" />
        <rect x="-62" y="-52" width="124" height="112" rx="30" fill="#25292e" stroke="#0e1012" strokeWidth="2" />
        <text x="0" y="-34" fontSize="9" fill="#c9ced3" textAnchor="middle">Elektron sekundomer</text>
        <rect x="-48" y="-26" width="96" height="40" rx="5" fill="#c9d6c3" stroke="#111" />
        <text x="40" y="4" fontSize="22" fontFamily="monospace" fill="#1d2a1d" textAnchor="end">{fmt(watch, 2)}</text>
        <text x="42" y="11" fontSize="7" fill="#1d2a1d" textAnchor="end">s</text>
        <circle cx="-26" cy="36" r="8" fill={watchOn ? '#3D7A6E' : '#555'} />
        <circle cx="26" cy="36" r="8" fill="#D97757" />
        <text x="-26" y="52" fontSize="6" fill="#ccc" textAnchor="middle">START</text>
        <text x="26" y="52" fontSize="6" fill="#ccc" textAnchor="middle">STOP</text>
      </g>

      {/* Ma'lumot paneli */}
      <g fontSize="10.5" fill="#333">
        <rect x="30" y="30" width="200" height="112" rx="6" fill="#ffffff" fillOpacity="0.85" stroke="#c9d1d9" />
        <text x="42" y="50" fontWeight="bold">Suyuqlik: glitserin</text>
        <text x="42" y="68">ρ = {fmt(v.rl || 1260, 0)} kg/m³, ρₛ = {fmt(v.rs || 7800, 0)} kg/m³</text>
        <text x="42" y="86">d = {fmt(v.d || 3, 1)} mm, l = {fmt(lm * 100, 0)} cm</text>
        <text x="42" y="104">v∞ = {fmt(vt, 4)} m/s</text>
        <text x="42" y="122" fill={sinks ? '#3D7A6E' : '#c0392b'}>{sinks ? (passedB ? 'B dan o‘tdi: vaqt qayd etildi' : passedA ? 'A–B oralig‘i: vaqt o‘lchanmoqda' : 'Sharcha A ga yetmagan') : 'Sharcha cho‘kmaydi (ρₛ ≤ ρ)'}</text>
      </g>
    </svg>
  );
}
