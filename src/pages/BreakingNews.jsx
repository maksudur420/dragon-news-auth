import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
        <Marquee pauseOnHover={true} speed={100}>
            <Link className="mr-12" to='/'> Here I Display Most of the International News </Link>
            <Link className="mr-12" to='/'> Here I Display Most of the International News </Link>
            <Link className="mr-12" to='/'> Here I Display Most of the International News </Link>
            <Link className="mr-12" to='/'> Here I Display Most of the International News </Link>
        </Marquee>
    </div>
  )
}

export default BreakingNews
