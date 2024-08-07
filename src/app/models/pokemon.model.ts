export interface PokemonModel {
  name: string;
  details: any;
}

export interface PokemonSateModel {
  pokemonsList: PokemonModel[];
  isLoading: boolean;
  pokemonDetails: any;
}
