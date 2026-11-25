// Stend 20: radioaktiv manba, to'siq plastinkalar va Geyger–Myuller hisoblagichi
const f = (x, d = 1) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');
const hash = (n) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

export default function Stand({ v = {}, out = {}, state = 'idle', t = 0 }) {
  const run = state === 'running';
  const res = out.results || [];
  const ns = res[0]?.value ?? 0;
  const n = res[1]?.value ?? 0;
  const Ntot = res[2]?.value ?? 0;
  const r = v.r ?? 10;
  const x = v.x ?? 0;
  const tMax = v.t ?? 60;
  const axis = 175;
  const xSrc = 80;
  const plates = Math.ceil(x / 2);
  const plateW = x > 0 ? Math.max(2, (x * 2.4) / Math.max(1, plates)) : 0;
  const xAbs = xSrc + 30;
  // 5..50 cm -> 120..502; to'siq bilan ustma-ust tushmasin
  const xGM = Math.max(xSrc + 40 + (r - 5) * 8.5, xAbs + plates * (plateW + 2) + 8);
  // hisoblash
  const tm = state === 'idle' ? 0 : Math.min(t, tMax);
  const count = Math.round(n * tm);
  // chiqish chaqnashlari: ko'rinadigan tezlik n ga bog'liq (cheklangan)
  const rateVis = Math.min(25, n);
  let flash = false;
  if (run && rateVis > 0) {
    const k = Math.floor(t * rateVis * 2);
    const ph = t * rateVis * 2 - k;
    flash = hash(k) < 0.5 && ph < 0.6;
  }
  // zarrachalar
  const parts = [];
  if (run) {
    const m = Math.max(2, Math.min(18, Math.round(Math.log10(1 + ns) * 6)));
    for (let k = 0; k < m; k++) {
      const p = (t * 1.6 + k / m + hash(k) * 0.3) % 1;
      const px = xSrc + 14 + p * (xGM - xSrc - 14);
      const py = axis + (hash(k + 7) - 0.5) * 40 * p;
      parts.push(<circle key={k} cx={px} cy={py} r={2} fill="#D97757" opacity={0.9 - 0.5 * p} />);
    }
  }
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Radioaktiv nurlanishni sanash stendi">
      <defs>
        <linearGradient id="s20bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef1f2" />
          <stop offset="1" stopColor="#d3dadc" />
        </linearGradient>
        <linearGradient id="s20lead" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7d8288" />
          <stop offset="1" stopColor="#3f4347" />
        </linearGradient>
        <linearGradient id="s20al" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b9c0c6" />
          <stop offset="0.5" stopColor="#f2f4f6" />
          <stop offset="1" stopColor="#9aa2a9" />
        </linearGradient>
        <linearGradient id="s20tube" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9ecef" />
          <stop offset="0.5" stopColor="#a6adb4" />
          <stop offset="1" stopColor="#6d747b" />
        </linearGradient>
        <filter id="s20sh"><feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.35" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s20bg)" />
      <rect y={262} width="640" height="98" fill="#a88a63" />
      <rect y={262} width="640" height="5" fill="#86694a" />
      {/* lineyka */}
      <rect x={xSrc} y={240} width={430} height={16} fill="#f5e7b8" stroke="#a08850" />
      {[...Array(46)].map((_, i) => (
        <line key={i} x1={xSrc + 40 + (i - 5) * 8.5} y1={240} x2={xSrc + 40 + (i - 5) * 8.5} y2={i % 5 === 0 ? 250 : 245} stroke="#5a4a20" strokeWidth={0.7} />
      )).filter((_, i) => i >= 5)}
      <text x={xGM} y={235} fontSize={9} textAnchor="middle" fill="#333" fontFamily="sans-serif">r = {r} cm</text>
      {parts}
      {/* manba */}
      <g filter="url(#s20sh)">
        <rect x={xSrc - 50} y={axis - 40} width={60} height={80} fill="url(#s20lead)" />
        <rect x={xSrc + 2} y={axis - 8} width={12} height={16} fill="#f2c14e" stroke="#8a6212" />
        <text x={xSrc - 20} y={axis - 46} fontSize={9} textAnchor="middle" fill="#333" fontFamily="sans-serif">manba</text>
        <text x={xSrc - 20} y={axis + 6} fontSize={14} textAnchor="middle" fill="#f2c14e">☢</text>
        <rect x={xSrc - 30} y={axis + 40} width={20} height={222 - axis} fill="#555" />
      </g>
      {/* to'siq plastinkalar */}
      {[...Array(plates)].map((_, i) => (
        <rect key={i} x={xAbs + i * (plateW + 2)} y={axis - 45} width={plateW} height={90} fill="url(#s20al)" stroke="#777" strokeWidth={0.5} />
      ))}
      {x > 0 && (
        <text x={xAbs + 5} y={axis + 60} fontSize={9} fill="#333" fontFamily="sans-serif">x = {f(x)} mm</text>
      )}
      {/* GM naycha */}
      <g filter="url(#s20sh)">
        <rect x={xGM} y={axis - 14} width={110} height={28} rx={6} fill="url(#s20tube)" stroke="#555" />
        <rect x={xGM - 3} y={axis - 10} width={5} height={20} fill="#6b4a2a" />
        <circle cx={xGM + 90} cy={axis} r={5} fill={flash ? '#ffef7a' : '#555'} stroke="#333" />
        {flash && <circle cx={xGM + 90} cy={axis} r={12} fill="#ffef7a" opacity={0.5} />}
        <rect x={xGM + 45} y={axis + 14} width={14} height={222 - axis - 14 + 18} fill="#555" />
        <text x={xGM + 55} y={axis - 20} fontSize={9} textAnchor="middle" fill="#333" fontFamily="sans-serif">Geyger–Myuller hisoblagichi</text>
      </g>
      <path d={`M ${xGM + 110} ${axis} C ${xGM + 140} ${axis}, 520 120, 520 100`} fill="none" stroke="#222" strokeWidth={2} />
      {/* sanagich */}
      <g filter="url(#s20sh)" fontFamily="sans-serif">
        <rect x={400} y={12} width={225} height={92} rx={6} fill="#2c3238" stroke="#111" />
        <rect x={410} y={20} width={205} height={60} rx={3} fill="#1d2b22" />
        <text x={418} y={34} fontSize={9} fill="#8fbfa8">N, imp</text>
        <text x={605} y={52} fontSize={18} fill="#b8f5d0" textAnchor="end" fontFamily="monospace" fontWeight="bold">
          {String(count).padStart(6, '0')}
        </text>
        <text x={418} y={72} fontSize={9} fill="#8fbfa8">t = {f(tm, 1)} / {tMax} s</text>
        <text x={605} y={72} fontSize={10} fill="#b8f5d0" textAnchor="end" fontFamily="monospace">n = {f(n, 2)} imp/s</text>
        <circle cx={418} cy={92} r={4} fill={flash ? '#D97757' : '#552'} />
        <text x={428} y={95} fontSize={8} fill="#ccc">impuls</text>
        <text x={605} y={95} fontSize={8} fill="#ccc" textAnchor="end">{run ? 'sanayapti' : state === 'finished' ? `jami ≈ ${f(Ntot, 0)}` : 'tayyor'}</text>
      </g>
      <text x={20} y={30} fontSize={11} fill="#3D7A6E" fontFamily="sans-serif">n_s = n₀·(5/r)²·e^(−μx) = {f(ns, 2)} imp/s</text>
      <text x={20} y={48} fontSize={10} fill="#555" fontFamily="sans-serif">fon = {f(v.nb ?? 0.5, 1)} imp/s, μ = {v.mu ?? 100} m⁻¹</text>
    </svg>
  );
}
