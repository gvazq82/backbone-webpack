'use strict';

var Backbone = require('backbone');
var ControllerExecutor = require('./executor');

var router = Backbone.Router.extend({
  routes: {
    "home": "home",
    "about": "about",
    "contact": "contact",
    "exception": "exception",
    "*other": "home"
  },
  home: function () {
    ControllerExecutor({
      "controller": 'home'
    });
  },
  about: function (query, page) {
    ControllerExecutor({
      "controller": 'about'
    });
  },
  contact: function () {
    ControllerExecutor({
      "controller": 'contact'
    });
  },
  exception: function () {
    ControllerExecutor({
      "controller": 'exception'
    });
  }
});
module.exports = router;