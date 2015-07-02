/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 29/06/15
 */

'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('It works!');
});

app.get('/data/sample.json', function(req, res) {
    res.send({
       it: {
           is: {
               a: {
                   test: 'object'
               }
           }
       }
    });
});

module.exports = app;