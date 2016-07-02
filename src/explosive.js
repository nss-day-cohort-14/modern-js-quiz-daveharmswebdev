'use strict';

const Weapon = require('../src/weapon');

const Explosive = function(shortRadius, longRadius, damage, rounds, weight) {
	Weapon.call(this, damage, rounds, weight);
	this.blastRadiusShort = shortRadius || 0;
	this.blastRadiusLong = longRadius || 0;
};
Explosive.BoomBoom = function() {
	Weapon.call(this, 50, 3, 1);
	this.blastRadiusShort = 2;
	this.blastRadiusLong = 6;
};
Explosive.CherryBomb = function() {
	Weapon.call(this, 50, 3, 1);
	this.blastRadiusShort = 1;
	this.blastRadiusLong = 0;
};

module.exports = Explosive;