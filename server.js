const express = require('express')
const app = express()
 app.use(express.json())
 var cors = require('cors')
 app.use(cors())



//Require de mes routes
const Pokemon=require('./route/Pokemon.js')


//Route api
app.use('/Pokemon',Pokemon)



app.listen(8000,()=>{
    console.log('Le serveur est en ligne')
})


