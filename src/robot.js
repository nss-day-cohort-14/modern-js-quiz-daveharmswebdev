'use strict';

const Robot = function(health, movement) {
	this.health = health || null;
	this.movement = movement || null;
	this.weapons = [];
	this.weaponsCapacity = 2;
	this.position = 0;
	this.turnMod = 0;
};
Robot.prototype.setWeapons = function(weapon) {
	this.weapons.push(weapon);
	this.weaponsCapacity -= weapon.weight;
};
Robot.prototype.setPosition = function(position) {
	this.position = position;
};
module.exports = Robot;
