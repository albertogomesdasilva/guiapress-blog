const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const connection = require('./database/database')

// View Engine
app.set('view engine', 'ejs')

// Static
app.use(express.static('public'))

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão realizada com Sucesso.')
    }).catch((error) => {
        console.log(error)
    })

app.get('/', (req, res) => {
    res.render('index', { valor: '123456' });
  });


app.listen(8000, () => {
    console.log('Servidor Rodando na Porta 8000')
})