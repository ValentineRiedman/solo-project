
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

INSERT INTO vegetables VALUES (1, 'Cilantro', 1);
INSERT INTO vegetables VALUES (2, 'Bell Pepper', 1);
INSERT INTO vegetables VALUES (3, 'Jalapeno Pepper', 1);
INSERT INTO vegetables VALUES (4, 'Habanero', 1);
INSERT INTO vegetables VALUES (5, 'Onion', 1);
INSERT INTO vegetables VALUES (6, 'Garlic', 1);
INSERT INTO vegetables VALUES (7, 'Beefsteak Tomato', 2);
INSERT INTO vegetables VALUES (8, 'Roma Tomato', 2);

