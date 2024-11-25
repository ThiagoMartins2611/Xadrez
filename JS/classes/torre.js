import { Peca } from "./peca.js";

export class Torre extends Peca{
    
    constructor(dominio){
        super()
        
    }

    move(){

        this.peca.onclick = () =>{

            console.log(this.world)
            let x = this.encontrarIndice(this.world, this.squarePosition);
            
            console.log(x)
            

        

           




          
            
           
            this.activeMarc = !this.activeMarc;
        }
    }

  
}