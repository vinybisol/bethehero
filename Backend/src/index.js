const express = require ('express');
const cors = require ('cors');  
const routes = require('./route');

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);

/**
 *  Rota / Recurso
 */

/**
 * Método HTTP:
 * 
 *  Get: Buscar a informação do back-end
 * POST: Criar uma iformação no back-end
 * PUT: Aterer um informação
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipo de paramêtro
  * 
  * Query Params: Paramêtros nomeados envioados para a rota após "?" (Filtros, paginação)
  * Route Params : Pamêtros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar os dados
  */

  /**
   * SQL: MySql, SQLite, PostgresSQL
   * NoSql: MongoDB, MariaDB
   */


   /**
    * Driver: select * from usuarios
    * Query Builder: table('usuario').select('*').where()
    */



app.listen(3333);

