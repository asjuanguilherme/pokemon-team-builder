type pokemon = {
  id: number
  name: string
  image: string
  types: string[]
}

export const pokemonListMockup: pokemon[] = [
  {
    id: 1,
    name: 'Teste',
    image: 'images/bulbasaur.png',
    types: ['grass'],
  },
  {
    id: 2,
    name: 'Teste2',
    image: 'images/bulbasaur.png',
    types: ['fairy', 'fire'],
  },
  {
    id: 3,
    name: 'Teste3',
    image: 'images/bulbasaur.png',
    types: ['normal'],
  },
  {
    id: 4,
    name: 'Teste4',
    image: 'images/bulbasaur.png',
    types: ['grass'],
  },
]
