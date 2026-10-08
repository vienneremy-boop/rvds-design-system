import PropTypes from 'prop-types';

// Icônes v2 (charte graphique v2.0) : grille 24 px, zone utile 20 px, trait 2 px (1,5 px à 16 px et moins),
// extrémités droites, angles vifs. Une seule oblique : 60° ou 30°, jamais 45°. Les formes fermées
// (enveloppe, document, agenda, bulle…) ont le coin bas-droit coupé comme le point du logo.
// Les points (info, attention, question) sont le carré coupé, plein. Linkedin et Github restent les marques officielles.

const F = { fill: 'currentColor', stroke: 'none' };

const icons = {
  ChevronRight: () => <><path d="M9.5 4.2L14 12L9.5 19.8" /></>,
  ChevronDown: () => <><path d="M4.2 9.5L12 14L19.8 9.5" /></>,
  ArrowRight: () => <><path d="M3 12H20" /><path d="M15.5 4.2L20 12L15.5 19.8" /></>,
  ArrowLeft: () => <><path d="M21 12H4" /><path d="M8.5 4.2L4 12L8.5 19.8" /></>,
  Menu: () => <><path d="M3 6.5H21" /><path d="M3 12H21" /><path d="M3 17.5H14" /></>,
  ExternalLink: () => <><path d="M12 4H4V20H16.5L19 15.67V12" /><path d="M10.5 15.5L16.2 5.63" /><path d="M12.7 5.63L16.2 5.63L17.95 8.66" /></>,
  Home: () => <><path d="M3 10.2L12 5L21 10.2" /><path d="M5.5 9V20H16L18.5 15.67V9" /><path d="M10 20V15H14V20" /></>,
  Close: () => <><path d="M8 5.07L16 18.93" /><path d="M16 5.07L8 18.93" /></>,
  Check: () => <><path d="M5.9 12.3L9.6 18.7L18.1 4" /></>,
  Plus: () => <><path d="M12 4V20" /><path d="M4 12H20" /></>,
  Minus: () => <><path d="M4 12H20" /></>,
  Search: () => <><circle cx="10" cy="9" r="6.5" /><path d="M13.25 14.63L16.75 20.7" /></>,
  Eye: () => <><path d="M2.5 12L8 8.82L16 8.82L21.5 12L16 15.18L8 15.18Z" /><circle cx="12" cy="12" r="2.4" /></>,
  Edit: () => <><path d="M4.5 19.8L8.12 17.73L14.57 6.56L10.93 4.46L4.48 15.63Z" /><path d="M8.12 17.73L4.48 15.63" /><path d="M12.97 9.33L9.33 7.23" /></>,
  Trash: () => <><path d="M3.5 6.5H20.5" /><path d="M9 6.5V3.5H15V6.5" /><path d="M5.5 6.5L18.5 6.5L18.5 16.67L16 21L5.5 21Z" /><path d="M10 10.5V17" /><path d="M14 10.5V17" /></>,
  Copy: () => <><path d="M3 9L15 9L15 16.67L12.5 21L3 21Z" /><path d="M9 9V3H21V12.67L18.5 17H15" /></>,
  Download: () => <><path d="M12 3V15" /><path d="M6.8 12L12 15L17.2 12" /><path d="M4 20H20" /></>,
  Upload: () => <><path d="M12 16V4" /><path d="M6.8 7L12 4L17.2 7" /><path d="M4 20H20" /></>,
  Filter: () => <><path d="M3 6H21" /><path d="M6 12H18" /><path d="M9.5 18H14.5" /></>,
  Refresh: () => <><path d="M19.5 12A7.5 7.5 0 1 1 17.3 6.7" /><path d="M18 2.6V7.2H13.4" /></>,
  Info: () => <><circle cx="12" cy="12" r="9" /><path d="M12 11V17" /><path d="M10.9 6.5L13.1 6.5L13.1 7.86L12.62 8.7L10.9 8.7Z" fill="currentColor" stroke="none" /></>,
  Question: () => <><circle cx="12" cy="12" r="9" /><path d="M9.3 9.6C9.3 7.9 10.5 6.9 12 6.9S14.7 7.9 14.7 9.4C14.7 11.3 12 11.6 12 13.9" /><path d="M10.9 15.8L13.1 15.8L13.1 17.16L12.62 18L10.9 18Z" fill="currentColor" stroke="none" /></>,
  Warning: () => <><path d="M12 3.5L21.5 19.95L2.5 19.95Z" /><path d="M12 9V14" /><path d="M10.9 15.6L13.1 15.6L13.1 16.96L12.62 17.8L10.9 17.8Z" fill="currentColor" stroke="none" /></>,
  AlertCircle: () => <><circle cx="12" cy="12" r="9" /><path d="M12 7V13" /><path d="M10.9 14.9L13.1 14.9L13.1 16.26L12.62 17.1L10.9 17.1Z" fill="currentColor" stroke="none" /></>,
  Bell: () => <><path d="M6 17V10.5C6 7.2 8.7 4.5 12 4.5S18 7.2 18 10.5V17" /><path d="M3.5 17H20.5" /><path d="M10 20.5H14" /></>,
  User: () => <><circle cx="12" cy="7.5" r="3.5" /><path d="M4.5 21L7.39 16L16.61 16L19.5 21" /></>,
  Users: () => <><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20L5.1 15.5L12.9 15.5L15.5 20" /><path d="M14.2 4.9A2.8 2.8 0 1 1 16.6 10" /><path d="M16.5 13.5L19 13.5L21.6 18" /></>,
  Mail: () => <><path d="M3 5L21 5L21 15.67L18.5 20L3 20Z" /><path d="M3 6L12 11.2L21 6" /></>,
  Phone: () => <><path d="M6 2L18 2L18 17.67L15.5 22L6 22Z" /><path d="M10.5 18.5H13.5" /></>,
  MessageSquare: () => <><path d="M3 4L21 4L21 13.67L18.5 18L9 18L7 21.46L7 18L3 18Z" /></>,
  Star: () => <><path d="M12 3.3L14.29 9.44L20.84 9.73L15.71 13.81L17.47 20.12L12 16.5L6.53 20.12L8.29 13.81L3.16 9.73L9.71 9.44Z" /></>,
  Heart: () => <><path d="M12 20L4.2 11.5C2.6 9.7 2.8 6.9 4.7 5.4S9.4 4.3 11 6L12 7.1L13 6C14.6 4.3 17.3 3.9 19.3 5.4S21.4 9.7 19.8 11.5Z" /></>,
  Bookmark: () => <><path d="M6 3L18 3L18 21L12 17.54L6 21Z" /></>,
  Share: () => <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="5.07" r="2.5" /><circle cx="18" cy="18.93" r="2.5" /><path d="M8.17 10.75L15.83 6.32" /><path d="M8.17 13.25L15.83 17.68" /></>,
  Image: () => <><path d="M3 4L21 4L21 15.67L18.5 20L3 20Z" /><path d="M5.5 17L9.5 10.07L13.5 17" /><path d="M12 17L14.6 12.5L17.2 17" /><circle cx="16" cy="8" r="1.5" /></>,
  Globe: () => <><circle cx="12" cy="12" r="9" /><path d="M3 12H21" /><path d="M12 3C9.5 5.5 8.3 8.6 8.3 12S9.5 18.5 12 21" /><path d="M12 3C14.5 5.5 15.7 8.6 15.7 12S14.5 18.5 12 21" /></>,
  Calendar: () => <><path d="M3 5L21 5L21 16.67L18.5 21L3 21Z" /><path d="M3 10H21" /><path d="M8 3V7" /><path d="M16 3V7" /></>,
  Clock: () => <><circle cx="12" cy="12" r="8.5" /><path d="M12 7V12H16" /></>,
  Code: () => <><path d="M7.5 6.8L4.5 12L7.5 17.2" /><path d="M16.5 6.8L19.5 12L16.5 17.2" /><path d="M13.5 6.8L10.5 17.2" /></>,
  Layers: () => <><path d="M12 3L19.5 7.33L12 11.66L4.5 7.33Z" /><path d="M4.5 11.66L12 16L19.5 11.66" /><path d="M4.5 16L12 20.33L19.5 16" /></>,
  Grid: () => <><path d="M3 3H10.5V10.5H3Z" /><path d="M13.5 3H21V10.5H13.5Z" /><path d="M3 13.5H10.5V21H3Z" /><path d="M13.5 13.5L21 13.5L21 18.4L19.5 21L13.5 21Z" /></>,
  Cursor: () => <><path d="M5 3L5 19.5L9.2 15.6L12 21.2L14.7 19.9L12 14.3L17.8 14.3Z" /></>,
  Wireframe: () => <><path d="M3 4L21 4L21 15.67L18.5 20L3 20Z" /><path d="M3 8.5H21" /><path d="M7 12H12" /><path d="M7 15.5H15" /></>,
  BarChart: () => <><path d="M3 3V21H21" /><path d="M8 17V12" /><path d="M12.5 17V8" /><path d="M17 17V5" /></>,
  Contrast: () => <><circle cx="12" cy="12" r="9" /><path d="M12 3A9 9 0 0 1 12 21Z" fill="currentColor" stroke="none" /></>,
  Variable: () => <><path d="M8 4C5.5 4 5.5 6 5.5 8V10.5L3.5 12L5.5 13.5V16C5.5 18 5.5 20 8 20" /><path d="M16 4C18.5 4 18.5 6 18.5 8V10.5L20.5 12L18.5 13.5V16C18.5 18 18.5 20 16 20" /><path d="M10 8.54L14 15.46" /><path d="M14 8.54L10 15.46" /></>,
  Terminal: () => <><path d="M3 4L21 4L21 15.67L18.5 20L3 20Z" /><path d="M7.5 8.4L9.58 12L7.5 15.6" /><path d="M12 15.5H16" /></>,
  Wand: () => <><path d="M4.5 20.5L12.5 6.64" /><path d="M17 3V7" /><path d="M15 5H19" /><path d="M19.5 10.5V13.5" /><path d="M18 12H21" /></>,
  Settings: () => <><path d="M3 7H6.5" /><path d="M9.5 7H21" /><path d="M6.5 4.5H9.5V9.5H6.5Z" /><path d="M3 17H14.5" /><path d="M17.5 17H21" /><path d="M14.5 14.5H17.5V19.5H14.5Z" /></>,
  Lock: () => <><path d="M5 10.5L19 10.5L19 17.17L16.5 21.5L5 21.5Z" /><path d="M8 10.5V7.5A4 4 0 0 1 16 7.5V10.5" /><path d="M12 14.5V17.5" /></>,
  Store: () => <><path d="M3 4L21 4L22 9L2 9Z" /><path d="M4 9V20H17.5L20 15.67V9" /><path d="M10 20V14H14V20" /></>,
  Connect: () => <><path d="M3 9H9V15H3Z" /><path d="M15 9L21 9L21 12.4L19.5 15L15 15Z" /><path d="M9 12H15" /></>,
  Sparkles: () => <><path d="M11 4L12.6 10.4L19 12L12.6 13.6L11 20L9.4 13.6L3 12L9.4 10.4Z" /><path d="M18.5 3V7" /><path d="M16.5 5H20.5" /></>,
  Token: () => <><path d="M12 2.5L20.23 7.25L20.23 16.75L12 21.5L3.77 16.75L3.77 7.25Z" /><path d="M9.8 9.8L14.2 9.8L14.2 12.52L13.23 14.2L9.8 14.2Z" fill="currentColor" stroke="none" /></>,
  Play: () => <><path d="M7 4.2L20.5 12L7 19.8Z" /></>,
  Pulse: () => <><path d="M2 12L7 12L9 8.54L13 15.46L15 12L22 12" /></>,
  Sprint: () => <><path d="M13.5 2.5L6.5 13.5L12 13.5L10.5 21.5L17.5 10.5L12 10.5Z" /></>,
  Flag: () => <><path d="M5 21V3" /><path d="M5 4L18 4L15.5 8.33L18 12.66L5 12.66" /></>,
  Anchor: () => <><circle cx="12" cy="5" r="2" /><path d="M12 7V21" /><path d="M7 11H17" /><path d="M4.5 14.5C4.5 18.5 8 21 12 21S19.5 18.5 19.5 14.5" /></>,
  Measure: () => <><path d="M2 8L22 8L22 13.4L20.5 16L2 16Z" /><path d="M6 8V11" /><path d="M10 8V12.5" /><path d="M14 8V11" /><path d="M18 8V12.5" /></>,
  Moon: () => <><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4A6.5 6.5 0 0 0 20 14.5Z" /></>,
  Sun: () => <><circle cx="12" cy="12" r="4" /><path d="M17.63 15.25L20.23 16.75" /><path d="M12 18.5L12 21.5" /><path d="M6.37 15.25L3.77 16.75" /><path d="M6.37 8.75L3.77 7.25" /><path d="M12 5.5L12 2.5" /><path d="M17.63 8.75L20.23 7.25" /></>,
  Sort: () => <><path d="M7 20V4" /><path d="M4.4 8.5L7 4L9.6 8.5" /><path d="M17 4V20" /><path d="M14.4 15.5L17 20L19.6 15.5" /></>,
  Linkedin: () => (
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-1 16v-5.5c0-1.93-1.57-3.5-3.5-3.5-1.09 0-2.06.54-2.63 1.37V10h-2.5v9H12v-5.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25V19H17zM7.75 8.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM6.5 19H9v-9H6.5v9z" {...F} />
  ),
  Github: () => (
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" {...F} />
  ),

  X: () => <><path d="M8 5.07L16 18.93" /><path d="M16 5.07L8 18.93" /></>,
  ZoomIn: () => <><circle cx="10" cy="9" r="6.5" /><path d="M13.25 14.63L16.75 20.7" /><path d="M10 6V12" /><path d="M7 9H13" /></>,
};

const BRAND = ['Linkedin', 'Github'];

export function Icon({ name, size = 24, strokeWidth, style, className }) {
  const PathContent = icons[name];
  if (!PathContent) return null;
  const sw = strokeWidth ?? (size <= 16 ? 1.5 : 2);
  const stroke = BRAND.includes(name)
    ? {}
    : { stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10 };

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
      {...stroke}
    >
      <PathContent />
    </svg>
  );
}

Icon.propTypes = {
  name:        PropTypes.oneOf(Object.keys(icons)).isRequired,
  size:        PropTypes.number,
  strokeWidth: PropTypes.number,
  style:       PropTypes.object,
  className:   PropTypes.string,
};

export const ICON_NAMES = Object.keys(icons);

export default Icon;
