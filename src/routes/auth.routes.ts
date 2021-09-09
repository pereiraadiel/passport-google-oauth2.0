import { Router, Request, Response } from 'express'
import passport from 'passport';

const authRoutes = Router();

authRoutes.get("/google", 
  passport.authenticate('google', { scope: ['profile', 'email']})
);

authRoutes.get("/google/callback", 
  passport.authenticate('google', { failureRedirect: '/auth/google/fail'}),
  (req: Request, res: Response) => {
    res.redirect('/');
  }
);

authRoutes.get("/google/fail", (req: Request, res: Response) => {
  res.json({
    error: 'failed to authenticate'
  });
});

authRoutes.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  req.logOut();
  res.redirect('/auth/login');
});

authRoutes.get("/login", (req: Request, res: Response) => {
  res.send('<a href="http://localhost:3333/auth/google">Login com Google</a>');
});

export default authRoutes;