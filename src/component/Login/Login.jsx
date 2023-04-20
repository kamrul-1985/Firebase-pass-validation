import React from 'react';


const Login = () => {
      
      return (
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
              <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-4">
                <h1>Please sign Up</h1>
                <form className="card-body">
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
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      );
};
 
export default Login;