const {response, request} = require('express');

const beersGet = (req = request, res = response) => {

  //Desestrucutrando
  const {name, brewery, country, price} = req.query;

  //sin desesctructurar
  // const query = req.query;

  res.json({
    "msg": "get API - Controlador",
    // tags: [query]
    tags: [
      name,
      brewery,
      country,
      price,
    ]
  });
}

const beersPost = (req, res = response) => {

  const {name, description} = req.body;

  res.json({
    "msg": "post API - Controlador",
    name,
    description
  });
}

const beersPut = (req, res = response) => {

  const {id} = req.params;

  res.json({
    "msg": "put API - Controlador",
    id
  });
}

const beersPatch = (req, res = response) => {
  res.json({
    "msg": "patch API - Controlador"
  });
}

const beersDelete = (req, res = response) => {
  res.json({
    "msg": "patch API - Controlador"
  });
}

module.exports = {
  beersGet,
  beersPut,
  beersPost,
  beersPatch,
  beersDelete
}