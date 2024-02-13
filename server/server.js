const express = require('express')
const app = express()

const userRoute = require("./routes/users-route")

app.use("/users", userRoute)


app.listen(5001, () => {console.log("Server started on http://localhost:5001")})