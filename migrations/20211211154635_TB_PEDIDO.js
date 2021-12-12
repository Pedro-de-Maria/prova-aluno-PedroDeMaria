
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PEDIDO', table => {
        table.increments('id_PEDIDO').primary()
        table.float('DATA_PEDIDO')
        table.integer('cliente_id').notNull().unique()
        table.foreign('cliente_id').refences('TB_CLIENTES.id_CLIENTE')
        
    }).then(function() {
        return knex('TB_PEDIDO').insert([
            {DATA_PEDIDO: 10/02/2021 ,cliente_id: 1},
            {DATA_PEDIDO: 20/05/2021 ,cliente_id: 2},
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PEDIDO')
};
