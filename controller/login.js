const Login = require('../model/login')
const rota = '/login'

module.exports = app => {
   app.get(rota, (req, res) => {
      Login.procuraUser(res)
   })
    app.post(rota, (req, res) => {
       console.log(req.body)
       Login.adiciona(req.body, res)
    })
 }

