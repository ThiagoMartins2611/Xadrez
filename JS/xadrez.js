import { Peca } from "./classes/peca.js"; 

let squares = document.getElementsByClassName('square');

const peca = new Peca(squares[0]);

peca.spawn()