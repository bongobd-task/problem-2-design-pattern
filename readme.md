# Installation
**step 1:**

Open your Terminal & run this command
```git clone git@github.com:bongobd-task/problem-2-design-pattern.git```

**step 2:**

```cd ./your_dir/problem-1-anagram```

**step 3** 

```yarn install or npm install strong prefer yarn because it's setup with yarn```
**step 4**

Commands: prefix  ```yarn or npm run```

```
problem-2-a //run problem 2 of a ts file
problem-2-b //run problem 2 of b ts file
build-problem-2-a //run problem 2 of a after build
build-problem-2-b //run problem 2 of b after build
test //run test with jest
```

Question-2(a):
```
interface Vehicle {
   int set_num_of_wheels()
   int set_num_of_passengers()
   boolean has_gas()
}
```
a) Explain how can you use the pattern to create car and plane class?

Answer: 

**Explain:-**
In this Question has a interface & this interface contain three function and they are:
## 1. set_num_of_wheels() return integer value;
## 2. set_num_of_passengers() return integer value;
## 3. has_gas() return value boolean;

if I want to implement Vehicle interface in Car class then it's implementing process like this:

```
type Int = number;

interface Vehicle{
    set_num_of_wheels():Int
    set_num_of_passengers():Int
    has_gas():boolean
}

class Car implements Vehicle{
    set_num_of_wheels(): Int {
        throw new Error("Method not implemented.");
    }
    set_num_of_passengers(): Int {
        throw new Error("Method not implemented.");
    }
    has_gas(): boolean {
        throw new Error("Method not implemented.");
    }
    
}
```
if I want to implement Vehicle interface in Plane class then it's implementing process like this:

```

class Plane implements Vehicle{
    set_num_of_wheels(): Number {
        throw new Error("Method not implemented.");
    }
    set_num_of_passengers(): Number {
        throw new Error("Method not implemented.");
    }
    has_gas(): boolean {
        throw new Error("Method not implemented.");
    }
    
}
```


After implementing this I can Overate the function here is the example.
like this...

```
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

```


