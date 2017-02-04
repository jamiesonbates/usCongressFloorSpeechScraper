'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('track_scraper', (table) => {
    table.increments();
    table.string('date');
    table.boolean('success');
    table.string('body');
  });
}

exports.down = function(knex) {
  return knex.schema.dropTable('track_scraper');
}
