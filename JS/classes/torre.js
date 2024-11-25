import { Peca } from "./peca.js";

export class Torre extends Peca{
    
    constructor(){
        super()

    }

    move(){

        this.peca.onclick = () =>{
        
        
            for (let i = 0; i < 14; i++) {
                
                
            }
            
           
            this.activeMarc = !this.activeMarc;
        }
    }

  
}