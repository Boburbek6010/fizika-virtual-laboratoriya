// Stend 16: yerga ulash qarshiligini uch elektrodli usulda o'lchash
const f = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');

function Lcd({ x, y, w, label, value, unit }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={34} rx={3} fill="#1d2b22" stroke="#0b120e" />
      <text x={x + 5} y={y + 11} fontSize={8} fill="#8fbfa8" fontFamily="sans-serif">{label}</text>
      <text x={x + w - 5} y={y + 28} fontSize={15} fill="#b8f5d0" textAnchor="end" fontFamily="monospace" fontWeight="bold">
        {value} {unit}
      </text>
    </g>
  );
}

export default function Stand({ v = {}, out = {}, state = 'idle', t = 0 }) {
  const run = state === 'running';
  const res = out.results || [];
  const R = res[0]?.value ?? 0;
  const U = res[1]?.value ?? 0;
  const I = v.I ?? 0;
  const L = v.L ?? 2.5;
  const rho = v.rho ?? 100;
  const ramp = run ? 1 - Math.exp(-3 * t) : state === 'finished' ? 1 : 0;
  const ground = 190;
  const xE = 120, xP = 330, xC = 540;
  const depthE = 18 + L * 25;
  const depthAux = 40;
  const wE = Math.max(3, Math.min(10, (v.d ?? 16) / 4));
  // tuproq rangi: quruq (katta ρ) och, nam (kichik ρ) to'q
  const k = Math.min(1, Math.log10(rho / 10) / 2);
  const soil = `rgb(${Math.round(92 + 80 * k)},${Math.round(64 + 60 * k)},${Math.round(40 + 45 * k)})`;
  const elec = (x, depth, w, label, name) => (
    <g>
      <rect x={x - w / 2} y={ground - 14} width={w} height={depth + 14} fill="url(#s16metal)" stroke="#555" strokeWidth={0.6} />
      <polygon points={`${x - w / 2},${ground + depth} ${x + w / 2},${ground + depth} ${x},${ground + depth + 8}`} fill="#888" />
      <circle cx={x} cy={ground - 16} r={4} fill="#c9a227" stroke="#6b5410" />
      <text x={x + 10} y={ground - 20} fontSize={14} fontWeight="bold" fill="#1f2a30" fontFamily="sans-serif">{label}</text>
      <text x={x} y={ground + depth + 22} fontSize={9} textAnchor="middle" fill="#f3ead8" fontFamily="sans-serif">{name}</text>
    </g>
  );
  // tok zarralari E -> meter -> C zanjiri bo'ylab
  const dots = [];
  if (run) {
    const path = [[xE, ground - 16], [xE, 120], [260, 120], [260, 100], [380, 100], [380, 120], [xC, 120], [xC, ground - 16]];
    const segs = [];
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const [a, b] = [path[i], path[i + 1]];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      segs.push({ a, b, len, s: total });
      total += len;
    }
    const speed = 40 + I * 30;
    for (let n = 0; n < 14; n++) {
      let s = ((t * speed + (n * total) / 14) % total + total) % total;
      const sg = segs.find((q) => s >= q.s && s <= q.s + q.len) || segs[0];
      const u = (s - sg.s) / sg.len;
      dots.push(<circle key={n} cx={sg.a[0] + (sg.b[0] - sg.a[0]) * u} cy={sg.a[1] + (sg.b[1] - sg.a[1]) * u} r={2.6} fill="#D97757" />);
    }
  }
  // tuproqdagi tok chiziqlari (E dan C ga)
  const flow = [0, 1, 2, 3].map((i) => {
    const dy = 30 + i * 28;
    return `M ${xE} ${ground + Math.min(depthE, 20 + i * 18)} C ${xE + 120} ${ground + dy + 60}, ${xC - 120} ${ground + dy + 60}, ${xC} ${ground + 25}`;
  });
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Yerga ulash qarshiligini o'lchash stendi">
      <defs>
        <linearGradient id="s16sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9f0f2" />
          <stop offset="1" stopColor="#d6e2e4" />
        </linearGradient>
        <linearGradient id="s16soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={soil} />
          <stop offset="1" stopColor="#3b2a1c" />
        </linearGradient>
        <linearGradient id="s16metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8a9096" />
          <stop offset="0.45" stopColor="#eef1f3" />
          <stop offset="1" stopColor="#6c7278" />
        </linearGradient>
        <linearGradient id="s16case" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2c14e" />
          <stop offset="1" stopColor="#c98f1c" />
        </linearGradient>
        <filter id="s16sh" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.35" />
        </filter>
      </defs>
      <rect width="640" height="360" fill="url(#s16sky)" />
      <rect y={ground} width="640" height={360 - ground} fill="url(#s16soil)" />
      <rect y={ground - 4} width="640" height="6" fill="#5d8a3a" />
      {[...Array(40)].map((_, i) => (
        <circle key={i} cx={(i * 97) % 640} cy={ground + 12 + ((i * 53) % 150)} r={1.5 + (i % 3)} fill="#00000022" />
      ))}
      {flow.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#ffd9a8" strokeWidth={1.2} strokeDasharray="6 6"
          strokeDashoffset={run ? -t * 30 : 0} opacity={run ? 0.75 : 0.25} />
      ))}
      {/* masofalar */}
      <g fontSize={9} fill="#f3ead8" fontFamily="sans-serif" textAnchor="middle">
        <line x1={xE} y1={ground + 6} x2={xP} y2={ground + 6} stroke="#f3ead8" strokeWidth={0.6} />
        <line x1={xP} y1={ground + 6} x2={xC} y2={ground + 6} stroke="#f3ead8" strokeWidth={0.6} />
        <text x={(xE + xP) / 2} y={ground + 16}>≈ 0,62·a</text>
        <text x={(xP + xC) / 2} y={ground + 16}>a</text>
      </g>
      {elec(xE, depthE, wE, 'E', `L = ${f(L, 1)} m`)}
      {elec(xP, depthAux, 4, 'P', 'potensial')}
      {elec(xC, depthAux, 4, 'C', 'tok')}
      <text x={xE - 28} y={ground + depthE / 2} fontSize={9} fill="#f3ead8" textAnchor="end" fontFamily="sans-serif">ρ = {f(rho, 0)} Ω·m</text>
      {/* simlar */}
      <polyline points={`${xE},${ground - 16} ${xE},120 260,120 260,100`} fill="none" stroke="#c0392b" strokeWidth={2} />
      <polyline points={`${xP},${ground - 16} ${xP},110 320,110 320,100`} fill="none" stroke="#2c6fb7" strokeWidth={2} />
      <polyline points={`${xC},${ground - 16} ${xC},120 380,120 380,100`} fill="none" stroke="#222" strokeWidth={2} />
      {dots}
      {/* o'lchagich */}
      <g filter="url(#s16sh)">
        <rect x={210} y={14} width={220} height={90} rx={8} fill="url(#s16case)" stroke="#8a6212" />
        <rect x={218} y={20} width={204} height={14} rx={2} fill="#3a3a3a" />
        <text x={320} y={30} fontSize={9} fill="#f2f2f2" textAnchor="middle" fontFamily="sans-serif">Yerga ulash qarshiligini o'lchagich</text>
        <Lcd x={218} y={40} w={64} label="U, V" value={f(U * ramp)} unit="" />
        <Lcd x={288} y={40} w={64} label="I, A" value={f(I * ramp)} unit="" />
        <Lcd x={358} y={40} w={64} label="R, Ω" value={f(R * ramp)} unit="" />
        <circle cx={232} cy={90} r={5} fill={run ? '#3D7A6E' : '#555'} />
        <text x={242} y={93} fontSize={8} fill="#3a2a08" fontFamily="sans-serif">{run ? "o'lchanmoqda" : state === 'finished' ? 'tayyor' : 'kutish'}</text>
        {[260, 320, 380].map((x, i) => (
          <circle key={i} cx={x} cy={100} r={4} fill={['#c0392b', '#2c6fb7', '#222'][i]} stroke="#111" />
        ))}
      </g>
      <text x={460} y={40} fontSize={11} fill="#1f2a30" fontFamily="sans-serif">R = U / I</text>
      <text x={460} y={56} fontSize={10} fill="#3D7A6E" fontFamily="sans-serif">E–C: sinov toki</text>
      <text x={460} y={70} fontSize={10} fill="#2c6fb7" fontFamily="sans-serif">E–P: kuchlanish</text>
    </svg>
  );
}
