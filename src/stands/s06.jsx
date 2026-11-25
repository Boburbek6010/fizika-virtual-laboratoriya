// Stend 06: Oberbek mayatnigi — o'qdagi jism, shkiv va ipga osilgan yuk.
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');

export default function Stand({ v = {}, out, state, t = 0 }) {
  const res = (out && out.results) || [];
  const a = res[1] ? res[1].value : 0;
  const eps = res[2] ? res[2].value : 0;
  const shape = Math.round(v.shape || 1);
  const running = state === 'running';
  const tt = state === 'idle' ? 0 : t;

  // Yuk 1,0 m tushadi (vizualda 100 px), so'ng polga tegadi, jism inersiya bilan aylanadi
  const H = 1.0;
  const tEnd = a > 0 ? Math.sqrt((2 * H) / a) : Infinity;
  const tf = Math.min(tt, tEnd);
  const h = 0.5 * a * tf * tf;
  // polga tekkandan keyin o'qdagi ishqalanish aylanishni sekinlashtiradi: ω = ω₁·e^(−k·Δt)
  const kf = 0.35, w1 = eps * tf, dt = Math.max(0, tt - tEnd);
  const omega = w1 * Math.exp(-kf * dt);
  const phi = 0.5 * eps * tf * tf + (dt > 0 ? (w1 / kf) * (1 - Math.exp(-kf * dt)) : 0);
  const phiDeg = (phi * 180) / Math.PI;

  const cx = 240, cy = 120;
  const Rpx = 30 + Math.min(v.R || 0.2, 0.5) * 140;
  const rp = 6 + Math.min(v.r || 0.05, 0.2) * 80;
  const yTop = 175;
  const wy = yTop + h * 100;
  const wSize = 14 + Math.min(v.M || 0.5, 2) * 8;

  let body;
  if (shape === 2) {
    body = (
      <g>
        <circle r={Rpx} fill="none" stroke="url(#s06-metal)" strokeWidth="10" />
        <circle r={Rpx - 5} fill="none" stroke="#5b6470" strokeWidth="1" />
        {[0, 90, 180, 270].map((k) => (
          <line key={k} x1="0" y1="0" x2={Rpx - 5} y2="0" stroke="#8a929c" strokeWidth="2.5" transform={`rotate(${k})`} />
        ))}
      </g>
    );
  } else if (shape === 3) {
    body = <circle r={Rpx * 0.85} fill="url(#s06-sphere)" stroke="#4b535c" strokeWidth="1" />;
  } else if (shape === 4) {
    body = (
      <g>
        <rect x={-Rpx} y="-5" width={Rpx * 2} height="10" rx="3" fill="url(#s06-rod)" stroke="#4b535c" />
      </g>
    );
  } else {
    body = (
      <g>
        <circle r={Rpx} fill="url(#s06-disc)" stroke="#4b535c" strokeWidth="1.5" />
        <circle r={Rpx * 0.7} fill="none" stroke="#9aa3ad" strokeWidth="1" />
      </g>
    );
  }

  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Oberbek mayatnigi stendi">
      <defs>
        <linearGradient id="s06-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef1f4" /><stop offset="1" stopColor="#dfe4ea" />
        </linearGradient>
        <linearGradient id="s06-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c99a6b" /><stop offset="1" stopColor="#9c7048" />
        </linearGradient>
        <linearGradient id="s06-pole" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6f7780" /><stop offset="0.45" stopColor="#e3e7eb" /><stop offset="1" stopColor="#5d646c" />
        </linearGradient>
        <radialGradient id="s06-disc" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#f2f4f6" /><stop offset="0.6" stopColor="#b5bcc4" /><stop offset="1" stopColor="#7d858e" />
        </radialGradient>
        <radialGradient id="s06-sphere" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffffff" /><stop offset="0.5" stopColor="#a9b1ba" /><stop offset="1" stopColor="#4f565e" />
        </radialGradient>
        <linearGradient id="s06-rod" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6e9ec" /><stop offset="1" stopColor="#7a828b" />
        </linearGradient>
        <linearGradient id="s06-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9dde2" /><stop offset="1" stopColor="#7d858e" />
        </linearGradient>
        <linearGradient id="s06-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0d28a" /><stop offset="1" stopColor="#a87b2c" />
        </linearGradient>
        <filter id="s06-sh" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2.5" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect width="640" height="360" fill="url(#s06-wall)" />
      <rect y="300" width="640" height="60" fill="url(#s06-table)" />
      <rect y="300" width="640" height="3" fill="#7b5634" opacity="0.5" />

      {/* Stend asosi va ustun */}
      <rect x="140" y="288" width="140" height="14" rx="3" fill="#30353b" filter="url(#s06-sh)" />
      <rect x="156" y="40" width="10" height="250" fill="url(#s06-pole)" />
      <rect x="150" y="104" width="22" height="32" rx="3" fill="#3a4047" />
      <rect x="166" y="114" width={cx - 166} height="12" fill="url(#s06-pole)" />

      {/* Pol tayanchi (yuk tushadigan joy) */}
      <rect x={cx + rp - 22} y="282" width="44" height="8" rx="2" fill="#555c64" />
      <text x={cx + rp + 28} y="290" fontSize="9" fill="#555">pol</text>

      {/* Shkala (tushish balandligi) */}
      <g>
        <rect x={cx + rp + 40} y={yTop - 4} width="18" height="112" fill="#f5e9c8" stroke="#b89a5a" />
        {Array.from({ length: 11 }, (_, i) => (
          <g key={i}>
            <line x1={cx + rp + 40} x2={cx + rp + (i % 5 === 0 ? 50 : 46)} y1={yTop + i * 10} y2={yTop + i * 10} stroke="#6b5426" />
            {i % 5 === 0 && <text x={cx + rp + 60} y={yTop + i * 10 + 3} fontSize="8" fill="#444">{(i / 10).toFixed(1).replace('.', ',')}</text>}
          </g>
        ))}
        <text x={cx + rp + 40} y={yTop - 8} fontSize="9" fill="#444">h, m</text>
      </g>

      {/* Ip */}
      <line x1={cx + rp} y1={cy} x2={cx + rp} y2={wy} stroke="#2b2b2b" strokeWidth="1.2" />

      {/* Aylanuvchi jism */}
      <g transform={`translate(${cx} ${cy}) rotate(${phiDeg})`} filter="url(#s06-sh)">
        {body}
        <line x1="0" y1="0" x2={shape === 4 ? Rpx - 4 : Rpx * 0.8} y2="0" stroke="#D97757" strokeWidth="3" strokeLinecap="round" />
        <circle r={rp} fill="url(#s06-brass)" stroke="#7a5a1e" />
        <circle r={rp * 0.45} fill="#c8a85a" />
        <circle r="3" fill="#333" />
      </g>

      {/* Yuk */}
      <g filter="url(#s06-sh)">
        <rect x={cx + rp - wSize / 2} y={wy} width={wSize} height={wSize * 1.1} rx="2" fill="#3D7A6E" stroke="#24493f" />
        <text x={cx + rp} y={wy + wSize * 0.7} fontSize="8" fill="#fff" textAnchor="middle">M</text>
      </g>

      {/* Raqamli displey */}
      <g filter="url(#s06-sh)">
        <rect x="430" y="40" width="190" height="196" rx="10" fill="#2d3238" stroke="#1b1f23" />
        <text x="525" y="60" fontSize="11" fill="#d6dbe0" textAnchor="middle">Raqamli o‘lchagich</text>
        {[
          ['t, s', fmt(tt, 2)],
          ['ω, rad/s', fmt(omega, 2)],
          ['a, m/s²', fmt(a, 3)],
          ['h, m', fmt(h, 3)],
        ].map(([lab, val], i) => (
          <g key={lab} transform={`translate(444 ${72 + i * 40})`}>
            <text x="0" y="12" fontSize="10" fill="#aeb6bf">{lab}</text>
            <rect x="62" y="0" width="100" height="28" rx="3" fill="#0f1a14" stroke="#000" />
            <text x="156" y="20" fontSize="16" fontFamily="monospace" fill="#7CF2A6" textAnchor="end">{val}</text>
          </g>
        ))}
      </g>
      <circle cx="450" cy="226" r="5" fill={running ? '#4ade80' : '#555'} />
      <text x="462" y="229" fontSize="9" fill="#d6dbe0">{running ? 'o‘lchanmoqda' : state === 'finished' ? 'to‘xtatildi' : 'tayyor'}</text>

      <text x="430" y="262" fontSize="11" fill="#333">ε = {fmt(eps, 3)} rad/s²</text>
      <text x="430" y="280" fontSize="11" fill="#333">{state === 'idle' ? 'Yuk ushlab turilibdi' : tt >= tEnd ? (omega < 0.05 ? 'Polga tegdi, jism to‘xtadi' : 'Polga tegdi, ishqalanish') : 'Yuk tushmoqda'}</text>
    </svg>
  );
}
