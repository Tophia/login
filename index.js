require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const AuthRoute = require("./routes/Auth");

const app = express();
mongoose.connect('mongodb://localhost/Dns')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
app.use(express.json());
app.use("/api/auth/", AuthRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));



  
