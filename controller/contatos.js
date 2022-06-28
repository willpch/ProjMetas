const express = require('express')
const Contatos = require('../model/contatos')
const rota = '/contatos'
const path = require('path')

module.exports = app => {

   app.post(rota, (req, res) => {
      console.log(req.body)
      Contatos.adicionarContato(req.body, res)
   })

   app.get(rota, (req, res) => {
      Contatos.listarContato(res)
   })
   
   app.patch((rota+':id'),(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Contatos.alterarContato(id, valores, res)
   })
   
   // app.delete(rota, (req, res) =>{
   //    let id = parseInt(req.params.id)
   //    let valores = req.body
   //    Contatos.deletarContato(id, valores, res)
   // })
   
   // app.get((rota+':id'),(req, res) => {
   //    let id = parseInt(req.params.id)
   //    Contatos.buscarPorId(id, res)
   // })
   

   app.get((rota+'/:id'))
}
//Testar POST - Abra o CMD no windows
//curl -d "valor=20.0&descricao=Compras" http://localhost:3000/despesa