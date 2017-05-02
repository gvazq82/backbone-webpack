'use strict';

var AmdApp = require('../../common/base');
var Backbone = require('backbone');
var _ = require('underscore');

var template = [ '<div class="page-header">',
  '<h1>Contacts</h1>',
  '</div>',
  '<div class="container">',
  '<div class="row">',
  '<div class="col-md-12">',
  '<div class="pull-right"><button class="btn btn-success">Add&nbsp;<span class="glyphicon glyphicon-plus"></span></button></div>',
  '</div>',
  '</div>',
  '<%contacts.each(function(contact){%>',
  '<div class="panel panel-default">',
  '<div class="panel-heading">',
  '<%=contact.get("name")%>, <%=contact.get("lastName")%>',
  '</div>',
  '<div class="panel-body">',
  'Address: <%=contact.get("address")%><br>',
  'City: <%=contact.get("city")%><br>',
  'State: <%=contact.get("state")%><br>',
  '</div>',
  '</div>',
  '<%});%>',
  '</div>' ];
var homeView = AmdApp.View.extend({
  initialize: function () {
    this.on('addContact', this.addContact);
  },
  events: {
    'click #addContact': 'triggerAdd'
  },
  template: _.template(template.join("")),
  render: function () {
    this.$el.html(this.template({
      "contacts": this.collection
    }));
    return this;
  },
  triggerAdd: function () {
    this.trigger('add');
  },
  addContact: function (model) {
    this.collection.add(model);
    this.render();
  }
});

module.exports = homeView;