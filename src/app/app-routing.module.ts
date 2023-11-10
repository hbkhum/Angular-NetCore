import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { TruckListComponent } from './components/truck/truck-list/truck-list.component';


const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'trucks', component: TruckListComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' } // Redirige a 'cars' como ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
