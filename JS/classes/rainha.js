import { Peca } from "./peca.js";

export class Rainha extends Peca{
    constructor(dominio){
        super()
        this.world = dominio;

    }


    move(){
        this.peca.onclick = () =>{

            this.verificClick()

            if(window.marcsActivate == false || this.activeMarc == true){
            //position[y, x]
            let position = this.encontrarIndice(this.world, this.squarePosition);

      
            let directions = [
                [0, 1], [0, -1], [1, 0], [-1, 0],   // Direções horizontais e verticais
                [1, 1], [-1, -1], [1, -1], [-1, 1]   // Direções diagonais
            ];
            
            directions.forEach(([dy, dx]) => {
                for (let i = 1; i < 8; i++) {
                    let newY = position[0] + dy * i;
                    let newX = position[1] + dx * i;
            
                    if (newY >= 0 && newY <= 7 && newX >= 0 && newX <= 7) {
                        
                        if(this.world[newY][newX].children.length === 0 || this.activeMarc === true && this.world[newY][newX].children.length == 1){
                            this.marcs(newY, newX);
                        }else {
                            this.flag(newY, newX);
                            break;

                        }
                        
                    
                    } else {
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