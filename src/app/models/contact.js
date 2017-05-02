'use strict';

var AmdApp = require('../../common/base');

var model = AmdApp.Model.extend({
  defaults: {
    "name": "",
    "lastName": "",
    "address": "",
    "phone": ""
  }
});
module.exports = model;
