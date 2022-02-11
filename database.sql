CREATE TABLE koalas (
	id SERIAL,
	name varchar(120),
	age integer,
	gender varchar(1),
	transfer boolean,
	notes varchar(500)
);

INSERT INTO "koalas" 
	("name", "age", "gender", "transfer", "notes") 
VALUES
	('Bob', '5', 'M', TRUE, 'Likes to be tickled'),
	('Susie', '2', 'F', TRUE, 'Has a white tail'),
	('Timmy', '1', 'M', TRUE, 'Sleeps all day'),
	('Joleen', '6', 'F', TRUE, 'The matriarch');
