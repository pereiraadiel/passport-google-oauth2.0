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

export default authRoutes;