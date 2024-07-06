import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../index.js';

export default function Register() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [res, setRes] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default submission
    try {
      const response = await axios.post("http://localhost:3001/users/register/", formData);
      console.log("Form data successfully submitted!!", response.data);
      setRes("Register Successful!! :)");
      setForm({
        name: "",
        email: "",
        password: ""
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="flex w-30 justify-center bg-orange m-10 h-90" onSubmit={handleSubmit}>
      <div className="form-group dark:bg-blue bg:blue w-150 border-4 rounded p-3">
        <h1 className="text-bold m-4 text-center">Register Here!!</h1><br />
        <label htmlFor="name">Name :</label>
        <input
          className="border border-gray-300 p-2 rounded m-3"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
        /><br />

        <label htmlFor="email">Email :</label>
        <input
          className="border border-gray-300 p-2 rounded m-3"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        /><br />

        <label htmlFor="password">Password :</label>
        <input
          className="border border-gray-300 p-2 rounded m-3"
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        /><br />

        <button className="bg-blue-500 p-0 m-3 w-50 h-10 text-white border-gray-300 rounded" type="submit">Submit</button>
        <p className="text-center">{res}</p>
        {res && (
          <p className="text-center">
            <Link to="/login">Login here</Link>
          </p>
        )}
      </div>
    </form>
  );
}
