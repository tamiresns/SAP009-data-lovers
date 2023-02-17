function porcentagem(data){
  const porcento = data * 100 / 31 
  const porcentoArredondado = Math.round(porcento)
  return porcentoArredondado
}

export default porcentagem