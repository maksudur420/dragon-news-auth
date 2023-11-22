import PropTypes from 'prop-types'
import { BiBookmark } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { Link } from 'react-router-dom';

const NewsPost = ({news}) => {
    const {image_url,details,author,_id} =news;
    
  return (
    <div className="p-3 border rounded-[5px] mt-2 space-y-2">
      <header className="bg-gray-100 flex justify-between items-center d p-4">
        <div className='flex items-center gap-3'>
          <div className="">
            <img className='w-[50px] h-12 rounded-full' src={author.img} alt=""/>
          </div>
          <div className="">
            <h4 className="text-xl mb-2 font-semibold">
              {author.name}
            </h4>
            <p>
              {author.published_date}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <BiBookmark className='text-5xl'/>
          <CiShare2 className='text-5xl'/>
        </div>
      </header>
      <img src={image_url} alt=""  />
      {details.length>120 ? <p>{details.slice(0,120)}<Link  className='btn ml-1' to={`/news/${_id}`}>Read More..</Link></p>: <p>
        {details}
      </p>
      
      }
    </div>
  )
}

export default NewsPost

NewsPost.propTypes ={
    news:PropTypes.object
}
