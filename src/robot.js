'use strict';

const Robot = function(health, movement) {
	this.health = health || null;
	this.movement = movement || null;
	this.weapons = [];
};
Robot.prototype.setWeapons = function(weapon) {
	this.weapons.push(weapon);
};
module.exports = Robot;
