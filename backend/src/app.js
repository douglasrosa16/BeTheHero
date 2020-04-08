const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
* Rota / Recurso
*/

/*
    Métodos HTTP:
     - GET: Buscar/Listar uma informação do Back-End
     - POST: Criar uma informação no Back-End
     - PUT: Alterar uma informação no Back-End
     - DELETE: Deletar uma informação no Back-End
*/ 

/**
 * Tipos de Parâmetros:
 * - Query Params: parâmetros enviados nomeados enviados na rota, após "?" (filtros, paginação, )
 * - Route Params: Parâmetros utilizados para identificar recursos
 * - Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM USERS
 * Query Builder: table('users').select('*').where()
 */


module.exports = app;