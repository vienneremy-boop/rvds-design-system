import PropTypes from 'prop-types';

// Stroke props (Figma strokeCap=Round, strokeWeight=1.5)
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' };
// Fill props
const F = { fill: 'currentColor', stroke: 'none' };
// Fill evenodd
const FE = { fill: 'currentColor', fillRule: 'evenodd', stroke: 'none' };
// Stroke + fill (circle outlines like Info dot)
const FO = { fill: 'currentColor', stroke: 'none' };

const icons = {
  // ── Navigation ────────────────────────────────────────────────
  ChevronRight: () => (
    <g transform="translate(9,6)"><path d="M 0 12 L 6 6 L 0 0" {...S} /></g>
  ),
  ChevronDown: () => (
    <g transform="translate(6,9)"><path d="M 0 0 L 6 6 L 12 0" {...S} /></g>
  ),
  ArrowRight: () => (<>
    <g transform="translate(5,12)"><path d="M 0 0 L 14 0" {...S} /></g>
    <g transform="translate(12,5)"><path d="M 0 0 L 7 7 L 0 14" {...S} /></g>
  </>),
  ArrowLeft: () => (<>
    <g transform="translate(5,12)"><path d="M 14 0 L 0 0" {...S} /></g>
    <g transform="translate(5,5)"><path d="M 7 14 L 0 7 L 7 0" {...S} /></g>
  </>),
  Menu: () => (
    <g transform="translate(3,6)"><path d="M 0 6 L 18 6 M 0 0 L 18 0 M 0 12 L 18 12" {...S} /></g>
  ),
  ExternalLink: () => (<>
    <g transform="translate(3,6)"><path d="M 15 7 L 15 13 C 15 14.105 14.105 15 13 15 L 2 15 C 0.895 15 0 14.105 0 13 L 0 2 C 0 0.895 0.895 0 2 0 L 8 0" {...S} /></g>
    <g transform="translate(15,3)"><path d="M 0 0 L 6 0 L 6 6" {...S} /></g>
    <g transform="translate(10,3)"><path d="M 0 11 L 11 0" {...S} /></g>
  </>),
  Home: () => (
    <g transform="translate(3,2)"><path d="M 0 7 L 9 0 L 18 7 L 18 18 C 18 19.105 17.105 20 16 20 L 12 20 L 12 14 L 6 14 L 6 20 L 2 20 C 0.895 20 0 19.105 0 18 Z" {...S} /></g>
  ),

  // ── Actions ───────────────────────────────────────────────────
  Close: () => (
    <g transform="translate(6,6)"><path d="M 12 0 L 0 12 M 0 0 L 12 12" {...S} /></g>
  ),
  Check: () => (
    <g transform="translate(4,7)"><path d="M 0 5 L 5 10 L 16 0" {...S} /></g>
  ),
  Plus: () => (
    <g transform="translate(5,5)"><path d="M 7 0 L 7 14 M 0 7 L 14 7" {...S} /></g>
  ),
  Minus: () => (
    <g transform="translate(5,12)"><path d="M 0 0 L 14 0" {...S} /></g>
  ),
  Search: () => (<>
    <g transform="translate(3,3)"><path d="M 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z" {...S} /></g>
    <g transform="translate(16.65,16.65)"><path d="M 4.35 4.35 L 0 0" {...S} /></g>
  </>),
  Eye: () => (<>
    <g transform="translate(1,4)"><path d="M 0 8 C 0 8 4 0 11 0 C 18 0 22 8 22 8 C 22 8 18 16 11 16 C 4 16 0 8 0 8 Z" {...S} /></g>
    <g transform="translate(9,9)"><path d="M 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 Z" {...F} /></g>
  </>),
  Edit: () => (<>
    <g transform="translate(2,4)"><path d="M 9 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 16 C 0 17.105 0.895 18 2 18 L 16 18 C 17.105 18 18 17.105 18 16 L 18 9" {...S} /></g>
    <g transform="translate(8,1.88)"><path d="M 10.5 0.621 C 11.328 -0.207 12.672 -0.207 13.5 0.621 C 14.328 1.449 14.328 2.793 13.5 3.621 L 4 13.121 L 0 14.121 L 1 10.121 Z" {...S} /></g>
  </>),
  Trash: () => (<>
    <g transform="translate(3,6)"><path d="M 0 0 L 18 0" {...S} /></g>
    <g transform="translate(8,4)"><path d="M 0 2 L 0 0 L 8 0 L 8 2" {...S} /></g>
    <g transform="translate(5,6)"><path d="M 14 0 L 13 14 C 13 15.105 12.105 16 11 16 L 3 16 C 1.895 16 1 15.105 1 14 L 0 0" {...S} /></g>
  </>),
  Copy: () => (<>
    <g transform="translate(9,9)"><path d="M 2 0 L 11 0 C 12.105 0 13 0.895 13 2 L 13 11 C 13 12.105 12.105 13 11 13 L 2 13 C 0.895 13 0 12.105 0 11 L 0 2 C 0 0.895 0.895 0 2 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(2,2)"><path d="M 3 13 L 2 13 C 0.895 13 0 12.105 0 11 L 0 2 C 0 0.895 0.895 0 2 0 L 11 0 C 12.105 0 13 0.895 13 2 L 13 3" {...S} /></g>
  </>),
  Download: () => (<>
    <g transform="translate(3,15)"><path d="M 18 0 L 18 4 C 18 5.105 17.105 6 16 6 L 2 6 C 0.895 6 0 5.105 0 4 L 0 0" {...S} /></g>
    <g transform="translate(7,10)"><path d="M 0 0 L 5 5 L 10 0" {...S} /></g>
    <g transform="translate(12,3)"><path d="M 0 0 L 0 12" {...S} /></g>
  </>),
  Upload: () => (<>
    <g transform="translate(3,15)"><path d="M 18 0 L 18 4 C 18 5.105 17.105 6 16 6 L 2 6 C 0.895 6 0 5.105 0 4 L 0 0" {...S} /></g>
    <g transform="translate(7,3)"><path d="M 10 5 L 5 0 L 0 5" {...S} /></g>
    <g transform="translate(12,3)"><path d="M 0 0 L 0 12" {...S} /></g>
  </>),
  Filter: () => (
    <g transform="translate(2,3)"><path d="M 20 0 L 0 0 L 8 9.46 L 8 16 L 12 18 L 12 9.46 Z" {...S} /></g>
  ),
  Refresh: () => (<>
    <g transform="translate(17,4)"><path d="M 6 0 L 6 6 L 0 6" {...S} /></g>
    <g transform="translate(1,14)"><path d="M 0 6 L 0 0 L 6 0" {...S} /></g>
    <g transform="translate(1,2.95)"><path d="M 2.51 6.05 C 3.02 4.61 3.89 3.33 5.03 2.31 C 6.18 1.3 7.57 0.59 9.07 0.24 C 10.56 -0.11 12.12 -0.08 13.6 0.32 C 15.08 0.72 16.44 1.48 17.55 2.54 L 22 7.05 M 0 11.05 L 4.45 15.56 C 5.56 16.62 6.92 17.38 8.4 17.78 C 9.88 18.18 11.44 18.21 12.93 17.86 C 14.43 17.52 15.82 16.8 16.96 15.79 C 18.11 14.77 18.98 13.49 19.49 12.05" {...S} /></g>
  </>),

  // ── Status ────────────────────────────────────────────────────
  Info: () => (<>
    <g transform="translate(3,3)"><path d="M 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(12,11)"><path d="M 0 0 L 0 5" {...S} /></g>
    <g transform="translate(11,7)"><path d="M 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 Z" {...F} /></g>
  </>),
  Question: () => (<>
    <g transform="translate(3,3)"><path d="M 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(9.5,7)"><path d="M 0 2.5 C 0 1.119 1.119 0 2.5 0 C 3.881 0 5 1.119 5 2.5 C 5 3.881 4 4.5 2.5 5.5 L 2.5 7" {...S} /></g>
    <g transform="translate(11,16)"><path d="M 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 Z" {...F} /></g>
  </>),
  Warning: () => (<>
    <g transform="translate(2,2)"><path d="M 10 0 L 20 18 L 0 18 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinejoin: 'round' }} /></g>
    <g transform="translate(12,9)"><path d="M 0 0 L 0 5" {...S} /></g>
    <g transform="translate(11,16.5)"><path d="M 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 Z" {...F} /></g>
  </>),
  AlertCircle: () => (<>
    <g transform="translate(3,3)"><path d="M 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(12,8)"><path d="M 0 0 L 0 5" {...S} /></g>
    <g transform="translate(11,15)"><path d="M 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 Z" {...F} /></g>
  </>),
  Bell: () => (<>
    <g transform="translate(3,2)"><path d="M 15 6 C 15 4.409 14.368 2.883 13.243 1.757 C 12.117 0.632 10.591 0 9 0 C 7.409 0 5.883 0.632 4.757 1.757 C 3.632 2.883 3 4.409 3 6 C 3 13 0 15 0 15 L 18 15 Z" {...S} /></g>
    <g transform="translate(10.27,21)"><path d="M 3.46 0 C 3.284 0.3 3.032 0.548 2.73 0.718 C 2.428 0.888 2.087 0.977 1.73 0.977 C 1.373 0.977 1.032 0.888 0.73 0.718 C 0.428 0.548 0.176 0.3 0 0" {...S} /></g>
  </>),

  // ── Social / People ───────────────────────────────────────────
  User: () => (<>
    <g transform="translate(8,4)"><path d="M 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(4,14)"><path d="M 0 6 C 0 2.686 3.582 0 8 0 C 12.418 0 16 2.686 16 6" {...S} /></g>
  </>),
  Users: () => (<>
    <g transform="translate(5.5,4.5)"><path d="M 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 C 5.433 0 7 1.567 7 3.5 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(1,15)"><path d="M 0 5 C 0 2.239 3.686 0 8 0 C 12.314 0 16 2.239 16 5" {...S} /></g>
    <g transform="translate(17,5)"><path d="M 0 0 C 1.657 0 3 1.343 3 3 C 3 4.657 1.657 6 0 6" {...S} /></g>
    <g transform="translate(18,15.18)"><path d="M 5 4.816 C 5 2.503 2.761 0.578 0 0" {...S} /></g>
  </>),
  Mail: () => (<>
    <g transform="translate(2,4)"><path d="M 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(2,7)"><path d="M 0 0 L 10 6 L 20 0" {...S} /></g>
  </>),
  Phone: () => (
    <g transform="translate(3,4)"><path d="M 2 0 L 6 0 L 8 5 L 5.5 6.5 C 6.57 8.68 8.32 10.43 10.5 11.5 L 12 9 L 17 11 L 17 15 C 17 16.105 16.105 17 15 17 C 7.57 16.57 0.43 9.43 0 2 C 0 0.895 0.895 0 2 0 Z" {...S} /></g>
  ),
  MessageSquare: () => (
    <g transform="translate(2,3)"><path d="M 19 12 C 19 12.796 18.684 13.559 18.121 14.121 C 17.559 14.684 16.796 15 16 15 L 4 15 L 0 19 L 0 3 C 0 2.204 0.316 1.441 0.879 0.879 C 1.441 0.316 2.204 0 3 0 L 16 0 C 16.796 0 17.559 0.316 18.121 0.879 C 18.684 1.441 19 2.204 19 3 Z" {...S} /></g>
  ),

  // ── Media / Objects ───────────────────────────────────────────
  Star: () => (
    <g transform="translate(2,2)"><path d="M 10 0 L 13.09 6.26 L 20 7.27 L 15 12.14 L 16.18 19.02 L 10 15.77 L 3.82 19.02 L 5 12.14 L 0 7.27 L 6.91 6.26 Z" {...S} /></g>
  ),
  Heart: () => (
    <g transform="translate(1.55,3)"><path d="M 19.29 1.61 C 18.78 1.1 18.17 0.69 17.5 0.42 C 16.83 0.15 16.11 0 15.38 0 C 14.65 0 13.93 0.15 13.26 0.42 C 12.59 0.69 11.98 1.1 11.47 1.61 L 10.45 2.63 L 9.43 1.61 C 8.4 0.57 6.99 0 5.52 0 C 4.05 0 2.64 0.57 1.61 1.61 C 0.58 2.64 0 4.05 0 5.52 C 0 6.99 0.58 8.4 1.61 9.43 L 10.45 18.27 L 19.29 9.43 C 20.32 8.4 20.9 6.99 20.9 5.52 C 20.9 4.05 20.32 2.64 19.29 1.61 Z" {...S} /></g>
  ),
  Bookmark: () => (
    <g transform="translate(5,3)"><path d="M 14 18 L 7 13 L 0 18 L 0 2 C 0 0.895 0.895 0 2 0 L 12 0 C 13.105 0 14 0.895 14 2 Z" {...S} /></g>
  ),
  Share: () => (<>
    <g transform="translate(15.5,2.5)"><path d="M 5 2.5 C 5 3.881 3.881 5 2.5 5 C 1.119 5 0 3.881 0 2.5 C 0 1.119 1.119 0 2.5 0 C 3.881 0 5 1.119 5 2.5 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(3.5,9.5)"><path d="M 5 2.5 C 5 3.881 3.881 5 2.5 5 C 1.119 5 0 3.881 0 2.5 C 0 1.119 1.119 0 2.5 0 C 3.881 0 5 1.119 5 2.5 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(15.5,16.5)"><path d="M 5 2.5 C 5 3.881 3.881 5 2.5 5 C 1.119 5 0 3.881 0 2.5 C 0 1.119 1.119 0 2.5 0 C 3.881 0 5 1.119 5 2.5 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(8.5,6.3)"><path d="M 0 4.4 L 7 0" {...S} /></g>
    <g transform="translate(8.5,13.3)"><path d="M 0 0 L 7 4.4" {...S} /></g>
  </>),
  Image: () => (<>
    <g transform="translate(3,3)"><path d="M 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(7,7)"><path d="M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z" {...F} /></g>
    <g transform="translate(3,14)"><path d="M 0 7 L 5 2 L 9 6 L 13 3 L 18 7" {...S} /></g>
  </>),
  Globe: () => (<>
    <g transform="translate(3,3)"><path d="M 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(9,3)"><path d="M 3 0 C 3 0 0 4 0 9 C 0 14 3 18 3 18" {...S} /></g>
    <g transform="translate(12,3)"><path d="M 0 0 C 0 0 3 4 3 9 C 3 14 0 18 0 18" {...S} /></g>
    <g transform="translate(3,12)"><path d="M 0 0 L 18 0" {...S} /></g>
  </>),

  // ── Time / Location ───────────────────────────────────────────
  Calendar: () => (<>
    <g transform="translate(3,4)"><path d="M 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(3,2)"><path d="M 13 0 L 13 4 M 5 0 L 5 4 M 0 8 L 18 8" {...S} /></g>
  </>),
  Clock: () => (<>
    <g transform="translate(3,3)"><path d="M 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(12,6)"><path d="M 0 0 L 0 6 L 4 8" {...S} /></g>
  </>),

  // ── Design tools ──────────────────────────────────────────────
  Code: () => (<>
    <g transform="translate(16,6)"><path d="M 0 12 L 6 6 L 0 0" {...S} /></g>
    <g transform="translate(2,6)"><path d="M 6 0 L 0 6 L 6 12" {...S} /></g>
  </>),
  Layers: () => (<>
    <g transform="translate(2,2)"><path d="M 10 0 L 0 5 L 10 10 L 20 5 Z" {...S} /></g>
    <g transform="translate(2,12)"><path d="M 0 0 L 10 5 L 20 0" {...S} /></g>
    <g transform="translate(2,17)"><path d="M 0 0 L 10 5 L 20 0" {...S} /></g>
  </>),
  Grid: () => (<>
    {[[3,3],[14,3],[3,14],[14,14]].map(([x,y],i) => (
      <g key={i} transform={`translate(${x},${y})`}>
        <path d="M 1 0 L 6 0 C 6.552 0 7 0.448 7 1 L 7 6 C 7 6.552 6.552 7 6 7 L 1 7 C 0.448 7 0 6.552 0 6 L 0 1 C 0 0.448 0.448 0 1 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} />
      </g>
    ))}
  </>),
  Cursor: () => (
    <g transform="translate(5,3)"><path d="M 0 0 L 14 9 L 7 10.5 L 4 18 Z" {...S} /></g>
  ),
  Wireframe: () => (<>
    <g transform="translate(3,3)"><path d="M 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(7,9)"><path d="M 0 0 L 10 0" {...S} /></g>
    <g transform="translate(7,13)"><path d="M 0 0 L 6 0" {...S} /></g>
    <g transform="translate(7,17)"><path d="M 0 0 L 3 0" {...S} /></g>
    <g transform="translate(13,12)"><path d="M 1 0 L 3 0 C 3.552 0 4 0.448 4 1 L 4 3 C 4 3.552 3.552 4 3 4 L 1 4 C 0.448 4 0 3.552 0 3 L 0 1 C 0 0.448 0.448 0 1 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
  </>),
  BarChart: () => (<>
    <g transform="translate(3,20)"><path d="M 0 0 L 18 0" {...S} /></g>
    <g transform="translate(4,13)"><path d="M 1 0 L 3 0 C 3.552 0 4 0.448 4 1 L 4 6 C 4 6.552 3.552 7 3 7 L 1 7 C 0.448 7 0 6.552 0 6 L 0 1 C 0 0.448 0.448 0 1 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(10,8)"><path d="M 1 0 L 3 0 C 3.552 0 4 0.448 4 1 L 4 11 C 4 11.552 3.552 12 3 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 1 C 0 0.448 0.448 0 1 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(16,4)"><path d="M 1 0 L 3 0 C 3.552 0 4 0.448 4 1 L 4 15 C 4 15.552 3.552 16 3 16 L 1 16 C 0.448 16 0 15.552 0 15 L 0 1 C 0 0.448 0.448 0 1 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
  </>),
  Contrast: () => (<>
    <g transform="translate(3,3)"><path d="M 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(3,3)"><path d="M 9 0 C 4.029 0 0 4.029 0 9 C 0 13.971 4.029 18 9 18 Z" {...F} /></g>
  </>),
  Variable: () => (<>
    <g transform="translate(4,6)"><path d="M 0 2 C 0 0.895 0.895 0 2 0 L 3 0 C 4.105 0 5 0.895 5 2 L 5 4 C 5 5.105 5.895 6 7 6 C 5.895 6 5 6.895 5 8 L 5 10 C 5 11.105 4.105 12 3 12 L 2 12 C 0.895 12 0 11.105 0 10" {...S} /></g>
    <g transform="translate(13,6)"><path d="M 7 2 C 7 0.895 6.105 0 5 0 L 4 0 C 2.895 0 2 0.895 2 2 L 2 4 C 2 5.105 1.105 6 0 6 C 1.105 6 2 6.895 2 8 L 2 10 C 2 11.105 2.895 12 4 12 L 5 12 C 6.105 12 7 11.105 7 10" {...S} /></g>
  </>),
  Terminal: () => (<>
    <g transform="translate(2,3)"><path d="M 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 16 C 20 17.105 19.105 18 18 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(6,9)"><path d="M 0 0 L 4 4 L 0 8" {...S} /></g>
    <g transform="translate(13,17)"><path d="M 0 0 L 5 0" {...S} /></g>
  </>),
  Wand: () => (<>
    <g transform="translate(3,9)"><path d="M 0 0 L 12 12" {...S} /></g>
    <g transform="translate(12,3.5)"><path d="M 5.5 0 L 8.5 3 L 3 5.5 L 0 8.5 Z" {...S} /></g>
    <g transform="translate(11,5)"><path d="M 0 2 L 2 0" {...S} /></g>
    <g transform="translate(20,10)"><path d="M 0 2 L 2 0" {...S} /></g>
    <g transform="translate(20,4)"><path d="M 0 0 L 2 0" {...S} /></g>
    <g transform="translate(14,1)"><path d="M 0 1 L 0 0" {...S} /></g>
  </>),
  Settings: () => (<>
    {[[4,14,7],[4,3,7],[12,12,9],[12,3,5],[20,16,5],[20,3,9]].map(([x,y,h],i) => (
      <g key={i} transform={`translate(${x},${y})`}><path d={`M 0 ${h} L 0 0`} {...S} /></g>
    ))}
    <g transform="translate(1,14)"><path d="M 0 0 L 6 0" {...S} /></g>
    <g transform="translate(9,8)"><path d="M 0 0 L 6 0" {...S} /></g>
    <g transform="translate(17,16)"><path d="M 0 0 L 6 0" {...S} /></g>
  </>),
  Lock: () => (<>
    <g transform="translate(5,11)"><path d="M 2 0 L 12 0 C 13.105 0 14 0.895 14 2 L 14 9 C 14 10.105 13.105 11 12 11 L 2 11 C 0.895 11 0 10.105 0 9 L 0 2 C 0 0.895 0.895 0 2 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(8,3)"><path d="M 0 8 L 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 L 8 8" {...S} /></g>
    <g transform="translate(11,15)"><path d="M 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 Z" {...F} /></g>
  </>),
  Store: () => (<>
    <g transform="translate(2,7)"><path d="M 1 0 L 19 0 C 19.552 0 20 0.448 20 1 L 20 13 C 20 13.552 19.552 14 19 14 L 1 14 C 0.448 14 0 13.552 0 13 L 0 1 C 0 0.448 0.448 0 1 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(2,2)"><path d="M 0 5 L 3 0 L 17 0 L 20 5" {...S} /></g>
    <g transform="translate(9,12)"><path d="M 1 0 L 5 0 C 5.552 0 6 0.448 6 1 L 6 8 C 6 8.552 5.552 9 5 9 L 1 9 C 0.448 9 0 8.552 0 8 L 0 1 C 0 0.448 0.448 0 1 0 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
  </>),
  Connect: () => (<>
    <g transform="translate(2,8)"><path d="M 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(14,8)"><path d="M 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(10,12)"><path d="M 0 0 L 4 0" {...S} /></g>
  </>),

  // ── Custom / Brand ────────────────────────────────────────────
  Sparkles: () => (
    <path d="M 11 4.011 L 11.701 5.851 C 12.671 8.396 14.604 10.33 17.149 11.299 L 18.989 12 L 17.149 12.701 C 14.604 13.67 12.671 15.604 11.701 18.149 L 11 19.989 L 10.299 18.149 C 9.33 15.604 7.396 13.67 4.851 12.701 L 3.012 12 L 4.851 11.299 C 7.396 10.33 9.33 8.396 10.299 5.851 Z M 6.884 12 C 8.616 12.973 10.027 14.384 11 16.116 C 11.973 14.384 13.384 12.973 15.116 12 C 13.384 11.027 11.973 9.616 11 7.884 C 10.027 9.616 8.616 11.027 6.884 12 Z M 6.867 6.554 C 5.322 7.069 3.949 8.443 3.434 9.988 C 2.919 8.443 1.545 7.069 0 6.554 C 1.545 6.039 2.919 4.666 3.434 3.12 C 3.949 4.666 5.322 6.039 6.867 6.554 Z M 10.474 2.06 C 9.615 2.404 8.757 3.09 8.414 4.12 C 8.07 3.09 7.212 2.404 6.354 2.06 C 7.384 1.717 8.07 0.858 8.414 0 C 8.757 0.858 9.615 1.545 10.474 2.06 Z" {...FE} />
  ),
  Token: () => (<>
    <g transform="translate(2.5,2)"><path d="M 9.5 0 L 19 5 L 19 15 L 9.5 20 L 0 15 L 0 5 Z" {...S} /></g>
    <g transform="translate(9,9)"><path d="M 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 Z" {...F} /></g>
  </>),
  Play: () => (
    <g transform="translate(6.4,3.89)"><path d="M 0 0 L 13.789 8.111 L 0 16.222 Z" {...S} /></g>
  ),
  Pulse: () => (
    <g transform="translate(2,4)"><path d="M 0 8 L 4 8 L 6 3 L 9 13 L 11 0 L 13 16 L 15 6 L 17 8 L 20 8" {...S} /></g>
  ),
  Sprint: () => (
    <g transform="translate(4,2)"><path d="M 9 0 L 0 12 L 8 12 L 7 20 L 16 8 L 8 8 Z" {...S} /></g>
  ),
  Flag: () => (<>
    <g transform="translate(5,3)"><path d="M 0 0 L 0 18" {...S} /></g>
    <g transform="translate(5,3)"><path d="M 0 0 L 14 0 L 11 6 L 0 6" {...S} /></g>
  </>),
  Anchor: () => (<>
    <g transform="translate(10,3)"><path d="M 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 Z" {...{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }} /></g>
    <g transform="translate(12,7)"><path d="M 0 0 L 0 13" {...S} /></g>
    <g transform="translate(7,11)"><path d="M 0 0 L 10 0" {...S} /></g>
    <g transform="translate(7,20)"><path d="M 0 0 C 3.333 2.667 6.667 2.667 10 0" {...S} /></g>
  </>),
  Measure: () => (<>
    <g transform="translate(3,12)"><path d="M 0 0 L 18 0" {...S} /></g>
    <g transform="translate(3,8)"><path d="M 0 0 L 0 8" {...S} /></g>
    <g transform="translate(21,8)"><path d="M 0 0 L 0 8" {...S} /></g>
    <g transform="translate(9,10)"><path d="M 0 0 L 0 4" {...S} /></g>
    <g transform="translate(15,10)"><path d="M 0 0 L 0 4" {...S} /></g>
  </>),
  Moon: () => (
    <path d="M 21 12.79 A 9 9 0 1 1 11.21 3 A 7 7 0 0 0 21 12.79 Z" {...S} />
  ),
  Sun: () => (<>
    <circle cx="12" cy="12" r="4" {...S} />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" {...S} />
  </>),
  Sort: () => (<>
    <g transform="translate(3,6)"><path d="M 0 0 L 18 0" {...S} /></g>
    <g transform="translate(3,12)"><path d="M 0 0 L 12 0" {...S} /></g>
    <g transform="translate(3,18)"><path d="M 0 0 L 6 0" {...S} /></g>
  </>),
};

export function Icon({ name, size = 24, style, className }) {
  const PathContent = icons[name];
  if (!PathContent) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={style}
      className={className}
    >
      <PathContent />
    </svg>
  );
}

Icon.propTypes = {
  name:      PropTypes.oneOf(Object.keys(icons)).isRequired,
  size:      PropTypes.oneOf([16, 20, 24]),
  style:     PropTypes.object,
  className: PropTypes.string,
};

export const ICON_NAMES = Object.keys(icons);

export default Icon;
