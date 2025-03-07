import { Bispo } from "../classes/bispo.js";

export class IniciarBispo{
    constructor(){

    }

    init(x, y, SquareTabelado, team){
        const bispo = new Bispo(SquareTabelado);
        bispo.spawn(SquareTabelado[y][x], './pecasSVG/bispo.svg', team);
        bispo.move();
    }
}

