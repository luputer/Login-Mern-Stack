const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const port = 3001;

// Define the employee schema
const EmployeeModel = require("./model/Employee")


const app = express();
app.use(express.json());

app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/register',(req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})



app.listen(port,() => {
    console.log(`server runing in http://localhost:${port}/register`)
})


