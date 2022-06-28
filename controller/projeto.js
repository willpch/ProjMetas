const express = require('express')
const { json } = require('body-parser')
const projeto = require('../model/projeto')
const rota = '/projeto'
const path = require('path')
const { error } = require('console')


module.exports = app => {


   app.get(rota, (req, res) => {
      
      app.use('/js', express.static(path.join(__dirname, '../view/js')))
      app.use('/css', express.static(path.join(__dirname, '../view/css')))
      res.sendFile(path.join(__dirname, '../view','projeto.html' + 'criarProjetos.html'))
   })
   app.get((rota+'/:id'),(req, res) => {
      let id = parseInt(req.params.id)
      projeto.buscaPorId(id, res)
   })
   app.post(rota, (req, res) => {
      console.log(req.body)
      projeto.adiciona(req.body, res)
   })
   //PUT??
   app.patch((rota+'/:id'),(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      projeto.altera(id, valores, res)
   })
}