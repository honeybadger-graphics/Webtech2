const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Legos = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  recomendedAge: {
    type: String
  }
}, {
  collection: 'legos'
})
 
module.exports = mongoose.model('Legos', Legos)