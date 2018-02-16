# pbsimulator
Picks and Bans Simulator pour Smite.
Première étape
Faire fonctionner l'application d'abords :
- Page d'accueil avec un tutoriel
- image de tous les dieux
- effet de sélection et lock des dieux
- vidéos de fond d'écran
- contrôleur simple et petit sur une fenêtre différente)

Deuxième étape:
Il faut trouver l'idée la plus simple pour faire en sorte que le contrôleur reconnaît une session quelque soit le support.
Idées :
- persister : Donc, créer une partie utilisateur avec un inscription, connexion
- ne pas persister : Donc, la session doit avoir un temps limite et génère un code temporaire(Faire Valider). On doit trouvé le moyen de stocker ça quelque part.
- les deux : On persiste la session que stock les données pendant quelques heures (4H par exemple). On peut proposer de garder la même session (bouton qui update le timer).

L'utilisateur entre son pseudo ou le nom de l'organisation. Ce nom va apparaître dans le title de l'onglet
le type radio c'est la liste des dieux et le bouton fait apparaître la liste
