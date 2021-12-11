
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.integer('id_CLIENTE').primary().autoincrement()
        table.string('nome')

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_CLIENTE')
};
