DROP DATABASE IF EXISTS VETDATA;
CREATE DATABASE VETDATA;
USE VETDATA;

DROP TABLE IF EXISTS ANIMAL;
CREATE TABLE ANIMAL (
	AnimalId				integer not null,
    AnimalName				varchar(30),
    Tattoo					varchar(30),
    CityTattoo				varchar(30),
    Age						integer,
    Birthdate				varchar(30),
    Breed					varchar(30),
    Sex						varchar(30),
	CoatColour				varchar(30),
    SpecialInstructions		varchar(30),
    Diet					varchar(30),
    IsActive				boolean,
    RDIF					integer,
    HasMicrochip			boolean,
    Species					varchar(30),
    primary key (AnimalID)
);

INSERT INTO ANIMAL (AnimalId, AnimalName, Tattoo, CityTattoo, Age, Birthdate, Breed, Sex, CoatColour, SpecialInstructions, Diet, IsActive, RDIF, HasMicrochip, Species)
VALUES
(123, 'Sora', "hellokitty", "hellokitty1", 1, '2021-12-01', 'Orange Tabby', 'female', 'black', 'N/A', 'vegan', true, 12, true, 'Orange Tabby'),
(124, 'Bruno', "hellodoggy", "hellodoggy1", 2, '2020-07-01', 'italian greyhound', 'female', 'brown', 'N/A', 'vegan', false, 12, true, 'dog'),
(125, 'Pengu', "hellopenguin", "hellopenguin", 3, '2019-12-01', 'black pengu', 'male', 'black', 'N/A', 'fish', true, 12, false, 'penguin'),
(126, 'Cat', "hellokittykawaii", "hellokitty12", 1, '2018-12-01', 'Black cat', 'male', 'black', 'N/A', 'salmon', true, 12, false, 'blackkitty');


DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
	UserId					integer	not null,
	UserName				varchar(30),
    Password				varchar(30),
    Email					varchar(30),
    FName					varchar(30),
    ActivationDate			varchar(30),
    Role					varchar(30),
	primary key (UserId)
);

INSERT INTO USER (UserId, UserName, Password, Email, FName, ActivationDate, Role)
VALUES
(12345, 'emilybunny100', 'sora123', 'emily.wang3@ucalgary.ca', 'Emily', '2021-12-01', 'Admin'),
(12346, 'brandonbunny100', 'brandon123', 'brandon.quan@ucalgary.ca', 'Brandon', '2021-01-01', 'Teaching Technician'),
(12347, 'rohbunny100', 'roh123', 'roh.ram3@ucalgary.ca', 'Roh', '2021-05-01', 'Teaching Technician'),
(12348, 'sorabunny100', 'sora123', 'sora.wang3@ucalgary.ca', 'Sora', '2020-05-01', 'Health Technician'),
(12349, 'cringebunny100', 'cringe123', 'cringe3@ucalgary.ca', 'Cringe', '2019-05-01', 'Student'),
(12350, 'yaldabunny100', 'yalda123', 'yalda3@ucalgary.ca', 'Yalda', '2019-05-01', 'Student'),
(12351, 'majidbunny100', 'majid123', 'majid@ucalgary.ca', 'Majid', '2016-05-01', 'Care Attendant');

DROP TABLE IF EXISTS COMMENT;
CREATE TABLE COMMENT (
	TimeStamp				DateTime not null,
	UserId					integer not null,
    AnimalId				integer not null,
    Comment					varchar(300),
	primary key (TimeStamp, UserId, AnimalId),
    foreign key (UserId) references USER(UserId),
    foreign key (AnimalId) references ANIMAL(AnimalId)
);

INSERT INTO COMMENT (TimeStamp, UserId, AnimalId, Comment)
VALUES
("2021-12-01 8:15:00", 12345, 123, 'Purrs too much'),
("2021-12-02 8:35:40", 12346, 124, 'Farts smell'),
("2021-12-03 10:35:00", 12347, 125, 'Needs to eat less'),
("2021-12-04 8:14:30", 12348, 126, 'Obese');

DROP TABLE IF EXISTS STUDENT_COMMENT;
CREATE TABLE STUDENT_COMMENT (
	TimeStamp				DateTime not null,
	UserId					integer not null,
    AnimalId				integer not null,
    Comment					varchar(300),
	primary key (TimeStamp, UserId, AnimalId),
    foreign key (UserId) references USER(UserId),
    foreign key (AnimalId) references ANIMAL(AnimalId)
);

INSERT INTO STUDENT_COMMENT (TimeStamp, UserId, AnimalId, Comment)
VALUES
("2021-12-01 8:15:00", 12349, 123, 'Purrs too much'),
("2021-12-02 8:35:40", 12350, 124, 'Farts smell'),
("2021-12-03 10:35:00", 12349, 125, 'Needs to eat less'),
("2021-12-04 8:14:30", 12349, 126, 'Obese');

DROP TABLE IF EXISTS IMAGE;
CREATE TABLE IMAGE (
	ImageId					integer not null,
    ImageType				varchar(30),
    CreationDate			varchar(30),
    FileName				varchar(30),
    AnimalId				integer,
    primary key (ImageId),
    foreign key (AnimalId) references ANIMAL(AnimalId)
);

INSERT INTO IMAGE (ImageId, ImageType, CreationDate, FileName, AnimalId)
VALUES
(1, 'jpg', '2021-12-01', 'B&Wcat.jpg', '123'),
(2, 'jpg', '2021-12-05', 'kitty.jpg', '124'),
(3, 'jpg', '2021-12-07', '123fun.jpg', '123');

DROP TABLE IF EXISTS PRESCRIPTION;
CREATE TABLE PRESCRIPTION (
	UserId					integer not null,
    AnimalId				integer not null,
    PrescriptionName		varchar(30),
    primary key (UserId, AnimalId, PrescriptionName),
    foreign key (UserId) references USER(UserId),
    foreign key (AnimalId) references ANIMAL(AnimalId)
);

INSERT INTO PRESCRIPTION (UserId, AnimalId, PrescriptionName)
VALUES
(12347, 123, 'adderall'),
(12348, 124, 'melatonin'),
(12348, 125, 'tricyclen');

DROP TABLE IF EXISTS DISEASES;
CREATE TABLE DISEASES (
	DiseaseId				integer not null,
    DiseaseName				varchar(30),
    primary key (DiseaseId)
);

INSERT INTO DISEASES (DiseaseId, DiseaseName)
VALUES
(1, 'Scurvy'),
(2, 'Cancer'),
(3, 'Heart Disease'),
(4, 'Strokes');

DROP TABLE IF EXISTS STATUS;
CREATE TABLE STATUS (
	TimeStamp				DateTime not null,
    UserId					integer not null,
    AnimalId				integer not null,
    Status					varchar(30),
    Location				varchar(30),
    Description				varchar(30),
    DiseaseId				integer,
    primary key (TimeStamp, UserId, AnimalId),
    foreign key (UserId) references USER(UserId),
    foreign key (AnimalId) references ANIMAL(AnimalId),
    foreign key (DiseaseId) references DISEASES(DiseaseId)
);

INSERT INTO STATUS (TimeStamp, UserId, AnimalId, Status, Location, Description, DiseaseId)
VALUES
("2021-12-01 8:15:00", 12345, 123, 'Alive', 'Clinic', 'Doing well', 1),
("2021-12-02 8:35:40", 12345, 124, 'Concussion', 'Field', 'Not doing well', 2),
("2021-12-03 10:35:00", 12345, 125, 'Fat', 'Clinic', 'Healthy', 3),
("2021-12-04 8:14:30", 12345, 126, 'Obese', 'Clinic', 'Not doing well', 4);

DROP TABLE IF EXISTS TREATMENT_METHODS;
CREATE TABLE TREATMENT_METHODS (
	MethodId				integer not null,
    TreatmentMethod			varchar(30),
    primary key (MethodId)
);

INSERT INTO TREATMENT_METHODS (MethodId, TreatmentMethod)
VALUES
(1, 'Eat vitamin C'),
(2, 'Surgery'),
(3, 'Pump fat'),
(4, 'Fix bones'),
(5, 'Bandaid');

DROP TABLE IF EXISTS TREATMENT;
CREATE TABLE TREATMENT (
	TreatmentId				integer not null,
	TimeStamp				DateTime,
    TechnicianId			integer,
    AttendantId				integer,
    AnimalId				integer,
    MethodId				integer,
    IsComplete				boolean,
    primary key (TreatmentId),
    foreign key (TechnicianId) references USER(UserId),
    foreign key (AttendantId) references USER(UserId),
    foreign key (AnimalId) references ANIMAL(AnimalId),
    foreign key (MethodId) references TREATMENT_METHODS(MethodId)
);

INSERT INTO TREATMENT (TreatmentId, TimeStamp, TechnicianId, AttendantId, AnimalId, MethodId, IsComplete)
VALUES
(123456, "2021-12-01 8:15:00", 12347, 12351, 123, 1, true),
(456789, "2021-09-01 9:30:00", 12346, 12351, 124, 2, false);

DROP TABLE IF EXISTS WEIGHT;
CREATE TABLE WEIGHT (
	AnimalId				integer not null,
    Date					varchar(30),
    Weight					double,
    primary key (AnimalId, Date),
    foreign key (AnimalId) references ANIMAL(AnimalId)
);

INSERT INTO WEIGHT (AnimalId, Date, Weight)
VALUES
(123, '2021-12-01', 20.0),
(124, '2021-12-04', 25.0),
(125, '2021-12-05', 12.0),
(126, '2020-12-08', 10.0);

DROP TABLE IF EXISTS NOTIFICATION;
CREATE TABLE NOTIFICATION (
	NotificationId			integer not null,
    TimeStamp				DateTime,
    Notification			varchar(30),
    primary key (NotificationId)
);

INSERT INTO NOTIFICATION (NotificationId, TimeStamp, Notification)
VALUES
(1, "2021-12-01 8:15:00", 'Check Sora'),
(2, "2021-12-01 10:09:00", 'Check fractures'),
(3, "2020-12-11 12:18:00", 'Check heart rate');

DROP TABLE IF EXISTS USER_NOTIFICATIONS;
CREATE TABLE USER_NOTIFICATIONS (
	NotificationId			integer not null,
    UserId					integer not null,
    primary key (NotificationId, UserId),
    foreign key (NotificationId) references NOTIFICATION(NotificationId),
    foreign key (UserId) references USER(UserId)
);

INSERT INTO USER_NOTIFICATIONS (NotificationId, UserId)
VALUES
(1, 12346),
(2, 12347),
(3, 12347);

DROP TABLE IF EXISTS LAB_REQUESTS;
CREATE TABLE LAB_REQUESTS (
	AnimalId				integer not null,
    TeachingId				integer not null,
    BookingStatus			varchar(30),
    primary key (AnimalId, TeachingId),
    foreign key (AnimalId) references ANIMAL(AnimalId),
    foreign key (TeachingId) references USER(UserId)
);

INSERT INTO LAB_REQUESTS (AnimalId, TeachingId, BookingStatus)
VALUES
(123, 12346, "Booked"),
(124, 12347, "Available"),
(125, 12346, "Booked"),
(126, 12347, "Available");

SELECT * FROM ANIMAL;
SELECT * FROM USER;
SELECT * FROM COMMENT;
SELECT * FROM STUDENT_COMMENT;
SELECT * FROM IMAGE;
SELECT * FROM PRESCRIPTION;
SELECT * FROM DISEASES;
SELECT * FROM STATUS;
SELECT * FROM TREATMENT_METHODS;
SELECT * FROM TREATMENT;
SELECT * FROM WEIGHT;
SELECT * FROM NOTIFICATION;
SELECT * FROM USER_NOTIFICATIONS;
SELECT * FROM LAB_REQUESTS;
