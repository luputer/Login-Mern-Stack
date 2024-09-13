const moongoose  = require('mongoose')


const EmployeeSchema = new moongoose.Schema({
    name: {
        type:String,
        require: true,
    },
    email: {
        type:String,
        require: true,
    },
    password: {
        type:String,
        require: true
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