export class Peca{
    
    constructor(inicialSquare){
        this.squarePosition = inicialSquare;
    }

    spawn(sprite){
        let peca = document.createElement('div');
        peca.id = 'peca'
        

        this.squarePosition.appendChild(peca)
    }

    destruction(){

    }

    move(){
        
    }

}