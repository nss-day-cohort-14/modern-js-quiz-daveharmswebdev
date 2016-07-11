'use strict';

const Weapon = require('../weapon');
const Explosive = require('../explosive');
const Projectile = require('../projectile');
const Rocket = require('../rocket');

xdescribe('specs for weapons', function() {
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

xdescribe('specs for explosives', function() {
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
	let testBoom = new Explosive.BoomBoom();
	it('should behave...like a BoomBoom with damage of 50', function() {
		expect(testBoom).toEqual(jasmine.objectContaining({
			'damage': 50,
			'rounds': 3,
			'weight': 1,
			'blastRadiusShort': 2,
			'blastRadiusLong': 6
		}));
	});
});

xdescribe('specs for projectiles', function() {
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
	let testFifty = new Projectile.fiftyCal();
	it('should behave...like a fiftyCal with pedefined values', function() {
		expect(testFifty).toEqual(jasmine.objectContaining({
			'damage': 20,
			'rounds': 20,
			'weight': 2,
			'shortRange': 5,
			'medRange': 10,
			'longRange': 20,
			'aim': 10			
		}));
	});
});

xdescribe('specs for rockets', function() {
	let testAngel = new Rocket.Angel();
	it('should behave...successfully calls weapon and projectile and explosive', function() {
		expect(testAngel).toEqual(jasmine.objectContaining({
			'damage': 30,
			'rounds': 4,
			'weight': 1,
			'shortRange': 10,
			'medRange': 20,
			'longRange': 30,
			'aim': 10,
			'blastRadiusShort': 1,
			'blastRadiusLong': 2
		}));
	});
});