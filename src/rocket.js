'use strict';

const Projectile = require('../src/projectile');
const Weapon = require('../src/weapon');

const Rocket = {};
Rocket.Angel = function() {
	Projectile.call(this, 10, 20, 30, 10, 30, 4, 1);
	this.name = 'Angel';
	this.blastRadiusShort = 1;
	this.blastRadiusLong = 2;
};
Rocket.Demon = function() {
	Projectile.call(this, 8, 16, 24, 10, 40, 4, 2);
	this.name = 'Demon';
	this.blastRadiusShort = 2;
	this.blastRadiusLong = 4;
};
Rocket.Howitzer = function() {
	Projectile.call(this, 8, 16, 24, 10, 25, 10, 3);
	this.name = 'Howitzer';
	this.blastRadiusShort = 1;
	this.blastRadiusLong = 2;
};
 
module.exports = Rocket;