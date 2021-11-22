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
(123, "user1" , "admin", "admin@ucalgary.ca", "2021-03-04"),
(234, "user2", "animal technician", "a.technician@ucalgary.ca", "2021-03-04"),
(345, "user3", "teacher", "teacher@ucalgary.ca",	"2021-04-05"),
(546, "user4", "student",	"student1@ucalgary.ca",	"2021-03-19");

DROP TABLE IF EXISTS ANIMALS;
CREATE TABLE ANIMALS (
	AnimalID							varchar(100) not null,
    Name								varchar(30),
    Tattoo								varchar(30),
    CityTattoo							varchar(30),
    Age									varchar(30),
    BirthDay							varchar(30),
    BirthMonth							varchar(30),
    BirthYear							varchar(30),
    Breed								varchar(30),
    Sex									varchar(30),
    CoatColour							varchar(30),
    SpecialInstructions					varchar(30),
    Diet								varchar(30),
    IsActive							varchar(30),
    RdifId								varchar(30),
    HasMicrochip						varchar(30),
    Species								varchar(30),
    primary key (AnimalID)
);

INSERT INTO ANIMALS (AnimalID, Name, Species)
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
(123, "123", "hello there!"),
(234, "123", "hello there!"),
(345, "234", "hello there!"),
(456, "234", "hello there!");

DROP TABLE IF EXISTS IMAGE;
CREATE TABLE IMAGE(
	ImageID					integer	not null,
	AnimalID				varchar(50)	not null,
	ImageName               varchar(50),
	primary key (ImageID)
);

INSERT INTO IMAGE(ImageID, AnimalID, ImageName)
VALUES
(123, "123", "Brandon1.jpg"),
(234, "123", "Brandon2.jpg"),
(345, "234", "Roh1.jpg"),
(789, "345", "Emily1.jpg");

DROP TABLE IF EXISTS IMAGE;
CREATE TABLE IMAGE(
	ImageID					integer	not null,
	AnimalID				varchar(50)	not null,
	ImageName               varchar(50),
	primary key (ImageID)
);

INSERT INTO IMAGE(ImageID, AnimalID, ImageName)
VALUES
(123, "123", "Brandon1.jpg"),
(345, "123", "Brandon2.jpg"),
(456, "234", "Roh1.jpg"),
(789, "345", "Emily1.jpg");

DROP TABLE IF EXISTS TREATMENT;
CREATE TABLE TREATMENT(
	TreatmentID				integer	not null,
	AnimalID				varchar(50)	not null,
	TreatmentType           varchar(50),
	primary key (TreatmentID)
);

INSERT INTO TREATMENT(TreatmentID, AnimalID, TreatmentType )
VALUES
(123, "123", "Physical exam"),
(234, "123", "Blood work"),
(456, "234", "Da2pp"),
(789, "345", "dental cleaning");

DROP TABLE IF EXISTS STATUS;
CREATE TABLE STATUS(
	StatusID					integer	not null,
	AnimalID					varchar(50)	not null,
	Date                     	varchar(50),
    Description					varchar(50),
    Location					varchar(50),
    Status						varchar(50),
	primary key (StatusID)
);

INSERT INTO STATUS(StatusID, AnimalID, Date, Description, Location, Status)
VALUES
(123, "123", "2021-12-12", "Got stuck in a box.", "In Campus", "Available"),
(234, "234", "2021-11-01", "Foot is injured.", "Hospital", "Injured");

DROP TABLE IF EXISTS WEIGHT;
CREATE TABLE WEIGHT(
	WeightID					integer	not null,
	AnimalID					varchar(50)	not null,
    UserID						varchar(50)	not null,
	Date                     	varchar(50),
    Weight						varchar(50),
	primary key (WeightID)
);

INSERT INTO WEIGHT(WeightID, AnimalID, UserID, Date, Weight)
VALUES
(123, "123", "1", "2021-12-12", "4.2 kg"),
(234, "234", "2", "2021-11-01", "6.9 kg");

DROP TABLE IF EXISTS NOTIFICATION;
CREATE TABLE NOTIFICATION(
	NotificationID					integer	not null,
	AnimalID						varchar(50)	not null,
    UserID							varchar(50)	not null,
	Date                     		varchar(50),
    Notification					varchar(50),
	primary key (NotificationID)
);

INSERT INTO NOTIFICATION(NotificationID, AnimalID, UserID, Date, Notification)
VALUES
(123, "123", "1", "2021-12-12", "You've got mail!"),
(234, "234", "2", "2021-11-01", "Alert! The box has been opened!");

DROP TABLE IF EXISTS PRESCRIPTION;
CREATE TABLE PRESCRIPTION(
	PrescriptionID					integer	not null,
	AnimalID					    integer	not null,
	Prescription                    varchar(50),
	primary key (PrescriptionID)
);

INSERT INTO PRESCRIPTION(PrescriptionID, AnimalID, Prescription)
VALUES
(123, 1, "hello there!"),
(345, 2, "hello there!"),
(456, 3, "hello there!"),
(789, 4, "hello there!");

DROP TABLE IF EXISTS ALERT;
CREATE TABLE ALERT(
	AlertID					integer	not null,
	AnimalID				integer	not null,
	Alert                    varchar(50),
	primary key (AlertID)
);

INSERT INTO ALERT(AlertID, AnimalID, Alert)
VALUES
(123, 1, "hello there!"),
(345, 2, "hello there!"),
(456, 3, "hello there!"),
(789, 4, "hello there!");
