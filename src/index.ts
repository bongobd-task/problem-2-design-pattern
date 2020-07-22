/**
 * Because of interface has Int type 
 */
type Int=number;

/**
*@interface
*@method set_num_of_wheels():Int;
*@method set_num_of_passengers():Int
*@method has_gas():Int
**/
interface Vehicle{
    set_num_of_wheels():Int
    set_num_of_passengers():Int
    has_gas():boolean
}


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

class Car implements Vehicle{
    public wheel:Int;
    public passenger:Int; 
    public gas:boolean;

    constructor(wheel: Int,passenger: Int,gas=true){
      this.wheel=wheel;
      this.passenger=passenger;
      this.gas=gas
    }
    set_num_of_wheels(): Int {
        return this.wheel;
    }
    set_num_of_passengers(): Int {
        return this.passenger;
    }
    has_gas(): boolean {
        return this.gas;
    }
    
}


/**
* @class Plane;
* @implements Vehicle;
* @constructor(wheel:number,passenger:number,gas:boolean):Plane;
* @default 
* wheel=undefined; [@value required Int] 
* passenger=undefined;[@value required Int]
* gas=false;[@value not required has default value false] 
* [NOTE: Plane doesn't use gas. Plane use as as fuel "jet fuel" that's why It's default value should be false] 
**/

class Plane implements Vehicle{
    public wheel:Int;
    public passenger:Int; 
    public gas:boolean;

    constructor(wheel: Int,passenger: Int,gas=false){
      this.wheel=wheel;
      this.passenger=passenger;
      this.gas=gas
    }

    set_num_of_wheels(): Int {
        return this.wheel;
    }
    set_num_of_passengers(): Int {
        return this.passenger;
    }
    has_gas(): boolean {
        return this.gas;
    }
    
}


const car = new Car(4,8)
const plane = new Plane(8,50)

console.log(car,plane)