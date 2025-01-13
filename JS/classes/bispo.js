import { Peca } from "./peca.js";

export class Bispo extends Peca{
    constructor(dominio){
        super()
        this.world = dominio;
        
    }

    move(){
        this.peca.onclick =() => {

            //position[y, x]
            let position = this.encontrarIndice(this.world, this.squarePosition);


            
            for (let i = 1; position[0]+i <= 7; i++){

                for (let j = 1; position[1]+j <= 7; j++){
                    
                    if(i == j){
                        this.marcs(position[0]+i, position[1]+j)
                    }

                }
                
            }

            for (let i = 1; position[0]-i >= 0; i++){

                for (let j = 1; position[1]-j >= 0; j++){
                    
                    if(i == j){
                        this.marcs(position[0]-i, position[1]-j)
                    }

                }
                
            }

            for (let i = 1; position[0]+i <= 7; i++){

                for (let j = 1; position[1]-j >= 0; j++){
                    
                    if(i == j){
                        this.marcs(position[0]+i, position[1]-j)
                    }

                }
                
            }

            for (let i = 1; position[0]-i >= 0; i++){

                for (let j = 1; position[1]+j <= 7; j++){
                    
                    if(i == j){
                        this.marcs(position[0]-i, position[1]+j)
                    }

                }
                
            }


            this.activeMarc = !this.activeMarc;

            console.log(this.activeMarc)
            console.log(position);

        }
    }
}