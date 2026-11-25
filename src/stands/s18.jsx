// Stend 18: optik taglik — linza aberratsiyalari (markaziy va chekka nurlar)
const f = (x, d = 2) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '—');

export default function Stand({ v = {}, out = {}, state = 'idle', t = 0 }) {
  const run = state === 'running';
  const res = out.results || [];
  const fq = res[0]?.value ?? 20;
  const fk = res[1]?.value ?? 19;
  const df = res[2]?.value ?? 0;
  const sph = res[3]?.value ?? 0; // mm
  const fm = (fq + fk) / 2; // cm
  const h = v.h ?? 15;
  const axis = 170;
  const xL = 200;
  const scale = 300 / Math.max(fm, 1); // px / cm (focus around x=500)
  const xF = xL + fm * scale; // paraksial (markaziy) fokus
  // sferik aberratsiya ko'rinarli bo'lishi uchun kattalashtirilgan
  const shift = Math.min(150, (sph / 10) * scale * 25);
  const xE = Math.max(xL + 40, xF - shift); // chekka nurlar fokusi
  const hc = 10; // markaziy nur balandligi, px
  const he = 18 + h * 2.4; // chekka nur balandligi, px
  const xS = xF; // ekran paraksial fokusda
  const blur = Math.max(1.5, (he * (xS - xE)) / (xE - xL));
  const xQ = xL + fq * scale, xK = xL + fk * scale;
  // fotonlar: manbadan linza orqali ekrangacha harakatlanuvchi yorug'lik impulslari
  const photons = (y0, yS, color, key) => {
    const L1 = xL - 70, L2 = Math.hypot(xS - xL, yS - y0), L = L1 + L2;
    if (!(L > 0)) return null;
    const n = 4, sp = 140;
    return Array.from({ length: n }, (_, i) => {
      const s = (((t * sp) / L + i / n) % 1) * L;
      const [x, y] = s < L1 ? [70 + s, y0] : [xL + (xS - xL) * (s - L1) / L2, y0 + (yS - y0) * (s - L1) / L2];
      return (
        <g key={key + 'p' + i}>
          <circle cx={x} cy={axis - y} r={6} fill={color} opacity={0.35} filter="url(#s18glow)" />
          <circle cx={x} cy={axis - y} r={2.8} fill="#fff" stroke={color} strokeWidth={1.2} />
        </g>
      );
    });
  };
  const ray = (y0, xf, color, key, w) => {
    const yS = y0 * (1 - (xS - xL) / (xf - xL));
    return (
      <g key={key}>
        <line x1={70} y1={axis - y0} x2={xL} y2={axis - y0} stroke={color} strokeWidth={w} opacity={0.85} />
        <line x1={xL} y1={axis - y0} x2={xS} y2={axis - yS} stroke={color} strokeWidth={w} opacity={0.85} />
        {run && (
          <line x1={xL} y1={axis - y0} x2={xS} y2={axis - yS} stroke="#fff" strokeWidth={w} strokeDasharray="3 22"
            strokeDashoffset={-t * 120} opacity={0.9} />
        )}
        {run && (
          <line x1={70} y1={axis - y0} x2={xL} y2={axis - y0} stroke="#fff" strokeWidth={w} strokeDasharray="3 22"
            strokeDashoffset={-t * 120} opacity={0.9} />
        )}
        {run && photons(y0, yS, color, key)}
      </g>
    );
  };
  const glow = run ? 0.7 + 0.3 * Math.sin(t * 9) : 0.4;
  return (
    <svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Linza aberratsiyasi stendi">
      <defs>
        <linearGradient id="s18bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1f2730" />
          <stop offset="1" stopColor="#11161b" />
        </linearGradient>
        <linearGradient id="s18rail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d5d9dd" />
          <stop offset="0.5" stopColor="#9aa1a8" />
          <stop offset="1" stopColor="#5d646b" />
        </linearGradient>
        <linearGradient id="s18glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a8d8ea" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#e6f6ff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#a8d8ea" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="s18lamp">
          <stop offset="0" stopColor="#fffbe0" />
          <stop offset="1" stopColor="#ffd34d" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="s18spot">
          <stop offset="0" stopColor="#7dff9a" />
          <stop offset="0.35" stopColor="#ff7a5a" stopOpacity="0.8" />
          <stop offset="1" stopColor="#ff7a5a" stopOpacity="0" />
        </radialGradient>
        <filter id="s18glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>
      <rect width="640" height="360" fill="url(#s18bg)" />
      {/* optik taglik */}
      <rect x={20} y={290} width={600} height={16} rx={3} fill="url(#s18rail)" />
      {[...Array(30)].map((_, i) => (
        <line key={i} x1={30 + i * 20} y1={290} x2={30 + i * 20} y2={i % 5 === 0 ? 298 : 294} stroke="#333" strokeWidth={0.8} />
      ))}
      <line x1={20} y1={axis} x2={620} y2={axis} stroke="#666" strokeDasharray="6 4" strokeWidth={0.7} />
      {/* manba */}
      <circle cx={50} cy={axis} r={40} fill="url(#s18lamp)" opacity={glow} />
      <rect x={30} y={axis - 30} width={40} height={60} rx={6} fill="#3a3f45" stroke="#888" />
      <rect x={66} y={axis - he - 4} width={6} height={2 * he + 8} fill="#c9d3dc" opacity={0.6} />
      <rect x={44} y={axis + 30} width={12} height={120 - 30 + 0} fill="#555" />
      <text x={50} y={axis + 60} fontSize={9} fill="#ccc" textAnchor="middle" fontFamily="sans-serif">manba</text>
      {/* nurlar */}
      {ray(he, xE, '#ff5a4a', 'e1', 1.6)}
      {ray(-he, xE, '#ff5a4a', 'e2', 1.6)}
      {ray(hc, xF, '#4cff7a', 'c1', 1.6)}
      {ray(-hc, xF, '#4cff7a', 'c2', 1.6)}
      {/* diafragma */}
      <rect x={xL - 18} y={axis - 110} width={4} height={110 - he - 6} fill="#888" />
      <rect x={xL - 18} y={axis + he + 6} width={4} height={110 - he - 6} fill="#888" />
      {/* linza */}
      <path d={`M ${xL} ${axis - 100} Q ${xL + 22} ${axis} ${xL} ${axis + 100} Q ${xL - 22} ${axis} ${xL} ${axis - 100} Z`}
        fill="url(#s18glass)" stroke="#bfe7ff" strokeWidth={1} />
      <rect x={xL - 4} y={axis + 100} width={8} height={20} fill="#555" />
      <text x={xL} y={axis - 108} fontSize={10} fill="#ddd" textAnchor="middle" fontFamily="sans-serif">linza R = {f(v.R ?? 20.5, 1)} cm</text>
      {/* fokus belgilari */}
      <circle cx={xF} cy={axis} r={3} fill="#4cff7a" />
      <circle cx={xE} cy={axis} r={3} fill="#ff5a4a" />
      <line x1={xQ} y1={axis + 6} x2={xQ} y2={axis + 16} stroke="#ff5a4a" strokeWidth={2} />
      <line x1={xK} y1={axis + 6} x2={xK} y2={axis + 16} stroke="#5aa0ff" strokeWidth={2} />
      <text x={xE} y={axis + 30} fontSize={8} fill="#ff9a8a" textAnchor="middle" fontFamily="sans-serif">F chekka</text>
      <text x={xF} y={axis - 10} fontSize={8} fill="#9affb4" textAnchor="middle" fontFamily="sans-serif">F markaz</text>
      {/* ekran */}
      <rect x={xS + 2} y={axis - 90} width={6} height={180} fill="#e8e8e8" stroke="#999" />
      <rect x={xS} y={axis + 90} width={10} height={30} fill="#555" />
      <text x={xS + 5} y={axis - 96} fontSize={9} fill="#ddd" textAnchor="middle" fontFamily="sans-serif">ekran</text>
      {/* ekrandagi dog' (old ko'rinish) */}
      <g>
        <rect x={548} y={16} width={84} height={96} rx={4} fill="#f2f2f2" stroke="#999" />
        <circle cx={590} cy={62} r={Math.min(38, blur)} fill="url(#s18spot)" opacity={run ? 0.75 + 0.25 * Math.sin(t * 9) : 0.8} />
        <circle cx={590} cy={62} r={2} fill="#2bd45a" />
        <text x={590} y={106} fontSize={8} fill="#333" textAnchor="middle" fontFamily="sans-serif">ekrandagi dog'</text>
      </g>
      {/* displey */}
      <g fontFamily="sans-serif">
        <rect x={20} y={14} width={250} height={64} rx={5} fill="#0d1a14" stroke="#3D7A6E" />
        <text x={30} y={32} fontSize={10} fill="#ff9a8a">f_q = {f(fq, 2)} cm</text>
        <text x={140} y={32} fontSize={10} fill="#8fb8ff">f_k = {f(fk, 2)} cm</text>
        <text x={30} y={50} fontSize={10} fill="#b8f5d0">Δf (xromatik) = {f(df, 3)} cm</text>
        <text x={30} y={68} fontSize={10} fill="#b8f5d0">Δf_sf (sferik) = {f(sph, 3)} mm, h = {h} mm</text>
      </g>
      <text x={620} y={350} fontSize={8} fill="#888" textAnchor="end" fontFamily="sans-serif">
        yashil — markaziy nurlar, qizil — chekka nurlar (aberratsiya kattalashtirilgan)
      </text>
    </svg>
  );
}
