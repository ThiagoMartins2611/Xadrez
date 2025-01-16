import { Peao } from "../classes/peao.js";

export class IniciarPeao{
    constructor(){

    }

    init(x, y, SquareTabelado, team){
        const peao = new Peao(SquareTabelado);
        peao.spawn(SquareTabelado[y][x], "", team);
        peao.move();
    }
}

