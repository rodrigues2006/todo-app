const express = require("express")
const ephbs = require("express-handlebars")
const app = express()

app.engine('handlebars',ephbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

app.get('/', (requisicao, resposta)=>{
    resposta.render('home')
})

app.listen(3000, ()=>{
  console.log("Servidor rodando na porta 300cl0!")
})