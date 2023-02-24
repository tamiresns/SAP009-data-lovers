//import porcentagem from '../scr/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';
import {ordenar, montaFiltroStatus} from '../src/main.js';


describe('testando o filtro de Ordem alfabética', () => {
  it('carregando os personagens a-z', () => {
    const dadosOrdenados = ordenar(data.results, "az")

    expect(dadosOrdenados[0].name).toEqual('Abadango Cluster Princess');
  });

  it('carregando os personagens z-a', () => {
    const dadosOrdenados = ordenar(data.results, "za")

    expect(dadosOrdenados[0].name).toEqual('Zick Zack');
  });
  
});

describe('testando o filtro de estado de vida', () => {
  it('carregando os personagens vivos', () => {
    const dadosOrdenados = montaFiltroStatus(data.results, "vivo")

    expect(dadosOrdenados[0].status).toEqual('Rick Sanchez');
  });

  it('carregando os personagens mortos', () => {
    const dadosOrdenados = montaFiltroStatus(data.results, "morto")

    expect(dadosOrdenados[0].status).toEqual('Adjudicator Rick');
  });
  
});
  
  