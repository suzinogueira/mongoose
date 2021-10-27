const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const path = require('path')
const linkRoute = require('./routes/linkRoute')

mongoose.connect('mongodb://localhost/links')

let db = mongoose.connection

db.on('error', () => console.log('Houve um erro'))
db.once('open', () => {
  console.log('Banco carregado')
})

app.use('/', linkRoute)
app.listen(port, () => console.log(`example on port ${port}!`))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

//formas de conectar
// mongoose.connect('mongodb://localhost/links', (error, db) => {
//     console.log(error);
//     console.log(db);
// })

// mongoose.connect('mongodb://localhost/links').then(db => {
//     console.log(db)
// }).catch(error =>{
//     console.log(error)
// })

// let link = new Link({
//     title:"twitter",
//     // description:"Link para o Twitter",
//     url:"http://www.twitter.com/progrbr"
// })

// link.save().then(doc => {
//     console.log(doc)
// }).catch(err => {
//     console.log(err)
// })

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model('Person', personSchema);

// let person = new Person({
//     name: "José",
//     age:23
// })

// person.save().then(doc => {console.log(doc)})
