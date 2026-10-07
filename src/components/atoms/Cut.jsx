import PropTypes from 'prop-types';

/**
 * Cut — le point décliné.
 * Applique la coupe du logo (coin bas-droit, 60°, taille fixe) à n'importe quel contenu.
 * Avec `borderColor`, dessine un contour qui suit aussi la diagonale (deux couches coupées).
 * Tailles : xs (étiquettes), s (boutons), m (cartes, vignettes).
 */
const cuts = {
  xs: { h: 5, v: 9 },
  s:  { h: 8, v: 14 },
  m:  { h: 16, v: 28 },
};

const poly = (h, v) => `polygon(0 0, 100% 0, 100% calc(100% - ${v}px), calc(100% - ${h}px) 100%, 0 100%)`;

export function Cut({ size = 's', background, borderColor, borderWidth = 2, style, innerStyle, children, as: Tag = 'span' }) {
  const c = cuts[size] || cuts.s;
  if (!borderColor) {
    return (
      <Tag style={{ display: 'inline-flex', clipPath: poly(c.h, c.v), background, ...style, ...innerStyle }}>
        {children}
      </Tag>
    );
  }
  // contour : couche extérieure = couleur du contour, couche intérieure = fond, coupe recalculée pour garder l'épaisseur
  const k = borderWidth * 0.58;
  return (
    <Tag style={{ display: 'inline-flex', clipPath: poly(c.h, c.v), background: borderColor, padding: borderWidth, ...style }}>
      <span style={{ display: 'inline-flex', flex: 1, clipPath: poly(Math.max(c.h - k, 1), Math.max(c.v - k * 1.7, 1)), background, ...innerStyle }}>
        {children}
      </span>
    </Tag>
  );
}

Cut.propTypes = {
  size:        PropTypes.oneOf(['xs', 's', 'm']),
  background:  PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  style:       PropTypes.object,
  innerStyle:  PropTypes.object,
  children:    PropTypes.node,
  as:          PropTypes.elementType,
};

export default Cut;
