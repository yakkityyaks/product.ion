// var mysql = require('mysql');

var knex = require('knex')({     
  client: 'mysql',
  connection: {
    host: 'https://mysqlcluster11.registeredsite.com',
    user: 'yakadmin',
    password: '!Qaz2wsx3edc',
    database: 'yakkityyaks',
    charset: 'utf8'
  }
});

knex.schema.hasTable('organizations').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('organizations', function(table) {
      table.increments('id').primary();
      table.string('name');
    }).createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
      table.integer('orgId').references('organizations.id');
    }).createTable('projects', function(table) {
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
      table.integer('orgId').references('organizations.id')
    }).createTable('expenses', function(table) {
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
      table.integer('projId').references('projects.id');
    })
  }
});

var Bookshelf = require('bookshelf')(knex);

module.exports = Bookshelf;
  