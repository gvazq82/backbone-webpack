'use strict';

var AmdApp = require('../../common/base');
var Backbone = require('backbone');
var _ = require('underscore');

var template = [
  '<div class="jumbotron">',
  '<h1>Hello, world!</h1>',
  '<p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>',
  '<p><a href="#" class="btn btn-primary btn-lg" role="button">Learn more</a></p>',
  '</div>' ];

var homeView = AmdApp.View.extend({
  template: _.template(template.join("")),
  render: function () {
    this.$el.html(this.template(this.model
      .toJSON()));
    return this;
  }
});
module.exports = homeView;
