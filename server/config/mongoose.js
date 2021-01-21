const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/product-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("you made a connection to the database"))
    .catch(err => console.log("Oh shit Something went wrong when connecting to the database", err));

    require("../models/product");