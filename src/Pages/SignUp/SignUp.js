
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';
import UseTitle from '../../Layout/Hooks/UseTitle';

const SignUp = () => {
    const {createUser, signInWithGoogle, updateUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    UseTitle('Register')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email =form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setErrorMessage('');
            handleUpdateUser(name, photo)
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => setErrorMessage(error.message));
    }

    const handleUpdateUser = (name, photo) => {
      const profile = {
        displayName: name,
        photoUrl: photo
      }
      updateUser(profile)
        .then(() => {})
        .catch(errorMessage => setErrorMessage(errorMessage.message))
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
            setErrorMessage('')
            navigate(from, {replace: true})
        })
        .catch(error => setErrorMessage(error.message));
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
                <span className="label-text">Photo URL</span>
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
            <p className='text-red-500'>{errorMessage}</p>
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