import { Peca } from "./peca.js";

export class Cavalo extends Peca{
    constructor(dominio){
        super()
        this.world = dominio
    }

    move(){
        this.peca.onclick = () =>{

            

            let position = this.encontrarIndice(this.world, this.squarePosition);
            
            let x = 0;
            let y = 0;
                
            //pontos da direita
        if(position[0]<=7 && position[0]>=0 && position[1]<=7 && position[1]>=0){
            this.marcs(position[0]+1, position[1]+2)
            this.marcs(position[0]-1, position[1]+2)
        

            this.marcs(position[0]+1, position[1]-2)
            this.marcs(position[0]-1, position[1]-2)

            this.marcs(position[0]+2, position[1]+1)
            this.marcs(position[0]+2, position[1]-1)

            this.marcs(position[0]-2, position[1]-1)
            this.marcs(position[0]-2, position[1]+1)
        }

            
          
            
           
            this.activeMarc = !this.activeMarc;
        }
    }

}