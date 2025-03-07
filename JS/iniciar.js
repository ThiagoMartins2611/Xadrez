
function delay(){
  function createParticle(type) {
    const particle = document.createElement("div");
    particle.classList.add("particle", type === "white" ? "white-particle" : "black-particle");
    document.body.appendChild(particle);

    // Posicionamento aleatório na altura da tela
    particle.style.top = Math.random() * window.innerHeight + "px";

    particle.style.animationDuration = (Math.random() * 2 + 1) + "s";

    setTimeout(() => {
      particle.remove();
    }, 3000);
  }

  setInterval(() => createParticle("white"), 75); // Partículas Brancas (esquerda → direita)
  setInterval(() => createParticle("black"), 75);



  function createLightning() {


    const flash = document.getElementById("flash");
    

    flash.style.opacity = "1";
    setTimeout(() => flash.style.opacity = "0", 100);


    for (let i = 0; i < 3; i++) {

      const lightning = document.createElement("div");
      lightning.classList.add("lightning");
      document.body.appendChild(lightning);


      lightning.style.left = Math.random() * window.innerWidth + "px";
      lightning.style.top = "0px";
      lightning.style.height = (Math.random() * 200 + 200) + "px";


      lightning.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;


      setTimeout(() => lightning.remove(), 500);
    }


 
    setTimeout(createLightning, Math.random() * 7000 + 3000);
  }

  // Iniciar trovões
  setTimeout(createLightning, 3000);


}

setTimeout(delay, 1800)