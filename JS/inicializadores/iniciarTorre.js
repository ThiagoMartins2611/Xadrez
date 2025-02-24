import { Torre } from "../classes/torre.js";

export class IniciarTorre{
    constructor(){

    }

    init(x, y, SquareTabelado, team){
        const torre = new Torre(SquareTabelado);
        torre.spawn(SquareTabelado[y][x], "", team);
        torre.move();
    }
}

