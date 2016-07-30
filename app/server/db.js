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
    table.string('name');
  }),

  knex.schema.createTableIfNotExists('users', function(table) {
    table.increments('id').primary();
    table.string('username');
    table.string('password');
    table.integer('orgs_id').references('id').inTable('orgs');
  }),

  knex.schema.createTableIfNotExists('projs', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('projId');
    table.string('type');
    table.string('reqBudget');
    table.string('needs');
    table.string('shootDates');
    table.string('status');
    table.string('costToDate');
    table.string('estimateToComplete');
    table.integer('orgs_id').references('id').inTable('orgs');
  }),  

  knex.schema.createTableIfNotExists('expenses', function(table) {
    table.increments('id').primary();
    table.string('type');
    table.string('vertical');
    table.string('category');
    table.string('glCode');
    table.string('dateSpent');
    table.string('dateTracked');
    table.string('vendor');
    table.string('method');
    table.string('description');
    table.float('cost');
    table.integer('projs_id').references('id').inTable('projs');
  })  
]);

var Bookshelf = require('bookshelf')(knex);

module.exports = Bookshelf;
  