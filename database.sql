
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "vegetables" (
	"id" SERIAL PRIMARY KEY,
	"veg_name" VARCHAR (30) NOT NULL,
	"water_needs" INTEGER,
	"images" VARCHAR(120) NOT NULL
);

INSERT INTO vegetables VALUES (1, 'Cilantro', 1, 'images/cilantro.png');
INSERT INTO vegetables VALUES (2, 'Bell Pepper', 1, 'images/bell pepper.jpeg');
INSERT INTO vegetables VALUES (3, 'Jalapeno Pepper', 1, 'images/jalapeno.jpeg');
INSERT INTO vegetables VALUES (4, 'Habanero', 1, 'images/habanero.jpeg');
INSERT INTO vegetables VALUES (5, 'Onion', 1, 'images/onion.jpeg');
INSERT INTO vegetables VALUES (6, 'Garlic', 1, 'images/garlic.jpeg');
INSERT INTO vegetables VALUES (7, 'Beefsteak Tomato', 2, 'images/beefsteak.jpeg');
INSERT INTO vegetables VALUES (8, 'Roma Tomato', 2, 'images/roma.jpg');

CREATE TABLE "garden" (
	"id" SERIAL PRIMARY KEY,
	"veggie_id" INTEGER REFERENCES vegetables,
	"user_id" INTEGER REFERENCES "user"
);
