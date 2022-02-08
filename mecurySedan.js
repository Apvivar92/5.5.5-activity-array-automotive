import Vehicle from "vehicleBaseClass.js"

class Car extends Vehicle{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100; 
        this.scheduleService = false;
    }
    
    start(){
        if(this.fuel > 0){
            console.log("Engine Started")
        }
        else {
            return this.started = false;
            console.log("Out of Gas");
        }
    }

    loadPassenger(num){
        if (this.passenger < this.maximumPassengers){
            if((num + this.passenger) < this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            }
            else {
                console.log("Not even space for Passengers")
            }
        }
    }
    
    scheduleService(mileage){
        if(this.mileage > 30000){
            this.scheduleService == true
            return this.scheduleService;
        }
    }
}

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)