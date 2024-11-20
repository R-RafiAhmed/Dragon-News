import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        if(name.length < 5){
          setError({...error, name: "must be more than 5 character long"});
          return;
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log({name, photo, email, password});

        createNewUser(email, password)
        .then(result => {
            console.log(result.user); 
            setUser(result.user);
        })
        .catch(error => console.log(error.code));
    }


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-lg p-12">
        <h2 className="text-center text-4xl font-semibold pt-5">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          {
            error.name && <label className="label text-red-500">{error.name}</label>
          }
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
            <button className="btn btn-neutral rounded-lg">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold text-gray-500">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-red-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
