'use strict';

const Weapon = require('../src/weapon');

const Projectile = function(short, med, long, aim, damage, rounds, weight) {
	Weapon.call(this, damage, rounds, weight);
	this.shortRange = short || 0;
	this.medRange = med || 0;
	this.longRange = long || 0;
	this.aim = aim || 0;
};
Projectile.fiftyCal = function() {
	Weapon.call(this, 20, 20, 2);
	this.name = 'Fifty Cal';
	this.shortRange = 5;
	this.medRange = 10;
	this.longRange = 20;
	this.aim = 10;
};
Projectile.mSixty = function() {
	Weapon.call(this, 15, 20, 1);
	this.name = 'M60';
	this.shortRange = 5;
	this.medRange = 10;
	this.longRange = 15;
	this.aim = 10;
};
Projectile.saw = function() {
	Weapon.call(this, 10, 20, 1);
	this.name = 'S.A.W.';
	this.shortRange = 5;
	this.medRange = 10;
	this.longRange = 15;
	this.aim = 15;	
};

module.exports = Projectile;