// RVDS · Passage à l'identité v2 (« le point final »)
// 1) Aperçu : liste ce qui va changer, sans rien modifier.
// 2) Appliquer : modifie les variables couleur (valeurs brutes uniquement, les alias suivent),
//    les variables texte de police, et les styles de texte en Fraunces.
// 3) Teintes : crée ou met à jour la collection « Teintes v2 » (bleu, turquoise, lime, neutres de la charte 2.0).
// 4) Inventaire : exporte toutes les variables en JSON (pour un réglage fin variable par variable).

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
  // couleurs d'état génériques -> couleurs d'état de la charte 2.0 (contraste ≥ 5:1)
  '22C55E': '0B6B4F', 'DCFCE7': 'DDF0E8', 'F59E0B': '8A4B00', 'FEF3C7': 'FBEBD3', 'EF4444': 'B3261E', 'FEE2E2': 'FBE3E1', '3B82F6': '0C364E',
  'BEEFE3': 'DDF0E8', '029E73': '0B6B4F', 'FFE2E1': 'FBE3E1', 'F8413B': 'B3261E', 'FFDDB4': 'FBEBD3', 'FF5A02': '8A4B00',
  '017F5C': '7FE0BF', '006F43': '0F4A45', 'B7490F': 'FFC27A', '91390B': '4A3520', 'E5231D': 'FF8A80', '4B0907': '4A2230', '00A3BD': 'B9CAD3',
};

// Teintes de la charte 2.0 : créées dans une collection « Teintes v2 » si elles n'existent pas encore
const TEINTES = {
  'bleu/nuit': '08283A', 'bleu/profond': '0C364E', 'bleu/80': '12445F', 'bleu/70': '1A5270', 'bleu/60': '2B5A73', 'bleu/gris': '4C5E6A', 'bleu/40': '7F9AA8', 'bleu/brume': 'B9CAD3', 'bleu/10': 'DCE6EB',
  'turquoise/900': '043A33', 'turquoise/800': '05564C', 'turquoise/700': '06685C', 'turquoise/600': '07786A', 'turquoise/400': '4C9C92', 'turquoise/200': 'A9D2CB', 'turquoise/100': 'D9ECE8', 'turquoise/50': 'EEF6F4',
  'lime/600': 'C6EE2E', 'lime/500': 'D7FC41', 'lime/300': 'E4FD7A', 'lime/100': 'F0FEBD',
  'neutre/ligne': 'D5D8D2', 'neutre/toile': 'F2F2EE', 'neutre/blanc': 'FFFFFF',
};
async function teintes() {
  const cols = await figma.variables.getLocalVariableCollectionsAsync();
  let col = cols.find((c) => c.name === 'Teintes v2');
  if (!col) col = figma.variables.createVariableCollection('Teintes v2');
  const mode = col.modes[0].modeId;
  const existing = {};
  for (const id of col.variableIds) { const v = await figma.variables.getVariableByIdAsync(id); if (v) existing[v.name] = v; }
  let created = 0, updated = 0;
  for (const [name, h] of Object.entries(TEINTES)) {
    let v = existing[name];
    if (!v) { v = figma.variables.createVariable(name, col, 'COLOR'); created++; } else updated++;
    v.setValueForMode(mode, rgb(h, 1));
  }
  return { created, updated };
}
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
  if (msg.type === 'teintes') { const r = await teintes(); figma.notify(`Teintes v2 : ${r.created} créée(s), ${r.updated} mise(s) à jour`); figma.ui.postMessage({ type: 'teintes', ...r }); }
  if (msg.type === 'inventory') { figma.ui.postMessage({ type: 'inventory', data: await inventory() }); }
};
