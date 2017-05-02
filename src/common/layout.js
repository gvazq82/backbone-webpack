'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var Base = require('./base');

var template = [ '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">',
  '<div class="container-fluid">',
  '<ul class="nav navbar-nav pull-right">',
  '<li class="active"><a href="#home">Home</a></li>',
  '<li><a href="#about">About</a></li>',
  '<li><a href="#contact">Contact</a></li>',
  '<li><a href="#exception">Exception</a></li>',
  '</ul>',
  '<div class="navbar-header">',
  '<h3 class="text-muted">CommonJS-Basic</h3>',
  '</div>',
  '</div>',
  '</div>',
  '<div class="container" style="margin-top:75px;">',
  '<div id="main" class="row main"></div>',
  '</div>' ];

var Layout = Backbone.View.extend({
  mainRegion: null,
  initialize: function () {
    this.on("updateMenu", this.updateMenuOption);
  },
  template: _.template(template.join("")),
  render: function () {
    this.$el.html(this.template());
    this.mainRegion = new Base.Region({
      el: this.$("#main")
    });
    return this;
  },
  updateMenuOption: function () {
    $('.navbar-nav').find('.active').removeClass('active');
    $('.navbar-nav').find('a[href="' + window.location.hash + '"]').parent().addClass('active');
  }
});

module.exports = Layout;