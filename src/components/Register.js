import React, { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
const navigate = useNavigate();
const [form, setForm] = useState({
name: "",
email: "",
password: "",
role: "Student",
});

const handleChange = (e) =>
setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
e.preventDefault();
try {
await register(form);
alert("Registered successfully");
navigate("/");
} catch (err) {
alert("Registration failed");
}
};

return (
<form className="auth-form" onSubmit={handleSubmit}>
<h2>Register</h2>
<input name="name" placeholder="Name" onChange={handleChange} required />
<input name="email" placeholder="Email" onChange={handleChange} required />
<input type="password" name="password" placeholder="Password" onChange={handleChange} required />
<select name="role" onChange={handleChange}>
<option value="Student">Student</option>
<option value="Guide">Guide</option>
<option value="HoD">HoD</option>
<option value="Admin">Admin</option>
</select>
<button type="submit">Register</button>
<a href="/" className="link">Already have an account? Login</a>
</form>
);
};

export default Register;