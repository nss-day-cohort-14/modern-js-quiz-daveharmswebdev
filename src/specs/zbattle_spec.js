'use strict';

// the object in which the battle will occur
const Battle = require('../battle');
// the module where my robot model constructors are located
const Model = require('../model');
// rocket(weapons) constructors
const Rocket = require('../rocket');
// projectile -- machine guns (weapons) constructors
const Projectile = require('../projectile');
const Dice = require('../dice');


describe('battle specs', function() {
	// create a test battle object
	let battle = new Battle();
	xit('should behave...such that battle is defined', function() {
		expect(battle).toBeDefined();
	});
	// create test robot objects to run the test
	let achilles = new Model.Achilles();
	achilles.setWeapons(new Projectile.fiftyCal());
	let warrior = new Model.Warrior();
	warrior.setWeapons(new Projectile.mSixty());
	// invoke the setter methods
	battle.setRobots(achilles);
	battle.setRobots(warrior);
	xit('should be able to load two robots', function() {
		// test the getter methods, which indicates the object works
		expect(battle.getRobots()).toEqual(jasmine.arrayContaining(
			[
				jasmine.objectContaining({
					model:'achilles',
					turnMod: 0
			}),
				jasmine.objectContaining({
					model: 'warrior',
					turnMod: 3
			})
			]
		));

	});
	xit('should be able to return the distance between the two robots', function() {
		achilles.position = 50;
		warrior.position = 0;
		expect(battle.getDistance()).toEqual(50);
	});
	xit('should use dice to determine turn', function() {
		expect(battle.getFirst).toBeDefined();
	});
	xit('should be able to change position with the moveTo', function() {
		console.log(battle.getRobots()[0].position);
		console.log(battle.getRobots()[0].movement);
		battle.moveTo(0);
		console.log('robot 1 position', battle.getRobots()[1].position);
		console.log('robot 1 movement', battle.getRobots()[1].movement);
		battle.moveTo(1);
		console.log(battle.getRobots()[0].position);
		expect(battle.moveTo).toBeDefined();
		expect(battle.moveAway).toBeDefined();
		expect(battle.getRobots()[0].position).toBe(46);
		expect(battle.getRobots()[1].position).toBe(7);
	});
	xit('should be able to change position with the moveAway()', function() {
		achilles.position = 30;
		warrior.position = 20;
		console.log('robot 0 position', battle.getRobots()[0].position);
		console.log('robot 0 movment', battle.getRobots()[0].movement);
		battle.moveAway(0);
		console.log('robot 1 position', battle.getRobots()[1].position);
		console.log('robot 1 movement', battle.getRobots()[1].movement);
		battle.moveAway(1);
		console.log(battle.getRobots()[0].position);
		expect(battle.getRobots()[0].position).toBe(34);
		expect(battle.getRobots()[1].position).toBe(13);
	});
	it('should be able to resolve firing at an enemy', function() {
		let die = new Dice(10);
		let roll = die.roll()[0];
		console.log(roll);
		battle.fire(0);
	});
});