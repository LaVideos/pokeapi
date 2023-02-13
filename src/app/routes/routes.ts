import {Routes} from "@angular/router";
import {MainLayoutComponent} from "../layouts/main-layout/main-layout.component";

export const routes:Routes = [
  {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'pokemons',pathMatch:"full"},
      {path:'pokemons',loadChildren:()=>import("../modules/pokemons/pokemons.module").then(value => value.PokemonsModule)},
    ]}
]
