'use strict';

const Weapon = require('../src/weapon');

const Explosive = function(shortRadius, longRadius, damage, rounds, weight) {
	Weapon.call(this, damage, rounds, weight);
	this.blastRadiusShort = shortRadius || 0;
	this.blastRadiusLong = longRadius || 0;
};

module.exports = Explosive;