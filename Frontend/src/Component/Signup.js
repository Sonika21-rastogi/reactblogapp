import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

  const navigate = useNavigate();


  const [credential, setCredential] = useState({name:"", email: "", password: "" ,cpassword:""})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credential;
    
  
    const response = await fetch("https://inotebook-backend-1-j1r1.onrender.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    console.log("User Token:", json);
    if (json.success) {
      // save the token to localstorage
      localStorage.setItem('token', json.authToken)
      props.showAlert("Account Created Succsessfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Credential", "danger");
    }
  }

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }


  return (
     <div className="mb-3">
      <h1 className= "my-3">Create an account to use iNotebook </h1>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="name" className="form-control" id="name" onChange={onChange} name="name" aria-describedby="emailHelp"   autoComplete="username"  />
         
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" onChange={onChange} name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onChange}  minLength={5}   required autoComplete="new-password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" id="cpassword"  minLength={5}   required autoComplete="new-password" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  )
}

export default Signup
