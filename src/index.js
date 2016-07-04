'use strict';
var $ = require('jQuery');
var build = require('../views/build.jade');

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
	]

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
		console.log(selectedModel);
	});
	$('.build--addWeapon').on('click', function() {

	});

});