'use strict';

const Type = require('../src/type');

const Model = {};
// Model.prototype = new Type();
// firepower
Model.Tornado = function() {
	Type.Cycle.call(this);
	this.model = 'tornado';
	this.turnMod -= 1;
	this.weaponsCapacity += 1;
};
Model.Tornado.prototype = new Type.Cycle();
// speed
Model.WhiteSquall = function() {
	Type.Cycle.call(this);
	this.model = 'white squall';
	this.turnMod += 2;
};
Model.WhiteSquall.prototype = new Type.Cycle();
// armor
Model.Achilles = function() {
	Type.Tank.call(this);
	this.model = 'achilles';
};
Model.Achilles.prototype = new Type.Tank();
// firepower
Model.Python = function() {
	Type.Tank.call(this);
	this.model = 'python';
};
Model.Python.prototype = new Type.Tank();
// firepower jeep
Model.Warrior = function() {
	Type.Jeep.call(this);
	this.model = 'warrior';
	this.weaponsCapacity += 1;
};
Model.Warrior.prototype = new Type.Jeep();
// speed
Model.Brave = function() {
	Type.Jeep.call(this);
	this.model = 'brave';
	this.turnMod += 1;
};
Model.Brave.prototype = new Type.Jeep();
// armor
Model.Crusader = function() {
	Type.Jeep.call(this);
	this.model = 'crusader';
	this.turnMod -= 1;
};
Model.Crusader.prototype = new Type.Jeep();

module.exports = Model;