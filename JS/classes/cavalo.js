import { Peca } from "./peca.js";

export class Cavalo extends Peca{
    constructor(dominio){
        super()
        this.world = dominio
    }

    move(){
        this.peca.onclick = () =>{

            //position[y, x]
            let position = this.encontrarIndice(this.world, this.squarePosition);
            
            let x = 0;
            let y = 0;
                
            //pontos da direita
        if(position[0]<=7 && position[0]>=0 && position[1]<=7 && position[1]>=0){
            
            
            if(position[0]+1 <= 7){
                if(position[1]-2 >= 0){
                    this.marcs(position[0]+1, position[1]-2)
                }
                
                if(position[1]+2 <= 7){
                    this.marcs(position[0]+1, position[1]+2)
                }
                
            }

           

            if(position[0]+2 <= 7 ){
                
                if(position[1]+1 <= 7){
                    this.marcs(position[0]+2, position[1]+1)
                }

                if(position[1]-1 >= 0){
                    this.marcs(position[0]+2, position[1]-1)
                }
            }




            if(position[0]-1 >= 0){

                if(position[1]-2 >= 0){
                    this.marcs(position[0]-1, position[1]-2)
                }
                
                if(position[1]+2 <= 7){
                    this.marcs(position[0]-1, position[1]+2)
                }
            }
            

            if(position[0]-2 >= 0){

                if(position[1]-1 >= 0){
                    this.marcs(position[0]-2, position[1]-1)
                }

                 if(position[1]+1 <= 7){
                    this.marcs(position[0]-2, position[1]+1)
                }
            }

            
            
        }

            
          
            
           
            this.activeMarc = !this.activeMarc;

            console.log(this.activeMarc)
            console.log(position);
        
        }
    }

}