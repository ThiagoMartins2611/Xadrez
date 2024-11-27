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
            
           
            let x = 0;
            let y = 0;
            for(let i=1; i<9; i++){
                
               

                if(position[1]+i <= 7){
                 this.marcs(position[0], position[1]+i)
                 console.log("feija")
                }else{
                   
                    if(x < position[1]){
                    this.marcs(position[0], x)
                    console.log("arro")
                    }
                    x++
                }

                if(position[0]+i <= 7){
                    this.marcs(position[0]+i, position[1])
                    console.log("feijaY")
                   }else{
                      
                       if(y < position[0]){
                       this.marcs(y, position[1])
                       console.log("arroY")
                       }
                       y++
                   }
                
            }





          
            
           
            this.activeMarc = !this.activeMarc;
        }
    }

  
}