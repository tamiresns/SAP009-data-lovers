//import porcentagem from '../scr/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';
import {ordenar, filtrar} from '../src/data.js';


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

const arrayTeste = [
  {
    "id": 11,
    "name": "Albert Einstein",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/11.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/12"
    ],
    "url": "https://rickandmortyapi.com/api/character/11",
    "created": "2017-11-04T20:20:20.965Z"
  },
]


describe('testando o filtro de estado de vida', () => {
  it('carregando os personagens vivos', () => {
    const dadosOrdenados = filtrar(arrayTeste, "vivo")

    expect(dadosOrdenados[0].status).toEqual("Armagheadon");
  });

  it('carregando os personagens mortos', () => {
    const dadosOrdenados = filtrar(arrayTeste, "morto")

    expect(dadosOrdenados[0].status).toEqual("Albert Einstein");
  });
  
  it('carregando os personagens com status desconhecido', () => {
    const dadosOrdenados = filtrar(arrayTeste, "desconhecido")

    expect(dadosOrdenados[0].status).toEqual("Big Head Morty");
  });
});