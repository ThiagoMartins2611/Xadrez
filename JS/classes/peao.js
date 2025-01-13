import { Peca } from "./peca.js";

export class Peao extends Peca{
    constructor(dominio){
        super()
        this.world = dominio;
        
    }


    move(){

        let positionIni = this.encontrarIndice(this.world, this.squarePosition);
        let upORdown = true;
        //up = true;
        //down = false

        if(positionIni[0] > 3){
            upORdown = false;
        }else{
            upORdown = true;
        }

        

        let firstPlay = true;
        let ChangePiece = false;



        
        this.peca.onclick = () =>{

            


            let position = this.encontrarIndice(this.world, this.squarePosition);
    

            



            if(upORdown){
                if(firstPlay){

                    this.marcs(position[0]+1, position[1])
                    this.marcs(position[0]+2, position[1])

                    firstPlay = false;

                }else{

                    this.marcs(position[0]+1, position[1])

                }

            }else{

                if(firstPlay){

                    this.marcs(position[0]-1, position[1])
                    this.marcs(position[0]-2, position[1])

                    firstPlay = false;

                }else{

                    this.marcs(position[0]-1, position[1])

                }

            }
            

            if(position[0] == 0 || position[0] == 7){

                ChangePiece = true;
                console.log(ChangePiece)
            }

            


            this.activeMarc = !this.activeMarc;

            console.log(this.activeMarc)
            console.log(position);
            
        }

    }
}