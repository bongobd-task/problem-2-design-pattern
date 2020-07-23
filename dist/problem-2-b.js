"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plane = exports.Car = void 0;
/**
 * @class Car
 * @implement Vehicle
 * @override
 * @method set_num_of_wheels():Int
 * @method set_num_of_passengers():Int
 * @method has_gas():boolean
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
 * @class Plane
 * @extends Car
 * @Arg wheel:Int,passenger:Int,gas:boolean;
 * @override constructor(),super()
 * @member functions
 * @method set_num_of_wheels():Int
 * @method set_num_of_passengers():Int
 * @method has_gas():boolean
 **/
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(wheels, passenger, gas) {
        if (gas === void 0) { gas = false; }
        var _this = _super.call(this, wheels, passenger, gas) || this;
        _this.wheel = wheels;
        _this.passenger = passenger;
        _this.gas = gas;
        return _this;
    }
    return Plane;
}(Car));
exports.Plane = Plane;
// const car = new Car(2,5,true)
// const plane = new Plane(18,50,false)
// console.log(car,plane)
