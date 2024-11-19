export class Peca{
    
    constructor(){
        this.squarePosition;
        this.peca;
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

    }
}