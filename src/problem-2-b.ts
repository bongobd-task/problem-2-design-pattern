/**  
 * @type Init = number;
 **/
type Int = number;

/**  
 * @interface Vehicle
 * @method set_num_of_wheels():Int
 * @method set_num_of_passengers():Int
 * @method has_gas():boolean
 **/

interface Vehicle{
    set_num_of_wheels():Int
    set_num_of_passengers():Int
    has_gas():boolean
}

/**
 * @class Car
 * @implement Vehicle
 * @override
 * @method set_num_of_wheels():Int
 * @method set_num_of_passengers():Int 
 * @method has_gas():boolean 
 **/
export class Car implements Vehicle{
    public wheel:Int;
    public passenger:Int; 
    public gas:boolean;

    constructor(wheel: Int,passenger: Int,gas=true){
      this.wheel=wheel;
      this.passenger=passenger;
      this.gas=gas
    }
    set_num_of_wheels(): Int {
        return this.wheel
    }
    set_num_of_passengers(): Int {
        return this.passenger;
    }
    has_gas(): boolean {
        return this.gas;
    }
    
}
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

export class Plane extends Car{
    constructor(wheels:Int,passenger:Int,gas=false){
        super(wheels,passenger,gas)
        this.wheel=wheels;
        this.passenger=passenger;
        this.gas=gas
    }    
}


// const car = new Car(2,5,true)
// const plane = new Plane(18,50,false)

// console.log(car,plane)