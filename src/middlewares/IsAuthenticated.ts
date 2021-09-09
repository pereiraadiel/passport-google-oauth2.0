import { Request, Response, NextFunction} from 'express'

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if(req.isAuthenticated()) next();
  else res.sendStatus(401);
}

export default isAuthenticated;