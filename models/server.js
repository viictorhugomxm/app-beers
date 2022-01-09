const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    this.beersPath = '/api/beers';

    //Middlewares
    this.middlewares();

    //Rutas de la app
    this.routes();
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

    //Beers 
    this.app.use(this.beersPath, require('../routes/beers'));

  }

  listen() {    
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }

}

module.exports = Server;