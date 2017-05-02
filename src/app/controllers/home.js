'use strict';

var HomeView = require('../views/HomeView');
var Backbone = require('backbone');

module.exports = {
  init: function (data) {

  },
  run: function (container, data) {

    var view = new HomeView({
      model: new Backbone.Model()
    });

    container.display(view);
  }
};
