import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-dropdowncomp',
  templateUrl: './dropdowncomp.component.html',
  styleUrls: ['./dropdowncomp.component.scss']
})
export class DropdowncompComponent implements OnInit {
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  city!: string;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() onChange = new EventEmitter();
  onActChange() {
    this.onChange.emit(this.city);
  }
}
