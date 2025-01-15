import { Peca } from "./peca.js";

export class Rei extends Peca{
    constructor(dominio){
        super()
        this.world = dominio;

    }

    move(){
        this.peca.onclick = () => {

            let position = this.encontrarIndice(this.world, this.squarePosition);

           
            if(position[0]-1 >= 0 && position[1]-1 >= 0){
                this.marcs(position[0]-1, position[1]-1)
            }  

            if(position[0]-1 >= 0 && position[1]+1 <= 7){
                this.marcs(position[0]-1, position[1]+1)
            }  
            

            if(position[0]+1 <= 7 && position[1]-1 >= 0){
                this.marcs(position[0]+1, position[1]-1)
            }  

            if(position[0]+1 <= 7 && position[1]+1 <= 7){
                this.marcs(position[0]+1, position[1]+1)
            }  

            
            if(position[0]+1 <= 7){
                this.marcs(position[0]+1, position[1])
            }
            
            if(position[0]-1 >= 0){
                this.marcs(position[0]-1, position[1])
            }

            if(position[1]-1 >= 0){
                this.marcs(position[0], position[1]-1)
            }
        

            if(position[1]+1 <= 7){
                this.marcs(position[0], position[1]+1)
            }
            

           
            
            
                
                
            this.activeMarc = !this.activeMarc;
            }


        }
    }

