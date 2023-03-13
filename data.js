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

export function filtrarPorStatus(personagens, status){
  return personagens.filter (personagemAtual => personagemAtual.status === status);
}

export function filtrarPorEspecie(personagens, especies){
  return personagens.filter (personagemAtual => personagemAtual.species === especies)
}
export function filtrarPorGender(personagens, gender){
  return personagens.filter (personagemAtual => personagemAtual.gender === gender);
}

export function filtrarPorOrigin(personagens, origin){
  return personagens.filter (personagemAtual => personagemAtual.origin.name === origin);
}

export function filtrarPorLocation(personagens, location){
  return personagens.filter(personagemAtual => personagemAtual.location.name === location);
}

export function search(personagens, name){
  return personagens.filter(personagemAtual => personagemAtual.name.toLowerCase().includes(name.toLowerCase()))
}



