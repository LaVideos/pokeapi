import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGetPokeArr, IPoke} from "../interfaces";
import {API_URL, endpoints} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private httpClient:HttpClient) {}
  getPokemons(url:string = `${API_URL.POKEMONS}/?${endpoints.limit}=12`):Observable<IGetPokeArr>{return this.httpClient.get<IGetPokeArr>(url)};
  getPokemonByName(name:string):Observable<IPoke>{return this.httpClient.get<IPoke>(API_URL.POKEMONS+'/'+name)}
}
