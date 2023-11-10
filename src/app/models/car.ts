// src/app/models/car.ts
import { Vehicle } from './vehicle';

export class Car extends Vehicle {
    carId!: string;

    constructor() {
        super();
        // Inicializa tus propiedades aquí si es necesario
    }
}