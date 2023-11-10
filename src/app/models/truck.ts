// src/app/models/truck.ts
import { Vehicle } from './vehicle';

export class Truck extends Vehicle {
    truckId!: string;

    constructor() {
        super();
        // Inicializa tus propiedades aquí si es necesario
    }
}