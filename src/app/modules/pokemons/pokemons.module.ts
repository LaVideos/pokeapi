import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { TypesComponent } from './components/types/types.component';
import {MatBadgeModule} from "@angular/material/badge";



@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    AbilitiesComponent,
    TypesComponent,
  ],
    imports: [
        CommonModule,
        PokemonsRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
    ],
})
export class PokemonsModule { }
