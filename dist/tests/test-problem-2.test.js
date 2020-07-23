"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var problem_2_a_1 = require("../problem-2-a");
test('Car Test wheel=4 , passenger=8, gas=true', function () {
    expect(new problem_2_a_1.Car(4, 8).set_num_of_wheels()).toBe(4);
    expect(new problem_2_a_1.Car(4, 8, true).set_num_of_passengers()).toBe(8);
    expect(new problem_2_a_1.Car(4, 8, true).has_gas()).toBe(true);
});
test('Plane Test wheel=18 , passenger=50, gas=false', function () {
    expect(new problem_2_a_1.Plane(18, 50).set_num_of_wheels()).toBe(18);
    expect(new problem_2_a_1.Plane(18, 50).set_num_of_passengers()).toBe(50);
    expect(new problem_2_a_1.Plane(18, 50).has_gas()).toBe(false);
});
