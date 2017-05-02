'use strict';

var AmdApp = require('../../common/base');
var Backbone = require('backbone');
var _ = require('underscore');

var template = [ '<div class="page-header">',
  '<h1>About</h1>',
  '</div>',
  '<div class="well">',
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>',
  '</div>' ];

var homeView = AmdApp.View.extend({
  template: _.template(template.join("")),
  render: function () {
    this.$el.html(this.template(this.model ? this.model.toJSON() : null));
    return this;
  }
});

module.exports = homeView;