'use strict';

const Dice = require('../dice');

xdescribe('specs for dice', function() {
	let testSix = new Dice();
	it('should behave...one six sided die is defauult', function() {
		expect(testSix).toEqual(jasmine.objectContaining({
			dice: 1,
			sides: 6,
		}));
	});
	let testTwoTen = new Dice(10, 2,true);
	it('can create two 10-sided die for percent', function() {
		expect(testTwoTen).toEqual(jasmine.objectContaining({
            dice: 2,
            sides: 10,
		}));
	});
	it('testSix should return an numbers between 1 and 6', function() {
		let tenRolls = [];
		for (let x = 0; x < 10; x++) {
			tenRolls.push(testSix.roll());			
		}
		tenRolls.forEach(function(roll) {
			expect(roll).toBeLessThan(7);
		});
	});
	it('test20 should return an numbers between 1 and 20', function() {
		let twentyRolls = [];
		let testTwenty = new Dice(20,2);
		for (let x = 0; x < 20; x++) {
			twentyRolls.push(testTwenty.roll());			
		}
		twentyRolls.forEach(function(roll) {
			roll.forEach(function(die) {
				expect(die).toBeLessThan(21);
			});
		});
	});
});