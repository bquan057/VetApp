# Final-Project
607 final project

#Part 1: API Design
## Introduction

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

**NOTE: You must specify a JSON object in the Request Body

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

### Comments

### Images

### Status

### Weight

### Notifcations

### Prescription

### Treatment

### Alert


