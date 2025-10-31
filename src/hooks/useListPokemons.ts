import { favoritePokemonsSelector } from '@/atoms/selectors/favorite-pokemons-selector'
import { useRecoilValue } from 'recoil'

export const useListPokemons = () => useRecoilValue(favoritePokemonsSelector)
