DROP DATABASE IF EXISTS VETDATAH;
CREATE DATABASE VETDATAH;
USE VETDATAH;

DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
	UserID					integer	not null,
	UserName				varchar(30),
    Password				varchar(30),
    Role					varchar(30),
	primary key (UserId)
);

INSERT INTO USER (UserID, UserName, Password, Role)
VALUES
(123, "Instructor_1" , "pt@123", "ROLE_TEACHER"),
(234, "Admin_1", "pa", "ROLE_ADMIN"),
(345, "Technician", "pe", "ROLE_TECHNICIAN");

DROP TABLE IF EXISTS ANIMAL;
CREATE TABLE ANIMAL(
	AnimalID				integer	not null,
	AnimalName				varchar(30),
    Species					varchar(30),
    Status					varchar(30),
	primary key (AnimalID)
);

INSERT INTO ANIMAL (AnimalID, AnimalName, Species, Status)
VALUES
(123, "Schrodinger" , "cat", "available"),
(124, "Buck", "dog", "available"),
(125, "Harry", "horse", "available");

DROP TABLE IF EXISTS REQUEST;
CREATE TABLE REQUEST(
	RequestID				integer	not null auto_increment,
	AnimalID				integer	not null,
	TeacherID				integer not null,
    Status					varchar(30),
	primary key (RequestID),
    foreign key (AnimalID) references Animal(AnimalID),
    foreign key (TeacherID) references USER(UserID)
);

-- INSERT INTO REQUEST (requestID, AnimalID, TeacherID, Status)
-- VALUES
-- (1, 123, 123, 'new'),
-- (2, 124, 123, 'new'),
-- (3, 125, 123, 'new');

-- # Select animal by available
-- SELECT *
-- FROM ANIMAL
-- WHERE status = 'Available';

-- # Update animal status
-- UPDATE ANIMAL
-- SET status = 'Available'
-- WHERE animalid = '123';

-- # add request
-- INSERT INTO REQUEST (AnimalID, TeacherID, Status)
-- values ('123', '345', 'new' );

-- # getrequest by status
-- SELECT *
-- FROM REQUEST
-- WHERE status='new';

-- # update request by animalid and teacher id
-- UPDATE REQUEST
-- SET status = 'approved_by_admin'
-- WHERE animalid = '123' AND teacherid = '345';

-- # get requests by teacherid
-- SELECT *
-- FROM REQUEST
-- WHERE teacherId='345'
