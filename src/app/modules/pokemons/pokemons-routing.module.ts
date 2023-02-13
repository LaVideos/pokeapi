import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {pokemonRoutes} from "./routes/pokemon-routes";

@NgModule({
  imports: [RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
