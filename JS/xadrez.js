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

let minWhite = document.getElementById("minwhite");
let secWhite = document.getElementById("secwhite");

let minBlack = document.getElementById("minblack")
let secBlack = document.getElementById("secblack");

let secW = 59;
let secB = 59;

let minW = 2;
let minB = 2;

minWhite.innerText = `${minW}:`
secWhite.innerText = secW;

minBlack.innerText = `${minB}:`
secBlack.innerText = secB;




let contB = 0;
let contW = 0;

function timeReductionWhite(){
    if(window.changeTeam && secW > 0){
        
        contW += 1;
        if(contW%10 == 0){
            secW -= 1;
        }

        if(secW < 10){
            secWhite.innerText = `0${secW}`;
        }else{
            secWhite.innerText = secW;
        }
        
        if(minW == 0 && secW == 0){
            
            window.kingLive = false;
            window.kingTeamDead = "peca white";


        }else if(secW == 0){
            minW -= 1;
            setTimeout(()=>{
                minWhite.innerText = `${minW}:`
                secW = 59;
            },1000)
            
            
        }
    }
};

function timeReductionBlack(){
    if(!window.changeTeam && secB > 0){
        contB += 1;
        if(contB%10 == 0){
            secB -= 1;
        }

        if(secB < 10){
            secBlack.innerText = `0${secB}`;
        }else{
            secBlack.innerText = secB;
        }
        
        if(minB == 0 && secB == 0){
            
            window.kingLive = false;
            window.kingTeamDead = "peca black";


        }else if(secB == 0){
            minB -= 1;
            setTimeout(()=>{
                minBlack.innerText = `${minB}:`
                secB = 59;
            },1000)
            
            
        }
    }
};



const verificador = setInterval(() => {

    let whitePecas = document.querySelectorAll(".peca.white");
    let blackPecas = document.querySelectorAll(".peca.black");
    let marcadorW = document.getElementById("marcadorwhite");
    let marcadorB = document.getElementById("marcadorblack");
   


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

        
    }


    
        timeReductionWhite();
        timeReductionBlack();

   

    




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
            setTimeout(()=>{
                window.location.href = "VitoriaBrancas.html";
            }, 1000)

        }

        if(window.kingTeamDead == "peca white"){
            console.log("Time preto venceu!");

            setTimeout(()=>{
                window.location.href = "VitoriaPretas.html";
            }, 1000)

        }



    }

    

}, 100);