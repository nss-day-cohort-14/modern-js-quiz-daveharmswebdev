'use strict';
const $ = require('jQuery');
const Model = require('../src/model');
const build = require('../views/build.jade');
const build_weapons = require('../views/build_weapons.jade');
const Arms = require('../src/arms');
const Battle = require('../src/battle');
const thunderdome = require('../views/thunderdome.jade');

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
		{val: 'Explosive.BoomBoom',name: 'BoomBoom'},
		{val: 'Explosive.CherryBomb',name: 'CherryBom'},
		{val: 'Projectile.fiftyCal',name: 'fiftyCal'},
		{val: 'Projectile.mSixty',name: 'mSixty'},
		{val: 'Projectile.saw',name: 'saw'},
		{val: 'Rocket.Angel',name: 'Angel'},
		{val: 'Rocket.Demon',name: 'Demon'},
		{val: 'Rocket.Howitzer',name: 'Howitzer'}
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
	}

	function chooseChallenger() {
		let challenger = new Model.Achilles();
		// console.log('challenger', challenger);
		battle.setRobots(challenger);
		// console.log('challenger battle', battle, battle.getRobots());
	}


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
		// let selectedWeapon = new Weapon();
		selectedWeapon = selectedWeapon.split('.');
		selectedWeapon = new Arms[selectedWeapon[0]][selectedWeapon[1]]();
		if (selectedWeapon.weight <= robot.weaponsCapacity) {
			robot.setWeapons(selectedWeapon);
			console.log(robot, robot.weaponsCapacity);
			$('.build--display--weaponscap').empty();
			$('.build--display--weaponscap').append(build_weapons({capacity: robot.weaponsCapacity, weapons: robot.weapons}));
			if (robot.weaponsCapacity === 0) alert('zero');
			// let currentCapacity = robot.weaponsCapacity - totalWeight(robot.weapons);
		} else {
			alert('you do not have enough capacity for this weapon');
		}
	});

	$('.build--fight').on('click', () => {
		console.log('click');
		battle.setRobots(robot);
		chooseChallenger();
		$('.build').remove();
		let player = battle.getRobots()[0];
		let challenger = battle.getRobots()[1];
		let distance = battle.getDistance();
		battle.setTurns(battle.getRobots()[0].turns)
		let moves = battle.getTurns();
		$('body').append(thunderdome({player, challenger, distance, moves}));
	});

	$('body').on('click', '.pControl', () => {
		switch (event.target.id) {
			case 'moveTo': {
				battle.moveTo();
				$('.distance--content').html(battle.getDistance());
				break;
			}
			case 'moveAway': {
				battle.moveAway();
				$('.distance--content').html(battle.getDistance());
				break;
			}
			case 'aim': battle.aim();
			break;
			case 'fire': battle.fire();
			break;
			case 'changeWeapon': battle.changeWeapon();
			break;

		}
		battle.setTurns(battle.getTurns() -1);
		$('.moves--content').html(battle.getTurns());
		if (battle.getTurns() === 0) {
			battle.challengerTurn();
		}
	});
});
