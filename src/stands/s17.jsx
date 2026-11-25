// Stend 17: elektromagnit induksiya — g'altak, magnit va galvanometr
const f = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');

export default function Stand({ v = {}, out = {}, state = 'idle', t = 0 }) {
  const run = state === 'running';
  const res = out.results || [];
  const phi = res[0]?.value ?? 0;
  const emf = res[2]?.value ?? 0;
  const N = v.N ?? 200;
  const S = v.S ?? 50;
  const B = v.B ?? 100;
  const dt = v.dt ?? 0.2;
  // magnit harakati: Δt vaqtda chiqadi va qaytadi (vizual davr)
  const T = Math.min(4, Math.max(0.8, dt * 6));
  const w = (2 * Math.PI) / T;
  const amp = 90;
  const pos = run ? amp * (1 - Math.cos(w * t)) / 2 : 0; // 0 = ichkarida
  const vel = run ? Math.sin(w * t) : 0; // -1..1
  // galvanometr shkalasi
  const steps = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
  const full = steps.find((s) => s >= Math.abs(emf)) || 1000;
  const frac = Math.abs(emf) / full;
  const ang = vel * frac * 50;
  const turns = Math.max(3, Math.min(24, Math.round(3 + N / 45)));
  const ry = 26 + Math.sqrt(S) * 3.2;
  const cx0 = 300, cy = 160, coilW = 170;
  const x0 = cx0 - coilW / 2;
  const magX = cx0 + coilW / 2 - 70 + pos; // magnit chap uchi
  const fieldOp = 0.25 + Math.min(0.6, B / 600);
  const loops = [];
  for (let i = 0; i < turns; i++) {
    const x = x0 + (coilW * (i + 0.5)) / turns;
    loops.push(<ellipse key={i} cx={x} cy={cy} rx={6} ry={ry} fill="none" stroke="url(#s17cu)" strokeWidth={Math.max(2, 70 / turns)} />);
  }
  const dir = emf * vel;
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Elektromagnit induksiya stendi">
      <defs>
        <linearGradient id="s17bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef2f3" />
          <stop offset="1" stopColor="#d7dfe1" />
        </linearGradient>
        <linearGradient id="s17cu" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0b27a" />
          <stop offset="0.5" stopColor="#b5651d" />
          <stop offset="1" stopColor="#6e3b0e" />
        </linearGradient>
        <linearGradient id="s17tube" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9c9a3" />
          <stop offset="1" stopColor="#9c8a62" />
        </linearGradient>
        <linearGradient id="s17case" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4f55" />
          <stop offset="1" stopColor="#24282c" />
        </linearGradient>
        <filter id="s17sh"><feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.35" /></filter>
      </defs>
      <rect width="640" height="360" fill="url(#s17bg)" />
      <rect y={300} width="640" height="60" fill="#b08d63" />
      <rect y={300} width="640" height="5" fill="#8a6b45" />
      {/* g'altak */}
      <g filter="url(#s17sh)">
        <rect x={x0 - 6} y={cy - ry - 4} width={coilW + 12} height={2 * ry + 8} rx={6} fill="url(#s17tube)" opacity={0.5} />
        {loops}
        <rect x={x0 - 10} y={cy - ry - 8} width={8} height={2 * ry + 16} fill="#3b3b3b" />
        <rect x={x0 + coilW + 2} y={cy - ry - 8} width={8} height={2 * ry + 16} fill="#3b3b3b" />
      </g>
      <rect x={x0 + 20} y={cy + ry + 8} width={coilW - 40} height={300 - cy - ry - 8} fill="#6b5a44" />
      <text x={cx0} y={cy - ry - 14} fontSize={11} textAnchor="middle" fill="#1f2a30" fontFamily="sans-serif">
        G'altak: N = {N}, S = {S} cm²
      </text>
      {/* magnit maydon chiziqlari */}
      {[-1, 0, 1].map((k) => (
        <path key={k} d={`M ${magX + 140} ${cy + k * 10} C ${magX + 200} ${cy + k * 50}, ${magX - 60} ${cy + k * 50}, ${magX} ${cy + k * 10}`}
          fill="none" stroke="#3D7A6E" strokeWidth={1} strokeDasharray="4 4" opacity={fieldOp} />
      ))}
      {/* magnit */}
      <g filter="url(#s17sh)">
        <rect x={magX} y={cy - 14} width={70} height={28} fill="#c0392b" stroke="#7a1f16" />
        <rect x={magX + 70} y={cy - 14} width={70} height={28} fill="#2c6fb7" stroke="#163c66" />
        <text x={magX + 35} y={cy + 5} fontSize={14} fontWeight="bold" textAnchor="middle" fill="#fff" fontFamily="sans-serif">N</text>
        <text x={magX + 105} y={cy + 5} fontSize={14} fontWeight="bold" textAnchor="middle" fill="#fff" fontFamily="sans-serif">S</text>
      </g>
      <text x={magX + 70} y={cy + 32} fontSize={10} textAnchor="middle" fill="#1f2a30" fontFamily="sans-serif">B = {B} mTl</text>
      {run && Math.abs(vel) > 0.1 && (
        <text x={magX + 160} y={cy + 4} fontSize={16} fill="#D97757" fontFamily="sans-serif">{vel > 0 ? '→' : '←'}</text>
      )}
      {/* simlar */}
      <polyline points={`${x0 - 6},${cy + ry} ${x0 - 30},${cy + ry} ${x0 - 30},250 120,250`} fill="none" stroke="#c0392b" strokeWidth={2} />
      <polyline points={`${x0 + 14},${cy + ry} ${x0 + 14},275 120,275 120,265`} fill="none" stroke="#222" strokeWidth={2} />
      {run && Math.abs(dir) > 0 && (
        <path d={`M ${x0 - 30} ${cy + ry} L ${x0 - 30} 250 L 120 250`} fill="none" stroke="#D97757" strokeWidth={3}
          strokeDasharray="5 9" strokeDashoffset={(dir > 0 ? -1 : 1) * t * 60 * Math.abs(vel)} />
      )}
      {/* galvanometr */}
      <g filter="url(#s17sh)">
        <rect x={20} y={120} width={110} height={160} rx={8} fill="url(#s17case)" />
        <path d="M 30 200 A 45 45 0 0 1 120 200 L 120 215 L 30 215 Z" fill="#f7f3e8" stroke="#888" />
        {[...Array(11)].map((_, i) => {
          const a = ((i - 5) * 10 - 90) * (Math.PI / 180);
          return <line key={i} x1={75 + 38 * Math.cos(a)} y1={210 + 38 * Math.sin(a)} x2={75 + (i % 5 === 0 ? 30 : 33) * Math.cos(a)} y2={210 + (i % 5 === 0 ? 30 : 33) * Math.sin(a)} stroke="#333" strokeWidth={1} />;
        })}
        <text x={75} y={180} fontSize={10} textAnchor="middle" fontFamily="serif" fill="#333">G</text>
        <line x1={75} y1={210} x2={75 + 36 * Math.sin((ang * Math.PI) / 180)} y2={210 - 36 * Math.cos((ang * Math.PI) / 180)} stroke="#D97757" strokeWidth={2} />
        <circle cx={75} cy={210} r={3} fill="#333" />
        <text x={75} y={140} fontSize={9} textAnchor="middle" fill="#ddd" fontFamily="sans-serif">Galvanometr</text>
        <text x={75} y={232} fontSize={8} textAnchor="middle" fill="#ccc" fontFamily="sans-serif">±{f(full, full < 1 ? 2 : 0)} V</text>
        <circle cx={50} cy={265} r={5} fill="#c0392b" />
        <circle cx={100} cy={265} r={5} fill="#222" stroke="#888" />
      </g>
      {/* displey */}
      <g filter="url(#s17sh)">
        <rect x={470} y={20} width={160} height={92} rx={6} fill="#1d2b22" />
        <text x={480} y={38} fontSize={10} fill="#8fbfa8" fontFamily="sans-serif">Φ = {f(phi, 3)} mVb</text>
        <text x={480} y={56} fontSize={10} fill="#8fbfa8" fontFamily="sans-serif">Δt = {f(dt)} s, α = {v.alpha ?? 0}°</text>
        <text x={480} y={76} fontSize={10} fill="#8fbfa8" fontFamily="sans-serif">EYuK ε</text>
        <text x={620} y={100} fontSize={18} fill="#b8f5d0" textAnchor="end" fontFamily="monospace" fontWeight="bold">
          {f(run ? emf * vel : state === 'finished' ? emf : 0, 3)} V
        </text>
      </g>
      <text x={470} y={135} fontSize={10} fill="#3D7A6E" fontFamily="sans-serif">ε = −N·ΔΦ/Δt</text>
    </svg>
  );
}
