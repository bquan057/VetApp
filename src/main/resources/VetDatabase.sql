DROP DATABASE IF EXISTS VETDATA;
CREATE DATABASE VETDATA;
USE VETDATA;

DROP TABLE IF EXISTS ANIMAL;
CREATE TABLE ANIMAL (
	AnimalId				integer auto_increment not null,
    AnimalName				varchar(30),
    Tattoo					varchar(30),
    Age						integer,
    Birthdate				varchar(30),
    Breed					varchar(30),
    Sex						varchar(30),
	CoatColour				varchar(30),
    IsActive				boolean,
    RFID					integer,
    Species					varchar(30),
    Availability			varchar(30),
    primary key (AnimalID)
);

INSERT INTO ANIMAL (AnimalId, AnimalName, Tattoo, Age, Birthdate, Breed, Sex, CoatColour, IsActive, RFID, Species, Availability)
VALUES
(123, 'Sora', "hellokitty", 1, '2021-12-01', 'Orange Tabby', 'female', 'black', true, 12, 'Cat', 'Available'),
(124, 'Bruno', "hellodoggy", 2, '2020-07-01', 'italian greyhound', 'female', 'brown', false, 12, 'Dog', 'Available'),
(125, 'Pengu', "hellopenguin", 3, '2019-12-01', 'black pengu', 'male', 'black', false, 12, 'Penguin', 'Available'),
(126, 'Cat', "hellokittykawaii", 1, '2018-12-01', 'Black cat', 'male', 'black', true, 12, 'Cat', 'Available');

DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
	UserId					integer	auto_increment not null,
	Username				varchar(30),
    Password				varchar(30),
    Email					varchar(30),
    FName					varchar(30),
    LName					varchar(30),
    ActivationDate			DateTime,
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
    foreign key (UserId) references USER(UserId)
    ON DELETE CASCADE
);

ALTER TABLE COMMENT ADD 
CONSTRAINT fk_Comment_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
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
    foreign key (UserId) references USER(UserId)
    ON DELETE CASCADE
);

ALTER TABLE STUDENT_COMMENT ADD 
CONSTRAINT fk_StudentComment_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
INSERT INTO STUDENT_COMMENT (TimeStamp, UserId, AnimalId, Comment)
VALUES
("2021-12-01 8:15:00", 12349, 123, 'Purrs too much'),
("2021-12-02 8:35:40", 12350, 124, 'Farts smell'),
("2021-12-03 10:35:00", 12349, 125, 'Needs to eat less'),
("2021-12-04 8:14:30", 12349, 126, 'Obese');

DROP TABLE IF EXISTS IMAGE;
CREATE TABLE IMAGE (
    ImageId                 integer auto_increment not null,
    CreationDate            DateTime,
    FileUrl                 varchar(1000),
    AnimalId                integer,
    primary key (ImageId)
);

ALTER TABLE IMAGE ADD 
CONSTRAINT fk_Image_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
INSERT INTO IMAGE (ImageId, CreationDate, FileUrl, AnimalId)
VALUES
(1, '2021-12-01', 'https://cdn.vox-cdn.com/thumbor/Z6PAPzGfqK5n4Q7oBnUk5aNOL6Q=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22814568/jbareham_210827_ecl1072_summer_streaming_2021_anime.jpg', 123),
(2,  '2021-12-05', 'https://i.ytimg.com/vi/dWnhkEFRzFQ/maxresdefault.jpg', 124),
(3, '2021-12-07', 'https://cdn.mos.cms.futurecdn.net/eVyt9jnUrLBSvSwW6pScj9.jpg', 123);

DROP TABLE IF EXISTS PRESCRIPTION;
CREATE TABLE PRESCRIPTION (
	UserId					integer not null,
    AnimalId				integer not null,
    PrescriptionName		varchar(30),
    primary key (UserId, AnimalId, PrescriptionName),
    foreign key (UserId) references USER(UserId)
    ON DELETE CASCADE
);

ALTER TABLE PRESCRIPTION ADD 
CONSTRAINT fk_Prescription_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
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
(4, 'Strokes'),
(5, 'N/A');


DROP TABLE IF EXISTS STATUS;
CREATE TABLE STATUS (
	TimeStamp				DateTime not null,
    UserId					integer not null,
    AnimalId				integer not null,
    Location				varchar(30),
    Description				varchar(30),
    DiseaseId				integer,
    primary key (TimeStamp, UserId, AnimalId),
    foreign key (UserId) references USER(UserId) ON DELETE CASCADE,
    foreign key (DiseaseId) references DISEASES(DiseaseId)
);

ALTER TABLE STATUS ADD 
CONSTRAINT fk_STATUS_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
INSERT INTO STATUS (TimeStamp, UserId, AnimalId, Location, Description, DiseaseId)
VALUES
("2021-12-01 8:15:00", 12345, 123, 'Clinic', 'Doing well', 5),
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
    Status					varchar(30),
    primary key (TimeStamp, TechnicianId, AnimalId, TreatmentId),
    foreign key (TechnicianId) references USER(UserId) ON DELETE CASCADE, 
    foreign key (AttendantId) references USER(UserId) ON DELETE CASCADE,
    foreign key (TreatmentId) references TREATMENT_METHODS(TreatmentId)
);

ALTER TABLE TREATMENT ADD 
CONSTRAINT fk_Treatment_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
ALTER TABLE TREATMENT ADD 
CONSTRAINT fk_Treatment_Method
      FOREIGN KEY (TreatmentId)
      REFERENCES TREATMENT_METHODS(TreatmentId)
      ON UPDATE RESTRICT;
      
INSERT INTO TREATMENT (TimeStamp, TechnicianId, AttendantId, AnimalId, TreatmentId, Status)
VALUES
("2021-12-01 8:15:00", 12348, 12351, 123, 1, 'Complete');

DROP TABLE IF EXISTS WEIGHT;
CREATE TABLE WEIGHT (
	AnimalId				integer not null,
    Date					varchar(30),
    Weight					double,
    primary key (AnimalId, Date)
);

ALTER TABLE WEIGHT ADD 
CONSTRAINT fk_Weight_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
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
    foreign key (UserId) references USER(UserId) ON DELETE CASCADE
);

-- ALTER TABLE STATUS ADD 
-- CONSTRAINT fk_Notifications_User
--       FOREIGN KEY (UserId)
--       REFERENCES USER(UserId)
--       ON UPDATE NO ACTION;

INSERT INTO USER_NOTIFICATIONS (NotificationId, UserId)
VALUES
(1, 12346),
(2, 12347),
(3, 12347);

DROP TABLE IF EXISTS LAB_REQUESTS;
CREATE TABLE LAB_REQUESTS (
	RequestId				integer not null auto_increment,
	AnimalId				integer not null,
    TeachingId				integer not null,
    BookingStatus			varchar(30),
    primary key (RequestId),
    foreign key (TeachingId) references USER(UserId) ON DELETE CASCADE
);

ALTER TABLE LAB_REQUESTS ADD 
CONSTRAINT fk_LabRequests_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
-- INSERT INTO LAB_REQUESTS (RequestId, AnimalId, TeachingId, BookingStatus)
-- VALUES
-- (450, 123, 12346, "New"),
-- (451, 124, 12347, "New"),
-- (452, 125, 12346, "Approved_By_Admin"),
-- (453, 126, 12347, "Approved_By_Technician");

DROP TABLE IF EXISTS ONGOING_CARE;
CREATE TABLE ONGOING_CARE (
	AnimalId				integer not null,
    Care					varchar(30),
    DueDate					varchar(30),
    primary key (AnimalId, Care)
);

ALTER TABLE ONGOING_CARE ADD 
CONSTRAINT fk_OngoingCare_Animal 
      FOREIGN KEY (AnimalId)
      REFERENCES ANIMAL(AnimalId)
      ON DELETE CASCADE;
      
INSERT INTO ONGOING_CARE (AnimalId, Care, DueDate)
VALUES
(123, 'vaccine', '2021-12-15'),
(124, 'rabies vaccine', '2021-12-19'),
(125, 'annual check up', '2021-12-20'),
(126, 'annual check up', '2021-12-25');
