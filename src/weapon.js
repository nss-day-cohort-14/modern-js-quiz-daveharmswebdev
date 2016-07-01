'use strict';

const Weapon = function(damage, rounds, weight) {
	this.damage = damage || 0;
	this.rounds = rounds || 0;
	this.weight = weight || 0;
};

module.exports = Weapon;


