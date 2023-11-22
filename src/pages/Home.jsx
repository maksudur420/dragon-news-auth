import Header from "../share/Header"
import Navbar from "../share/Navbar"
import Leftsidebar from '../share/Leftsidebar'
import Rightsidebar from '../share/Rightsidebar'
import BreakingNews from "./BreakingNews"
import { useLoaderData, useParams } from "react-router-dom"
import NewsPost from "./NewsPost"




const Home = () => {


  const {id} = useParams()
    const data =useLoaderData()
    
    
    const allNews = id && id !=="0"? data.filter(item=>{
      return item.category_id === id
    }).map(item=>{
      return <NewsPost key={item._id} news={item}/>
    }):data.map(item=>{
      return <NewsPost key={item._id} news={item}/>
    })
  


  return (
    <div>
      <Header/>
      <BreakingNews/>
      <Navbar/>
      
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <Leftsidebar/>
        </div>
        <div className="md:col-span-2 col-span-1">
          <h3 className="text-2xl mt-3 pl-2 font-bold">Dragon News Home</h3>
          {allNews}
        </div>
        <div>
          <Rightsidebar/>
        </div>
      </div>
    </div>
  )
}

export default Home
