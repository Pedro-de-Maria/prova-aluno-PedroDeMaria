
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.increments('id_CLIENTE').primary()
        table.string('nome')

    }).then(function() {
        return knex('TB_CLIENTE').insert([
            {nome: 'José'},
            {nome: 'Maria'},
            {nome: 'João'},
            {nome: 'Ana'},
        ])
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_CLIENTE')
};
