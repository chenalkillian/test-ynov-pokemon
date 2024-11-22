const express = require('express')
const app = express()
 app.use(express.json())
 var cors = require('cors')
 app.use(cors())



//Require de mes routes
const Pokemon=require('./route/Pokemon.js')


//Route api
app.use('/Pokemon',Pokemon)


const PORT = process.env.PORT || 8000; // 8000 est utilisé pour le développement local
app.listen(PORT, () => {
  console.log(`Le serveur est en ligne sur le port ${PORT}`);
});
