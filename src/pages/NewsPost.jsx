import PropTypes from 'prop-types'

const NewsPost = ({news}) => {
    const {image_url,details} =news;
  return (
    <div>
      <img src={image_url} alt=""  />
      <p>{details}</p>
    </div>
  )
}

export default NewsPost

NewsPost.propTypes ={
    news:PropTypes.object
}
