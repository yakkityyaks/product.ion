	
var Bookshelf = require('../db.js');
require('./expense.js');
require('./organization.js');
require('./project.js');

var Project = Bookshelf.Model.extend({
	tableName: 'projs',
	expenses: function() {
		return this.hasMany('Expense', 'projs_id');
	},
	org: function() {
		return this.belongsTo('Organization', 'orgs_id');
	},
	users: function() {
		return this.belongsToMany('Project', 'projs_users', 'projs_id', 'users_id');
	}
})

module.exports = Bookshelf.model('Project', Project);