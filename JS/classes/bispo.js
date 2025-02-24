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
                [ 1, 1 ], // Diagonal superior direita
                [ -1, -1 ], // Diagonal inferior esquerda
                [ 1, -1 ], // Diagonal superior esquerda
                [ -1, 1 ], // Diagonal inferior direita
            ]

            directions.forEach(([dx, dy]) => {
                for (let i = 1; i <= 7; i++) {
                    let newX = position[1] + i * dx;
                    let newY = position[0] + i *  dy;

                    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) break;

                    if (this.world[newY][newX].children.length === 0 || this.activeMarc === true && this.world[newY][newX].children.length == 1) {
                        this.marcs(newY, newX);
                    } else {
                        this.flag(newY, newX)
                        break;
                    }
                }
            });

          


            this.activeMarc = !this.activeMarc;
            window.marcsActivate = !window.marcsActivate;

        }
    }
}

}