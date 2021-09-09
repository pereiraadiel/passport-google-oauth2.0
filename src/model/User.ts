export default class User {
  public name: string | null = null;
  public email: string | null = null;
  public id: string | null = null;

  setName(name: string):void {
    this.name = name
  }
  setEmail(email: string):void {
    this.email = email
  }
  setId(id: string):void {
    this.id = id
  }

  getName():string | null {
    return this.name
  }
  getEmail():string | null {
    return this.email
  }
  getId():string | null {
    return this.id
  }

  toString(): string {
    return `id:${this.id}|name:${this.name}|email:${this.email};`;
  }
}