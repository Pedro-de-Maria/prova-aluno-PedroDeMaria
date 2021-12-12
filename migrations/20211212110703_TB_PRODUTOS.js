
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PRODUTOS', table => {
        table.integer('id_PRODUTO').primary().increments()
        table.string('descricao')
        table.float('preco')

    }).then(function() {
        return knex('TB_PRODUTOS').insert([
            {descricao: 'Arroz', preco: 2.54},
            {descricao: 'Feijão', preco: 8.90},
            {descricao: 'Macarrão', preco: 6.00},
            {descricao: 'Oleo de Soja', preco: 5.00},
        ])
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PRODUTOS')
};
