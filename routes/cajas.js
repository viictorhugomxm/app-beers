const {Router} = require('express');
const { check } = require('express-validator');
const { crearCaja } = require('../controllers/cajas');
const { validarJWT } = require('../middlewares');
const router =  Router();

// {{url}}/api/categorias 

//Obtener todas las cajas - publico
router.get('/', (req, res) => {
  res.json('get - cajas')
});


//Obtener una caja por id - publico
router.get('/:id', (req, res) => {
  res.json('get id - cajas')
});

//Crear caja - privado - cualquier persona con un token valido 
router.post('/', [
  validarJWT,
  check('nombre','El nombre es obligatorio').not().isEmpty(),
],crearCaja);

//Actualizar caja - privado - cualquiera con token valido
router.put('/:id', (req, res) => {
  res.json('put')
});

//Borrar una caja - Admin
router.delete('/:id', (req, res) => {
  res.json('delete - cajas')
});


module.exports = router;