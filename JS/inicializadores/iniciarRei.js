import { Rei } from "../classes/rei.js";

export class IniciarRei{
    constructor(){

    }

    init(x, y, SquareTabelado, team){
        const rei = new Rei(SquareTabelado);
        rei.spawn(SquareTabelado[y][x], './pecasSVG/rei.svg', team);
        rei.move();
    }
}

