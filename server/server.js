const express = require('express')
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()


const userRoute = require("./routes/users-route")

app.use("/users", userRoute)

mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


app.listen(5001, () => {console.log("Server started on http://localhost:5001")})