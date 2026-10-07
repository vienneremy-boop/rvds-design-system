# Plugin Figma « RVDS · Passage à l'identité v2 »

Met à jour les variables du fichier Portfolio Brand (DS) vers l'identité « le point final » :
violet → turquoise #07786A, encre → bleu profond #0C364E, lavandes → teintes turquoise,
Fraunces → Outfit (variables de police et styles de texte).

## Installer (une fois, Figma desktop)
1. Ouvrir le fichier ⚛️ Portfolio Brand Presets (DS).
2. Menu Plugins → Development → Import plugin from manifest… → choisir `manifest.json` de ce dossier.

## Utiliser
1. Plugins → Development → RVDS · Passage à l'identité v2.
2. « 1 · Aperçu » : la liste montre chaque changement (rien n'est encore modifié).
3. « 2 · Appliquer ». Tout est annulable avec ⌘Z.

Seules les valeurs brutes sont modifiées (en pratique : la collection _Primitives) ; les variables
sémantiques qui pointent dessus suivent automatiquement.
« Exporter l'inventaire » sort toutes les variables en JSON : à coller dans Claude pour régler
finement les cas particuliers (rôles qui changent, comme le lime sur fond clair).
