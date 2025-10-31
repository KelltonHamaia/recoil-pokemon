import { selector } from 'recoil'
import { pokemonListState, searchFiltersState } from '@/atoms/pokemon-state'

export const favoritePokemonsSelector = selector({
  key: 'favoritePokemonsSelectorKey',
  get: ({ get }) => {
    const pokemonList = get(pokemonListState)
    const { favoritesOnly, searchParams } = get(searchFiltersState)

    return pokemonList.filter((pokemon) => {
      if (!favoritesOnly && !searchParams) {
        return true
      }

      if (pokemon.isFavorite && !searchParams) {
        return pokemon
      }

      if (searchParams && pokemon.name.includes(searchParams)) {
        return pokemon
      }
    })
  },
})
