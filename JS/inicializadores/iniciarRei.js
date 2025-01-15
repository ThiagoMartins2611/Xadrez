import { Rei } from "../classes/rei.js";

export class IniciarRei{
    constructor(){

    }

    init(x, y, SquareTabelado){
        const rei = new Rei(SquareTabelado);
        rei.spawn(SquareTabelado[y][x], "");
        rei.move();
    }
}

