# VetApp

This project was created by a group of three. Brandon Quan, Rohinesh Ram, and Emily Wang.

Front end consists of a React application that uses a Bulma CSS framework and Axios to make API calls.

API endpoints were created in Java using a Spring Boot framework and JPA.

Authentication was done using Auth0 and JWT Tokens.

The dummy database was created using MySQL.

# To Run:
- navigate to ```final-project-uofeng607-057-1\src\main\resources\application.properties```
- Add your credentials:
  ```
  spring.datasource.url=jdbc:mysql://localhost:3306/VETDATA
  spring.datasource.username="YOUR USERNAME HERE"
  spring.datasource.password="YOUR PASSWORD HERE"
  ```
- navigate to ```\final-project-uofeng607-057-1\FrontEnd\vet-application```
- ```npm install``` to download all required libraries for the Front End on your IDE of choice
- navigate to ```\final-project-uofeng607-057-1\src\main\resources```
- run the ```VetDatabase.sql``` script in MySQL Workbench
- navigate to ```\final-project-uofeng607-057-1\src\main\java\com\vetapp\application```
- run the Spring application: ```Application.java``` file
- on ```\final-project-uofeng607-057-1\FrontEnd\vet-application``` enter ```npm start``` to start the react application 
