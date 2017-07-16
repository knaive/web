'use strict'

var greet = require('./hello')
var fsDemo = require('./fsDemo')
var httpDemo = require('./httpDemo')
var httpServer = httpDemo.simpleServer;
var fileServer = httpDemo.fileServer;

// var name = 'Jack';
// var s = `you name is ${name}`;
// greet(s);

// fsDemo();

fileServer();