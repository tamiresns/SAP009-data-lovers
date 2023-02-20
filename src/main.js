import porcentagem from './data.js';
import data from './data/rickandmorty/rickandmorty.js';



//função pega o html e preenche com os dados do json
function mostrar(){
  const root = document.getElementById('container-personagens')
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

function mostrarFiltrado(event){
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

  return personagem.filter((personagemAtual) => {
    if(estadoDeVida !== 0){
      if(personagemAtual.status === estadoDeVida){
        return true
      }
    }
    if(especie !== 0){
      if(personagemAtual.species === especie){
        return true
      }
    }
    if(genero !== 0){
      if(personagemAtual.gender === genero){
        return true
      }
    }
    if(origem !== 0){
      if(personagemAtual.origin.name === origem){
        return true
      }
    }
    if(ondeVive !== 0){
      if(personagemAtual.location.name === ondeVive){
        return true
      }
    }
  })

}
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
}

//template para novos filtros
function montaFiltroStatus(){
  const estadosDeVida = document.getElementById("estadoDeVida");
  estadosDeVida.addEventListener ("change", () => {mostrarFiltrado(event, "filtroStatus")});

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

function montaFiltroEspecie(){
  const especie = document.getElementById("especie");
  especie.addEventListener ("change", () => {mostrarFiltrado(event, "filtroEspecie")});

  const valoresUnicos = Array.from(new Set(data.results.map((personagemAtual) => 
    `<option value="${personagemAtual.species}">${personagemAtual.species}</option>`
  )))
  especie.innerHTML = "<option value=0>Espécie</option>" + valoresUnicos;

}

function montaFiltroLocalOrigem(){
  const origem = document.getElementById("localDeOrigem");
  origem.addEventListener ("change", () => {mostrarFiltrado(event, "filtroOrigem")});

  const valoresUnicos = Array.from(new Set(data.results.map((personagemAtual) => 
    `<option value="${personagemAtual.origin.name}">${personagemAtual.origin.name}</option>`
  )))
  origem.innerHTML = "<option value=0>Local de Origem</option>" + valoresUnicos;

}

function montaFiltroLugar(){
  const lugarOndeVive = document.getElementById("lugarOndeVive");
  lugarOndeVive.addEventListener ("change", () => {mostrarFiltrado(event, "filtroLugarOndeVive")});

  const valoresUnicos = Array.from(new Set(data.results.map((personagemAtual) => 
    `<option value="${personagemAtual.location.name}">${personagemAtual.location.name}</option>`
  )))
  lugarOndeVive.innerHTML = "<option value=0>Lugar onde vive</option>" + valoresUnicos;

}


//incluir novo filtro
document.addEventListener('DOMContentLoaded', function () {
  const botaoPersonagem = document.getElementById("btn-personagem")
  botaoPersonagem.addEventListener("click", mostrar)
  
  const ordemAlfabetica = document.getElementById("ordemAlfabetica");
  ordemAlfabetica.addEventListener ("change", mostrarFiltrado);

  montaFiltroStatus()
  montaFiltroEspecie()
  montaFiltroLocalOrigem()
  montaFiltroLugar()
})

export {mostrar, ordenar} 

