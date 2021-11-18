CREATE DATABASE VETDATA;
USE VETDATA;

CREATE TABLE USERS (
	UserID					integer	not null,
    UserType				varChar(20),
	UserName				varchar(10),
	Email					varchar(30),
    ActivationDate			varchar(10),
	primary key (UserId)
);

INSERT INTO USERS (UserID, UserName, UserType, Email, ActivationDate)
VALUES
(1, "user1" , "admin", "admin@ucalgary.ca", "2021-03-04"),
(2, "user2", "animal technician", "a.technician@ucalgary.ca", "2021-03-04"),
(3, "user3", "teacher", "teacher@ucalgary.ca",	"2021-04-05"),
(4, "user4", "student",	"student1@ucalgary.ca",	"2021-03-19");
