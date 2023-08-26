export class User {
    email!: string;
    name!: string;
    password!: string;
    confirmPassword!: string;
    phoneNumber!: string;
    role!: UserRole;
}


  
export enum UserRole {
    OWNER = 'owner',
    BUYER = 'buyer'
  }