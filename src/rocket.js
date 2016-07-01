'use strict';

const Projectile = require('../src/projectile');
const Explosive = require('../src/explosive');
const Weapon = require('../src/weapon');

const Rocket = function(short, med, long, aim, damage, round, weight, brShort, brLong) {
	Projectile.call(this, short, med, long, aim, damage, round, weight);
	this.blastRadiusShort = brShort;
	this.blastRadiusLong = brLong;
};

module.exports = Rocket;