import { Component, Inject, OnInit } from '@angular/core';
import { Truck } from 'src/app/models/truck';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TruckService } from 'src/app/services/truck.service';


@Component({
  selector: 'app-add-edit-truck',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  truck: Truck = new Truck(); // Suponiendo que tienes una clase Truck
  isEditMode: boolean = false; // Determina si el formulario es para editar

  constructor(private truckService: TruckService, public dialogRef: MatDialogRef<AddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.truck = data || new Truck();
  }

  ngOnInit(): void {
    if (this.data && this.data.truckId) {
      this.isEditMode = true;
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      // Lógica para actualizar un truck
      this.truckService.updateTruck(this.truck.truckId, this.truck).subscribe(
        success => {
          if (success) {
            console.log('Truck updated successfully');
          } else {
            console.error('Failed to update truck');
          }
          this.dialogRef.close();
        },
        error => {
          // Manejar el error aquí
          console.error('Error updating truck:', error);
        }
      );
    } else {
      this.truckService.addTruck(this.truck).subscribe(
        response => {
          console.log('Truck added with ID:', response.truckId);
          this.dialogRef.close(); // Cierra el modal después de la adición
        },
        error => {
          console.error('Error adding truck:', error);
        }
      );
    }
  }
}