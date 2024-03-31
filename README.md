# API de Gestion d'Articles de Plongée

**Statut** : En cours de développement

Cette API REST est conçue pour gérer les informations relatives aux catégories et articles sur le matériel de plongée. Elle permet de créer, lire, mettre à jour et supprimer des données concernant les différentes catégories de matériel ainsi que les articles spécifiques à chaque catégorie.

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
