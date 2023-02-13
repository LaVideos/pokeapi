import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../services";
import {IPoke} from "../../interfaces";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{
  pokemon:IPoke;
  showAbility:boolean = false;
  showType:boolean = false;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private pokemonService:PokemonService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({name})=>{
        this.pokemonService.getPokemonByName(name).subscribe(value => this.pokemon = value);
    })
  }

  ShowAbilities() {
    this.showAbility = !this.showAbility
  }

  ShowTypes() {
    this.showType = !this.showType
  }
}
