const { response } = require("express");
const {Caja} = require("../models")



const crearCaja = async(req, res = response) => {

  const nombre = req.body.nombre.toUpperCase()

  const cajaDB = await Caja.findOne({nombre});

  if(cajaDB) {
    return res.status(404).json({
      msg: `La caja ${cajaDB.nombre}, ya existe`
    })
  }

  //Generar la data a guardarm 
  const data = {
    nombre, 
    usuario: req.usuario._id
  }

  const caja = new Caja(data);

  //Guardar en DB
  await caja.save();

  res.status(201).json(caja);

}

module.exports = {
  crearCaja
}