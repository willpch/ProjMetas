const Login = require('../model/auth')
const rota = '/auth'

module.exports = app => {
app.get(rota, (req, res) => {
	auth.procuraUser(res)
 })

 }

