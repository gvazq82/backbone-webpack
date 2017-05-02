'use strict';

var AmdApp = require('../../common/base');
var Backbone = require('backbone');
var _ = require('underscore');

var template = [ '<div class="container">', '<div class="">',
  '<div class="text-danger">', '<h3>Ops!! Unexpected Error</h3>',
  '</div>', '<div class="">',
  '<span>There was an unexpected exception.</span>', '</div>',
  '</div>', '</div>' ];

var errorView = AmdApp.View.extend({
  template: _.template(template.join("")),
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = errorView;
