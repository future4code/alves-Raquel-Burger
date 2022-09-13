export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
    id: string
    email: string
    password: string
    name: string
    nickname: string
    role: USER_ROLES
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private nickname: string,
        private email: string,
        private password: string,
        private role: USER_ROLES = USER_ROLES.NORMAL
    ){}

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getNickName(){
        return this.nickname
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
        return this.password
    }

    public getRole = () => {
        return this.role
    }
}