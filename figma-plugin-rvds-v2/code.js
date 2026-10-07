// RVDS · Passage à l'identité v2 (« le point final »)
// 1) Aperçu : liste ce qui va changer, sans rien modifier.
// 2) Appliquer : modifie les variables couleur (valeurs brutes uniquement, les alias suivent),
//    les variables texte de police, et les styles de texte en Fraunces.
// 3) Inventaire : exporte toutes les variables en JSON (pour un réglage fin variable par variable).

const COLOR_MAP = {
  // violets -> turquoise
  '5A14BF': '07786A', '7115E0': '07786A', '4A1495': '06685C', '6600FF': '07786A', 'A880FF': '6FB3A8',
  // encres violettes -> bleu profond
  '1D0A3D': '0C364E', '100529': '0C364E', '2E1460': '0A2C40', '0C0619': '0C364E', '260C4F': '12445F', '391D81': '2B5A73',
  // lavandes et teintes violettes -> teintes turquoise / bleu
  'C4BAFF': 'D9ECE8', 'ECEAFF': 'E3EFEC', 'DED9FF': 'D9ECE8', 'F8F7FF': 'E6F2EF', 'EAE7FF': 'C7E2DC', 'EADCFA': 'DCE6EB', 'C5ADE9': 'B9CAD3', 'F7F5FF': 'F2F2EE',
  // gris violacés -> gris bleutés
  '4E5B6B': '4C5E6A', '535F6B': '5A6B76', 'B5ADBE': 'A9B4BA', 'B3BCC3': 'B9CAD3', 'EAE4E1': 'D5D8D2', '8C96A2': '7D8B93',
  // lime doux (retiré de l'identité) -> toile
  'E8FE91': 'F2F2EE',
};
const FONT_MAP = { 'Fraunces': 'Outfit' };
const hex = (c) => [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
const rgb = (h, a) => ({ r: parseInt(h.slice(0, 2), 16) / 255, g: parseInt(h.slice(2, 4), 16) / 255, b: parseInt(h.slice(4, 6), 16) / 255, a });

async function scan() {
  const changes = [];
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  for (const col of collections) {
    const modes = Object.fromEntries(col.modes.map((m) => [m.modeId, m.name]));
    for (const id of col.variableIds) {
      const v = await figma.variables.getVariableByIdAsync(id);
      if (!v) continue;
      for (const [modeId, val] of Object.entries(v.valuesByMode)) {
        if (val && typeof val === 'object' && val.type === 'VARIABLE_ALIAS') continue; // les alias suivent leur primitive
        if (v.resolvedType === 'COLOR') {
          const from = hex(val); const to = COLOR_MAP[from];
          if (to) changes.push({ kind: 'color', id, modeId, label: `${col.name} / ${v.name} (${modes[modeId]})`, from: '#' + from, to: '#' + to, a: val.a });
        } else if (v.resolvedType === 'STRING' && FONT_MAP[val]) {
          changes.push({ kind: 'string', id, modeId, label: `${col.name} / ${v.name} (${modes[modeId]})`, from: val, to: FONT_MAP[val] });
        }
      }
    }
  }
  const styles = await figma.getLocalTextStylesAsync();
  for (const s of styles) {
    if (FONT_MAP[s.fontName.family]) {
      changes.push({ kind: 'text', id: s.id, label: `Style de texte / ${s.name}`, from: `${s.fontName.family} ${s.fontName.style}`, to: `${FONT_MAP[s.fontName.family]} ${/regular|light|thin/i.test(s.fontName.style) ? 'Regular' : 'Bold'}` });
    }
  }
  return changes;
}

async function apply(changes) {
  let done = 0; const errors = [];
  const needFonts = changes.some((c) => c.kind === 'text');
  if (needFonts) { await figma.loadFontAsync({ family: 'Outfit', style: 'Regular' }); await figma.loadFontAsync({ family: 'Outfit', style: 'Bold' }); }
  for (const c of changes) {
    try {
      if (c.kind === 'color') { const v = await figma.variables.getVariableByIdAsync(c.id); v.setValueForMode(c.modeId, rgb(c.to.slice(1), c.a)); }
      if (c.kind === 'string') { const v = await figma.variables.getVariableByIdAsync(c.id); v.setValueForMode(c.modeId, c.to); }
      if (c.kind === 'text') {
        const s = await figma.getStyleByIdAsync(c.id); const [family, style] = [c.to.split(' ')[0], c.to.split(' ').slice(1).join(' ')];
        s.fontName = { family, style };
        if (s.letterSpacing && s.letterSpacing.unit === 'PERCENT' && s.letterSpacing.value < -2) s.letterSpacing = { unit: 'PERCENT', value: -2 };
      }
      done++;
    } catch (e) { errors.push(`${c.label} : ${e.message}`); }
  }
  return { done, errors };
}

async function inventory() {
  const out = [];
  for (const col of await figma.variables.getLocalVariableCollectionsAsync()) {
    const modes = Object.fromEntries(col.modes.map((m) => [m.modeId, m.name]));
    for (const id of col.variableIds) {
      const v = await figma.variables.getVariableByIdAsync(id); if (!v) continue;
      const values = {};
      for (const [m, val] of Object.entries(v.valuesByMode)) {
        if (val && typeof val === 'object' && val.type === 'VARIABLE_ALIAS') { const t = await figma.variables.getVariableByIdAsync(val.id); values[modes[m]] = { alias: t ? t.name : val.id }; }
        else values[modes[m]] = v.resolvedType === 'COLOR' ? '#' + hex(val) : val;
      }
      out.push({ collection: col.name, name: v.name, type: v.resolvedType, values });
    }
  }
  return out;
}

figma.showUI(__html__, { width: 520, height: 560 });
let pending = [];
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'scan') { pending = await scan(); figma.ui.postMessage({ type: 'scan', changes: pending }); }
  if (msg.type === 'apply') { const r = await apply(pending); figma.ui.postMessage({ type: 'applied', ...r }); figma.notify(`Identité v2 : ${r.done} modification(s) appliquée(s)`); }
  if (msg.type === 'inventory') { figma.ui.postMessage({ type: 'inventory', data: await inventory() }); }
};
