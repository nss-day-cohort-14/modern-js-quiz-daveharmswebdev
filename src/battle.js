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
	this.moveTo = (arg) => {
		if (arg === 0) {
			// logic for robot 0
			if (robots[0].position > robots[1].position) {
				// want to decrease position value
				robots[0].position -= robots[0].movement;
			} else {
				// want to increase position value
				robots[0].position += robots[0].movement;
			}
		} else {
			// logic for robot 1
			if (robots[1].position > robots[0].position) {
				// want to decrease position value
				robots[1].position -= robots[1].movement;
			} else {
				// want to increase position value
				robots[1].position += robots[1].movement;
			}
		}
	};
	this.moveAway = (arg) => {
		if (arg === 0) {
			// logic for robot 0
			if (robots[0].position > robots[1].position) {
				// want to increase position value
				robots[0].position += robots[0].movement;
			} else {
				// want to decrease position value
				robots[0].position -= robots[0].movement;
			}
		} else {
			// logic for robot 1
			if (robots[1].position > robots[0].position) {
				// want to incrase position value
				robots[1].position += robots[1].movement;
			} else {
				// want to decrease position value
				robots[1].position -= robots[1].movement;
			}
		}
	};
	this.aim = (battle) => {console.log('aim', battle);};
	this.fire = (arg, roll) => {
		let hit;
		if (this.getDistance() < robots[arg].weapons[0].shortRange && roll < 9) {
			hit = true;
		} else if (this.getDistance() < robots[arg].weapons[0].medRange && roll < 7){
			hit = true;
		} else if (this.getDistance() < robots[arg].weapons[0].longRange && roll < 4){
			hit = true;
		} else {
			hit = false;
		}
		return hit;
	};
	this.damage = (arg) => {
		let damage = robots[arg].weapons[0].damage + Math.floor((Math.random() * 20) - 9);
		arg === 0 ? robots[1].health -= damage : robots[0].health -= damage;
		return damage;
	};
	this.changeWeapon = (battle) => {console.log('changeWeapon', battle);};
};


module.exports = Battle;