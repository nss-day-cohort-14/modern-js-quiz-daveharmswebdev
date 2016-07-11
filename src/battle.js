'use strict';

const Dice = require('../src/dice');

const Battle = function() {
	let robots =[];

	this.setRobots = (robot) => {
		console.log('passed in robot object', robot);
		robots.push(robot);
		if (robots.length === 1) {
			robots[0].position = 0;
		} else {
			robots[1].position = 50;
		}
	};
	this.getRobots = () => {
		return robots;
	};
	this.getDistance = () => {
		return Math.abs(robots[0].position - robots[1].position);
	};
	this.getFirst = () => {
		let twoSix = new Dice(20,2).roll();
		if (twoSix[0] + robots[0].turnMod > twoSix[1] + robots[1].turnMod) {
			return 0; 
		} else {
			return 1;
		}
	};
};


module.exports = Battle;