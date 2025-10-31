import { useFetchPokemons } from '@/hooks/usefetchPokemons'
import { selector } from 'recoil'

export const getPokemonsSelector = selector({
  key: 'getPokemonsKey',
  get: useFetchPokemons,
})
