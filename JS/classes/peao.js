import { Peca } from "./peca.js";



export class Peao extends Peca{
    constructor(dominio){
        super()
        this.world = dominio;
        this.rep = null
    }


    move(){

        let positionIni = this.encontrarIndice(this.world, this.squarePosition);
        let upORdown = true;
        //up = true;
        //down = false;

        if(positionIni[0] > 3){
            upORdown = false;
        }else{
            upORdown = true;
        }

        

        let firstPlay = true;

        
         this.rep = setInterval(this.confirmPositionForChangeThePiece.bind(this), 1)
    

        

        
        this.peca.onclick = () =>{

            

            
            let position = this.encontrarIndice(this.world, this.squarePosition);
    

            

            

            if(upORdown){

                if(positionIni[0] != position[0]){
                    firstPlay = false;
                } 

                if(firstPlay){ 

                    this.marcs(position[0]+1, position[1])
                    this.marcs(position[0]+2, position[1])  
                    

                }else{

                    this.marcs(position[0]+1, position[1])

                }

            }else{

                if(positionIni[0] != position[0]){
                    firstPlay = false;
                } 

                if(firstPlay){

                    this.marcs(position[0]-1, position[1])
                    this.marcs(position[0]-2, position[1])

                   

                }else{

                    this.marcs(position[0]-1, position[1])

                }

            }
            

            

            


            this.activeMarc = !this.activeMarc;

            console.log(this.activeMarc)
            console.log(position);
            
        }



        

    }

    confirmPositionForChangeThePiece(){

        let actualPosition = this.encontrarIndice(this.world, this.squarePosition);


        if(actualPosition[0] == 0 || actualPosition[0] == 7){
        
            clearInterval(this.rep);

            let body = document.getElementById('body');
            
            let blur = document.createElement('div');
            blur.id = "blurChoice";

            let bloco = document.createElement('div');
            bloco.id = "blocoPeao";


            let imgCavalo = document.createElement('div');
            imgCavalo.id = "cavaloChoice";
            imgCavalo.className = "imgChoice";


            let imgRainha = document.createElement('div');
            imgRainha.id = "rainhaChoice";
            imgRainha.className = "imgChoice";


            let imgBispo = document.createElement('div');
            imgBispo.id = "bispoChoice";
            imgBispo.className = "imgChoice";
            
            let imgTorre = document.createElement('div');
            imgTorre.id = "torreChoice";
            imgTorre.className = "imgChoice";


            bloco.appendChild(imgBispo);
            bloco.appendChild(imgCavalo);
            bloco.appendChild(imgTorre);
            bloco.appendChild(imgRainha);

            blur.appendChild(bloco)

            body.appendChild(blur)


            
        }

    }



}