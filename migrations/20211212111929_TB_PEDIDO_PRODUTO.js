
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PEDIDO_PRODUTO', table => {
        table.integer('id_PEDIDO_PROD').primary().increments()
        table.integer('pedido_id')
        table.integer('produto_id')
        table.integer('quantidade').notNull()
        table.foreign('produto_id').references('TB_PRODUTOS.id_PRODUTO')
        table.foreign('pedido_id').references('TB_PEDIDO.id_PEDIDO')

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PRODUTOS')
};

