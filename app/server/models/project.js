
var Bookshelf = require('../db.js');
var Organization = require('./organization.js');
var Expense = require('./expense.js');

var Project = Bookshelf.Model.extend({
	tableName: 'projects',
	expenses: function() {
		return this.hasMany(Expense)
	},
	org: function() {
		return this.belongsTo(Organization);
	}
})

module.exports = Project;