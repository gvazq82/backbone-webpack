'use strict';

var Backbone = require('backbone');
var Layout = require('./layout');
var Router = require('./router');
var $ = require('jquery');
var Base = require('./base');

var AmdApp = function() {};
// Create a method to start the application
AmdApp.prototype.start = function (mainContainer) {
  this.Router = new Router();
  //--Create Layout
  this.Layout = new Layout({
    el: $(mainContainer),
    model: new Backbone.Model()
  }).render();

  this.Layout.trigger("updateMenu");

  $(window).on("hashchange", function () {
    this.Layout.trigger("updateMenu");
  }.bind(this));

  if (Backbone.history) {
    Backbone.history.start();
  }
};
AmdApp.prototype.getLayout = function () {
  return this.Layout;
};

module.exports = new AmdApp();