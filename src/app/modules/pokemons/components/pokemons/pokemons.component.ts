import {Component, OnInit} from '@angular/core';
import {IGetPokeArr} from "../../interfaces";
import {PokemonService} from "../../services";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{
  pokeObj:IGetPokeArr;
  constructor(private pokemonService:PokemonService) {
  }
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(value => this.pokeObj = value);
  }
  prev() {
    this.pokemonService.getPokemons(this.pokeObj.previous).subscribe(value => this.pokeObj = value)
  }
  next() {
    this.pokemonService.getPokemons(this.pokeObj.next).subscribe(value => this.pokeObj = value);
  }
}
