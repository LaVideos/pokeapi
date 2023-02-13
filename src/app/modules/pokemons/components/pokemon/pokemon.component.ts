import {Component, Input, OnInit} from '@angular/core';
import {IGetPokeObj, IPoke} from "../../interfaces";
import {PokemonService} from "../../services";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  @Input()
  pokemon:IGetPokeObj

  constructor() {}

  ngOnInit(): void {
  }

}
