import { Peca } from "./peca.js";

export class Rei extends Peca{
    constructor(dominio){
        super()
        this.world = dominio;
        this.name = "rei";
        
    }

    move(){

        this.peca.id = this.name;

        this.peca.onclick = () => {


            if(window.marcsActivate == false || this.activeMarc == true){

            let position = this.encontrarIndice(this.world, this.squarePosition);

           
            const offsets = [
                    [-1, -1], [-1, 0], [-1, 1],
                    [0, -1], /* rei */ [0, 1],
                    [1, -1], [1, 0], [1, 1]
                ];

                offsets.forEach(([dy, dx]) => {
                    let newY = position[0] + dy;
                    let newX = position[1] + dx;

                    if (newY >= 0 && newY <= 7 && newX >= 0 && newX <= 7) {
                        
                        if(this.world[newY][newX].children.length === 0 || this.activeMarc === true && this.world[newY][newX].children.length == 1){
                            this.marcs(newY, newX);
                        }else {
                            this.flag(newY, newX);

                        }
                    }
                });
           
            
            this.activeMarc = !this.activeMarc;
            window.marcsActivate = !window.marcsActivate;
            }


        }
    }

}