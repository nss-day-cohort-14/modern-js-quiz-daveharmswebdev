'use strict';
var $ = require('jQuery');
var Model = require('../src/model');
var build = require('../views/build.jade');
var build_weapons = require('../views/build_weapons.jade');
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
	// let totalWeight = function(arr) {
	// 	arr.reduce((prev, curr) => prev+curr);
	// };
	function totalWeight(arr) {
		let weight = arr.reduce(function(prev, curr) {
			console.log(prev, curr);
			return prev+curr;
		});
		return weight;
	};


	$('body').append(build({models, weapons}));
	$('.build--weapons').prop('disabled', 'disabled');
	// $('body').append(build);

	$('.build--robot').on('change', function() {
		$('.build--weapons').removeAttr('disabled', 'disabled');
		$('.build--robot').prop('disabled', 'disabled');
	});
	// $('.build--weapons').on('change', function() {
	// 	console.log($('.build--weapons').val());
	// });
	$('.build--chooseRobot').on('click', function() {
		let selectedModel = $('.build--robot').val();
		robot = new Model[selectedModel]();
		console.log(robot);
	});
	$('.build--addWeapon').on('click', function() {
		let selectedWeapon = $('.build--weapons').val();
		// will selected weapon exceed capacity
		// if no push weapon, if yes force user to select another weapon
		robot.setWeapons(selectedWeapon);
		debugger;
		let currentCapacity = robot.weaponsCapacity - totalWeight(robot.weapons);
		$('.build--display--weaponscap').empty();
		$('.build--display--weaponscap').append(build_weapons({capacity: currentCapacity, weapons: robot.weapons}));
		if (currentCapacity === 0) alert('zero');
	});

});
	// let testBattle = new Battle();
	// testBattle.setRobots(new Model.Achilles());
	// testBattle.setRobots(new Model.Warrior());
	// console.log(testBattle.getDistance());
	// console.log(testBattle.getFirst());