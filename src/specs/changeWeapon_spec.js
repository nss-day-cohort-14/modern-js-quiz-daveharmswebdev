'use strict';

const Robot = require('../robot.js');
const Model = require('../model.js');
const Projectile = require('../projectile');

xdescribe('change weapon specs', function() {
	let whiteSquall = new Model.WhiteSquall();
	whiteSquall.setWeapons(new Projectile.mSixty());
	whiteSquall.setCurrentWeapon(0);
	console.log(whiteSquall);
	it('should be able to change weapons with the changeWeapon method', function() {
		expect(whiteSquall.currentWeapon).toBe(0);
	});
});