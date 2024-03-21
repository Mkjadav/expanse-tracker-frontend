import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"

function Login(props) {
    const [credentials, setCredentials] = useState({ email: '', password: "" })
    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://expanse-tracker-backend-c39b.onrender.com/api/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            navigate("/");
        } else {
            alert("Invalid credentials")
        }
    }


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='login bg-dark'>
            <h2>SingIn to ExpenseOne</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <input className='log-input' name='email' id='email' value={credentials.email} type='email' placeholder='Email Address' onChange={onChange} />
                <input className='log-input' name='password' id='password' value={credentials.password} type='password' placeholder='Password' onChange={onChange} />
                <p>Don't have an account? <Link className='login-link' to="/singup" >Sing Up</Link></p>
                <button className='login-btn btn  btn-danger' >SingIn</button>
            </form>
        </div>
    )
}

export default Login
