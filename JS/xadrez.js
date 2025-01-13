import { Torre } from "./classes/torre.js";
import { Cavalo } from "./classes/cavalo.js";
import { Bispo } from "./classes/bispo.js";



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




/*const torre = new Torre(SquareTabelado);
torre.spawn(SquareTabelado[0][0], "")
torre.move()*/

/*const cavalo = new Cavalo(SquareTabelado);
cavalo.spawn(SquareTabelado[4][4], "")
cavalo.move();*/

const bispo = new Bispo(SquareTabelado);
bispo.spawn(SquareTabelado[4][4], "");
bispo.move();
