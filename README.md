# Final-Project
607 final project

#Part 1: API Design
## Introduction

  - navigate to ```final-project-uofeng607-057-1\src\main\resources\application.properties```
  - Add your credentials:
  ```
  spring.datasource.url=jdbc:mysql://localhost:3306/VETDATA
  spring.datasource.username="YOUR USERNAME HERE"
  spring.datasource.password="YOUR PASSWORD HERE"
  ```
  - Navigate to ```final-project-uofeng607-057-1\src\main\resources\TestDB.sql``` using MySQL WorkBench of choice
  - run the database in MySQL
  - run the ```application.java``` file

## Endpoints

### Users

Get all Users:

```
  GET localhost:8080/api/user
```

Add new User:

```
  POST localhost:8080/api/user
```

**NOTE: You must specify a JSON object in the Request Body **

```
  {
    "username": "user1",
    "usertype": "admin",
    "email": "admin@ucalgary.ca",
    "activationdate": "2021-03-04"
  }
```

Update User:

```
  PUT localhost:8080/api/user
```

**NOTE: You must specify a JSON object in the Request Body **

```
  {
    "userid": "123",
    "username": "user1",
    "usertype": "admin2",
    "email": "admin@ucalgary.ca",
    "activationdate": "2021-03-04"
  }
```

Delete User:

```
  DELETE localhost:8080/api/user/{id}
  DELETE localhost:8080/api/user/123
```

### Animals

Get all animals

```
  GET localhost:8080/api/animals
```

Get by animalid

```
  GET localhost:8080/api/animals/animal_id/{animal_id}
  GET localhost:8080/api/animals/animal_id/123
```

Get by animal name

```
  GET localhost:8080/api/animals/name/{name}
  GET localhost:8080/api/animals/name/Brandon
```

Get by animal species

```
  GET localhost:8080/api/animals/species/{species}
  GET localhost:8080/api/animals/species/Human
```

Add Animal:

```
  POST localhost:8080/api/animals
```
**NOTE: You must specify a JSON object in the Request Body **
```
{
  "name": "Roh",
  "tattoo": null,
  "city_tattoo": null,
  "age": null,
  "birth_day": null,
  "birth_month": null,
  "birth_year": null,
  "breed": null,
  "sex": null,
  "coat_colour": null,
  "special_instructions": null,
  "diet": null,
  "is_active": null,
  "rdif_id": null,
  "has_microchip": null,
  "species": "Human"
  }
```

Update Animal:

```
  PUT localhost:8080/api/animals/{animal_id}
  PUT localhost:8080/api/animals/234
```

**NOTE: You must specify a JSON object in the Request Body **

```
{
  "name": "Roh",
  "tattoo": null,
  "city_tattoo": null,
  "age": null,
  "birth_day": null,
  "birth_month": null,
  "birth_year": null,
  "breed": null,
  "sex": null,
  "coat_colour": null,
  "special_instructions": null,
  "diet": null,
  "is_active": null,
  "rdif_id": null,
  "has_microchip": null,
  "species": "Human"
  }
```

Delete Animal:

```
  DELETE localhost:8080/api/animals/{animal_id}
  DELETE localhost:8080/api/animals/123
```

### Comments

### Images

### Status

### Weight

### Notifcations

### Prescription

### Treatment

### Alert


