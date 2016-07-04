'use strict';
var $ = require('jQuery');
var Model = require('../src/model');
var build = require('../views/build.jade');
const Battle = require('../src/battle');

$(function() {

	var models = [
		'Tornado',
		'WhiteSquall',
		'Achilles',
		'Python',
		'Crusader',
		'Brave',
		'Warrior'
	];

	var weapons = [
		'BoomBoom',
		'CherryBom',
		'fiftyCal',
		'mSixty',
		'saw',
		'Angel',
		'Demon',
		'Howitzer'
	];

	let battle = new Battle();
	let robot;

	$('body').append(build({models, weapons}));
	$('.build--weapons').prop('disabled', 'disabled');
	// $('body').append(build);

	$('.build--robot').on('change', function() {
		$('.build--weapons').removeAttr('disabled', 'disabled');
		$('.build--robot').prop('disabled', 'disabled');
	});
	$('.build--weapons').on('change', function() {
		console.log($('.build--weapons').val());
	});
	$('.build--chooseRobot').on('click', function() {
		let selectedModel = $('.build--robot').val();
		robot = new Model[selectedModel]();
		console.log(robot);
	});
	$('.build--addWeapon').on('click', function() {
		console.log('capacity:', robot.weaponsCapacity, 'current weapons:', robot.weapons.length);
		let selectedWeapon = $('.build--weapons').val();
		console.log('selected weapon', selectedWeapon);
		robot.setWeapons(selectedWeapon);
		console.log(robot.weapons);
	});

});
	// let testBattle = new Battle();
	// testBattle.setRobots(new Model.Achilles());
	// testBattle.setRobots(new Model.Warrior());
	// console.log(testBattle.getDistance());
	// console.log(testBattle.getFirst());