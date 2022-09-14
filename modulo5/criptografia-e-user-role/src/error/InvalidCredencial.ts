import { BaseError } from "./BaseError";

export class InvalidCredencial extends BaseError{
    constructor(){
        super("Usuário não cadastrado ou credenciais incorretas", 401)
    }
}