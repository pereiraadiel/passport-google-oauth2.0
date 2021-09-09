import express from 'express';
import passport from 'passport';
import homeRoutes from './routes/home.routes';
import cookieSession from 'cookie-session';
import './config/passport';
import authRoutes from './routes/auth.routes';
import isAuthenticated from './middlewares/IsAuthenticated';

const app = express();

app.use(cookieSession({
  name: '@google-auth-example-session',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);
app.use(isAuthenticated, homeRoutes);

export default app;