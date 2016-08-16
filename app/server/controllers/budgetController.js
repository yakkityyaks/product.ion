var Budget = require('../models/budget.js');

exports.getBudget = function(projId, cb) {
	new Budget({projId: id}).fetchAll({withRelated: ['proj']}).then(cb);
};//doesn't need this anymore

exports.getSingleBudget = function(id, cb) {
	new Budget({id}).fetch().then(cb);
};

exports.makeBudget = function(data, cb) {
	new Budget(data).save().then(cb);
};
