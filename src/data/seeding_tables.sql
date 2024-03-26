BEGIN; 

INSERT INTO category 
(id,name) 
VALUES 
(1,'Masques'),
(2,'Palmes'),
(3,'Combinaisons'),
(4,'Stab'),
(5,'Détendeurs'),
(6,'Accessoires');

INSERT INTO "article"
(title, description, category_id)
VALUES 
('Type de Masques', 'Découvrez les différents types de masques de plongée et comment choisir le bon pour vos besoins.', 1),
('Choisir son Masque', 'Conseils pour sélectionner le masque de plongée idéal en fonction de votre visage et de votre pratique.', 1),
('Types de Palmes', 'Un guide sur les différents types de palmes et leurs caractéristiques.', 2),
('Sélectionner ses Palmes', 'Comment choisir les palmes qui conviennent le mieux à votre style de plongée.', 2),
('Type de Combinaisons', 'Découvrez les différents types de combinaisons de plongée et comment choisir le bon pour vos besoins.', 3),
('Choisir sa combinaison', 'Conseils pour sélectionner sa combinaison.', 3),
('Types de Stab', 'Un guide sur les différents types de stabs et leurs caractéristiques.', 4),
('Sélectionner sa stab', 'Comment choisir sa stab.', 4),
('Types de Détendeurs', 'Un guide sur les différents types de détendeurs et leurs caractéristiques.', 5),
('Sélectionner son détendeur', 'Comment choisir son détendeur', 5),
('Lampes', 'Chosir sa lampe.', 6),
('Sélectionner son parachute', 'Comment choisir son parachute', 6);

SELECT setval('category_id_seq', (SELECT MAX(id) from "category"));
SELECT setval('article_id_seq', (SELECT MAX(id) from "article"));

COMMIT;