import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(e);
    setFormData({
      name: e?.currentTarget?.[0]?.value,
      email: e?.currentTarget?.[1]?.value,
      password: e?.currentTarget?.[2]?.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Signing in with:", {
      name: e?.currentTarget?.[0]?.value,
      email: e?.currentTarget?.[1]?.value,
      password: e?.currentTarget?.[2]?.value,
    });
    console.log("check e value:", e);
  };
  return (
    <div>
      <h2>Register a new user</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            type="email"
            onChange={handleChange}
            value={formData.email}
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
