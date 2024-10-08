import React, { useState } from 'react'
import style from './Signup.module.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

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
                name: user.name,
            }
            const response = await axios.post(
                "http://localhost:7777/api/auth/signup",
                body
            );
            console.log("Response:", response.data);
            navigate("/");
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
        <div className={style.signup}>
            <div className={style.image}>
                <img src="/src/assets/sign1.png" alt="" />

            </div>

            <div className={style.rege}>

                <h1>CREATE ACCOUNT</h1>

                <div className={style.input}>

                    <div className={style.inn}>
                        <label htmlFor="">  YOUR NAME</label>
                        <input type="text" name='name' id='name' value={user.name} onChange={handleChange} placeholder="name" />
                    </div>

                    <div className={style.inn}>
                        <label htmlFor="">  EMAIL</label>
                        <input type="email" name='email' id='email' value={user.email} onChange={handleChange} placeholder="email" />

                    </div>

                    <div className={style.inn}>
                        <label htmlFor="">  CREATE PASSWORD</label>
                        <input type="password" name='password' id='password' value={user.password} onChange={handleChange} placeholder="password" />
                    </div>

                    <div className={style.inn}>
                        <label htmlFor="">  CONFIRM PASSWORD</label>
                        <input type="password" name='cpassword' id='cpassword' value={user.cpassword} onChange={handleChange} placeholder="Conform password" />
                    </div>


                    <button onClick={handleSubmit} className={style.button}>Sign up</button>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && (
                        <p style={{ color: "green" }}>Registration successful!</p>
                    )}
                </div>

            </div>





        </div>
    )
}

export default Signup
