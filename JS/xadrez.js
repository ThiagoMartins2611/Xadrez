let xadrez = document.getElementById('xadrez')

for(let i=0; i<64; i++){
    let squares = document.createElement("div");

    squares.className = "black squares"

    xadrez.appendChild(squares);

}
