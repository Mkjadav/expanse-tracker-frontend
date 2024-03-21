import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"

function Singup() {

    const [credentials, setCredentials] = useState({ email: '', password: "", name: '' })
    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials
        const response = await fetch(`https://expanse-tracker-backend-c39b.onrender.com/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json();
        // console.log(json)
        // if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/login");
        // } else {
        //     alert("Invalid credentials")
        // }


    }


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='login bg-dark'>
            <h2>SingIn to ExpenseOne</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <input className='log-input' name='name' type='name' placeholder='Enter Your Name' onChange={onChange} />
                <input className='log-input' name='email' type='email' placeholder='Enter Email Address' onChange={onChange} />
                <input className='log-input' name='password' type='password' placeholder=' Enter Password' onChange={onChange} />
                <p>Have an account? <Link className='login-link' to="/login"> Log in now</Link></p>
                <button className='login-btn btn  btn-danger'>SingUp</button>
            </form>
        </div>
    )
}

export default Singup
