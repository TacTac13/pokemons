import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonModel } from '../../models/pokemon.model';
import AppState from '../../store/state';
import {
  getPokemonDetails,
  successGetPokemonsList,
  updateIsLoading,
} from '../../store/actions/pokemon.action';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  title = 'pokemon';
  pokemonsList$!: Observable<PokemonModel[]>;
  isLoading = true;
  dataSource: MatTableDataSource<PokemonModel> =
    new MatTableDataSource<PokemonModel>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private store: Store<AppState>,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.isLoading);

    this.store
      .select((state) => state.pokemons)
      .subscribe((pokemons) => {
        this.dataSource = new MatTableDataSource(pokemons.pokemonsList);
        this.isLoading = pokemons.isLoading;

        console.log(this.isLoading);
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.pokemonsList$ = this.dataSource.connect();
    this.changeDetectorRef.detectChanges();
  }

  goToPokemonDetails(pokemonName: string) {
    this.router.navigate(['/', pokemonName]);
    this.store.dispatch(getPokemonDetails({ pokemonName }));
    this.store.dispatch(updateIsLoading({ isLoading: true }));
  }
}
