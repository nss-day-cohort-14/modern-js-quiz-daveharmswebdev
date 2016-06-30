'use strict';

const Type = require('../src/type');

const Model = {};
// Model.prototype = new Type();
Model.Tornado = function() {
	Type.Cycle.call(this);
	this.model = 'tornado';
};
Model.Tornado.prototype = new Type.Cycle();
Model.WhiteSquall = function() {
	Type.Cycle.call(this);
	this.model = 'white squall';
};
Model.WhiteSquall.prototype = new Type.Cycle();
Model.Achilles = function() {
	Type.Tank.call(this);
	this.model = 'achilles';
};
Model.Achilles.prototype = new Type.Tank();
Model.Python = function() {
	Type.Tank.call(this);
	this.model = 'python';
};
Model.Python.prototype = new Type.Tank();
Model.Warrior = function() {
	Type.Jeep.call(this);
	this.model = 'warrior';
};
Model.Warrior.prototype = new Type.Jeep();
Model.Brave = function() {
	Type.Jeep.call(this);
	this.model = 'brave';
};
Model.Brave.prototype = new Type.Jeep();
Model.Crusader = function() {
	Type.Jeep.call(this);
	this.model = 'crusader';
};
Model.Crusader.prototype = new Type.Jeep();

module.exports = Model;