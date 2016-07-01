'use strict';

const Weapon = require('../src/weapon');

const Projectile = function(short, med, long, aim, damage, rounds, weight) {
	Weapon.call(this, damage, rounds, weight);
	this.shortRange = short || 0;
	this.medRange = med || 0;
	this.longRange = long || 0;
	this.aim = aim || 0;
};

module.exports = Projectile;