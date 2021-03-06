import { PokemonDispatchTypes, PokemonType, POKEMON_FAIL, POKEMON_LOADINDG, POKEMON_SUCCESS } from "../actions/pokemonTypes";

interface DefaultStateI {
    loading: boolean,
    pokemon?: PokemonType
}

const defaultState: DefaultStateI = {
    loading: false,
};

const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case POKEMON_FAIL:
            return {
                loading: false,
                // error handling
            }
        case POKEMON_LOADINDG:
            return {
                loading: true,
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
        default:
            return state
    }
}

export default pokemonReducer;