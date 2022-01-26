// https://www.youtube.com/watch?v=ov7VjrH5kfw

// https://www.youtube.com/watch?v=1NrHkjlWVhM

// https://www.youtube.com/watch?v=c-yoC4SXi4U&t=3s

const express = require("express");
// const path = require("path");
// var bodyParser = require('body-parser')

const app = express();

app.get('/express_backend', (req, res) => {
    res.send({express: 'YOUR BACKEND IS CONNECTED TO REACT'})
})

app.listen(5000, () => {
    console.log("Running")
})