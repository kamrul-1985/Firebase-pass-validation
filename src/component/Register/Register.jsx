import React from 'react';
import { applyActionCode, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase';
import { useState } from 'react';


const auth = getAuth(app);


const Register = () => {

const [success, setSuccess] = useState('');
const [error, setError] = useState('');

const handelSubmitToReg = event =>{
  setSuccess('');
  setError('');
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = event.target.password.value;
      console.log(email, password);
      event.target.reset();

if(!/(?=.*[A-Z])/.test(password)){
        setError('Please insert At lest one Upper!!')
        return;
      } 

      else if(!/(?=.*[!#$%&?])/.test(password)){
         setError('Please Insert At lest one special character !')
      }
      
      createUserWithEmailAndPassword(auth, email, password)
  .then((result) => { 
    const users = result.user;
    console.log(users);
    setSuccess('user registration successful');
    // event.target.reset();
  })
  .catch((error) => {
   console.error(error);
   setError(error.message);
  });
}


      return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-4">
            <h1>Please sign Up</h1>
            <form onSubmit={handelSubmitToReg} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <p>{error}</p>
                <p>{success}</p>
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      );
};

export default Register;