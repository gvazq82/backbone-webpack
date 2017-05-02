'use strict';

var ContactView = require('../views/ContactView');
var ErrorView = require('../views/ErrorView');
var Contacts = require('../collections/contacts');

module.exports = {
  init: function (data) {

  },
  run: function (container, data) {
    var contacts = new Contacts();

    contacts.fetch({
      "success": function () {
        var view = new ContactView({
          model: new Backbone.Model()
        });

        container.display(view);
      },
      "error": function () {
        var error = new ErrorView();

        container.display(error);
      }
    });
  }
};

