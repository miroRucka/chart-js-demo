/**
 * main server script, register all controllers and connect to the database
 */
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var _ = require('underscore');
server.listen(8080);

require('./config/express.js')(app);

process.on('uncaughtException', function (err) {
   console.error(err);
});






