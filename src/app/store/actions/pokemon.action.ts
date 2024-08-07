import { createAction, props } from '@ngrx/store';
import { PokemonModel } from '../../models/pokemon.model';

export const getPokemonList = createAction('GET_POKEMON_LIST');

export const successGetPokemonsList = createAction(
  'SUCCESS_GET_POKEMONS_LIST',
  props<{ pokemonsList: PokemonModel[] }>()
);

export const errorGetPokemonsList = createAction(
  'ERROR_GET_POKEMONS_LIST',
  props<{ error: any }>()
);

export const getPokemonDetails = createAction(
  'GET_POKEMON_DETAILS',
  props<{ pokemonName: string }>()
);

export const successGetPokemonDetails = createAction(
  'SUCCESS_GET_POKEMON_DETAILS',
  props<{ pokemonDetails: any }>()
);

export const errorGetPokemonDetails = createAction(
  'ERROR_GET_POKEMON_DETAILS',
  props<{ error: any }>()
);

export const updateIsLoading = createAction(
  'UPDATE_IS_LOADING',
  props<{ isLoading: boolean }>()
);
