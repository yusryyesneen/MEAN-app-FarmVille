//creating express server

const express = require('express'); //loading the express module
const app = express();              //Calling the express module in app object.
const mongoose = require('mongoose') //loading the mongoose module to connect the mongo server
const dotenv = require("dotenv");
const userRoute = require("./routes/user"); //importing User router
const authRoute = require("./routes/auth"); //importing Auth router
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
dotenv.config();

//mongoose.set('strictQuery',false);
mongoose.set('strictQuery',true);

mongoose
 .connect(process.env.MONGO_URL)
 .then(() => console.log("DBConnection Successfull!"))
 .catch((err) => {
    console.log(err);
});
app.use(cors());
app.use(express.json()); //to pass json files
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
  /*To run this app we should listen any port number(5000)
but if ur deploying it in hosting env then port is dynamicaly 
assigned by hosting env so we cant rely port 5000 to be available.
So to fix this we use environment variable */
const port = process.env.PORT || 5000;
app.listen (port, ()=> {                     
    console.log(`Backend Server is Running in ${port} !`); 
});  
                                