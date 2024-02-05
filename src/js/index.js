const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
  //console.log("The button was clicked!"); 
    //elementoPlataformas.classList.add("ativo");
   //const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
  elementoPlataformas.classList.toggle("ativo");

//if(botaoEstaAberto) {
  //elementoPlataformas.classList.remove("ativo");
//}else{
  //elementoPlataformas.classList.add("ativo");
//}
});