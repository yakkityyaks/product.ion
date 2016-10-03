
var Bookshelf = require('../db.js');

var Organization = Bookshelf.Model.extend({
	tableName: 'orgs',
	users: function() {
		return this.hasMany('User', 'orgs_id');
	},
	projects: function() {
		return this.hasMany('Project', 'orgs_id');
	}
})

module.exports = Bookshelf.model('Organization', Organization);
