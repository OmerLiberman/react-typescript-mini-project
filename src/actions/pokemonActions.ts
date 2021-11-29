import {Dispatch} from 'redux';
import { PokemonDispatchTypes, POKEMON_SUCCESS, POKEMON_LOADINDG, POKEMON_FAIL } from './pokemonTypes';
import axios from 'axios';

export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_LOADINDG
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type: POKEMON_SUCCESS,
            payload: res.data
        });

    } catch (e) {
        dispatch({
            type: POKEMON_FAIL
        });
    }
}