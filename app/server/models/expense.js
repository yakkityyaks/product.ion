
var Bookshelf = require('../db.js');
var Project = require('./project.js');

var Expense = Bookshelf.Model.extend({
	tableName: 'expenses',
	proj: function() {
		return this.belongsTo(Project);
	}
})