import { Peca } from "./classes/peca"; 

let squares = document.getElementsByClassName('square');

const peca = new Peca;

peca(squares[0]).spawn();