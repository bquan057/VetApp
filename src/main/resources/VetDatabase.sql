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
    RFID					integer,
    Species					varchar(30),
    Availability			varchar(30),
    primary key (AnimalID)
);

INSERT INTO ANIMAL (AnimalId, AnimalName, Tattoo, CityTattoo, Age, Birthdate, Breed, Sex, CoatColour, SpecialInstructions, Diet, IsActive, RFID, Species, Availability)
VALUES
(123, 'Sora', "hellokitty", "hellokitty1", 1, '2021-12-01', 'Orange Tabby', 'female', 'black', 'N/A', 'vegan', true, 12, 'Orange Tabby', 'Available'),
(124, 'Bruno', "hellodoggy", "hellodoggy1", 2, '2020-07-01', 'italian greyhound', 'female', 'brown', 'N/A', 'vegan', false, 12, 'dog', 'Available'),
(125, 'Pengu', "hellopenguin", "hellopenguin", 3, '2019-12-01', 'black pengu', 'male', 'black', 'N/A', 'fish', true, 12, 'penguin', 'Available'),
(126, 'Cat', "hellokittykawaii", "hellokitty12", 1, '2018-12-01', 'Black cat', 'male', 'black', 'N/A', 'salmon', true, 12, 'blackkitty', 'Available');


DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
	UserId					integer	not null,
	Username				varchar(30),
    Password				varchar(30),
    Email					varchar(30),
    FName					varchar(30),
    LName					varchar(30),
    ActivationDate			varchar(30),
    IsActive				boolean,
    Role					varchar(30),
	primary key (UserId)
);

INSERT INTO USER (UserId, Username, Password, Email, FName, LName, ActivationDate, IsActive, Role)
VALUES
(12345, 'emilybunny100', 'sora123', 'emily.wang3@ucalgary.ca', 'Emily','Wang', '2021-12-01', true, 'Admin'),
(12346, 'brandonbunny100', 'brandon123', 'brandon.quan@ucalgary.ca', 'Brandon', 'Quan','2021-01-01', true, 'Teaching Technician'),
(12347, 'rohbunny100', 'roh123', 'roh.ram3@ucalgary.ca', 'Roh','Ram' ,'2021-05-01', true, 'Teaching Technician'),
(12348, 'sorabunny100', 'sora123', 'sora.wang3@ucalgary.ca', 'Sora','Wang' ,'2020-05-01', true, 'Health Technician'),
(12349, 'cringebunny100', 'cringe123', 'cringe3@ucalgary.ca', 'Cringe', 'Yasuo','2019-05-01', true, 'Student'),
(12350, 'yaldabunny100', 'yalda123', 'yalda3@ucalgary.ca', 'Yalda',' ','2019-05-01', true, 'Student'),
(12351, 'majidbunny100', 'majid123', 'majid@ucalgary.ca', 'Majid',' ','2016-05-01', true, 'Care Attendant');

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
    Location				varchar(30),
    Description				varchar(30),
    DiseaseId				integer,
    primary key (TimeStamp, UserId, AnimalId),
    foreign key (UserId) references USER(UserId),
    foreign key (AnimalId) references ANIMAL(AnimalId),
    foreign key (DiseaseId) references DISEASES(DiseaseId)
);

INSERT INTO STATUS (TimeStamp, UserId, AnimalId, Location, Description, DiseaseId)
VALUES
("2021-12-01 8:15:00", 12345, 123, 'Clinic', 'Doing well', 1),
("2021-12-02 8:35:40", 12345, 124, 'Field', 'Not doing well', 2),
("2021-12-03 10:35:00", 12345, 125, 'Clinic', 'Healthy', 3),
("2021-12-04 8:14:30", 12345, 126, 'Clinic', 'Not doing well', 4);

DROP TABLE IF EXISTS TREATMENT_METHODS;
CREATE TABLE TREATMENT_METHODS (
	TreatmentId				integer not null,
    TreatmentMethod			varchar(30),
    primary key (TreatmentId)
);

INSERT INTO TREATMENT_METHODS (TreatmentId, TreatmentMethod)
VALUES
(1, 'Eat vitamin C'),
(2, 'Surgery'),
(3, 'Pump fat'),
(4, 'Fix bones'),
(5, 'Bandaid');

DROP TABLE IF EXISTS TREATMENT;
CREATE TABLE TREATMENT (
	TimeStamp				DateTime,
    TechnicianId			integer,
    AttendantId				integer,
    AnimalId				integer,
    TreatmentId				integer,
    IsComplete				boolean,
    primary key (TimeStamp, TechnicianId, AnimalId, TreatmentId),
    foreign key (TechnicianId) references USER(UserId),
    foreign key (AttendantId) references USER(UserId),
    foreign key (AnimalId) references ANIMAL(AnimalId),
    foreign key (TreatmentId) references TREATMENT_METHODS(TreatmentId)
);

INSERT INTO TREATMENT (TimeStamp, TechnicianId, AttendantId, AnimalId, TreatmentId, IsComplete)
VALUES
("2021-12-01 8:15:00", 12347, 12351, 123, 1, true),
("2021-09-01 9:30:00", 12346, 12351, 124, 2, false),
("2021-12-01 10:45:00", 12348, 12351, 125, 1, false);

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
	NotificationId			integer not null auto_increment,
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
(123, 12346, "New"),
(124, 12347, "New"),
(125, 12346, "Approved_By_Admin"),
(126, 12347, "Approved_By_Technician");

DROP TABLE IF EXISTS ONGOING_CARE;
CREATE TABLE ONGOING_CARE (
	AnimalId				integer not null,
    Care					varchar(30),
    DueDate					varchar(30),
    primary key (AnimalId, Care),
    foreign key (AnimalId) references ANIMAL(AnimalId)
);

INSERT INTO ONGOING_CARE (AnimalId, Care, DueDate)
VALUES
(123, 'vaccine', '12-12-21'),
(124, 'rabies vaccine', '12-28-21'),
(125, 'annual check up', '12-29-21'),
(126, 'annual check up', '12-30-21');

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
SELECT * FROM ONGOING_CARE;

-- 2. A basic retrieval query. Selecting all animals that are available for lab requests.
SELECT * FROM ANIMAL WHERE Availability = "Available";

-- 3. A retrieval query with ordered results. Retrieve all upcoming appointments sorted by ascending order.
SELECT * FROM ONGOING_CARE ORDER BY DueDate;

-- 4. A nested retrieval query. Get the number of treatments of the type 'Eat vitamin C' that haven't been performed yet.
SELECT COUNT(*) FROM TREATMENT WHERE IsComplete = false AND TreatmentId IN (SELECT TreatmentId FROM TREATMENT_METHODS WHERE TreatmentMethod = "Eat vitamin C");
-- Get all comments for a specific animal where the user is an admin.
SELECT * FROM COMMENT WHERE AnimalId = 123 AND UserId in (SELECT UserId FROM USER WHERE Role = "Admin");

-- 5. A retrieval query using joined tables. Select animal names, ids, and booking statuses where the request booking status is new.
SELECT A.AnimalName, A.AnimalId, L.BookingStatus FROM ANIMAL AS A NATURAL JOIN LAB_REQUESTS AS L WHERE L.BookingStatus = "New";

-- 6. An update operation with any necessary triggers.
-- CREATE TRIGGER DISEASE_NOTIFICATION
-- BEFORE UPDATE ON STATUS
-- FOR EACH ROW
-- IF (NEW.DiseaseId IS NOT NULL) THEN	INSERT INTO NOTIFICATION (TimeStamp, Notification) VALUES (CURRENT_TIMESTAMP, "Disease Detected!");

DELIMITER //
CREATE TRIGGER REQUEST_CREATION
AFTER UPDATE ON ANIMAL
FOR EACH ROW
IF (Animal.Availability = "Requested") THEN
INSERT INTO LAB_REQUESTS(AnimalId, TeachingId, BookingStatus)
VALUES
(NEW.AnimalId, 12346, "New");
DELIMITER ;

UPDATE ANIMAL SET Availability = "Requested" WHERE AnimalId = 126;


-- CREATE TRIGGER REQUEST_CREATION 
-- 	FOR UPDATE
-- 	AS 
-- 	BEGIN
-- 		UPDATE LAB_REQUESTS
--         SET LAB_REQUESTS.AnimalId = ANIMAL.AnimalI,
--         LAB_REQUESTS.TeachingId = USER.UserId,
--         LAB_REQUESTS.BookingStatus = "New"
--         FROM ANIMAL, USER
--         WHERE LAB_REQUESTS.AnimalId = ANIMAL.AnimalId AND LAB_REQUESTS.TeachingId = USER.UserId
--     END


-- AFTER UPDATE ON ANIMAL
-- FOR EACH ROW
-- AS BEGIN




