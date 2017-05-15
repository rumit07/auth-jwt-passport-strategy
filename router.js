const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt',{session:false});
const requireSignin = passport.authenticate('local',{session:false});


module.exports = function(app) {

  app.get('/',function(req,res){
    res.send({msg:'Welcome'});
  });

  //requireSignin is a middleware that checks whether the credentias are correct or not ,then only genereated token.
app.post('/signin',requireSignin,Authentication.signin);

app.post('/signup',Authentication.signup);


//it is a protected route
//requireAuth is a middleware which checks if user is authenticated or not .
  app.get('/user/:id',requireAuth,Authentication.fetchUser);

//Same goes for this route also
  app.post('/update/:id',requireAuth,Authentication.updateUser);


}
