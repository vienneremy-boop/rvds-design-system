# RVDS · Design system « le point final »

Le design system de [remyvienne.fr](https://remyvienne.fr) : il naît dans Figma, passe par des tokens partagés avec le code, et vit en composants React documentés dans Storybook.

**Storybook en ligne** : https://main--6a007879e04efd70506f43d1.chromatic.com

## Le flow

Une seule source de vérité, de Figma jusqu'aux pages du site.

1. **Figma** : la charte, les variables (couleurs, typographies, espacements) et les composants sont d'abord conçus dans Figma. Le dossier `figma-plugin-rvds-v2` contient le plugin qui a basculé tout le fichier vers l'identité « le point final ».
2. **Les tokens** (`src/tokens.css`) : les variables Figma deviennent un fichier unique, en trois couches : primitives, rôles (texte, surface, action), composants. Le mode sombre est un jeu de tokens.
3. **Les composants** (`src/components`) : atomes, molécules, organismes, codés en React avec leurs variantes et leurs états.
4. **Storybook** : chaque composant est documenté, avec un contrôle d'accessibilité dans chaque story (addon a11y).
5. **La revue visuelle** : chaque mise en production publie Storybook sur Chromatic et compare les changements visuels.
6. **Le site** : les pages de remyvienne.fr consomment les mêmes tokens et composants.

## La charte en bref

Bleu profond `#0C364E`, turquoise `#07786A` (un seul accent par écran), lime `#D7FC41` (uniquement sur bleu), toile `#F2F2EE`. Outfit pour parler, JetBrains Mono pour préciser. Le point : un carré coupé à 60° en bas à droite, décliné sur chaque composant. Aucun arrondi.

## Règles

- WCAG 2.2 AA : contrastes vérifiés, focus visible, cibles de 44 px, mouvement réduit respecté.
- Le mouvement passe par des tokens (`--motion-sweep` pour le balayage à 60° des boutons).

## Lancer en local

```bash
npm install
npm run storybook
```

Storybook s'ouvre sur http://localhost:6006.

## Licence

Code des composants : libre de lecture et d'inspiration. La marque (nom, logo, charte « le point final ») reste la propriété de Rémy Vienne.
