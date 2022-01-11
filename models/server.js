const express = require('express');
const cors = require('cors');
const { dbConnnection } = require('../database/config');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Conectar a base de datos
    this.conectarDB();

    //Middlewares
    this.middlewares();

    //Rutas de la app
    this.routes();
  }

  async conectarDB() {
    await dbConnnection();
  }

  middlewares() {

    //CORS
    this.app.use(cors());

    //Lectura y parseo de body
    this.app.use(express.json());
    
    //Directorio publico
    this.app.use(express.static('public'));

  }

  routes() {

    //Usuarios
    this.app.use(this.usuariosPath, require('../routes/usuarios'));

  }

  listen() {    
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }

}

module.exports = Server;