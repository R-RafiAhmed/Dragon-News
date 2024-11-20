import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const {userLogIn, setUser} = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        userLogIn(email, password)
        .then(result => {
            setUser(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(err => {
          setError({...error, login: err.code})
        });
    }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-lg p-12">
        <h2 className="text-center text-4xl font-semibold pt-5">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
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
            {
              error.login && <label className="label text-red-500">{error.login}</label>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-lg">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold text-gray-500">Don't Have An Account ? <Link to="/auth/register" className="text-red-600">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
