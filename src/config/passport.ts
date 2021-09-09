import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserRepository from "../repositories/UserRepository";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;
const userRepository = new UserRepository();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  // find user by id
  // const user = userRepository.findById(id as string);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
      callbackURL: GOOGLE_CALLBACK_URL as string,
    },
    function (accessToken, refreshToken, profile, done) {
      // create user
      let email = null;
      let user;
      if(profile.emails)  {
        email = profile?.emails[0]?.value;
        user = userRepository.findOrCreate(profile.displayName, email, profile.id)
      }
      return done(null, user);
    }
  )
);
