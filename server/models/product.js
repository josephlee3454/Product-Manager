const mongoose = require('mongoose');
const Schema = mongoose.Schema 
const ProductSchema = new mongoose.Schema({
    name: { 
        type: String 
},
    price: { 
        type: Number
},
    description: { 
        type: String
    },
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);