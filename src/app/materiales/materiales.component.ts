import {Component, OnInit} from '@angular/core';
import {MaterialesService} from './materiales.service';
import { Material } from './material';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html'
})

export class MaterialesComponent implements OnInit {

  habilitar: boolean = true;

  setHabilitar(): void {
    this.habilitar = (this.habilitar==true) ? false : true;
  }

  materiales:Material[];

  constructor(private materialesService: MaterialesService){ }

  ngOnInit() {
    this.materialesService.getMateriales().subscribe(
      materiales => this.materiales = materiales
    )
  }
}
