import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div className='text-center'>
      <div className="">
      <img className='mx-auto' src={logo} alt="" />
      <p className='text-lg font-medium'>Journalism Without Fear or Favour</p>
      <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </div>
  )
}

export default Header
