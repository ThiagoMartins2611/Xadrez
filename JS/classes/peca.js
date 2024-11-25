export class Peca{
    
    constructor(){
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

        console.log("arroz eliminado")
    }


    marcs(pos){
    let squares = document.getElementsByClassName('square');
        if(this.activeMarc) {

            this.eliminateMarcs(squares[pos]); // Chama a função para eliminar

    } else {

            this.createMarcs(squares[pos]); // Chama a função para criar

    }

    // Alterna o estado de 'active'
    

    }

}