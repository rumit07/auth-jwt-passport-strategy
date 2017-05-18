Getting started with this repo.
```
	> git clone https://github.com/utkarshkpal/auth-task.git
	> npm install
	> npm start
  
```


I have implemented a token based authentication system.When the user successfully signin a web token is generated.
On the client side store this token in LocalStorage. And for accessing a protected route you have to pass this token in the header 
of the request.

In token based approach logout functionality will not be handled at backend. When user logout the front end dev will destroy the token from the localStorage.

run signup.html file in google chrome


```
