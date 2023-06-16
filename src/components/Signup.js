import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const [credentials, setCredentials] = useState({ name:'', email: '', password: '', cpassword:'' })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/auth/create-user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();

        if (json.success) {
            localStorage.setItem("token", json.authToken);
            navigate("/");
        }
        else {
            alert("Account with this email already exists")
        }
    }

    const handleChange = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

  return (
    <>
      <div className='container'>
        <h2 className='mb-3'>Sign up to enter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={handleChange} minLength={3} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name='email' onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' onChange={handleChange} minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={handleChange} minLength={5} required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <p className='mt-3'>Already have an account? <Link to='/login'> Click here</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Signup