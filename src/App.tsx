import FilterBar from './components/filter-bar';
import PokemonCard from './components/pokemon-card';
import { useListPokemons } from './hooks/useListPokemons';

const Page = () => {

  const pokemonList = useListPokemons()

  return (

    <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      <FilterBar />

      {pokemonList.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          {...pokemon}
        />
      ))}
    </div>
  );
}

export default Page;