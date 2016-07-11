'use strict';

const Robot = require('../robot');

xdescribe('robot specs', function() {
	let testRobot = new Robot();
	it('Robot will be defined', function() {
		expect(testRobot).toBeDefined();
	});
	it('should behave a health attribute', function() {
		expect(testRobot.health).toBeDefined();
	});
	it('should behave a movement attribute', function() {
		expect(testRobot.movement).toBeDefined();
	});
});