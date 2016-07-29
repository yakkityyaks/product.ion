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
  knex.schema.createTableIfNotExists('organizations', function(table) {
    table.increments('id').primary();
    table.string('name');
  }),

  knex.schema.createTableIfNotExists('users', function(table) {
    table.increments('id').primary();
    table.string('username');
    table.string('password');
    table.integer('org_id').references('id').inTable('organizations');
  }),

  knex.schema.createTableIfNotExists('projects', function(table) {
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
    table.integer('org_id').references('id').inTable('organizations');
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
    table.integer('proj_id').references('id').inTable('projects');
  })  
]);

var Bookshelf = require('bookshelf')(knex);

module.exports = Bookshelf;
  