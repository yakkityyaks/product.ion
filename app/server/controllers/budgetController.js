var Budget = require('../models/budget.js');

exports.getBudget = function(projId, cb) {
	new Budget({projId: projId}).fetchAll({withRelated: ['proj']}).then(cb);
};//doesn't need this anymore

exports.getSingleBudget = function(id, cb) {
	new Budget({id: id}).fetch().then(cb).catch(err => console.error(err));
};

exports.makeBudget = function(data, cb) {
	new Budget(data).save().then(cb);
};
