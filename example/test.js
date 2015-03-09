var debug = require('debug')('abc');

setInterval(function() {
	debug("%s","abc");
	console.log('console--abc');
}, 1000);

// npm install debug
// DEBUG='abc' node test.js