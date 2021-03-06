const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//incando o App
const app = express() ;

//incando o DB

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true }
);
requireDir('./src/models');
const Product = mongoose.model('Product');

//Primeira rota
app.get("/", (req, res) => {
   Product.create({
       title: "React Native",
       description: "Build native apps with React",
       url: "http://github.com/facebook/react-native"
   });

   return res.send("Ola Colatina!");
}); 

app.listen(3000);