import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly API_URL = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonsList(): Observable<any> {
    return this.http.get<PokemonModel[]>(`${this.API_URL}/pokemon?limit=50`);
  }

  getPokemonsDetails(name: string): Observable<any> {
    return this.http.get(`${this.API_URL}/pokemon/${name}`);
  }
}
