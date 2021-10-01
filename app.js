const express = require('express')
const app = express()
 
app.get('/avanzada/v1/jugadores', function (req, res) {
  res.send('Hello World')
})

app.post('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

app.put('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

app.delete('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})
 
app.listen(3000,function(){
    console.log("servidor encendido")
})