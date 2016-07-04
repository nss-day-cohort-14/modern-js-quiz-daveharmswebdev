'use strict';

const Robot = require('../src/robot');

const Type = {};
Type.Cycle = function() {
	Robot.call(this, 60, 10);
	this.turns = 3;
	this.armor = 0;
	this.type = 'cycle';
	this.turnMod += 5;
	this.actions = 3;
};
Type.Cycle.prototype = new Robot();
Type.Tank = function() {
	Robot.call(this, 100, 4);
	this.turns = 1;
	this.weaponsCapacity += 4;
	this.armor = 2;
	this.type = 'tank';
	this.actions = 1;
};
Type.Tank.prototype = new Robot();
Type.Jeep = function() {
	Robot.call(this, 80, 7);
	this.turns = 2;
	this.weaponsCapacity += 2;
	this.armor = 1;
	this.type = 'jeep';
	this.turnMod += 3;
	this.actions = 2;
};
Type.Jeep.prototype = new Robot();


module.exports = Type;