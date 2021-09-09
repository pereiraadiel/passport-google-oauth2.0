import User from "../model/User";

export default class UserRepository {
  private users: User[] = [];

  findById(id: string): User | undefined {
    return this.users.find((user) => user.getId() === id);
  }

  findOrCreate(name: string, email: string, id: string): User {
    const userAlreadyExist =
      this.users.findIndex((user) => user.getEmail() === email)

    // verificar se usuario ja existe
    if (userAlreadyExist !== -1) return this.users[userAlreadyExist];

    const user = new User();
    user.setEmail(email);
    user.setName(name);
    user.setId(id);
    this.users.push(user);
    return user;
  }
}
