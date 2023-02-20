//import porcentagem from '../scr/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';
import {ordenar} from '../src/main.js';

describe('testando o main.js', () => {
  it('carregando os personagens a-z', () => {
    const dadosOrdenados = ordenar(data.results, "az")

    expect(dadosOrdenados[0].name).toEqual('Abadango Cluster Princess');
  });

  it('carregando os personagens z-a', () => {
    const dadosOrdenados = ordenar(data.results, "za")

    expect(dadosOrdenados[0].name).toEqual('Zick Zack');
  });
  
    
});
  