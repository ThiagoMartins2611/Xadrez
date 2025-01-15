import { IniciarTorre } from "./inicializadores/IniciarTorre.js";
import { IniciarRainha } from "./inicializadores/iniciarRainha.js";
import { IniciarBispo } from "./inicializadores/iniciarBispo.js";


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

const torre = new IniciarTorre()
torre.init(7, 7, SquareTabelado);

const rainha = new IniciarRainha()
rainha.init(5, 4, SquareTabelado);

const bispo = new IniciarBispo()
bispo.init(6, 2, SquareTabelado)