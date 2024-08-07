import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) imgUrl!: string;
  @Input({ required: true }) heigth!: number;
  @Input({ required: true }) weigth!: number;
}
