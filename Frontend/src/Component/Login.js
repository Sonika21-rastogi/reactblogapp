import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = (props) => {

  const [credential, setCredential] = useState({ email: "", password: "" })
 const navigate = useNavigate(); 

const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("https://inotebook-backend-1-j1r1.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: credential.email, password: credential.password }),
  });

  const json = await response.json();
  console.log("User Token:", json);

  if (json.success) {
    //  Save token in localStorage
    localStorage.setItem("token", json.authToken);
    props.showAlert("Logged in Succsessfully", "success");

    // redirect user
    navigate("/");
  } else {
   props.showAlert("Invalid Credential", "success");
  }
};

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
      <h1>Login to continue iNotebook </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credential.email} onChange={onChange} id="email" name="email"
            aria-describedby="emailHelp" autoComplete="email" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={credential.password} onChange={onChange} name="password" id="password" autoComplete="current-password" />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}


export default Login
