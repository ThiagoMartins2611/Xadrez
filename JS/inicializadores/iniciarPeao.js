import { Peao } from "../classes/peao.js";

export class IniciarPeao{
    constructor(){

    }

    init(x, y, SquareTabelado){
        const cavalo = new Peao(SquareTabelado);
        cavalo.spawn(SquareTabelado[y][x], "");
        cavalo.move();
    }
}

