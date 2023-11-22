import { Link, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../share/Navbar"
import { AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";


const Login = () => {
  const [registerData, setRegisterData] =useState({email:'',password:''})
  const [errMessage, setErrMessage] =useState('')
  const [showPass,setShowPass] =useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)
  
  const {signIn} =useContext(AuthContext)

  const handleInputChange =(e)=>{
    const {name,value}=e.target;

   

      setRegisterData({
        ...registerData,
        [name]:value
      })
  }

  const handleLoginState =(e)=>{
    e.preventDefault()

    setRegisterData({name:'',photo_url:'',email:'',password:''})
    e.target.reset()
    

    const email =registerData.email
    const password =registerData.password

    signIn(email,password)
    .then((result) => {
      console.log(result.user)
      navigate(location?.state? location.state: '/')
    }).catch((err) => {
      setErrMessage(err.message)
    })
  }

  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <div className="hero-content flex-col">
        <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleLoginState} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" value={registerData.email} placeholder="email" className="input input-bordered" onChange={handleInputChange} required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
               <div className="w-full relative">
              <input className=" w-full input input-bordered" value={registerData.password} type={showPass?'text':'password'} placeholder="Password"  name="password" id="password" onChange={handleInputChange} required/>
              <div className="form-control mt-6">
                {
                  errMessage && <p className="text-red-700 ">{errMessage}</p>
                }
                
              </div>
              <span className="absolute right-2 top-4" onClick={()=>setShowPass(!showPass)}>
                  {
                      showPass?<AiOutlineEye/> :<AiOutlineEyeInvisible/>
                  }
              </span>
              </div>
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
