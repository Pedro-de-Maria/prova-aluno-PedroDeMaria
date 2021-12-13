const knexConfig = require('./db/knexfile');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])

//Select
knex('TB_CLIENTE')
    .where({ nome: 'José'})
    .then(rows => print("José localizado") )

//Update
knex('TB_CLIENTE')
    .where({ id: 1})
    .update({ nome: 'Cleber'})

//Insert
knex('TB_CLIENTE')
    .insert({ nome: 'Chico' })
//Insert
knex('TB_CLIENTE')
    .insert({ nome: 'Pedro' })

//Delete
knex('TB_CLIENTE')
    .where({ id: 2 })
    .del()

