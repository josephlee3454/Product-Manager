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
    completed:{
        type:Boolean,
        default: false,
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);