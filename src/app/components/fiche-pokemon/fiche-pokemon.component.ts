import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AppState from '../../store/state';
import { Store } from '@ngrx/store';
import { getPokemonDetails } from '../../store/actions/pokemon.action';

@Component({
  selector: 'app-fiche-pokemon',
  templateUrl: './fiche-pokemon.component.html',
  styleUrl: './fiche-pokemon.component.scss',
})
export class FichePokemonComponent implements OnInit {
  isLoading = true;
  pokemonName!: string;
  pokemonDetails: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.params['name'];
    this.store
      .select((state) => state.pokemons)
      .subscribe((pokemon) => {
        if (pokemon.pokemonDetails) {
          this.pokemonDetails = pokemon.pokemonDetails;
          this.isLoading = pokemon.isLoading;
        } else {
          this.store.dispatch(
            getPokemonDetails({ pokemonName: this.pokemonName })
          );
        }
      });
  }
}
