Getting started with this repo.
```
	> git clone https://github.com/utkarshkpal/auth-task.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
  
```


I have implemented a token based authentication system.When the user successfully signin a web token is generated.
On the client side store this token in LocalStorage. And for accessing a protected route you have to pass this token in the header 
of the request.



Using the api

```
 POST  route-  localhost:3090/signup

pass this in body (content type json)
{   
	"email":"admin",
	"password":"password",
	"name":"Utkarsh Kandpal",
	"dateOfBirth":"1993-09-24",
	"status":"hey there"

}

response

{
  "success": "true",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OTE3NzFiNDc2MTQ2ZjFmZjcxZDc2NTYiLCJpYXQiOjE0OTQ3MDg2NjA5MDl9.m8YTKqh5Ty2J7qIal9dP38ZNSDDC6UX6NRiQRzHLlAk"
}

```

```
POST route localhost:3090/signin
req
{   
	"email":"admin",
	"password":"password"

}
response
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OTE3NzRlYjNlNjYwYTIwMzQyMjFiNmEiLCJpYXQiOjE0OTQ3MDk0OTA3ODd9.eRxl43CSt1bISrRpBJEZMq9E-ETURamb4G6AMivF7zA"
}

```

```

GET route- localhost:3090/user/591771b476146f1ff71d7656

response

{
  "_id": "591771b476146f1ff71d7656",
  "email": "admin",
  "password": "$2a$10$nDYaE.kyyUjrQp6hMTHhVukDOq8G3CoSg8lgCju7pA6fmkas/1eFi",
  "name": "Utkarsh Kandpal",
  "dateOfBirth": "1993-09-24T00:00:00.000Z",
  "status": "hey there",
  "__v": 0
}

```


```

POST route-  localhost:3090/update/591771b476146f1ff71d7656

{   
	"email":"admin1",
	"name":"Utkarsh Kandpal",
	"dateOfBirth":"1993-09-24",
	"status":"hey there updated"

}

response

{
  "success": "true",
  "msg": "User updated Successfully"
}
```
