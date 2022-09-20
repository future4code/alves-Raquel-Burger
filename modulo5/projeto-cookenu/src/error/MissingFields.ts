import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Verifique se os valores foram informados", 404)
    }
}