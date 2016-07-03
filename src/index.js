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
	// $('body').append(build);

	$('.build--robot').on('change', function() {
		console.log($('.build--robot').val());
	});

});