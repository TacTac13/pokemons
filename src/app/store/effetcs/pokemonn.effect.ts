import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  errorGetPokemonDetails,
  errorGetPokemonsList,
  getPokemonDetails,
  getPokemonList,
  successGetPokemonDetails,
  successGetPokemonsList,
} from '../actions/pokemon.action';
import {
  catchError,
  map,
  mergeMap,
  of,
  switchMap,
  toArray,
  withLatestFrom,
} from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { Store } from '@ngrx/store';
import AppState from '../state';

@Injectable()
export class PokemonEffect {
  getPokemonList$: any = createEffect((): any =>
    this.actions$.pipe(
      ofType(getPokemonList),
      switchMap(() =>
        this.pokemonService.getPokemonsList().pipe(
          mergeMap((data: any) => data.results),
          mergeMap((pokemon: any) =>
            this.pokemonService.getPokemonsDetails(pokemon.name).pipe(
              map((details) => ({
                ...pokemon,
                details,
              }))
            )
          ),
          toArray(),
          map((pokemonsList) => successGetPokemonsList({ pokemonsList })),
          catchError((error) => of(errorGetPokemonsList({ error })))
        )
      )
    )
  );

  getPokemonAbilities$: any = createEffect((): any =>
    this.actions$.pipe(
      ofType(getPokemonDetails),
      withLatestFrom(this.store),
      mergeMap(([action]) =>
        this.pokemonService.getPokemonsDetails(action.pokemonName).pipe(
          map((pokemonDetails) => successGetPokemonDetails({ pokemonDetails })),
          catchError((error) => of(errorGetPokemonDetails({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,

    private store: Store<AppState>
  ) {}
}
