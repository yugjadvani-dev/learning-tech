import React, { useState } from 'react'
import { assets } from "../../assets/assets";
import axios from "axios";

const Signup = ({ setShowLogin, setCurrentState }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState({
        name: "",
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
        
        if (user.name && user.email && user.password) {
            setLoading(true);
            setError(null);

            try {
                const body = {
                    email: user.email,
                    password: user.password,
                    name: user.name,
                }
                const response = await axios.post(
                    "http://localhost:8585/api/auth/signup",
                    body
                );
                console.log("Response:", response.data);
                setCurrentState("Login");
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
        } else {
            setError("Please fill in all required fields");
        }
    };

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{"Sign up"}</h2>
                    <img
                        src={assets.cross_icon}
                        alt="cross_icon"
                        onClick={() => setShowLogin(false)}
                    />
                </div>
                <div className="login-popup-inputs">
                    <input type="text" name='name' id='name' value={user.name} onChange={handleChange} placeholder="Your name" required />
                    <input type="email" name='email' id='email' value={user.email} onChange={handleChange} placeholder="Your email" required />
                    <input type="password" name='password' id='password' value={user.password} onChange={handleChange} placeholder="Password" required />
                </div>

                <button onClick={handleSubmit}>
                    {loading ? "Loading..." : "Create Account"}
                </button>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && (
                    <p style={{ color: "green" }}>Registration successful!</p>
                )}

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>


                <p>
                    Already have an account?
                    <span onClick={() => setCurrentState("Login")}>Login here</span>
                </p>
            </form>
        </div>
    )
}

export default Signup