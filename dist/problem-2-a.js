"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plane = exports.Car = void 0;
/**
* @class Car;
* @implement Vehicle;
* @constructor(wheel:number,passenger:number,gas:boolean):Car;
* @default
* wheel=undefined; [@value required Int;]
* passenger=undefined; [@value required Int;]
* gas=false [@value default True]
* [NOTE: Car can use gas that's why It's default value should be true]
**/
var Car = /** @class */ (function () {
    function Car(wheel, passenger, gas) {
        if (gas === void 0) { gas = true; }
        this.wheel = wheel;
        this.passenger = passenger;
        this.gas = gas;
    }
    Car.prototype.set_num_of_wheels = function () {
        return this.wheel;
    };
    Car.prototype.set_num_of_passengers = function () {
        return this.passenger;
    };
    Car.prototype.has_gas = function () {
        return this.gas;
    };
    return Car;
}());
exports.Car = Car;
/**
* @class Plane;
* @implements Vehicle;
* @constructor(wheel:number,passenger:number,gas:boolean):Plane;
* @default
* wheel=undefined;
* @value required Int;
* passenger=undefined;
* @value required Int;
* gas=false;
* @value not required has default value false;
* [NOTE: Plane doesn't use gas. Plane use as as fuel "jet fuel" that's why It's default value should be false]
**/
var Plane = /** @class */ (function () {
    function Plane(wheel, passenger, gas) {
        if (gas === void 0) { gas = false; }
        this.wheel = wheel;
        this.passenger = passenger;
        this.gas = gas;
    }
    Plane.prototype.set_num_of_wheels = function () {
        return this.wheel;
    };
    Plane.prototype.set_num_of_passengers = function () {
        return this.passenger;
    };
    Plane.prototype.has_gas = function () {
        return this.gas;
    };
    return Plane;
}());
exports.Plane = Plane;
/**
 * uncomment for see out put
 */
// const car = new Car(4,8)
// const plane = new Plane(8,50)
// console.log(car,plane)
