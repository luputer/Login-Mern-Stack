import { useState } from "react";  
import React from "react";  
import axios from "axios";

function Signup() {  
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('',{name, email, password})
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }



  return (  
    <div className="flex items-center justify-center min-h-screen bg-gray-100">  
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">  
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Register</h2>  
        <form onSubmit={handleSubmit}>  
          <div className="mb-4">  
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="username">Username</label>  
            <input  
              type="text"  
              id="username"  
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"  
              placeholder="Enter your username"  
              required  
              onChange={(e) => setName(e.target.value)}
            />  
          </div>  
          <div className="mb-4">  
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">Email</label>  
            <input  
              type="email"  
              id="email"  
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"  
              placeholder="Enter your email"  
              required  
              onChange={(e) => setEmail(e.target.value)}
            />  
          </div>  
          <div className="mb-6">  
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="password">Password</label>  
            <input  
              type="password"  
              id="password"  
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"  
              placeholder="Enter your password"  
              required  
              onChange={(e) => setPassword(e.target.value)}
            />  
          </div>  
          <button  
            type="submit"  
            className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"  
          >  
            Register  
          </button>  
        </form>  
        <p className="mt-4 text-sm text-center text-gray-600">  
          Already Have an Account? <a href="#" className="text-blue-500 hover:underline">Login</a>  
        </p>  
      </div>  
    </div>  
  );  
}  

export default Signup;