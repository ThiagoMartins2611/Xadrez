import { Peca } from "./peca.js";

export class Torre extends Peca{
    
    constructor(dominio){
        super()
        this.world = dominio;
        
    }

    move(){

        
        this.peca.onclick = () =>{

            if(window.marcsActivate == true && this.activeMarc == false){
                
                
                Array.from(document.getElementsByClassName("marc")).forEach((marc)=>{
                    marc.remove()
                })
                
                Array.from(document.getElementsByClassName("peca")).forEach((peca)=>{
                    
                    const obj = peca._objRef;
                    obj.activeMarc = false;
                })

                window.marcsActivate = false
            }

            if(window.marcsActivate == false || this.activeMarc == true){

            let position = this.encontrarIndice(this.world, this.squarePosition);
            
           
            const directions = [
                [0, 1], [0, -1], [1, 0], [-1, 0] // direita, esquerda, baixo, cima
            ];

            directions.forEach(([dy, dx]) => {
                for (let i = 1; i < 8; i++) {
                    let newY = position[0] + dy * i;
                    let newX = position[1] + dx * i;

                    if (newY >= 0 && newY <= 7 && newX >= 0 && newX <= 7) {
                        if (this.world[newY][newX].children.length === 0 || 
                            (this.activeMarc === true && this.world[newY][newX].children.length === 1)) {
                            this.marcs(newY, newX);
                        } else {
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