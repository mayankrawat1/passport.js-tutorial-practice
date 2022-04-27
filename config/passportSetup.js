require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const Keys = require("./Keys");
const UserModel = require("../model/userModel");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for the google strategy
      callbackURL: "/auth/google/redirect",
      clientID: Keys.google.clientId,
      clientSecret: Keys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      //check user already present in database
      UserModel.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("User already present");
          done(null, currentUser);
        } else {
          new UserModel({
            username: profile.displayName,
            googleid: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log(newUser);
              done(null, newUser);
            });
        }
      });
      // console.log("passport calllback function fired");
      // console.log(profile);
    }
  )
);
