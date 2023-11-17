import { Link } from "react-router-dom"
import Navbar from "../share/Navbar"



const Login = () => {



  
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <div className="hero-content flex-col">
        <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-4">
              <p> Do not have an account?<Link className="underline uppercase ml-2 text-sky-700 text-lg" to='/register'> Register Now</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
