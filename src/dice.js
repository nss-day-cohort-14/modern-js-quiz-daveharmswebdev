'use strict';

const Dice = function(sides, dice, percentile) {
	this.dice = dice || 1;
	this.sides = sides || 6;
	this.percentile = percentile || false;
};

module.exports = Dice;