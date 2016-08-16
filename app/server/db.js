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
    table.string('projId');
    table.string('vertical', 20);
    table.string('tier', 20);
    table.string('type');
    table.integer('numAssets');
    table.float('reqBudget');
    table.date('startDate');
    table.date('endDate');
    table.date('editDate');
    table.date('releaseDate');
    table.string('status');
    table.float('costToDate').defaultTo(0);
    table.float('estimateToComplete');
    table.string('approvals', 12).defaultTo("111111111111");
    table.string('adminNotes', 1000);
    table.integer('createdBy');
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
     table.string('description');
     table.float('cost');
     table.integer('quantity');
     table.float('total');
     table.integer('projs_id').unsigned().references('id').inTable('projs');
   }),
]);

var Bookshelf = require('bookshelf')(knex);

Bookshelf.plugin('registry');

module.exports = Bookshelf;
