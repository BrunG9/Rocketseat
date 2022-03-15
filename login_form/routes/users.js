const express = require('express');
const router = express.Router();
const fs = require('fs')

router.get('/login', function(req, res, next) {
  res.render('formLogin');
});


router.post('/login', function(req, res, next) {
  const dadosDoForm = req.body
  salvarUsuarios(dadosDoForm)
  res.redirect('/')
});

function salvarUsuarios(objeto){
  const usuariosSalvos = fs.readFileSync('arquivo.json')
  const array = JSON.parse(usuariosSalvos)
  array.push(objeto)
  const str = JSON.stringify(array)
  fs.writeFileSync('arquivo.json', str)
} 

module.exports = router;