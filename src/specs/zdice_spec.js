'use strict';

const Dice = require('../dice');

describe('specs for dice', function() {
	let testSix = new Dice();
	it('should behave...one six sided die is defauult', function() {
		expect(testSix).toEqual(jasmine.objectContaining({
			dice: 1,
			sides: 6,
			percentile: false
		}));
	});
});