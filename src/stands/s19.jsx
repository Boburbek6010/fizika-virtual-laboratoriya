// Stend 19: shisha plastinkada yorug'lik yutilishi (I0 -> It)
const f = (x, d = 1) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');
const hash = (n) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

export default function Stand({ v = {}, out = {}, state = 'idle', t = 0 }) {
  const run = state === 'running';
  const on = state !== 'idle';
  const res = out.results || [];
  const I0 = v.I0 ?? 1000;
  const It = res[0]?.value ?? 0;
  const tau = res[1]?.value ?? 0;
  const d = v.d ?? 10;
  const mu = v.mu ?? 25;
  const axis = 170;
  const wP = 6 + d * 1.6; // plastinka qalinligi, px
  const xP = 330 - wP / 2;
  const xLamp = 90, xSens = 540;
  const bright = Math.min(1, I0 / 2000);
  const tint = Math.min(0.75, 0.15 + mu / 700);
  const ramp = run ? 1 - Math.exp(-3 * t) : on ? 1 : 0;
  // fotonlar
  const photons = [];
  if (run) {
    for (let k = 0; k < 24; k++) {
      const p = (t * 0.8 + k / 24) % 1;
      const x = xLamp + 30 + p * (xSens - xLamp - 40);
      const y = axis + (hash(k) - 0.5) * 26;
      const after = x > xP + wP;
      const inside = x >= xP && x <= xP + wP;
      if (after && hash(k + 99) > tau) continue;
      photons.push(<circle key={k} cx={x} cy={y} r={2.2} fill="#fff6b0" opacity={inside ? 0.6 : 0.95} />);
    }
  }
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Yorug'lik yutilishi stendi">
      <defs>
        <linearGradient id="s19bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#222a31" />
          <stop offset="1" stopColor="#141a1f" />
        </linearGradient>
        <linearGradient id="s19rail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d5d9dd" />
          <stop offset="1" stopColor="#5d646b" />
        </linearGradient>
        <linearGradient id="s19glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d8f3ff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#3D7A6E" stopOpacity={tint} />
        </linearGradient>
        <linearGradient id="s19beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe680" stopOpacity={0.15 + 0.6 * bright} />
          <stop offset="1" stopColor="#ffe680" stopOpacity={0.1 + 0.5 * bright} />
        </linearGradient>
        <radialGradient id="s19lamp">
          <stop offset="0" stopColor="#fffbe0" />
          <stop offset="1" stopColor="#ffd34d" stopOpacity="0" />
        </radialGradient>
        <filter id="s19sh"><feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.4" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s19bg)" />
      <rect x={30} y={285} width={580} height={16} rx={3} fill="url(#s19rail)" />
      {/* nur dastasi */}
      {on && (
        <g>
          <rect x={xLamp + 30} y={axis - 16} width={xP - xLamp - 30} height={32} fill="url(#s19beam)" />
          <rect x={xP + wP} y={axis - 16} width={xSens - xP - wP} height={32} fill="#ffe680"
            opacity={(0.1 + 0.5 * bright) * tau} />
        </g>
      )}
      {photons}
      {/* lampa */}
      <g filter="url(#s19sh)">
        {on && <circle cx={xLamp} cy={axis} r={50} fill="url(#s19lamp)" opacity={run ? 0.8 + 0.2 * Math.sin(t * 11) : 0.8} />}
        <rect x={xLamp - 40} y={axis - 35} width={70} height={70} rx={8} fill="#3a3f45" stroke="#888" />
        <circle cx={xLamp + 30} cy={axis} r={14} fill={on ? '#fff3a0' : '#777'} stroke="#999" />
        <rect x={xLamp - 8} y={axis + 35} width={16} height={115 - 35} fill="#555" />
        <text x={xLamp - 5} y={axis + 55} fontSize={9} fill="#ccc" textAnchor="middle" fontFamily="sans-serif">lampa</text>
      </g>
      {/* plastinka */}
      <g filter="url(#s19sh)">
        <rect x={xP} y={axis - 70} width={wP} height={140} fill="url(#s19glass)" stroke="#bfe7ff" />
        <rect x={xP + wP / 2 - 10} y={axis + 70} width={20} height={45} fill="#555" />
      </g>
      <text x={330} y={axis - 80} fontSize={10} fill="#ddd" textAnchor="middle" fontFamily="sans-serif">
        shisha: d = {f(d)} mm, μ = {mu} m⁻¹
      </text>
      {/* datchik */}
      <g filter="url(#s19sh)">
        <rect x={xSens} y={axis - 30} width={50} height={60} rx={5} fill="#2c3238" stroke="#888" />
        <rect x={xSens - 4} y={axis - 18} width={6} height={36} fill="#3D7A6E" />
        <rect x={xSens + 17} y={axis + 30} width={16} height={85} fill="#555" />
        <text x={xSens + 25} y={axis + 48} fontSize={9} fill="#ccc" textAnchor="middle" fontFamily="sans-serif">datchik</text>
      </g>
      {/* displey */}
      <g filter="url(#s19sh)" fontFamily="sans-serif">
        <rect x={400} y={14} width={225} height={86} rx={6} fill="#1d2b22" stroke="#0b120e" />
        <text x={410} y={32} fontSize={10} fill="#8fbfa8">Lyuksmetr</text>
        <text x={410} y={52} fontSize={11} fill="#b8f5d0">I₀</text>
        <text x={615} y={52} fontSize={15} fill="#b8f5d0" textAnchor="end" fontFamily="monospace" fontWeight="bold">{f(I0 * (on ? 1 : 0), 0)} lx</text>
        <text x={410} y={72} fontSize={11} fill="#b8f5d0">I_t</text>
        <text x={615} y={72} fontSize={15} fill="#ffd9a8" textAnchor="end" fontFamily="monospace" fontWeight="bold">{f(It * ramp, 1)} lx</text>
        <text x={410} y={92} fontSize={11} fill="#b8f5d0">τ</text>
        <text x={615} y={92} fontSize={13} fill="#b8f5d0" textAnchor="end" fontFamily="monospace">{f(tau * 100 * ramp, 1)} %</text>
      </g>
      <text x={30} y={30} fontSize={11} fill="#D97757" fontFamily="sans-serif">I_t = I₀·e^(−μd)</text>
    </svg>
  );
}
