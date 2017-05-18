const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');
const emailValidator =require('email-validator');

const secret ='uhfehsf78fdsfs8';


function tokenForUser(user){
  const timestamp = new Date().getTime();

  return jwt.encode({sub:user.id,iat:timestamp},secret);

}
exports.signin = function(req,res,next) {
  //user has auth'd their email and pass
  res.send({token : tokenForUser(req.user)});
}


exports.signup = function(req,res,next) {

  console.log(req);

   const email = req.body.email;
   const password = req.body.password;
   const name = req.body.name;
   const dateOfBirth = req.body.dateOfBirth;
//

   if(!email||!password){

     return res.status(422).send({error:'You must provide email and password'});

   }
    
    const isValidEmail= emailValidator.validate(email);
    if(!isValidEmail)
    {
    return res.status(422).send({error:'You must provide correct email'});
    }




  
   User.findOne({email:email},function(err,existingUser){

     if(err){ return next(err); }

     if(existingUser){

       return res.status(422).send({error:'Email is in use'});

     }

     const user = new User({
       email : email,
       password:password,
       name:name,
       dateOfBirth:dateOfBirth
     });

     user.save(function(err){

       if(err){return next(err);}

       res.json({
         success:"true",
         token : tokenForUser(user)
       });

     });

   });

}


exports.fetchUser = function(req,res,next){

  const id = req.params.id;

  if(!id)
  {
    return res.status(422).send({error:'Please provide an id'});
  }

  User.findOne({_id:id},function(err,User){


    if(err){ res.send({error:err}) };

    if(User){

      res.send({
        success:"true",
        email:User.email,
        name:User.name,
        dateOfBirth:User.dateOfBirth
      });

    }

});
}


exports.updateUser = function(req,res,next){

  const id = req.params.id;

  const email = req.body.email;
  const name = req.body.name;
  const dateOfBirth=req.body.dateOfBirth;


  if(!id)
  {
    return res.status(422).send({error:'Please provide an id'});
  }

  User.findOne({_id:id},function(err,User){

    if(err){ res.send({error:err}) };

    if(User){

      if(email){
          User.email=email;
      }
      if(name){
          User.name=name;
      }
      if(dateOfBirth){
          User.dateOfBirth=dateOfBirth;
      }
         User.save(function(){
           res.send({
             success:"true",
             msg:"User updated Successfully"
           });
         });
    }

});

}
