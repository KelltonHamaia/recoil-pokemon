import { IFilter, IPokemon } from '@/interfaces/pokemon'
import { atom } from 'recoil'
import { getPokemonsSelector } from './selectors/load-pokemons-selector'

export const pokemonListState = atom<IPokemon[]>({
  key: 'pokemonListKey',
  default: getPokemonsSelector,
})

export const searchFiltersState = atom<IFilter>({
  key: 'searchFiltersKey',
  default: {},
})
