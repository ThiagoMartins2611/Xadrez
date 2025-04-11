import { IniciarTorre } from "./inicializadores/iniciarTorre.js";
import { IniciarRainha } from "./inicializadores/iniciarRainha.js";
import { IniciarBispo } from "./inicializadores/iniciarBispo.js";
import { IniciarPeao } from "./inicializadores/iniciarPeao.js";
import {IniciarRei} from "./inicializadores/iniciarRei.js";
import {IniciarCavalo} from "./inicializadores/iniciarCavalo.js"


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

function timeReductionWhite(time, box){
    if(window.changeTeam){
        time -= 1
        box.textContent = ""
        box.textContent = time;
    }
};

function timeReductionBlack(time, box){
    if(!window.changeTeam){
        time -= 1
        box.innerText = "";
        box.innerText = time;
    }
};


let timeWhite = 180;
let timeBlack = 180;

const verificador = setInterval(() => {

    let whitePecas = document.querySelectorAll(".peca.white");
    let blackPecas = document.querySelectorAll(".peca.black");
    let marcadorW = document.getElementById("marcadorwhite");
    let marcadorB = document.getElementById("marcadorblack");
    let boxtimewhite = document.getElementById("whitetime");
    let boxtimeblack = document.getElementById("blacktime");


    if(window.changeTeam){

        whitePecas.forEach(peca => {
            peca.style.pointerEvents = "auto"
        });


        blackPecas.forEach(peca => {
            peca.style.pointerEvents = "none"
        });

        marcadorB.style.backgroundColor = '';
        marcadorW.style.backgroundColor = 'white';

        marcadorW.style.boxShadow = '0 0 20px white';
        marcadorB.style.boxShadow = ''

        setInterval(timeReductionWhite(timeWhite, boxtimewhite), 1000)
        

    }else{

        blackPecas.forEach(peca => {
            peca.style.pointerEvents = "auto"
        });

        whitePecas.forEach(peca => {
            peca.style.pointerEvents = "none"
        });

        marcadorB.style.backgroundColor = 'black';
        marcadorW.style.backgroundColor = '';

        marcadorB.style.boxShadow = '0 0 20px black'
        marcadorW.style.boxShadow = ''

        setInterval(timeReductionBlack(timeBlack, boxtimeblack), 1000)
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
            console.log("Time branco venceu!");
            
            window.location.href = "VitoriaBrancas.html";

        }

        if(window.kingTeamDead == "peca white"){
            console.log("Time preto venceu!");

            window.location.href = "VitoriaPretas.html";

        }



    }

    

}, 100);