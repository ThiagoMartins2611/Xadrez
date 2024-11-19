import { Peca } from "./peca.js";

export class Torre extends Peca{
    
    constructor(){
        super()

    }

    move(){
        this.peca.onclick = () =>{
        let squares = document.getElementsByClassName('square');
    
        this.createMarcs(squares[1])

        }
    }
}