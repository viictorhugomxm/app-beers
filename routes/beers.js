const {Router} = require('express');
const { 
  beersGet, 
  beersPut, 
  beersPost, 
  beersDelete, 
  beersPatch } = require('../controllers/beers');

const router =  Router();

router.get('/', beersGet);

router.put('/:id', beersPut);

router.post('/', beersPost);

router.delete('/', beersDelete);

router.patch('/', beersPatch);

module.exports = router;