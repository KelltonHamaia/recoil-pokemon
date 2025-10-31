import { IPokemon } from '@/interfaces/pokemon'
import axios from 'axios'

const pokeApiRequests = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export const useFetchPokemons = async (): Promise<IPokemon[]> => {
  const pokemonListPromises = []

  for (let pokedexId = 1; pokedexId <= 20; pokedexId++) {
    const url = `/pokemon/${pokedexId}`
    const pokemonPromise = pokeApiRequests
      .get<IPokemon>(url)
      .then((res) => res.data)
    pokemonListPromises.push(pokemonPromise)
  }

  return await Promise.all(pokemonListPromises)
}
