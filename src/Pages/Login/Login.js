import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/Authprovider";
import UseTitle from "../../Layout/Hooks/UseTitle";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')
    UseTitle('Login')
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setErrorMessage('')
            form.reset()
        })
        .catch(error => setErrorMessage(error.message));
    }
    

  return (
    <div className="hero mb-10">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <p className="text-red-500">{errorMessage}</p>
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="px-5 mb-5">New to Atik' cine & photo? <Link className="text-primary" to="/signup">Sign Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
