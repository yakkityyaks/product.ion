
var Bookshelf = require('../db.js');
require('./project.js');

var Expense = Bookshelf.Model.extend({
	tableName: 'expenses',
	proj: function() {
		return this.belongsTo('Project', 'projs_id');
	}
})

module.exports = Bookshelf.model('Expense', Expense);