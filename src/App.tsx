import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootStore} from './store';
import { getPokemon } from './actions/pokemonActions';

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('');
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  }

  const handleSubmit = () => {
    dispatch(getPokemon(pokemonName));
  }

  console.log("p state: ", pokemonState);

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}> Search </button>

      <div>
        {/* {pokemonState.pokemon} */}
        {
          pokemonState.pokemon && (
            <div>
              <img src={pokemonState.pokemon.sprites.front_default} alt={""}/>
              {/* more data ... */}
            </div>
          )
        }
      </div>

    </div>
  );
}

export default App;
