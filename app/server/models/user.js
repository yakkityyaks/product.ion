
var Bookshelf = require('../db.js');
var Organization = require('./organization.js');

var User = Bookshelf.Model.extend({
  tableName: 'users',
	org: function() {
		return this.belongsTo(Organization);
	}
});

module.exports = User;