
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PEDIDO', table => {
        table.integer('id_PEDIDO').primary()
        table.float('DATA_PEDIDO')
        table.integer('cliente_id').notNull().unique()
        table.foreign('cliente_id').refences('TB_CLIENTES.id_CLIENTE')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PEDIDO')
};
