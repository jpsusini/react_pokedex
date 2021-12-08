import React, {useState, useEffect} from 'react'
import PokemonCard  from './components/PokemonCard'

function App() {
  
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadmore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=24`)

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    
    setLoadmore(data.next)
    
    
    function createPokemonObject(results)  {
      results.forEach( async(pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        
        setAllPokemons(pokeList => [...pokeList, data])
        // allPokemons.push(data)
      })
    }
    createPokemonObject(data.results)
    // await console.log(allPokemons)
  }
    
  useEffect(() => {
      getAllPokemons()
    }, [])
  
  return (
    <div className="app-container">
      <img src="pokedex-logo.svg"></img>
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons 
            .sort((a, b) => a.id > b.id? 1 : -1)//*trie les pokemons par sorte
            .map((pokemon, index) => 
                <PokemonCard 
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                base_experience={pokemon.base_experience}
                key={index}
                />
            )}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>load more</button>
        </div>
    </div>
  );
}

export default App;
