'use strict';

const Model = require('../model');

xdescribe('specs for Model.Tornado', function() {
	let testTornado = new Model.Tornado();
	testTornado.setWeapons({type:'bomb'});
	it('should behave...such that one can add weapons', function() {
		expect(testTornado.weapons.length).toEqual(1);
	});
});
xdescribe('specs for Model.WhiteSquall', function() {
	let testWhiteSquall = new Model.WhiteSquall();
	testWhiteSquall.setWeapons({type:'bomb'});
	it('should behave...such that one can add weapons', function() {
		expect(testWhiteSquall.weapons.length).toEqual(1);
	});
});
xdescribe('specs for Model.Achilles', function() {
	let testAchilles = new Model.Achilles();
	testAchilles.setWeapons({type:'bomb'});
	it('should behave...such that one can add weapons', function() {
		expect(testAchilles.weapons.length).toEqual(1);
	});
});
xdescribe('specs for Model.Python', function() {
	let testPython = new Model.Python();
	testPython.setWeapons({type:'bomb'});
	it('should behave...such that one can add weapons', function() {
		expect(testPython.weapons.length).toEqual(1);
	});
});
xdescribe('specs for Model.Warrior', function() {
	let testWarrior = new Model.Warrior();
	testWarrior.setWeapons({type:'bomb'});
	it('should behave...such that one can add weapons', function() {
		expect(testWarrior.weapons.length).toEqual(1);
	});
});
xdescribe('specs for Model.Brave', function() {
	let testBrave = new Model.Brave();
	testBrave.setWeapons({type:'bomb'});
	it('should behave...such that one can add weapons', function() {
		expect(testBrave.weapons.length).toEqual(1);
	});
});
xdescribe('specs for Model.Crusader', function() {
	let testCrusader = new Model.Crusader();
	testCrusader.setWeapons({type:'bomb'});
	it('should behave...such that one can add weapons', function() {
		expect(testCrusader.weapons.length).toEqual(1);
	});
	it('should behave...set position prototype works', function() {
		testCrusader.setPosition(5);
		expect(testCrusader.position).toEqual(5);
	});
});