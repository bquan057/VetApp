DROP DATABASE IF EXISTS VETDATA;
CREATE DATABASE VETDATA;
USE VETDATA;

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS (
	UserID					integer	not null,
	UserName				varchar(30),
    UserType				varchar(30),
	Email					varchar(30),
    ActivationDate			varchar(30),
	primary key (UserId)
);

INSERT INTO USERS (UserID, UserName, UserType, Email, ActivationDate)
VALUES
(1, "user1" , "admin", "admin@ucalgary.ca", "2021-03-04"),
(2, "user2", "animal technician", "a.technician@ucalgary.ca", "2021-03-04"),
(3, "user3", "teacher", "teacher@ucalgary.ca",	"2021-04-05"),
(4, "user4", "student",	"student1@ucalgary.ca",	"2021-03-19");

DROP TABLE IF EXISTS ANIMALS;
CREATE TABLE ANIMALS (
	Animal_id							integer not null,
    Name								varchar(30),
    -- tattoo								varchar(30),
--     city_tattoo							varchar(30),
--     age									varchar(30),
--     birth_day							varchar(30),
--     birth_month							varchar(30),
--     birth_year							varchar(30),
--     breed								varchar(30),
--     sex									varchar(30),
--     coat_colour							varchar(30),
--     special_instructions				varchar(30),
--     diet								varchar(30),
--     is_active							varchar(30),
--     rdif_id								varchar(30),
--     has_microchip						varchar(30),
    Species								varchar(30),
    primary key (animal_id)
);

INSERT INTO ANIMALS (animal_id, name, species)
VALUES
(123,"Brandon","Human"),
(234,"Roh","Human"),
(345,"Emily","Human");

DROP TABLE IF EXISTS COMMENT;
CREATE TABLE COMMENT(
	CommentID					integer	not null,
	AnimalID					varchar(50)	not null,
	Comment                     varchar(50),
	primary key (CommentID)
);

INSERT INTO COMMENT(CommentID, AnimalID, Comment)
VALUES
(1, "1", "hello there!"),
(2, "2", "hello there!"),
(3, "3", "hello there!"),
(4, "4", "hello there!");

DROP TABLE IF EXISTS IMAGE;
CREATE TABLE IMAGE(
	ImageID					integer	not null,
	AnimalID				varchar(50)	not null,
	ImageName               varchar(50),
	primary key (ImageID)
);

INSERT INTO Image(ImageID, AnimalID, ImageName)
VALUES
(1, "123", "Brandon1.jpg"),
(2, "123", "Brandon2.jpg"),
(3, "234", "Roh1.jpg"),
(4, "345", "Emily1.jpg");