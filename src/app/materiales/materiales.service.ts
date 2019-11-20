import { Injectable } from '@angular/core';
import {MaterialesComponent} from './materiales.component';
import {MATERIALES} from './materiales.json';
import {Material} from './material';
import {of, Observable, from} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  constructor() { }

  getMateriales(): Observable<Material[]> {
    return of (MATERIALES);
  }
}
