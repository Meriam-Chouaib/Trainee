export interface User {
    email: String;
    password: String;
    name?:string;
    lastname?:string;
    address?:string;
    role?:string

  }
export const users : User [] = [
    {
    email:'leila@gmail.com',
    password:'Password123',
    name:'BenKahla',
    lastname:'Leila',
    address:'Sahloul, Sousse',
    role:'VISITOR'
    }
,    {
    email:'bechir@gmail.com',
    password:'Password123',
    name:'Chouaib',
    lastname:'Bechir',
    address:'Sahloul, Sousse',
    role:'ADMIN'
}]