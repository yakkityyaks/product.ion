var Budget = require('../models/budget.js');

exports.getBudget = function(description, cb) {
	new Budget({description: description}).fetch({withRelated: ['proj']}).then(cb);
}

exports.makeBudget = function(data, cb) {
	new Budget(data).save().then(cb);
}