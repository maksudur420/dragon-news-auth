import { FaGoogle,FaGithub, FaFacebook,FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'

const Rightsidebar = () => {
  return (
    <>
     <div className="p-3 space-y-2">
        <h2 className="text-3xl mb-2 font-bold">Login With</h2>
          <button className="btn btn-outline btn-primary">
            <FaGoogle></FaGoogle>
            Login with Google
          </button>
          <button className="btn btn-outline">
            <FaGithub></FaGithub>
            Login with GitHub
          </button>
      </div>
      <div className="p-3 ">
        <h2 className="text-3xl mb-2 font-semibold">Find Us On</h2>
            <a className="text-center p-4 gap-3 flex items-center border rounded-t-lg" href="">
              <FaFacebook/>
              <span>Facebook</span>
            </a>
            <a className="text-center p-4 gap-3 flex items-center border-x" href="">
              <FaTwitter/>
              <span>Twitter</span>
            </a>
            <a className="text-center p-4 gap-3 flex items-center border rounded-b-lg" href="">
              <FaInstagram/>
              <span>Instagram</span>
            </a>
      </div>
      <div className="p-3 space-y-3">
        <h2 className="text-3xl mb-2 font-semibold">Q-Zone</h2>
        <img src={qZone1} alt=""  />
        <img src={qZone2} alt=""  />
        <img src={qZone3} alt=""  />
            
      </div>
    </>
     
      
  
  )
}

export default Rightsidebar
