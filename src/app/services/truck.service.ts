import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Truck } from '../models/truck';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  private apiUrl = 'http://localhost:8000/api/Truck';

  constructor(private http: HttpClient) { }

  getTrucks(): Observable<Truck[]> {
    return this.http.get<{ totalCount: number, totalPages: number, result: Truck[] }>(this.apiUrl)
      .pipe(
        map(response => response.result)
      );
  }

  updateTruck(truckId: string, truckData: Truck): Observable<boolean> {
    const url = `${this.apiUrl}/${truckId}`;
    return this.http.put<boolean>(url, truckData);
  }

  addTruck(truckData: Truck): Observable<{ truckId: string }> {
    return this.http.post<{ truckId: string }>(this.apiUrl, truckData);
  }

  deleteTruck(truckId: string): Observable<boolean> {
    const url = `${this.apiUrl}/${truckId}`;
    return this.http.delete<boolean>(url);
  }

}
