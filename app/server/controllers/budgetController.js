var Budget = require('../models/budget.js');

exports.getBudget = function(projId, cb) {
	new Budget({projId: id}).fetchAll({withRelated: ['proj']}).then(cb);
};//doesn't need this anymore

exports.makeBudget = function(data, cb) {
	new Budget(data).save().then(cb);
};
