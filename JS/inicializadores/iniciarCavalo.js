import { Cavalo } from "../classes/cavalo.js";

export class IniciarCavalo{
    constructor(){

    }

    init(x, y, SquareTabelado){
        const cavalo = new Cavalo(SquareTabelado);
        cavalo.spawn(SquareTabelado[y][x], "");
        cavalo.move();
    }
}

