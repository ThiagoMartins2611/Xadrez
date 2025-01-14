import { Peca } from "./peca.js";

export class Rainha extends Peca{
    constructor(dominio){
        super()
        this.world = dominio;

    }


    move(){
        this.peca.onclick = () =>{

            //position[y, x]
            let position = this.encontrarIndice(this.world, this.squarePosition);

            let x = 0;
            let y = 0;
            for(let i=1; i<9; i++){
                
               

                if(position[1]+i <= 7){
                 this.marcs(position[0], position[1]+i)
                 
                }else{
                   
                    if(x < position[1]){
                    this.marcs(position[0], x)
                    
                    }
                    x++
                }

                if(position[0]+i <= 7){
                    this.marcs(position[0]+i, position[1])
                    
                   }else{
                      
                       if(y < position[0]){
                       this.marcs(y, position[1])
                       
                       }
                       y++
                   }
                
            }


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
        }
    }

}