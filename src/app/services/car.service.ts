import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://tu-api-url/cars'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  // Puedes añadir más métodos aquí para crear, actualizar, y eliminar coches
}
