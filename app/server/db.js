var knex = require('knex')({
  client: 'mysql',
  connection: {
    host      : 'mysqlcluster11.registeredsite.com',
    user      : 'yakadmin',
    password  : '!Qaz2wsx3edc',
    database  : 'yakkittyaks',
    charset   : 'utf8'
  }
});

Promise.all([
  knex.schema.createTableIfNotExists('orgs', function(table) {
    table.increments('id').primary();
    table.string('name').unique();
  }),

  knex.schema.createTableIfNotExists('users', function(table) {
    table.increments('id').primary();
    table.string('username').unique();
    table.integer('perm');
    table.string('password');
    table.integer('orgs_id').unsigned().references('id').inTable('orgs');
  }),

  knex.schema.createTableIfNotExists('projs', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.increments('projId');
    table.string('type');
    table.integer('numAssets');
    table.float('reqBudget');
    table.string('needs');
    table.date('startDate');
    table.date('endDate');
    table.string('status');
    table.float('costToDate').defaultTo(0);
    table.float('estimateToComplete');
    table.integer('orgs_id').unsigned().references('id').inTable('orgs');
  }),

  knex.schema.createTableIfNotExists('expenses', function(table) {
    table.increments('id').primary();
    table.string('type');
    table.string('vertical');
    table.string('category');
    table.string('glCode');
    table.date('dateSpent');
    table.date('dateTracked');
    table.string('vendor');
    table.string('method');
    table.string('description');
    table.float('cost');
    table.integer('projs_id').unsigned().references('id').inTable('projs');
  }),

  knex.schema.createTableIfNotExists('projs_users', function(table) {
    table.integer('projs_id').references('id').inTable('projs');
    table.integer('users_id').references('id').inTable('users');
  }),

  knex.schema.createTableIfNotExists('budgets', function(table) {
    table.increments('id').primary();
    table.integer('glCode');
    table.string('subCategory');
    table.string('Description');
    table.float('Cost');
    table.integer('projs_id').unsigned().references('id').inTable('projs');
  })
]);

var Bookshelf = require('bookshelf')(knex);

Bookshelf.plugin('registry');

module.exports = Bookshelf;
