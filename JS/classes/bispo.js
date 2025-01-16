import { Peca } from "./peca.js";

export class Bispo extends Peca{
    constructor(dominio){
        super()
        this.world = dominio;
        
    }

    move(){
        this.peca.onclick =() => {

            if(window.marcsActivate == false || this.activeMarc == true){
            //position[y, x]
            let position = this.encontrarIndice(this.world, this.squarePosition);


             const directions = [
                { x: 1, y: 1 }, // Diagonal superior direita
                { x: -1, y: -1 }, // Diagonal inferior esquerda
                { x: 1, y: -1 }, // Diagonal superior esquerda
                { x: -1, y: 1 }, // Diagonal inferior direita
            ];

            for (const direction of directions) {
                for (let i = 1; i <= 7; i++) {
                    const newX = position[1] + i * direction.x;
                    const newY = position[0] + i * direction.y;

                    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) break;

                    if (this.world[newY][newX].children.length === 0 || this.activeMarc === true && this.world[newY][newX].children.length == 1) {
                        this.marcs(newY, newX);
                    } else {
                        break;
                    }
                }
            }

            ////////////////////// desafio: tranformar e utilizar isso com forEach


            this.activeMarc = !this.activeMarc;
            window.marcsActivate = !window.marcsActivate;

        
            
            console.log(this.activeMarc)
            console.log(position);

        }
    }
}

}