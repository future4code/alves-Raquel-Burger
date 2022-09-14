import { BaseError } from "./BaseError";

export class NotAuthorized extends BaseError{
    constructor(){
        super("Usuário não autorizado", 401)
    }
}