import { Torre } from "./classes/torre.js";

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





const torre = new Torre(SquareTabelado);
torre.spawn(SquareTabelado[3][7], "")


torre.move()
