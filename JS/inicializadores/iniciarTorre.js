import { Torre } from "../classes/torre.js";

export class IniciarTorre{
    constructor(){

    }

    init(x, y, SquareTabelado, team){
        const torre = new Torre(SquareTabelado);
        torre.spawn(SquareTabelado[x][y], "", team);
        torre.move();
    }
}

