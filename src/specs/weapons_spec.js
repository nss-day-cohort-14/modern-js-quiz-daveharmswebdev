'use strict';

const Weapon = require('../weapon');
const Explosive = require('../explosive');
const Projectile = require('../projectile');

describe('specs for weapons', function() {
	let testWeapon = new Weapon();
	it('should behave...such that Weapon is defined', function() {
		expect(testWeapon).toBeDefined();
	});
});

describe('specs for explosives', function() {
	let testExplosive = new Explosive();
	it('should behave...Explosive is defined', function() {
		expect(testExplosive).toBeDefined();
	});
});

describe('specs for projectiles', function() {
	let testProjectile = new Projectile();
	it('should behave...Projectile is defined', function() {
		expect(testProjectile).toBeDefined();
	});
});