CREATE TABLE Rating (
	id INT PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

-- a) Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela. 
-- b)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
1,
"Muito bom",
7.5,
2
);

SELECT * FROM Rating;

-- c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-raquel-burger`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))


INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
2,
"Muito bom",
7.5,
1
);

-- d)
ALTER TABLE Movies DROP COLUMN rating;

-- e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-raquel-burger`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

DELETE FROM Movies 
WHERE id = 2;

-- 2
CREATE TABLE MovieCast(
	movie_id INT,
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a) esta tabela junta as informações da tabela ator e da tabela filmes, podendendo assim vincula-los

-- b) 
INSERT INTO MovieCast(movie_id, actor_id) VALUES 
(4, "001"), (2, "004"), (3, "008"), (2, "001"), (4, "008"), (3, "004");

-- c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-raquel-burger`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

-- d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-raquel-burger`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

DELETE FROM Actor
WHERE id = "001";

-- 3
SELECT * FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- a) a Query une os elementos da tabela Movie e Rating que possuem o mesmo id

-- b
SELECT name, Movies.id, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- 4
-- a)
SELECT m.id as movie_id, m.name, r.rate as rating, r.comment as rating_comment
from Movies AS m
LEFT JOIN Rating r ON m.id = r.movie_id;

-- b)
SELECT m.id as movie_id, m.name, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;


