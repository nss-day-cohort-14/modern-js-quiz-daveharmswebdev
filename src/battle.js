'use strict';

const Battle = function() {
	let robotOne;
	let robotTwo;

	this.setRobotOne = (robot) => {
		robotOne = robot;
	};
	this.setRobotTwo = (robot) => {
		robotTwo = robot;
	};
	this.getRobotOne = () => {
		return robotOne;
	};
	this.getRobotTwo = () => {
		return robotTwo;
	};
	this.getDistance = () => {
		return Math.abs(robotOne.position - robotTwo.position);
	};
};


module.exports = Battle;