const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cymdatabase');

const objetodb = mongoose.connection;

objetodb.on('connected', (req,res) => {
  console.log('Conexion satisfactoria a MongoDB');
});

objetodb.on('error', () => {
  console.log('Conexion fallida a MongoDB');
});

module.exports = mongoose