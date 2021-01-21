
const { Product } = require("../models/product")// basically like import but in node format 

module.exports.index = (req,res) => {
    res.json({"message": "hello world"});
},

module.exports.createProduct = (request, response) => {

    Product.create(request.body)
        .then(products => response.json(products))
        .catch(err => response.status(400).json(err));
},
module.exports.oneProduct = (req,res)=>{
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));

},


module.exports.allProducts = (req,res)=>{
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));


}


module.exports.updateProducts = (req,res)=>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));


}


module.exports.deleteProducts = (req,res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));


}
