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
    Animal_status						varchar(30),
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

INSERT INTO ANIMALS (animal_id, name, animal_status, species)
VALUES
("123","Brandon","Stressed", "Human"),
("234","Roh","Healthy", "Human"),
("345","Emily","Healthy", "Human");