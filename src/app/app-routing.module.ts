import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichePokemonComponent } from './components/fiche-pokemon/fiche-pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: ':name',
    component: FichePokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
