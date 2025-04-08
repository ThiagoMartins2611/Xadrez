import { Peca } from "./peca.js";
import { IniciarTorre } from "../inicializadores/iniciarTorre.js";
import { IniciarCavalo } from "../inicializadores/iniciarCavalo.js"
import { IniciarRainha } from "../inicializadores/iniciarRainha.js";
import { IniciarBispo } from "../inicializadores/iniciarBispo.js";

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

            this.verificClick()

            if(window.marcsActivate == false || this.activeMarc == true){

            
            let position = this.encontrarIndice(this.world, this.squarePosition);
            

            if(upORdown){

                if(positionIni[0] != position[0]){
                    firstPlay = false;
                } 

                if(firstPlay){ 

                    
                    if(this.world[position[0]+1][position[1]].children.length == 0){
                        this.marcs(position[0]+2, position[1]) 
                    }
                    this.marcs(position[0]+1, position[1])
                    
                     
                    

                }else{

                    this.marcs(position[0]+1, position[1])

                }

                if(this.world[position[0]+1][position[1]+1] != undefined){

                    if(this.world[position[0]+1][position[1]+1].children.length >= 1){
                        this.flag(position[0]+1, position[1]+1)
                    }

                }
                
                if(this.world[position[0]+1][position[1]-1] != undefined){

                    if(this.world[position[0]+1][position[1]-1].children.length >= 1){
                        this.flag(position[0]+1, position[1]-1)
                    }

                }

                

            }else{

                if(positionIni[0] != position[0]){
                    firstPlay = false;
                } 

                if(firstPlay){

                    if(this.world[position[0]-1][position[1]].children.length == 0){
                        this.marcs(position[0]-2, position[1])
                    }
                    this.marcs(position[0]-1, position[1])
                    

                }else{

                    this.marcs(position[0]-1, position[1])

                }


                if(this.world[position[0]-1][position[1]+1] != undefined){
                    if(this.world[position[0]-1][position[1]+1].children.length >= 1){
                        this.flag(position[0]-1, position[1]+1)
                    }
                }
                
                if(this.world[position[0]-1][position[1]-1] != undefined){
                    if(this.world[position[0]-1][position[1]-1].children.length >= 1){
                        this.flag(position[0]-1, position[1]-1)
                    }
                }
                



            }
            
            
            
            this.activeMarc = !this.activeMarc;
            window.marcsActivate = !window.marcsActivate;

        
            }
        
        }



        

    }

    confirmPositionForChangeThePiece(){

        let actualPosition = this.encontrarIndice(this.world, this.squarePosition);


        if(actualPosition[0] == 0 || actualPosition[0] == 7){

            clearInterval(this.rep);

            if(this.peca.className === "peca white"){
                
                window.changeTeam = false;
            
            }else if(this.peca.className === "peca black"){
                
                window.changeTeam = true;

            }

            let body = document.getElementById('body');
            
            let blur = document.createElement('div');
            blur.id = "blurChoice";

            let bloco = document.createElement('div');
            bloco.id = "blocoPeao";


            let imgCavalo = document.createElement('img');
            imgCavalo.id = "cavaloChoice";
            imgCavalo.className = "imgChoice";
            imgCavalo.alt = "";
            imgCavalo.src = "./pecasSVG/cavalo.svg"

            imgCavalo.onclick = () => {
                let newcavalo = new IniciarCavalo()
                newcavalo.init(actualPosition[1], actualPosition[0], this.world, this.team)

                this.destruction();
                body.removeChild(blur);
            }

            let imgRainha = document.createElement('img');
            imgRainha.id = "rainhaChoice";
            imgRainha.className = "imgChoice";
            imgRainha.alt = "";
            imgRainha.src = "./pecasSVG/rainha.svg"

            imgRainha.onclick = () => {
                let newRainha = new IniciarRainha()
                newRainha.init(actualPosition[1], actualPosition[0], this.world, this.team)

                this.destruction();
                body.removeChild(blur);
            }

            let imgBispo = document.createElement('img');
            imgBispo.id = "bispoChoice";
            imgBispo.className = "imgChoice";
            imgBispo.alt = "";
            imgBispo.src = "./pecasSVG/bispo.svg"
            
            imgBispo.onclick = () => {
                let newBispo = new IniciarBispo()
                newBispo.init(actualPosition[1], actualPosition[0], this.world, this.team)

                this.destruction();
                body.removeChild(blur);
            }


            let imgTorre = document.createElement('img');
            imgTorre.id = "torreChoice";
            imgTorre.className = "imgChoice"; 
            imgTorre.alt = "";
            imgTorre.src = "./pecasSVG/torre.svg"

            imgTorre.onclick = () => {
                let newTorre = new IniciarTorre()
                newTorre.init(actualPosition[1], actualPosition[0], this.world, this.team)

                this.destruction();
                body.removeChild(blur);
            }


            bloco.appendChild(imgBispo);
            bloco.appendChild(imgCavalo);
            bloco.appendChild(imgTorre);
            bloco.appendChild(imgRainha);

            blur.appendChild(bloco)

            body.appendChild(blur)


            
        }

    }



}