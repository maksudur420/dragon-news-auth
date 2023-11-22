import { useLoaderData, useParams } from "react-router-dom"
import Header from "../share/Header"
import Navbar from "../share/Navbar"
import Rightsidebar from "../share/Rightsidebar"


const NewsDetails = () => {

    const {id} = useParams()
    
    const data = useLoaderData()
   

    const findNewsDetails = data.find(item => item._id ===id)

    const {title, author, image_url,details}=findNewsDetails

  return (
    <>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid md:grid-cols-4  grid-cols-1">
            <div className="col-span-3 p-3  space-y-3">
                <h3 className="text-3xl font-bold">{title}</h3>
                <img src={image_url} alt=""/>
                <div className="flex gap-3 items-center">
                    <img className="w-12 h-12 rounded-full" src={author.img} alt=""/>
                    <div className="mb-3">
                        <h5 className="text-lg font-bold">{author.name}</h5>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <p>
                    {details}
                </p>
            </div>
            <div className="">
                <Rightsidebar/>
            </div>
        </div>
    </>
  )
}

export default NewsDetails
