var Bookshelf = require('../db.js');

var ProjUser = Bookshelf.Model.extend({
	tableName: 'projs_users'
});

module.exports = Bookshelf.model('ProjUser', ProjUser);