'use strict';

const Weapon = require('../weapon');
const Explosive = require('../explosive');
const Projectile = require('../projectile');
const Rocket = require('../rocket');

describe('specs for weapons', function() {
	let testWeapon = new Weapon();
	it('should behave...such that Weapon is defined', function() {
		expect(testWeapon).toBeDefined();
	});
	it('should behave...damage rounds and weight are keys', function() {
		expect(testWeapon).toEqual(jasmine.objectContaining({
			'damage': 0,
			'rounds': 0,
			'weight': 0
		}));
	});
});

describe('specs for explosives', function() {
	let testExplosive = new Explosive();
	it('should behave...Explosive is defined', function() {
		expect(testExplosive).toBeDefined();
	});
	it('should behave...successfully calls weapon and has radius keys', function() {
		expect(testExplosive).toEqual(jasmine.objectContaining({
			'damage': 0,
			'rounds': 0,
			'weight': 0,
			'blastRadiusShort': 0,
			'blastRadiusLong': 0
		}));
	});
});

describe('specs for projectiles', function() {
	let testProjectile = new Projectile();
	it('should behave...Projectile is defined', function() {
		expect(testProjectile).toBeDefined();
	});
	it('should behave...successfully calls weapon and has range keys', function() {
		expect(testProjectile).toEqual(jasmine.objectContaining({
			'damage': 0,
			'rounds': 0,
			'weight': 0,
			'shortRange': 0,
			'medRange': 0,
			'longRange': 0,
			'aim': 0
		}));
	});
});

describe('specs for rockets', function() {
	let testRocket = new Rocket(4,5,6,7,1,2,3,8,9);
	it('should behave...successfully calls weapon and projectile and explosive', function() {
		expect(testRocket).toEqual(jasmine.objectContaining({
			'damage': 1,
			'rounds': 2,
			'weight': 3,
			'shortRange': 4,
			'medRange': 5,
			'longRange': 6,
			'aim': 7,
			'blastRadiusShort': 8,
			'blastRadiusLong': 9
		}));
	});
});