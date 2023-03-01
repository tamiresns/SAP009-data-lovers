export function porcentagem(data){
  const porcento = data * 100 / 31 
  const porcentoArredondado = Math.round(porcento)
  return porcentoArredondado
}


export function ordenar(dadosFiltrados, tipoOrdenacao){
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

export function filtrar(personagem, status, especie, genero, origem, location){
  return personagem.filter((personagemAtual) => {
    if(status !== "0" && personagemAtual.status === status){
      return true   
    }
    if(especie !== "0" && personagemAtual.species === especie){
      return true
    }
    if(genero !== "0" && personagemAtual.gender === genero){
      return true
    }
    if(origem !== "0" && personagemAtual.origin.name === origem){
      return true
    }
    if(location !== "0" && personagemAtual.location.name === location){
      return true
    }
  })
}



