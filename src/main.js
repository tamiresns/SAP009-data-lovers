import {
  porcentagem,
  ordenar,
  filtrarPorEspecie,
  filtrarPorGender,
  filtrarPorLocation,
  filtrarPorOrigin,
  filtrarPorStatus,
  search
} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const root = document.getElementById('container-personagens')
const inputBarra = document.getElementById("txtBusca");

//função pega o html e preenche com os dados do json
function mostrar(){
  root.innerHTML = lerJson()
}

//faz a manipulação de dados do json
function lerJson(){
  return data.results.map((personagemAtual) => 
    montaTemplate(personagemAtual)
  )
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
  const dadosFiltrados = filtrarDados(data.results)
  const tipoOrdenacao = document.getElementById("ordemAlfabetica").value
  root.innerHTML = ordenar(dadosFiltrados, tipoOrdenacao).map((personagemAtual) => 
    montaTemplate(personagemAtual)
  )
} 

//expandir
function filtrarDados(personagens){
  const status = document.getElementById("estadoDeVida").value
  const especie = document.getElementById("especie").value
  const genero = document.getElementById("genero").value
  const origem = document.getElementById("localDeOrigem").value
  const location = document.getElementById("lugarOndeVive").value
  let filtro = personagens

  if(status !== "0"){
    filtro = filtrarPorStatus(filtro, status)
  }
  if(especie !== "0"){
    filtro = filtrarPorEspecie(filtro, especie)
  }
  if(genero !== "0"){
    filtro = filtrarPorGender(filtro, genero)
  }
  if(origem !== "0"){
    filtro = filtrarPorOrigin(filtro, origem)
  }
  if(location !== "0"){
    filtro = filtrarPorLocation(filtro, location)
  }

  return filtro
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
    "Genderless" : "indefinido",
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

function barraBusca(){
  root.innerHTML = search(data.results, inputBarra.value).map((personagemAtual) => montaTemplate(personagemAtual))
}

//incluir novo filtro
document.addEventListener('DOMContentLoaded', function () {
  const botaoPersonagem = document.getElementById("btn-personagem")
  botaoPersonagem.addEventListener("click", mostrar)
  
  const ordemAlfabetica = document.getElementById("ordemAlfabetica");
  ordemAlfabetica.addEventListener ("change", mostrarFiltrado);

  inputBarra.addEventListener("keyup", barraBusca);

  mostrar()
  montaFiltroStatus()
  montaFiltroEspecie()
  montaFiltroLocalOrigem()
  montaFiltroLugar()
  montaFiltroGender()
  
})

export {ordenar} 





