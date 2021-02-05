const express = require('express')
const app = express()
const connection = require('./connection')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/comentarios', (req, res, next) => {
    connection.query("SELECT * FROM fseletro.comentarios", (error, result,)=>{
        res.json(result)
    })
})

app.get('/', (req, res, next) => {
    connection.query("SELECT * FROM fseletro.produtos", (error, result,)=>{
        res.json(result)
    })
})

 app.post('/salvando', (req, res) => {
 let dados =[];
   dados.push({
     nome: req.body.nome, 
     msg: req.body.msg
   });

     connection.query('insert into comentarios set?', dados,()=>{
         dados=[]
         return res.json({messagem:"Dados enviados com Sucesso!"})
     })
 })

app.listen(3001, ()=>{console.log("servidor rodando")})