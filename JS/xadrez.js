import { IniciarTorre } from "./inicializadores/IniciarTorre.js";
import { IniciarRainha } from "./inicializadores/iniciarRainha.js";
import { IniciarBispo } from "./inicializadores/iniciarBispo.js";
import { IniciarPeao } from "./inicializadores/iniciarPeao.js";
import {IniciarRei} from "./inicializadores/iniciarRei.js";
import {IniciarCavalo} from "./inicializadores/iniciarCavalo.js"

window.marcsActivate = false;

let squares = document.getElementsByClassName('square');

let arraySquare = Array.from(squares);

function transformarEm2D(array, tamanho) {
    let resultado = [];
    for (let i = 0; i < array.length; i += tamanho) {
        resultado.push(array.slice(i, i + tamanho));
    }
    return resultado;
} 



let SquareTabelado = transformarEm2D(arraySquare, 8);

let torre = new IniciarTorre();
torre.init(4, 2, SquareTabelado, "white");

let torre2 = new IniciarTorre();
torre2.init(4, 6, SquareTabelado, "black");

let bispo = new IniciarBispo()
bispo.init(2, 6, SquareTabelado, "black");

let cavalo = new IniciarCavalo()
cavalo.init(1,1, SquareTabelado, "white")

let rainha = new IniciarRainha()
rainha.init(1,5, SquareTabelado, "black");

console.log(window.marcsActivate)