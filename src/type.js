'use strict';

const Robot = require('../src/robot');

const Type = function(turns, count, armor) {
	this.turns = null || turns;
	this.weaponCount = null || count;
	this.armor = null || armor;
};
Type.prototype = new Robot();
Type.Cycle = function() {
	Type.call(this, 3, 2, 0);
	this.type = 'cycle';
};
Type.Tank = function() {
	Type.call(this, 1, 3, 2);
	this.type = 'tank';
};
Type.Jeep = function() {
	Type.call(this, 2, 3, 1);
	this.type = 'jeep';
};


module.exports = Type;