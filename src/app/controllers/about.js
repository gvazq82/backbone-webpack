'use strict';

var Backbone = require('backbone');
var AboutView = require('../views/AboutView');

module.exports = {
  init: function (data) {

  },
  run: function (container, data) {

    var view = new AboutView({
      model: new Backbone.Model()
    });

    container.display(view);
  }
};

