const {response} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = async(req = request, res = response) => {

  // const {q, nombre = 'No name', apiKey, page = 1, limit} = req.query;
  // const query = req.query
  const {limite = 5, desde = 0} = req.query;
  const query = {estado: true}

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query)
    .skip(Number(desde))
    .limit(Number(limite))
  ])

  res.json({
    total,
    usuarios
  });
}

const usuariosPost = async(req, res = response) => {

  // const body = req.body;
  const {nombre, correo, password, rol} = req.body;
  const usuario = new Usuario({nombre, correo, password, rol});

  //Verificar si el correo existe


  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password,salt);

  //Guardar BD
  await usuario.save();

  res.json({
    usuario
  });
}

const usuariosPut = async(req, res = response) => {

  const {id} = req.params;
  
  console.log(id);
  const {_id, password, google, correo, ...resto} = req.body;

  //Todo validar contra base de datos
  if(password) {
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password,salt);
  }

  const usuario = await Usuario.findOneAndUpdate(id, resto, {new: true});

  res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
  res.json({
    "msg": "patch API - Controlador"
  });
}

const usuariosDelete = async(req, res = response) => {

  const {id} = req.params;

  //Borrar registro fisico
  // const usuario = await Usuario.findByIdAndDelete(id);

  //Cambiando estado de usuario para eliminar registrado y no perder integridad de registros
  const usuario = await Usuario.findByIdAndUpdate(id, {estado: false}, {new: true});

  res.json({
    usuario
  });
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete
}