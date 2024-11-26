import { Peca } from "./peca.js";

export class Torre extends Peca{
    
    constructor(dominio){
        super()
        this.world = dominio;
    }

    move(){

        this.peca.onclick = () =>{

            console.log(this.world)

            let position = this.encontrarIndice(this.world, this.squarePosition);
            let lim = false;
           
            let j = 0;
            for(let i=1; i<9; i++){
                
               

                if(position[1]+i <= 7){
                 this.marcs(position[0], position[1]+i)
                 console.log("feija")
                }else{
                   
                    if(j < position[1]){
                    this.marcs(position[0], j)
                    console.log("arro")
                    }
                    j++
                }
                
            }

        

           
           




          
            
           
            this.activeMarc = !this.activeMarc;
        }
    }

  
}