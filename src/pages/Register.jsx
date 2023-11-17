import { useContext, useState } from "react"
import Navbar from "../share/Navbar"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthProvider"
import { AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";


const Register = () => {

  const [registerData, setRegisterData] =useState({name:'',photo_url:'',email:'',password:''})
  const [success,setSuccess] =useState("")
  const [errMessage, setErrMessage] =useState('')
  const [showPass,setShowPass] =useState(false)

  const {createUser} = useContext(AuthContext)

  console.log(registerData)

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
      setSuccess('')


      const email =registerData.email
      const password =registerData.password

      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // Check if the new password matches the pattern
      const isValid = passwordPattern.test(password);

      if (password.length<6) {
        setErrMessage('Password Should be 6 Character or Longer')
        return;
      }else if(!isValid){
        setErrMessage('Password contain atleast on Uppercase')
            return;
      }


      createUser(email,password)
      .then((result) => {
        const user =result.user
        if (user) {
          setSuccess('User is create succesfully')
        }
      }).catch((err) => {
        setErrMessage(err.message)
      })
      
  }
  const isFormValid = registerData.name !== '' && registerData.photo_url !== '' && registerData.email !== '' && registerData.password !== '' ;
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <div className="hero-content flex-col">
        <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleLoginState} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" value={registerData.name} onChange={handleInputChange} placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="text" name="photo_url" value={registerData.photo_url} onChange={handleInputChange} placeholder="Photo_Url" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" value={registerData.email} onChange={handleInputChange} placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="w-full relative">
              <input className=" w-full input input-bordered" type={showPass?'text':'password'} placeholder="Password" value={registerData.password} name="password" id="password" onChange={handleInputChange} required/>
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
              {
                success && <p className="text-green-700 ">{success}</p>
              }
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={!isFormValid}>Register Now</button>
            </div>
            <div className="mt-4">
              <p> Already have an account?<Link className="underline ml-2 uppercase text-sky-700 text-lg" to='/login'>Login Now</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
