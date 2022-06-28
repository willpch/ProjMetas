const express = require('express')
const { json } = require('body-parser')
const Custos = require('../model/custos')
const rota = '/custos'
const path = require('path')


module.exports = app => {

   app.get(rota, (req, res) => {
      Custos.lista(res)
   })
   app.get((rota+'/:id'),(req, res) => {
      let id = parseInt(req.params.id)
      Custos.buscaPorId(id, res)
   })
   app.post(rota, (req, res) => {
      console.log(req.body)
      Custos.adiciona(req.body, res)
   })
   app.patch((rota+'/:id'),(req, res) =>{
    let id = parseInt(req.params.id)
    let valores = req.body
    Custos.altera(id, valores, res)
 })
  app.delete((rota+'/:id'),(req, res) => {
    let id = parseInt(req.params.id)
    Custos.delete(id, res)
  })
}