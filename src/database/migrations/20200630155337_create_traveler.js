
exports.up = function(knex) {
 return knex.schema.createTable('traveler', function(table){
      table.string('id').primary();
      table.string('first_name').notNullable();
      table.string('second_name').notNullable();
      table.string('user_name').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('cpf', 10).notNullable();

  })
};

exports.down = function(knex) {
 return  knex.schema.dropTable('traveler');
};
