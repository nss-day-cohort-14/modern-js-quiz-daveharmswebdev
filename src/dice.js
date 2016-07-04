'use strict';

const Dice = function(sides, dice) {
	var die = () => 1 + Math.floor(Math.random() * this.sides);

	this.dice = dice || 1;
	this.sides = sides || 6;
	this.roll = () => {
		let roll = [];
		for (let x = 0; x < this.dice; x++) {
			roll[x] = die();
		}
		return roll;
	};
};

module.exports = Dice;