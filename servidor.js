const express=require('express');
const app=express();
const bodyParser=require('body-parser')

const archivoBD=require('./conexion')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.listen(3001,function() {
    console.log('Server corriendo')
})