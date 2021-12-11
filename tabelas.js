const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./atividade-06/database/db.db', (error) => {
    if (error) console.log(error);
});
//TABELAS
db.serialize(() => {
    //TABELA DE PEDIDOS, Migration:OK
    db.run('create table if not exists TB_PEDIDO(id_PEDIDO integer primary key autoincrement, DATA_PEDIDO float, cliente_id integer, foreign key(cliente_id) references TB_CLIENTE(id_CLIENTE) )', (error) => {
        if (error) console.log(error);
    });

    //TABELA DE CLIENTE, Migration: OK
    db.run('create table if not exists TB_CLIENTE(id_CLIENTE integer primary key autoincrement, nome text)', (error) => {
        if (error) console.log(error);
    });

    //TABELA DE PRODUTOS, Migration: fazendo
    db.run('creat table if not exists TB_PRODUTO(id_PRODUTO integer primary key autoincrement, descrição text, preco float)', (error) => {
        if (error) console.log(error);
    });

    //TABELA DE PEDIDOS DOS PRODUTOS, Migration: a fazer
    db.run('create table if not exists TB_PEDIDO_PRODUTO(id_PEDIDOS_PROD integer autoincrement, pedido_id integer, produto_id, quantidade integer, foreign key(produto_id) references TB_PRODUTO(id_PRODUTO), foreign key(pedido_id) references TB_PEDIDO(id_PEDIDO)', (error) =>{
        if (error) console.log(error);
    });


});