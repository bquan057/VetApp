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

### Users (Rohinesh)

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

### Animals (Brandon)

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

### Comments (Emily)

Get comments for specified animalid

```
  GET localhost:8080/api/animals/{animalid}/comment
  GET localhost:8080/api/animals/123/comment
```

Add a new comment for a specified animalid

```
  POST localhost:8080/api/animals/{animalid}/comment
  POST localhost:8080/api/animals/123/comment
```

**NOTE: You must specify a JSON object in the Request Body **

```
  {
      "comment": "comment1"
  }
```

Updating a comment by comment id:

```
  PUT localhost:8080/api/animals/comment/{commentid}
  PUT localhost:8080/api/animals/comment/123
```

**NOTE: You must specify a JSON object in the Request Body **

```
  {
      "comment": "comment2”
  }
```

Delete a comment by commentid:

```
  DELETE localhost:8080/api/animals/comment/{commentid}
  DELETE localhost:8080/api/animals/comment/123
```

### Images (Rohinesh)

Get images for specified animalid

```
  GET localhost:8080/api/animals/{animalid}/images
  GET localhost:8080/api/animals/123/images
```

Add new image for a specified animalid

```
  POST localhost:8080/api/animals/{animalid}/images
  POST localhost:8080/api/animals/123/images
```

**NOTE: You must specify a JSON object in the Request Body **

```
  {
      "imagename": "Brandon1.jpg"
  }
```

Delete image by imageid

```
  DELETE localhost:8080/api/animals/images/{imageid}
  DELETE localhost:8080/api/animals/images/123
```

### Status (Brandon)

Get animal status for specified animalid
```
  GET localhost:8080/api/animals/{animalid}/status
  GET localhost:8080/api/animals/123/status
```

Add new status for a specified animalid

```
  POST localhost:8080/api/animals/{animalid}/status
  POST localhost:8080/api/animals/123/status
```

**NOTE: You must specify a JSON object in the Request Body **

```
  {
      "status": "happy"
  }
```

Updating a satus by animalid:

```
  PUT localhost:8080/api/animals/status/{statusid}
  PUT localhost:8080/api/animals/status/123
```

**NOTE: You must specify a JSON object in the Request Body **

```
  {
      "status": "sad"
  }
```

### Weight (Brandon)

Get weight history for specified animalid

```
  GET localhost:8080/api/animals/{animalid}/weight
  GET localhost:8080/api/animals/123/weight
```

Add to weight history for a specified animalid

```
  POST localhost:8080/api/animals/{animalid}/weight
  POST localhost:8080/api/animals/123/weight

```

**NOTE: You must specify a JSON object in the Request Body **

```
  {
      "weight": "25 lb"
  }
```

### Notifcations (Brandon)

Get all notifcations for specified userid

```
  GET localhost:8080/api/users/{userid}/notifications
  GET localhost:8080/api/users/123/notifications
```

Add a new notification for specified userid

```
  POST localhost:8080/api/users/{userid}/notifications
  POST localhost:8080/api/users/123/notifications

```
**NOTE: You must specify a JSON object in the Request Body **
```
  {
      "notification": "help Sora get her claws trimmed"
  }
```
Delete a notification for a specified notification id

``` DELETE localhost:8080/api/users/notifications/{notificationid} ```

### Prescription (Emily)

### Treatment (Rohinesh)

### Alert (Emily)


