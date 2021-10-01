const express = require('express')

class ServidorModelos {
          
    constructor(){

        this.app = express()
        this.enrutarPeteciones()

    }

    despertarServidor(){

       this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido"+process.env.PUERTO)
        })

    }

    enrutarPeteciones(){

       this. app.get('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
          })
          
       this. app.post('/avanzada/v1/jugadores', function (req, res) {
              res.send('Hello World')
          })
          
        this.app.put('/avanzada/v1/jugadores', function (req, res) {
              res.send('Hello World')
          })
          
        this.app.delete('/avanzada/v1/jugadores', function (req, res) {
              res.send('Hello World')
          })
           
          

    }

    despetarBD(){

    }
}

module.exports= ServidorModelos