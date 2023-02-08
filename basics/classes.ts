class Vehicle {
    // color: string;

    // constructor(color: string) {
    //     this.color =  color;
    // }

    // shorthand syntax for above
    constructor(public color: string) {}

    protected drive(): void {
        console.log("zroom zroom")
    }
    public honk(): void {
        console.log("beep beep")
    }
}

const veh = new Vehicle("blue");
console.log(veh.color)


class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log("ZOOM ZOOM")
    }
    startDrivingProcess() {
        this.drive();
        this.honk()
    }
}

const car = new Car(4, "blue");
car.startDrivingProcess();