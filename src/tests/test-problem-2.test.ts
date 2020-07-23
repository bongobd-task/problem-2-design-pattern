import {Car,Plane} from '../problem-2-a';

test('Car Test wheel=4 , passenger=8, gas=true default', () => {
    expect(new Car(4,8).set_num_of_wheels()).toBe(4)
    expect(new Car(4,8,true).set_num_of_passengers()).toBe(8);
    expect(new Car(4,8,true).has_gas()).toBe(true);
  });

test('Plane Test wheel=18 , passenger=50, gas=false default', () => {
    expect(new Plane(18,50).set_num_of_wheels()).toBe(18)
    expect(new Plane(18,50).set_num_of_passengers()).toBe(50);
    expect(new Plane(18,50).has_gas()).toBe(false);
  });