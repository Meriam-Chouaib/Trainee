export interface User {
    email: String;
    password: String;
    name?:string;
    lastname?:string;
    address?:string;

  }
export const users : User [] = [
    {
    email:'leila@gmail.com',
    password:'Password123',
    name:'BenKahla',
    lastname:'Leila',
    address:'Sahloul, Sousse',
    }
,    {
    email:'bechir@gmail.com',
    password:'Password123',
    name:'Chouaib',
    lastname:'Bechir',
    address:'Sahloul, Sousse',
    }]