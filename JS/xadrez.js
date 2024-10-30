let xadrez = document.getElementById('xadrez')

for(let i=0; i<64; i++){
    let squares = document.createElement("div");
    let black = "black squares"
    let white = "white squares"

    let quadradoAnterior = squares.className;

    if(quadradoAnterior != white){
        squares.className = white;
    }else{
        squares.className = black;
    }
    
    xadrez.appendChild(squares);

}
