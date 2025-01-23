import { EncontrarIndice2D } from "./EncontrarIndice2D.js";


export class Peca extends EncontrarIndice2D{
    
    constructor(dominio){

        super()
        this.world = dominio;
        this.squarePosition;
        this.peca;
        this.activeMarc = false;
        
        
    }


    spawn(inicialSquare, sprite, team){

        this.squarePosition = inicialSquare;

        let peca = document.createElement('div');
        peca.className = `peca ${team}`
        this.peca = peca;

        let img = document.createElement('img');
        img.alt = ""
        img.src = sprite;

        
        
        peca.appendChild(img);
        inicialSquare.appendChild(peca)
    }

    destruction(){
        this.peca.remove()
    }


    createMarcs(marcsPosition){
        
        let marc = document.createElement('div');
        let point = document.createElement('div');
        marc.className = "marc"
        
        marc.appendChild(point);
        marcsPosition.appendChild(marc);

        marc.onclick = () => {
            this.squarePosition = marcsPosition;

            this.squarePosition.appendChild(this.peca);


            this.eliminateMarcs()
            this.eatPieceMarcDestroy()
            this.activeMarc = !this.activeMarc;
            window.marcsActivate = !window.marcsActivate;
            
            
        }
    }


    eliminateMarcs(){
        let marcs = document.querySelectorAll('.marc');

        marcs.forEach(marc => marc.remove());

    }


    marcs(posY, posX){
    
        if(this.activeMarc) {

            this.eliminateMarcs(); // Chama a função para eliminar

    } else {


        if(this.world[posY][posX].children.length == 0){
            this.createMarcs(this.world[posY][posX]); // Chama a função para criar

        }
            

    }

    

    }


    flag(posY, posX){

        if(this.activeMarc) {

            this.eatPieceMarcDestroy();

    } else {


        if(this.world[posY][posX].children.length == 1){
            this.eatPieceMarcCreate(this.world[posY][posX]);

        }

    }

 }


    eatPieceMarcCreate(EnemyPiecePosition){

        let flag = document.createElement('div');
        flag.className = "flag";

        EnemyPiecePosition.appendChild(flag);

        flag.onclick = () => {
            this.squarePosition = EnemyPiecePosition;

           

            this.eliminateMarcs()
            this.eatPieceMarcDestroy()

            EnemyPiecePosition.children[0].remove()

            this.squarePosition.appendChild(this.peca);
            


            this.activeMarc = !this.activeMarc;
            window.marcsActivate = !window.marcsActivate;
        }

    }


    eatPieceMarcDestroy(){
        let flags = document.querySelectorAll('.flag');
        flags.forEach(marc => marc.remove());
    }


}