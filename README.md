# API de Gestion d'Articles de Plongée

**Statut** : En cours de développement

Cette API REST est conçue pour gérer les informations relatives aux catégories et aux articles de matériels de plongée. Elle permet à tous les utilisateurs de lire et de visualiser les données sur les différentes catégories de matériel ainsi que les articles spécifiques à chacune d'elles. Cependant, les opérations de création, mise à jour et suppression (CRUD) sont exclusivement réservées aux utilisateurs avec des privilèges administratifs.

L'API intègre un système d'authentification qui distingue les utilisateurs normaux des administrateurs. Tandis que le public général peut accéder librement aux informations en lecture seule, les administrateurs, après s'être authentifiés, disposent de fonctionnalités étendues pour gérer le contenu. Cette structure de contrôle d'accès garantit que seules les personnes autorisées peuvent modifier les informations, assurant ainsi l'intégrité et la sécurité des données gérées par l'API.

## Fonctionnalités

**Gestion des catégories**: Ajout, consultation, modification et suppression de catégories.  
**Gestions des Articles**: Ajout, consultation, modification et suppression d'articles liés aux catégories de matériel de plongée.

## Technologies Utilisées

- **Node.js** : Environnement d'exécution côté serveur.
- **Express.js**: Framework pour créer es applicatiosn web avce Node.js
- **PostgreSQL**: Système de gestion de base de données relationelles
- **Sequelize**: ORM pour Node.js, utilisé pour interagir avec PostgreSQL

## Structure de l'API

### Endpoint des Catégories

- **GET /categories** : Récupérer toutes les catégories.
- **GET /categories/{id}** : Récupérer une catégorie spécifique par son ID.
- **POST /categories** : Ajouter une nouvelle catégorie.
- **PATCH /categories/{id}** : Mettre à jour une catégorie spécifique.
- **DELETE /categories/{id}** : Supprimer une catégorie spécifique.

### Endpoint des Articles

- **GET /articles** : Récupérer tous les articles.
- **GET /articles/{id}** : Récupérer un article spécifique par son ID.
- **POST /articles** : Ajouter un nouvel article.
- **PATCH /articles/{id}** : Mettre à jour un article spécifique.
- **DELETE /articles/{id}** : Supprimer un article spécifique.
