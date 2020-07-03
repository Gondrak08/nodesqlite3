const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);






app.listen(3333);




// Metodos HTTP:
//  GET: buscar informação do backend.
// POST: criar uma informação no backend.
// PUT: alterar uma informação no backend.
// DELTE: deletar uma informação no backend


// Tipos de parâmetros:

// Query parms: Parâmetros nomeados enviados na rota após ? (filtros, paginação etc)
// Route params: Parâmetros utilizados para identificar recursos
// Request Body: O Corpo da requesição, utilizado para criar ou alterar recursos

// 
// Driver: SELECT * FROM users
// Query Builder: table('users').select('*').where()