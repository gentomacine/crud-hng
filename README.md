# CRUD-HNG

This is a simple crud operation application that can create a user with full name, Get a user from Db by name, Update a user by Id and delete a user by Id.

# Prerequisite
- Node
- Express
- MongoDb

# Installation

## Clone the repository

 [github](https://github.com/gentomacine/crud-hng.git) to clone crud-hng

```bash
npm  install 
```
starts and run the application
```bash
npm run server
```

# Usage
interact with these APIs using HTTP requests (GET, POST, PUT, DELETE) <br>  
via tools like Postman, or from your frontend application

# Authentication
No Authentication required

# Endpoints
Below are list of endpoints along with their HTTP methods and purposes
```bash
- **Create:**
- *Endpoint*: /api
- *Method*: POST
- Description: Creates a single user with just full_name and return the created user
```
```bash
- **Read:**
- *Endpoint*: /api
- *Method*: GET
- Description:  retrieve user data based on their full name. It is designed to perform <br>
                a case-insensitive search and return the users full name
```

```bash
- **Delete:**
- *Endpoint*: /api:Id
- *Method*: DELETE
- Description: Creates a single user with just full_name and return the created user
```
```bash
- **Update:**
- *Endpoint*: /api:userId
- *Method*: PUT
- Description: Creates a single user with just full_name and return the created user
```
# Deployment


# Documentation

