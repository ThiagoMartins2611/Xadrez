import { Bispo } from "../classes/bispo.js";

export class IniciarBispo{
    constructor(){

    }

    init(x, y, SquareTabelado){
        const bispo = new Bispo(SquareTabelado);
        bispo.spawn(SquareTabelado[y][x], "");
        bispo.move();
    }
}

