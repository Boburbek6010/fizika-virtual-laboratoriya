// Stend 08: Rezonans naychasi — suv idishidagi shisha naycha, signal generatori, karnay, chizg'ich.
const fmt = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');

export default function Stand({ v = {}, out, state, t = 0 }) {
  const res = (out && out.results) || [];
  const f = v.f || 500;
  const lam = res[1] ? res[1].value : 0.686;
  const l1 = res[2] ? res[2].value : lam / 4;
  const l2 = res[3] ? res[3].value : (3 * lam) / 4;
  const running = state === 'running';
  const tt = state === 'idle' ? 0 : t;
  const e = 0.6 * (v.r || 0.02);
  const k = (2 * Math.PI) / (lam || 1);

  // Suv sathi sekin tushiriladi: havo ustuni L 0,05 … 0,95 m oralig'ida (20 s davr)
  const Lmin = 0.05, Lmax = 0.95, P = 20;
  let L = l1;
  if (state !== 'idle') {
    const ph = (tt % P) / P;
    L = Lmin + (Lmax - Lmin) * (ph < 0.5 ? ph * 2 : 2 - ph * 2);
  }
  const ampRaw = 1 / Math.sqrt(0.04 + Math.pow(Math.cos(k * (L + e)), 2));
  const loud = Math.min(ampRaw / 5, 1);

  const tubeX = 300, tubeW = 34, tubeTop = 60, pxm = 220; // 1 m = 220 px
  const waterY = tubeTop + L * pxm;
  const tubeBot = 300;
  const cxT = tubeX + tubeW / 2;

  // Turg'un to'lqin: suv sirtida tugun, ochiq uchida do'nglik
  const wv = running ? Math.cos(2 * Math.PI * 1.2 * tt) : 1;
  const half = (tubeW / 2 - 3) * (0.25 + 0.75 * loud);
  const pts = (sgn) => {
    const arr = [];
    const n = 40;
    for (let i = 0; i <= n; i++) {
      const y = tubeTop + ((waterY - tubeTop) * i) / n;
      const depth = (y - tubeTop) / pxm;
      const s = Math.sin(k * (L - depth));
      arr.push(`${(cxT + sgn * half * s * wv).toFixed(1)},${y.toFixed(1)}`);
    }
    return arr.join(' ');
  };

  const lcd = (x, y, w, txt) => (
    <g>
      <rect x={x} y={y} width={w} height="30" rx="3" fill="#0f1a14" stroke="#000" />
      <text x={x + w - 8} y={y + 22} fontSize="19" fontFamily="monospace" fill="#7CF2A6" textAnchor="end">{txt}</text>
    </g>
  );

  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Rezonans naychasi stendi">
      <defs>
        <linearGradient id="s08-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1f3f5" /><stop offset="1" stopColor="#e0e5ea" />
        </linearGradient>
        <linearGradient id="s08-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d2a879" /><stop offset="1" stopColor="#a87d52" />
        </linearGradient>
        <linearGradient id="s08-pole" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6f7780" /><stop offset="0.45" stopColor="#e3e7eb" /><stop offset="1" stopColor="#5d646c" />
        </linearGradient>
        <linearGradient id="s08-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c9d6e0" stopOpacity="0.7" /><stop offset="0.25" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="0.7" stopColor="#e6eef4" stopOpacity="0.25" /><stop offset="1" stopColor="#a9bccb" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="s08-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fb2e0" /><stop offset="1" stopColor="#3f7fc0" />
        </linearGradient>
        <linearGradient id="s08-box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e4e7ea" /><stop offset="1" stopColor="#a7adb4" />
        </linearGradient>
        <linearGradient id="s08-ruler" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e9c98d" /><stop offset="1" stopColor="#d1a85f" />
        </linearGradient>
        <filter id="s08-sh" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2.5" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect width="640" height="360" fill="url(#s08-wall)" />
      <rect y="300" width="640" height="60" fill="url(#s08-table)" />

      {/* Shtativ */}
      <rect x="220" y="304" width="200" height="12" rx="2" fill="#2e3338" filter="url(#s08-sh)" />
      <rect x="250" y="30" width="9" height="276" fill="url(#s08-pole)" />
      <rect x="244" y="92" width="20" height="18" rx="3" fill="#2e3338" />
      <rect x="262" y="97" width={tubeX - 262} height="8" fill="#3a4047" />
      <rect x={tubeX - 3} y="92" width={tubeW + 6} height="18" rx="4" fill="#2e3338" />

      {/* Suv idishi (orqa devor) */}
      <rect x="252" y="246" width="136" height="58" fill="#cfe0ee" opacity="0.35" />
      <rect x="252" y="262" width="136" height="42" fill="url(#s08-water)" opacity="0.55" />

      {/* Naycha va ichidagi suv */}
      <rect x={tubeX} y={waterY} width={tubeW} height={tubeBot - waterY} fill="url(#s08-water)" opacity="0.85" />
      <ellipse cx={cxT} cy={waterY} rx={tubeW / 2 - 1} ry="3" fill="#a9cdee" />
      {/* Turg'un to'lqin chizmasi */}
      <polyline points={pts(1)} fill="none" stroke="#D97757" strokeWidth="1.6" />
      <polyline points={pts(-1)} fill="none" stroke="#D97757" strokeWidth="1.6" />
      <rect x={tubeX} y={tubeTop} width={tubeW} height={tubeBot - tubeTop} fill="url(#s08-glass)" stroke="#8fa3b3" strokeWidth="1.2" />
      <ellipse cx={cxT} cy={tubeTop} rx={tubeW / 2} ry="4" fill="none" stroke="#8fa3b3" strokeWidth="1.5" />

      {/* Suv idishi (old devor) */}
      <rect x="252" y="246" width="136" height="58" fill="url(#s08-glass)" stroke="#8fa3b3" strokeWidth="1.5" />

      {/* Karnay */}
      <g filter="url(#s08-sh)">
        <rect x={cxT - 22} y="14" width="44" height="14" rx="3" fill="#30363c" />
        <path d={`M ${cxT - 16} 28 L ${cxT + 16} 28 L ${cxT + 22} 42 L ${cxT - 22} 42 Z`} fill="#4a525a" />
        <ellipse cx={cxT} cy="42" rx="22" ry="3" fill="#1f2428" />
      </g>
      {running &&
        [0, 1, 2].map((i) => {
          const ph = ((tt * 2 + i / 3) % 1);
          return <path key={i} d={`M ${cxT - 10 - ph * 10} ${46 + ph * 8} Q ${cxT} ${50 + ph * 10} ${cxT + 10 + ph * 10} ${46 + ph * 8}`} fill="none" stroke="#3D7A6E" strokeOpacity={1 - ph} />;
        })}
      <text x={cxT + 28} y="26" fontSize="10" fill="#333">Karnay</text>

      {/* Chizg'ich (0 — naycha og'zi) */}
      <g>
        <rect x="346" y={tubeTop - 4} width="28" height={pxm + 8} fill="url(#s08-ruler)" stroke="#9c7a3a" />
        {Array.from({ length: 101 }, (_, i) => (
          <line key={i} x1="346" x2={346 + (i % 10 === 0 ? 12 : i % 5 === 0 ? 8 : 4)} y1={tubeTop + i * 2.2} y2={tubeTop + i * 2.2} stroke="#4a3812" strokeWidth="0.6" />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <text key={i} x="372" y={tubeTop + i * 22 + 3} fontSize="7.5" fill="#3a2c0e" textAnchor="end">{i * 10}</text>
        ))}
        <text x="360" y={tubeTop - 8} fontSize="9" fill="#333" textAnchor="middle">cm</text>
      </g>
      <line x1={tubeX + tubeW} y1={waterY} x2="410" y2={waterY} stroke="#3D7A6E" strokeDasharray="4 3" />
      <text x="414" y={waterY + 4} fontSize="10" fill="#3D7A6E">L = {fmt(L * 100, 1)} cm</text>

      {/* Signal generatori */}
      <g filter="url(#s08-sh)">
        <rect x="30" y="206" width="170" height="96" rx="8" fill="url(#s08-box)" stroke="#7d848b" />
        <text x="115" y="224" fontSize="11" fill="#222" textAnchor="middle">Signal generatori</text>
        <text x="42" y="252" fontSize="10" fill="#333">f (Hz)</text>
        {lcd(78, 232, 80, String(Math.round(f)))}
        <circle cx="178" cy="250" r="13" fill="#d7dbe0" stroke="#666" />
        <line x1="178" y1="250" x2="178" y2="239" stroke="#333" strokeWidth="2" />
        <circle cx="48" cy="284" r="5" fill={running ? '#4ade80' : '#555'} />
        <text x="58" y="287" fontSize="9" fill="#333">Yoq / O‘ch</text>
        <circle cx="160" cy="286" r="6" fill="#222" />
      </g>
      <path d={`M 160 292 C 210 340, 230 120, ${cxT - 22} 20`} fill="none" stroke="#222" strokeWidth="2" />

      {/* Chastota o'lchagich va ovoz kuchi */}
      <g filter="url(#s08-sh)">
        <rect x="478" y="190" width="150" height="110" rx="8" fill="url(#s08-box)" stroke="#7d848b" />
        <text x="553" y="207" fontSize="11" fill="#222" textAnchor="middle">Chastota o‘lchagich</text>
        {lcd(492, 214, 122, running ? `${Math.round(f)} Hz` : '---- Hz')}
        <text x="492" y="262" fontSize="9" fill="#333">Ovoz kuchi</text>
        <rect x="492" y="268" width="122" height="10" rx="2" fill="#333" />
        <rect x="493" y="269" width={120 * (running ? loud : 0)} height="8" rx="2" fill={loud > 0.8 ? '#D97757' : '#3D7A6E'} />
        <text x="492" y="292" fontSize="9" fill={running && loud > 0.8 ? '#D97757' : '#555'}>{running && loud > 0.8 ? 'Rezonans!' : ' '}</text>
      </g>

      <g fontSize="10" fill="#333">
        <text x="460" y="40">λ = {fmt(lam, 3)} m</text>
        <text x="460" y="58">l₁ = {fmt(l1 * 100, 1)} cm</text>
        <text x="460" y="76">l₂ = {fmt(l2 * 100, 1)} cm</text>
      </g>
    </svg>
  );
}
