// use knex.schema.createTable to create all your fields within the db
// run knex migrate:rollback and
//  migrate:latest to update your latest migrated changes

exports.up = function (knex) {
  return knex.schema
      .createTable('customers', function (table) {
          table.increments('customer_id');
          table.string('username').notNullable();
          table.string('email').notNullable().unique();
          table.string('password').notNullable();
          table.string('image', [9999999]);
          table.string('role').notNullable().defaultTo('reader') // Reader | blogger | admin
          table.timestamp('date_started').defaultTo(knex.fn.now())
          table.timestamp('date_ended').defaultTo(knex.fn.now())
      })

      .createTable('food', function (table) {
          table.increments('food_id');
          table.string('food_title').notNullable();
          table.string('food_description', [500]).notNullable();
          table.string('food_ingredients', [500]);
          table.integer('food_price').notNullable();
          table.string('date_placement').notNullable();
          table.string('food_image', [9999999]);
          table.timestamp('food_created').defaultTo(knex.fn.now());
          table.timestamp('food_edited').defaultTo(knex.fn.now());
          table.integer('order_id').references('customer_id').inTable('customers');
      })

}

exports.down = function (knex) {
  return knex.schema
      .dropTableIfExists('food')
      .dropTableIfExists('customers')
};
