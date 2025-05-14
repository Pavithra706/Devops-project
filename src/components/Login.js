import React, { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
const navigate = useNavigate();
const [form, setForm] = useState({
email: "",
password: "",
});

const handleChange = (e) =>
setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
e.preventDefault();
try {
const res = await login(form);
localStorage.setItem("token", res.token);
alert("Login successful");
navigate("/dashboard");
} catch (err) {
alert("Invalid credentials");
}
};

return (
<form className="auth-form" onSubmit={handleSubmit}>
<h2>Login</h2>
<input name="email" placeholder="Email" onChange={handleChange} required />
<input type="password" name="password" placeholder="Password" onChange={handleChange} required />
<button type="submit">Login</button>
<a href="/register" className="link">Don't have an account? Register</a>
</form>
);
};

export default Login;