import {porcentagem, ordenar, filtrar, lerJson} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//função pega o html e preenche com os dados do json
function mostrar(){
  const root = document.getElementById('container-personagens')
  root.innerHTML = lerJson()
}

//responsável por criar a div da caixinha de personagem
function montaTemplate(personagemAtual){
  return `<div>
  <img src="${personagemAtual.image}" alt="Imagem do Personagem">
  <ul class="listaDados">
    <li class="linhaEscura">NOME:</li>
    <li class="linhaEscura">${personagemAtual.name}</li>
    <li class="linhaClara">ESTADO DE VIDA:</li>
    <li class="linhaClara">${personagemAtual.status}</li>
    <li class="linhaEscura">GÊNERO:</li>
    <li class="linhaEscura">${personagemAtual.gender}</li>
    <li class="linhaClara">ESPÉCIE:</li>
    <li class="linhaClara">${personagemAtual.species}</li>
    <li class="linhaEscura">LOCAL DE ORIGEM:</li>
    <li class="linhaEscura">${personagemAtual.origin.name}</li>
    <li class="linhaClara">LUGAR ONDE VIVE:</li>
    <li class="linhaClara">${personagemAtual.location.name}</ li>
    <li class="linhaEscura">PORCENTAGEM DE APARIÇÕES:</li>
    <li class="linhaEscura">${porcentagem(personagemAtual.episode.length)}%</li>
  </ul>
</div>
`
}

function mostrarFiltrado(){
  const root = document.getElementById('container-personagens')
  const dadosFiltrados = filtrarDados(data.results)
  const tipoOrdenacao = document.getElementById("ordemAlfabetica").value
  root.innerHTML = ordenar(dadosFiltrados, tipoOrdenacao).map((personagemAtual) => 
    montaTemplate(personagemAtual)
  )
} 

//expandir
function filtrarDados(personagem){
  const estadoDeVida = document.getElementById("estadoDeVida").value
  const especie = document.getElementById("especie").value
  const genero = document.getElementById("genero").value
  const origem = document.getElementById("localDeOrigem").value
  const ondeVive = document.getElementById("lugarOndeVive").value
  return filtrar(personagem, estadoDeVida, especie, genero, origem, ondeVive) 
}


//template para novos filtros
function montaFiltroStatus(){
  const estadosDeVida = document.getElementById("estadoDeVida");
  estadosDeVida.addEventListener("change", mostrarFiltrado);

  const dicionario = {
    "Alive" : "vivo" ,
    "Dead" : "morto" ,
    "unknown" : "desconhecido"
  }
  const valoresUnicos = Array.from(new Set(data.results.map((personagemAtual) => 
    `<option value="${personagemAtual.status}">${dicionario[personagemAtual.status]}</option>`
  )))
  estadosDeVida.innerHTML = "<option value=0>Estado de vida</option>"+valoresUnicos;

}

function montaFiltroGender(){
  const genero = document.getElementById("genero");
  genero.addEventListener("change", mostrarFiltrado);

  const dicionario = {
    "Female" : "feminino" ,
    "Male" : "masculino" ,
    "unknown" : "desconhecido" ,
    "undefined" : "indefinido"
  }
  const valoresUnicos = Array.from(new Set(data.results.map((personagemAtual) => 
    `<option value="${personagemAtual.gender}">${dicionario[personagemAtual.gender]}</option>`
  )))
  genero.innerHTML = "<option value=0>Gênero</option>" + valoresUnicos;
}

function montaFiltroEspecie(){
  const especie = document.getElementById("especie");
  especie.addEventListener("change", mostrarFiltrado);

  const valoresUnicos = Array.from(new Set(data.results.map((personagemAtual) => 
    `<option value="${personagemAtual.species}">${personagemAtual.species}</option>`
  )))
  especie.innerHTML = "<option value=0>Espécie</option>" + valoresUnicos;
}

function montaFiltroLocalOrigem(){
  const origem = document.getElementById("localDeOrigem");
  origem.addEventListener("change", mostrarFiltrado);

  const valoresUnicos = Array.from(new Set(data.results.map((personagemAtual) => 
    `<option value="${personagemAtual.origin.name}">${personagemAtual.origin.name}</option>`
  )))
  origem.innerHTML = "<option value=0>Local de Origem</option>" + valoresUnicos;
}

function montaFiltroLugar(){
  const lugarOndeVive = document.getElementById("lugarOndeVive");
  lugarOndeVive.addEventListener("change", mostrarFiltrado);

  const valoresUnicos = Array.from(new Set(data.results.map((personagemAtual) => 
    `<option value="${personagemAtual.location.name}">${personagemAtual.location.name}</option>`
  )))
  lugarOndeVive.innerHTML = "<option value=0>Lugar onde vive</option>" + valoresUnicos;
}

// const botaoPesquisaNome = document.getElementById("btnBusca")
// botaoPesquisaNome.addEventListener("click", pesquisaNome());
// function pesquisaNome() {
//   const x = (data.results.name)
//   let input = document.getElementById("txtBusca").value
//   input = input.toLowerCase();
  
//   for (let i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display="none";
//     }
//     else {
//       x[i].style.display="list-item";
//     }
//   }
// }

//incluir novo filtro
document.addEventListener('DOMContentLoaded', function () {
  const botaoPersonagem = document.getElementById("btn-personagem")
  botaoPersonagem.addEventListener("click", mostrar)
  
  const ordemAlfabetica = document.getElementById("ordemAlfabetica");
  ordemAlfabetica.addEventListener ("change", mostrarFiltrado);

  mostrar()
  montaFiltroStatus()
  montaFiltroEspecie()
  montaFiltroLocalOrigem()
  montaFiltroLugar()
  montaFiltroGender()
  
})

export {mostrar, ordenar,//pesquisaNome//
} 





