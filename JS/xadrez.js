import { Torre } from "./classes/torre.js";

let squares = document.getElementsByClassName('square');


const torre = new Torre();
torre.spawn(squares[0], "")


torre.move()
