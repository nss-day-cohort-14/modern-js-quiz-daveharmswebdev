'use strict';

const Robot = require('../src/robot');
const Type = require('../src/type');
const Model = require('../src/model');

let testRobot = new Robot();
let testCycle = new Type.Cycle();
let testTank = new Type.Tank();
let testJeep = new Type.Jeep();
let testTornado = new Model.Tornado();

console.log(testRobot);
console.log(testCycle);
console.log(testTank);
console.log(testJeep);
console.log(testTornado);