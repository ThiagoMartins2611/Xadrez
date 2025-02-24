import { IniciarTorre } from "./inicializadores/iniciarTorre.js";
import { IniciarRainha } from "./inicializadores/iniciarRainha.js";
import { IniciarBispo } from "./inicializadores/iniciarBispo.js";
import { IniciarPeao } from "./inicializadores/iniciarPeao.js";
import {IniciarRei} from "./inicializadores/iniciarRei.js";
import {IniciarCavalo} from "./inicializadores/iniciarCavalo.js"
import { Peca } from "./classes/peca.js";

const torres = new IniciarTorre()
const bispos = new IniciarBispo()
const cavalos = new IniciarCavalo()
const peaoes = new IniciarPeao()
const rainha = new IniciarRainha()
const rei = new IniciarRei()

//funções de ativação dos times:
function black(tabela){
    
    torres.init(0, 0, tabela, "black");
    torres.init(7, 0, tabela, "black");

    cavalos.init(1, 0, tabela, "black");
    cavalos.init(6, 0, tabela, "black");

    bispos.init(2, 0, tabela, "black")
    bispos.init(5, 0, tabela, "black")

    rainha.init(3, 0, tabela, "black")
    rei.init(4, 0, tabela, "black");


   for(let i=0; i<=7; i++){
    peaoes.init(i, 1, tabela, "black");
   }

}

function white(tabela){
    
    torres.init(0, 7, tabela, "white");
    torres.init(7, 7, tabela, "white");

    cavalos.init(1, 7, tabela, "white");
    cavalos.init(6, 7, tabela, "white");

    bispos.init(2, 7, tabela, "white")
    bispos.init(5, 7, tabela, "white")

    rainha.init(3, 7, tabela, "white")
    rei.init(4, 7, tabela, "white");

    
   for(let i=0; i<=7; i++){
    peaoes.init(i, 6, tabela, "white");
   }

}



window.marcsActivate = false;

window.kingLive = true;
window.kingTeamDead;

window.changeTeam = true;
//true é white
//false é black

let squares = document.getElementsByClassName('square');

let arraySquare = Array.from(squares);

function transformarEm2D(array, tamanho) {
    let resultado = [];
    for (let i = 0; i < array.length; i += tamanho) {
        resultado.push(array.slice(i, i + tamanho));
    }
    return resultado;
} 


let SquareTabelado = transformarEm2D(arraySquare, 8);



black(SquareTabelado);
white(SquareTabelado);



const verificador = setInterval(() => {

    let whitePecas = document.querySelectorAll(".peca.white");
    let blackPecas = document.querySelectorAll(".peca.black");
    
    if(window.changeTeam){

        whitePecas.forEach(peca => {
            peca.style.pointerEvents = "auto"
        });

        blackPecas.forEach(peca => {
            peca.style.pointerEvents = "none"
        });

    }else{

        blackPecas.forEach(peca => {
            peca.style.pointerEvents = "auto"
        });

        whitePecas.forEach(peca => {
            peca.style.pointerEvents = "none"
        });
    }

    if(window.kingLive == false){
        clearInterval(verificador);

        whitePecas.forEach(peca => {
            peca.style.pointerEvents = "none"
        });

        blackPecas.forEach(peca => {
            peca.style.pointerEvents = "none"
        });



        if(window.kingTeamDead == "peca black"){
            console.log("Time branco venceu!")
            

        }

        if(window.kingTeamDead == "peca white"){
            console.log("Time preto venceu!")



        }



    }

    

}, 100);