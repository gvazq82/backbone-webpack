'use strict';

var Backbone = require('backbone');

/*
 * Define the AmdApp object with the basic elements available in the Application.
 */
module.exports = {
  View: Backbone.View.extend({}),
  Model: Backbone.Model.extend({}),
  Collection: Backbone.Collection.extend({}),
  Region: Backbone.View.extend({
    currentView: null,
    display: function (view) {
      // Remove existent View
      if (this.currentView) {
        this.currentView.remove();
      }
      this.currentView = view;
      this.$el.html(view.render().$el);
    }
  })
};