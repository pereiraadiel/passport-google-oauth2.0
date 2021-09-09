import { Router, Request, Response } from 'express'
// import isAuthenticated from '../middlewares/IsAuthenticated';

const homeRoutes = Router();

homeRoutes.get("/", (req: Request, res: Response) => {
  res.json({
    content: 'this resource is protected, if you see this you are authenticated'
  });
});

export default homeRoutes;