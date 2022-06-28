const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


module.exports = () => {
    const app = express()
    

    app.use('/js', express.static(__dirname + '/js'))
    app.use('/imagens', express.static(__dirname + '/imagens'))
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    app.use(cors())
    consign()
        .include('controller')
        .into(app)
    
    return app
}