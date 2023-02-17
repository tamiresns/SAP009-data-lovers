
import data from './data/rickandmorty/rickandmorty.js';

const botaoPersonagem = document.getElementById("btn-personagem")
botaoPersonagem.addEventListener("click", mostrar)

function mostrar(){
  const root = document.getElementById('container-personagens')
  root.innerHTML = data.results.map((personagemAtual) => 
    `<div>
        <img src="${personagemAtual.image}" alt="Imagem do Personagem">
        <ul class="listaDados">
          <li class="linhaEscura">NOME:</li>
          <li class="linhaEscura">${personagemAtual.name}</li>
          <li class="linhaClara">ESTADO DE VIDA:</li>
          <li class="linhaClara">${personagemAtual.status}</li>
          <li class="linhaEscura">GÊNERO:</li>
          <li class="linhaEscura">${personagemAtual.gender}</li>
          <li class="linhaClara">LOCAL DE ORIGEM:</li>
          <li class="linhaClara">${personagemAtual.origin.name}</li>
          <li class="linhaEscura">LUGAR ONDE VIVE:</li>
          <li class="linhaEscura">${personagemAtual.location.name}<li>
          <li class="linhaClara">EPISÓDIOS EM QUE APARECE:</li>
        </ul>
      </div>
  `)
}

function mostrarFiltrado(event){
  const root = document.getElementById('container-personagens')
  root.innerHTML = ordenar(data.results, event.target.value).map((personagemAtual) => 
    `<div>
      <img src="${personagemAtual.image}" alt="Imagem do Personagem">
      <ul class="listaDados">
        <li class="linhaEscura">NOME:</li>
        <li class="linhaEscura">${personagemAtual.name}</li>
        <li class="linhaClara">ESTADO DE VIDA:</li>
        <li class="linhaClara">${personagemAtual.status}</li>
        <li class="linhaEscura">GÊNERO:</li>
        <li class="linhaEscura">${personagemAtual.gender}</li>
        <li class="linhaClara">LOCAL DE ORIGEM:</li>
        <li class="linhaClara">${personagemAtual.origin.name}</li>
        <li class="linhaEscura">LUGAR ONDE VIVE:</li>
        <li class="linhaEscura">${personagemAtual.location.name}<li>
        <li class="linhaClara">EPISÓDIOS EM QUE APARECE:</li>
      </ul>
    </div>
`)
}

const ordemAlfabetica = document.getElementById("ordemAlfabetica");
ordemAlfabetica.addEventListener ("change", mostrarFiltrado);


function ordenar(dadosFiltrados, tipoOrdenacao){
  const novaArray = [...dadosFiltrados]

  if(tipoOrdenacao === "az") {
    novaArray.sort(function(a,b){
      if(a.name < b.name){
        return -1;
      }
      else{
        return +1;
      }
    })
  } 
  else if(tipoOrdenacao === "za"){ //exbibe na ordem inversa
    novaArray.sort(function(a,b){
      if(a.name > b.name){
        return -1;
      }
      else{
        return +1;
      }
    })
  }
  return novaArray;
  /*if(ordem.target.value === "az"){
    return novaArray;
  }
  else if(ordem.target.value === "za"){
    return novaArray.reverse();
  }*/
}


export default mostrar

