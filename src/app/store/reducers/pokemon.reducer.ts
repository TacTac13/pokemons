import { createReducer, on } from '@ngrx/store';
import { PokemonModel, PokemonSateModel } from '../../models/pokemon.model';
import * as Actions from '../actions/pokemon.action';
import AppState from '../state';

export const initialState: PokemonSateModel = {
  pokemonsList: [],
  isLoading: true,
  pokemonDetails: undefined,
};

export const pokemonReducer = createReducer(
  initialState,
  on(Actions.successGetPokemonsList, (state, { pokemonsList }) => {
    return { ...state, pokemonsList, isLoading: false };
  }),
  on(Actions.successGetPokemonDetails, (state, { pokemonDetails }) => {
    console.log(pokemonDetails);

    return { ...state, pokemonDetails, isLoading: false };
  }),
  on(Actions.updateIsLoading, (state, { isLoading }) => {
    return { ...state, isLoading };
  })
);
