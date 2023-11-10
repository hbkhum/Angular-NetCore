import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Truck } from 'src/app/models/truck';
import { TruckService } from 'src/app/services/truck.service';
import { AddEditComponent } from '../add-edit/add-edit.component';


@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {

  trucks!: Truck[];
  displayedColumns: string[] = ['truckId', 'make', 'model', 'vin', 'color', 'year', 'tire', 'actions'];

  constructor(private truckService: TruckService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTrucks();
  }

  openDialog(truck?: Truck): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      width: '500px',
      data: truck || new Truck()
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.loadTrucks();
    });
  }
  
  loadTrucks(): void {
    this.truckService.getTrucks().subscribe(trucks => {
      this.trucks = trucks;
    });
    
  }

  deleteTruck(truckId: string): void {
    if(confirm("Are you sure to delete this truck?")) {
      this.truckService.deleteTruck(truckId).subscribe(success => {
        if (success) {
          console.log('Truck deleted successfully');
          this.loadTrucks(); // Recargar la lista de camiones
        } else {
          console.error('Failed to delete truck');
          // Manejar el caso de fallo
        }
      }, error => {
        console.error('Error deleting truck:', error);
      });
    }
  }
}