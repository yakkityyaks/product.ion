
var Bookshelf = require('../db.js');
var User  = require('./user.js');
var Project = require('./project.js');


var Organization = Bookshelf.Model.extend({
	tableName: 'organizations',
	users: function() {
		return this.hasMany(User);
	},
	projects: function() {
		return this.hasMany(Project);
	}
})

module.exports = Organization;