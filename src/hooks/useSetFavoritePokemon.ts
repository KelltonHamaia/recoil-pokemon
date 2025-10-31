import { pokemonListState } from '@/atoms/pokemon-state'
import { useSetRecoilState } from 'recoil'

export const useSetFavoritePokemon = () => {
  const setPokemonList = useSetRecoilState(pokemonListState)

  return (id: number) => {
    setPokemonList((previousList) =>
      previousList.map((pokemon) => {
        if (pokemon.id === id) {
          return {
            ...pokemon,
            isFavorite: !pokemon.isFavorite,
          }
        } else {
          return pokemon
        }
      })
    )
  }
}
