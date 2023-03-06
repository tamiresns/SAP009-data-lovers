//import porcentagem from '../scr/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';
import {ordenar, filtrarPorStatus, filtrarPorGender, filtrarPorLocation, filtrarPorEspecie, filtrarPorOrigin} from '../src/data.js';



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
    const dadosOrdenados = filtrarPorStatus(data.results, "Alive")
    
    expect(dadosOrdenados[0].name).toEqual("Rick Sanchez");
  });

  it('carregando os personagens mortos', () => {
    const dadosOrdenados = filtrarPorStatus(data.results, "Dead")

    expect(dadosOrdenados[0].name).toEqual("Adjudicator Rick");
  });
  
  it('carregando os personagens com status desconhecido', () => {
    const dadosOrdenados = filtrarPorStatus(data.results, "unknown")

    expect(dadosOrdenados[0].name).toEqual("Abradolf Lincler");
  });
});

describe('testando filtro de gênero', ()=>{
  it('carregando os personagens com gênero masculino',() => {
    const dadosOrdenados = filtrarPorGender(data.results, "Male")

    expect(dadosOrdenados[1].name).toEqual("Morty Smith");
  });

  it('carregando personagens de gênero feminino',() =>{
    const dadosOrdenados = filtrarPorGender(data.results, "Female")

    expect(dadosOrdenados[0].name).toEqual("Summer Smith");
  })

  it('carregando personagens de gênero desconhecido', ()=>{
    const dadosOrdenados = filtrarPorGender(data.results, "unknown")

    expect(dadosOrdenados[0].name).toEqual("Alien Googah");
  })

  it('carregando personagens de gênero indefinido', ()=>{
    const dadosOrdenados = filtrarPorGender(data.results, "Genderless")

    expect(dadosOrdenados[0].name).toEqual("Ghost in a Jar");
  })
});

describe('testando filtro de espécie', ()=>{
  it('carregando os personagens de espécie humana', ()=>{
    const dadosOrdenados = filtrarPorEspecie(data.results, "Human")

    expect(dadosOrdenados[0].name).toEqual("Rick Sanchez");
  })

  it('carregando personagens de espécie alienígena', ()=>{
    const dadosOrdenados = filtrarPorEspecie(data.results, "Alien")

    expect(dadosOrdenados[2].name).toEqual("Alien Morty");
  })

  it('carregando personagens de espécie vampiro', ()=>{
    const dadosOrdenados = filtrarPorEspecie(data.results, "Vampire")

    expect(dadosOrdenados[1].name).toEqual("Vampire Master");
  })
})

describe('testando filtro de origem', ()=>{
  it('carregando os personagens do planeta Terra (C-137)',()=>{
    const dadosOrdenados = filtrarPorOrigin(data.results, "Earth (C-137)")

    expect(dadosOrdenados[2].name).toEqual("Albert Einstein");
  })

  it('carregando os personagens do planeta Citadel of Ricks', ()=>{
    const dadosOrdenados = filtrarPorOrigin(data.results, "Citadel of Ricks")

    expect (dadosOrdenados[0].name).toEqual("Baby Rick");
  })
})

describe('testando filtro de localização', ()=>{
  it('carregando os personagens que estão no planeta Dorian 5', ()=>{
    const dadosOrdenados = filtrarPorLocation(data.results, "Dorian 5")

    expect (dadosOrdenados[0].name).toEqual("Diablo Verde");
  })
  it('carregando os personagens que estão no planeta Anatomy Park', ()=>{
    const dadosOrdenados = filtrarPorLocation(data.results, "Anatomy Park");

    expect (dadosOrdenados[0].name).toEqual("Alexander"); 
  })
})

