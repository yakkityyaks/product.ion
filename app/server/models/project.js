	
var Bookshelf = require('../db.js');
require('./expense.js');
require('./organization.js');

var Project = Bookshelf.Model.extend({
	tableName: 'projs',
	expenses: function() {
		return this.hasMany('Expense', 'projs_id');
	},
	org: function() {
		return this.belongsTo('Organization', 'orgs_id');
	}
})

module.exports = Bookshelf.model('Project', Project);