'use strict';

// the object in which the battle will occur
const Battle = require('../battle');
// the module where my robot model constructors are located
const Model = require('../model');
// rocket(weapons) constructors
const Rocket = require('../rocket');
// projectile -- machine guns (weapons) constructors
const Projectile = require('../projectile');


describe('battle specs', function() {
	// create a test battle object
	let battle = new Battle();
	it('should behave...such that battle is defined', function() {
		expect(battle).toBeDefined();
	});
	// create test robot objects to run the test
	let achilles = new Model.Achilles();
	let warrior = new Model.Warrior();
	// invoke the setter methods
	battle.setRobotOne(achilles);
	battle.setRobotTwo(warrior);
	it('should be able to load two robots', function() {
		// test the getter methods, which indicates the object works
		expect(battle.getRobotOne()).toEqual(jasmine.objectContaining({
			model: 'achilles'
		}));
		// testing the getter for robot two
		expect(battle.getRobotTwo()).toEqual(jasmine.objectContaining({
			model: 'warrior'
		}));
	});
	it('should be able to return the distance between the two robots', function() {
		achilles.position = 50;
		warrior.position = 0;
		expect(battle.getDistance()).toEqual(50);
	});
});