
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PRODUTOS', table => {
        table.integer('id_PRODUTO').primary().autoincrement()
        table.string('descricao')
        table.float('preco')

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PRODUTOS')
};
