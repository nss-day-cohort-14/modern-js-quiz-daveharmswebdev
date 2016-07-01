'use strict';

const Model = require('../src/model');
const Projectile = require('../src/projectile');

let tornado = new Model.Tornado();
console.log(tornado);
tornado.setWeapons(new Projectile.saw());

console.log(tornado);
