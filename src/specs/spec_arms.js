'use strict';

const Arms = require('../arms');
const Model = require('../model');

xdescribe('specs for arms', function() {
	let testAchilles = new Model.Achilles();
	let testAngel = new Arms.Rocket.Angel();
	testAchilles.setWeapons(testAngel);
	// console.log(testAchilles);
	it('arms.rocket should be defined', function() {
		expect(testAngel).toBeDefined();
	});
	it('should be able to load weapons array with weapon object', function() {
		expect(testAchilles.weapons).toEqual([
				jasmine.objectContaining({damage: 30})
			]);
	});
	it('should be aware of weapons capacity and not exceed it', function() {
		// console.log(testAchilles.weaponsCapacity);
		expect(testAchilles.weaponsCapacity).toBe(5);
	});
});