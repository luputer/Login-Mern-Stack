const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const port = 3001;

// Define the employee schema
const EmployeeModel = require("./model/Employee")


const app = express();
app.use(express.json());

app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/employee')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err))




// app.post('/register',(req, res) => {
//     EmployeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => res.json(err))
// })



app.post('/register', (req, res) => {  
    EmployeeModel.create(req.body)  
    .then(employees => res.json(employees))  
    .catch(err => res.json(err));  
});


app.post('/login', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Incorrect password")
            } 
        } else {
            res.json("No record exist");
        }
    })
})

//     app.post('/register',(req, res) => {
//     EmployeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => res.json(err))
// })



app.listen(port,() => {
    console.log(`server runing in http://localhost:${port}/register`)
})


