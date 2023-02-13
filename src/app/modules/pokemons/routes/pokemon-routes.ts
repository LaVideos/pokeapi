import {Routes} from "@angular/router";
import {PokemonsComponent} from "../components/pokemons/pokemons.component";
import {PokemonDetailsComponent} from "../components/pokemon-details/pokemon-details.component";

export const pokemonRoutes:Routes = [
  {path:'',component:PokemonsComponent,children:[
      {path:':name',component:PokemonDetailsComponent}
    ]}
]
