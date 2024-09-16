const moongoose  = require('mongoose')


const EmployeeSchema = new moongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true
    }
})

// mencoba menambahkan data

// const data1 = new EmployeeSchema({
//     Name: 'John Doe',
//     email: 'johndoe@example.com',
//     password: '123456'
// })


// data1.save().then((EmployeeSchema) => console.log(EmployeeSchema))


const EmployeeModel = moongoose.model("employees", EmployeeSchema)


module.exports = EmployeeModel;