// use knex.schema.createTable to create all your fields within the db
// run knex migrate:rollback and
//  migrate:latest to update your latest migrated changes

exports.up = function (knex) {
  return knex.schema
      .createTable('customers', function (table) {
          table.increments('customer_id').unique();
          table.string('customer_name').notNullable();
          table.string('customer_email').notNullable().unique();
          table.string('customer_password').notNullable();
          table.string('customer_address');
          table.string('customer_number');
          table.string('customer_payMethod').notNullable(); // options: card | cash
          table.string('customer_deliverMethod').notNullable(); // options: deliver | fetch
          table.timestamp('date_started').defaultTo(knex.fn.now())
      })


      .createTable('food', function (table) {
          table.increments('food_id').unique();
          table.string('food_title').notNullable();
          table.string('food_description', [500]).notNullable();
          table.string('food_ingredients', [500]);
          table.integer('food_price').notNullable();
          table.string('date_placement').notNullable(); //options : monday - friday
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
