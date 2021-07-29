const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');

dotenv.config();


mongoose 
 .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));




 app.use(express.json());
 app.use(express.urlencoded({
   extended: true
 }));
 

app.use("/api/user", authRoute);

app.listen(8080, () => console.log("Server started on port 8080"));
