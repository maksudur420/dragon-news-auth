
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Header from '../share/Header'
import Navbar from '../share/Navbar'
import Rightsidebar from '../share/Rightsidebar'


const About = () => {
  return (
    <div>
      <Header></Header>
      <Navbar/>
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className='p-5 md:col-span-3 col-span-1'>
          <h1 className="text-5xl mb-10 font-bold">
            About Dragon News Online
          </h1>
          <h3 className="text-2xl mb-5 font-bold">
            Dragon News Online
          </h3>
          <p className='text-justify mb-5'>
            MailOnline, plus its local US and Australian versions are owned by DMG Media, an intermediate holding company for Associated Newspapers, Northcliffe Media, Harmsworth Printing, Harmsworth Media and other subsidiaries of the Daily Mail and General Trust.
          </p>
          <p className='text-justify mb-5'>
            The MailOnline plus Daily Mail websites in the US and Australia have a combined global reach in excess of 191m visits per month, making it the most widely-read newspaper website in the world.
          </p>
          <p className='text-justify mb-5'>
            DMG Media is based at Northcliffe House in Kensington, London, UK. 
          </p>
          <hr />
          <h3 className="text-2xl mt-3 font-bold">
            Share or comment : About Dragon News Online
          </h3>
          <div className="mt-3 flex gap-5">
            <a href="#facebook"><FaFacebook className='text-6xl text-sky-700'></FaFacebook></a> 
            <a href="#instagram"><FaInstagram className='text-6xl text-red-300'></FaInstagram></a>
            <a href="#whatsapp"><FaWhatsapp className='text-6xl text-green-500'></FaWhatsapp></a>
            <a href="#twitter"><FaTwitter className='text-6xl text-sky-700'></FaTwitter></a>
          </div>
        </div>
        <div>
          <Rightsidebar/>
        </div>
      </div>
    </div>
  )
}

export default About
