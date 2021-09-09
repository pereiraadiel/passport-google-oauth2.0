declare namespace Express {
  export interface User {
    getId: Function;
    setId: Function;
    getName: Function;
    setName: Function;
    getEmail: Function;
    setEmail: Function;
  }
}
/**
 * definido aqui a "tipagem" da classe src/model/User
 */