import { Peca } from "./peca.js";

export class Cavalo extends Peca{
    constructor(dominio){
        super()
        this.world = dominio
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
            //position[y, x]
            let position = this.encontrarIndice(this.world, this.squarePosition);
            
            const cavaloMoves = [
                [1, -2], [1, 2], [2, -1], [2, 1],
                [-1, -2], [-1, 2], [-2, -1], [-2, 1]
            ];
            
            if (position[0] >= 0 && position[0] <= 7 && position[1] >= 0 && position[1] <= 7) {
                cavaloMoves.forEach(([dy, dx]) => {
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
            }
            
          
            
           
            this.activeMarc = !this.activeMarc;
            window.marcsActivate = !window.marcsActivate;

            console.log(window.marcsActivate);
            
        }
    }

}

}