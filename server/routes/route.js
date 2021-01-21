const ProductController = require("../controllers/products");



module.exports = (app) => {
    app.get("/products/index", ProductController.index);
    app.post("/products", ProductController.createProduct);
    app.get("/products", ProductController.allProducts);
    app.get("/products/:id", ProductController.oneProduct);
    app.delete("/products/:id", ProductController.deleteProducts);
    app.put("/products/:id", ProductController.updateProducts);

}


