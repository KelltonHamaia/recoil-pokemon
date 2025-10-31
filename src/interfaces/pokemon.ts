export interface IFilter {
  favoritesOnly?: boolean
  searchParams?: string
}

export interface IPokemon {
  id: number
  name: string
  sprites: {
    front_default?: string
  }
  types: Array<PokemonType>
  isFavorite?: boolean
}

type PokemonType = {
  type: {
    name: PokemonTypes
  }
}

export type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'dragon'

//coletar um array de promises de 1 a x e então um await Promise.all

// https://pokeapi.co/api/v2/pokemon/1/
// https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/500px-Pok%C3%A9_Ball_icon.svg.png
