export abstract class Vehicle {
    model!: string;
    make!: string;
    vin!: string;
    color!: string;
    year!: number;
    tire!: number;
    mileage!: number;

    constructor() {
        // Inicializa tus propiedades aquí si es necesario
    }
}