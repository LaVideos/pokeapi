import {Component, Input, OnInit} from '@angular/core';
import {IAbility} from "../../interfaces";

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit{

  @Input()
  ability:IAbility


  ngOnInit(): void {
  }


}
