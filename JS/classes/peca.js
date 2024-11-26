import { EncontrarIndice2D } from "./EncontrarIndice2D.js";

export class Peca extends EncontrarIndice2D{
    
    constructor(dominio){

        super()
        this.world = dominio;
        this.squarePosition;
        this.peca;
        this.activeMarc = false;
        
        
    }


    spawn(inicialSquare, sprite){

        this.squarePosition = inicialSquare;

        let peca = document.createElement('div');
        peca.className = 'peca'
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
        marc.className = "marc"

        marcsPosition.appendChild(marc);
    }


    eliminateMarcs(){
        let marcs = document.querySelectorAll('.marc');

        marcs.forEach(marc => marc.remove());

    }


    marcs(posY, posX){
    
        if(this.activeMarc) {

            this.eliminateMarcs(this.world[posY][posX]); // Chama a função para eliminar

    } else {

            this.createMarcs(this.world[posY][posX]); // Chama a função para criar

    }

    

    }

}