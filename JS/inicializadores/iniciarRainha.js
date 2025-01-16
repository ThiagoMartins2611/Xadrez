import { Rainha } from "../classes/rainha.js";

export class IniciarRainha{
    constructor(){

    }

    init(x, y, SquareTabelado, team){
        const rainha = new Rainha(SquareTabelado);
        rainha.spawn(SquareTabelado[y][x], "", team);
        rainha.move();
    }
}

