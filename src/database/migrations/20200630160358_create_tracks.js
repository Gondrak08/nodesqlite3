
exports.up = function(knex) {
  return knex.schema.createTable('tracks', function(table){
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      table.string('image').notNullable(); //was binary

      table.string('tracker_id').notNullable();

      table.foreign('tracker_id').references('id').inTable('ongs'); // chave primaria.
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tracks')  
};
