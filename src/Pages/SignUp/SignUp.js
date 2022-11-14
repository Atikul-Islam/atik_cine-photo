import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';

const SignUp = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    // console.log(createUser);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        
        createUser(email, photo, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.log(error));
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }

  return (
    <div className="hero mb-5">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="text-center">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
        </div>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name='photo'
                placeholder="Your Photo Url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <button onClick={handleGoogleSignIn} className="btn btn-success mb-5">SignUp With Google</button>
          <p className="px-5 mb-5">Have an account? <Link className="text-primary" to="/login">Log In</Link> </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;