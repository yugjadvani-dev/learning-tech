import React, { useState } from 'react'
import { assets } from "../../assets/assets";
import axios from 'axios';

const Login = ({ setShowLogin, setCurrentState }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const body = {
                email: user.email,
                password: user.password,
            }
            const response = await axios.post(
                "http://localhost:8585/api/auth/login",
                body
            );
            console.log("Response:", response.data);
            setShowLogin(false)
            setSuccess(true);

            let isLogin = true;
            localStorage.setItem(
                "user",
                JSON.stringify({ ...response.data.user, isLogin })
            );
        } catch (err) {
            console.error("Error:", err);
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{"Login"}</h2>
                    <img
                        src={assets.cross_icon}
                        alt="cross_icon"
                        onClick={() => setShowLogin(false)}
                    />
                </div>
                <div className="login-popup-inputs">
                    <input type="email" placeholder="Your email" name='email' value={user.email} onChange={handleChange} required />
                    <input type="password" placeholder="Password" name='password' value={user.password} onChange={handleChange} required />
                </div>

                <button onClick={handleSubmit}>
                    {"Login"}
                </button>

                <p>
                    Create a new account?
                    <span onClick={() => setCurrentState("Sign up")}>Click here</span>
                </p>
            </form>
        </div>
    )
}

export default Login