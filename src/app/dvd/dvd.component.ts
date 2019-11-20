import { Component, OnInit } from '@angular/core';
import { Discos } from './discos';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {
  dvd: Discos[] = [
    {id: 1, nombre: 'none', fecha: '17/11/2019'},
    {id: 2, nombre: 'none', fecha: '17/11/2019'},
    {id: 3, nombre: 'none', fecha: '17/11/2019'},
    {id: 4, nombre: 'none', fecha: '17/11/2019'},
    {id: 5, nombre: 'none', fecha: '17/11/2019'},
    {id: 6, nombre: 'none', fecha: '17/11/2019'},
    {id: 7, nombre: 'none',  fecha: '17/11/2019'},
    {id: 8, nombre: 'none',  fecha: '17/11/2019'},
    {id: 9, nombre: 'none',  fecha: '17/11/2019'},
    {id: 10, nombre: 'none',  fecha: '17/11/2019'},
    {id: 11, nombre: 'none',  fecha: '17/11/2019'},
    {id: 12, nombre: 'none',  fecha: '17/11/2019'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
