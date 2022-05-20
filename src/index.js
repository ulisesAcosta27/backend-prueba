const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
require("../src/db/database");
const categoryRoutes = require('./routes/categories.routes')
const productyRoutes = require('./routes/products.routes')
const orderRoutes = require('./routes/orders.routes')
const userRoutes = require('./routes/users.routes')

require('../src/asociations/asociations')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(categoryRoutes)
app.use(productyRoutes)
app.use(orderRoutes)
app.use(userRoutes)

app.listen(process.env.PORT || 3000);
console.log("Server is running in port", process.env.PORT);
