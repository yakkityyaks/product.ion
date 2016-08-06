var Bookshelf = require('../db.js');
require('./project.js');

var Budget = Bookshelf.Model.extend({
  tableName: 'budgets',
	proj: function() {
		return this.belongsTo('Project', 'projs_id');
	}
});

module.exports = Bookshelf.model('Budget', Budget);