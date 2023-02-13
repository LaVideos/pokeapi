import {Component, Input, OnInit} from '@angular/core';
import {ITypes} from "../../interfaces/poke";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit{

  @Input()
  type:ITypes

  ngOnInit(): void {
  }

}
