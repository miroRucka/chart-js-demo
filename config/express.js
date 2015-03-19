/**
 * base config for express server. Configuration as json parser, path to static content and so on
 */
'use strict';
var express = require('express'),
    path = require('path'),
    normalized = path.normalize(__dirname + '/..');
module.exports = function (app) {
    app.use(express.static(path.join(normalized, 'www'), { maxAge: 86400000 }));
    app.use(express.favicon(normalized + '/www/img/favicon.ico'));
    app.use('/bower_components', express.static(path.join(normalized, 'bower_components')));
    app.use('/template', express.static(path.join(normalized, '/www/templates')));
    app.use(function (err, req, res, next) {
        console.log(err);
        res.send(500, 'Something broke!');
    });
};