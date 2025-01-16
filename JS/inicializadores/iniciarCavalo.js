import { Cavalo } from "../classes/cavalo.js";

export class IniciarCavalo{
    constructor(){

    }

    init(x, y, SquareTabelado, team){
        const cavalo = new Cavalo(SquareTabelado);
        cavalo.spawn(SquareTabelado[y][x], "", team);
        cavalo.move();
    }
}

