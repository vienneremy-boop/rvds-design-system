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


## Nouveau (charte graphique 2.0, 08/10/2026)
- Le bouton **3 · Ajouter les teintes** crée la collection « Teintes v2 » : 9 bleus, 8 turquoises, 4 limes, 3 neutres. Relancer le bouton met simplement les valeurs à jour.
- L'aperçu remplace aussi les anciennes couleurs d'état (vert, orange, rouge, bleu vif génériques) par celles de la charte. Vérifier la liste avant d'appliquer.

## Seconde passe (08/10/2026) : re-câblage
La première passe a recoloré les anciennes primitives (violet, electric, pampas…) : les noms ne correspondent plus aux couleurs, et le mode sombre n'est pas celui du code.
- **4 · Re-câbler (aperçu)** liste, pour chaque token Semantic et pour chaque mode, la teinte v2 qu'il va viser. **Appliquer le re-câblage** fait pointer le Semantic (clair et sombre) vers la collection « Teintes v2 », avec les mêmes valeurs que `tokens.css`. Les couleurs d'état sont ajoutées aux teintes (etat/…).
- **5 · Archiver les anciennes couleurs** renomme en `_archives-v1/…` et masque les primitives couleur qui ne sont plus utilisées. Rien n'est supprimé : tu pourras les effacer toi-même plus tard.
- Ensuite, refais « Exporter l'inventaire » et colle-le dans Claude pour vérification.

### Si le re-câblage s'arrête en route
Depuis la version du 08/10, chaque valeur est écrite séparément : une valeur refusée par Figma n'arrête plus le reste, et le plugin affiche la liste des refus avec le message exact de Figma. Le cas le plus probable : sur l'offre gratuite (Starter), Figma ne laisse modifier que le premier mode d'une collection. Le mode clair passe, le mode sombre attendra Figma Pro.
