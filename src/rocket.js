'use strict';

const Projectile = require('../src/projectile');
const Weapon = require('../src/weapon');

const Rocket = {};
Rocket.Angel = function() {
	Projectile.call(this, 10, 20, 30, 10, 30, 4, 1);
	this.blastRadiusShort = 1;
	this.blastRadiusLong = 2;
};
Rocket.Demon = function() {
	Projectile.call(this, 8, 16, 24, 10, 40, 4, 1);
	this.blastRadiusShort = 2;
	this.blastRadiusLong = 4;
};
 
module.exports = Rocket;