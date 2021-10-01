   //configuracion variable de entorno
   //require('dotenv').config()
   
   
   //importar el servidor

const ServidorModelos=require("./models/ServidorModelos.js")

     // crea un objeto de clase servidor modelo 

const servidorFPC=new ServidorModelos()


    // desperta servior 

servidorFPC.despertarServidor()