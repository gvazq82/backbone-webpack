'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

window.jQuery = $;

require('bootstrap-sass');

var AmdApp = require('./common/application');

AmdApp.start('.application');
