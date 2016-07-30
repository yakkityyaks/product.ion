
var Bookshelf = require('../db.js');

var Organization = Bookshelf.Model.extend({
	tableName: 'orgs',
	users: function() {
		return this.hasMany('User');
	},
	projects: function() {
		return this.hasMany('Project');
	}
})

module.exports = Bookshelf.model('Organization', Organization);