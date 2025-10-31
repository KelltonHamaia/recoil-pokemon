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

/**
 * Bom, a razão para que ele seja feito dessa forma ao
 * invés de utilizar os query params, ex: https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
 * é por conta de que dessa forma implicaria fazer duas requisições:
 * Uma para pegar os pokemons, outra para pegar as imagens (apesar de não estar funcionando por conta de muitas requisições)
 */
