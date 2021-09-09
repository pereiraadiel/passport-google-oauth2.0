import User from "../model/User";
import { Router, Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

const homeRoutes = Router();
interface IUser {
  name: string,
  email: string,
  id: string
}

homeRoutes.get("/", (req: Request, res: Response) => {
  const user = req.user as unknown as IUser
  console.log("user: ", user.name);

  res.json({
    content:
      "this resource is protected, if you see this you are authenticated",
    message: `Welcome ${user.name}`,
  });
});

export default homeRoutes;
