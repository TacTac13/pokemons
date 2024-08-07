import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from './store/state';
import { getPokemonList } from './store/actions/pokemon.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getPokemonList());
  }
}
