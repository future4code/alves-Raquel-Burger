import { BaseError } from "./BaseError";

export class InvalidPassword extends BaseError{
    constructor(){
        super("A senha deve conter no mínimo 6 caracteres", 401)
    }
}