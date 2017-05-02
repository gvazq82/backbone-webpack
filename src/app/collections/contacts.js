'use strict';

var AmdApp = require('../../common/base');
var Contact = require('../models/contact');

module.exports = AmdApp.Collection.extend({
  model: Contact,
  url: "assets/data/Contacts.json"
});

