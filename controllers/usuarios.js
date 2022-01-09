const {response} = require('express');

const usuariosGet = (req = request, res = response) => {

  const {q, nombre = 'No name', apiKey, page = 1, limit} = req.query;
  // const query = req.query

  res.json({
    "msg": "get API - Controlador",
    q,
    nombre,
    apiKey,
    page,
    limit
    // query
  });
}

const usuariosPost = (req, res = response) => {

  const {nombre, edad} = req.body;

  res.json({
    "msg": "post API - Controlador",
    nombre,
    edad
  });
}

const usuariosPut = (req, res = response) => {

  const {id} = req.params;

  res.json({
    "msg": "put API - Controlador",
    id
  });
}

const usuariosPatch = (req, res = response) => {
  res.json({
    "msg": "patch API - Controlador"
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    "msg": "patch API - Controlador"
  });
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete
}