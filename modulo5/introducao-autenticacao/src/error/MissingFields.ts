import { BaseError } from "./BasseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Valores devem ser informados", 404)
    }
}