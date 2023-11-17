import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"


const Leftsidebar = () => {

  const [categories,setCategories]=useState([])
  const navigate =useNavigate()

  
  

  useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(news=>setCategories(news))
  },[])

  const handleRouter =(id)=>{
    navigate(`/category/${id}`)
  }

  return (
    <>
      <div className="p-3 space-y-2">
        <h2 className="text-2xl mb-2 font-bold">All News Categories</h2>
          {
            categories.map(category => {
             return <NavLink 
             onClick={()=>handleRouter(category.id)}
              className={`block px-4 font-semibold btn btn-active text-[#9F9F9F] text-lg ${({ isActive}) =>
               isActive ? "btn-success" : ""
            }`}
              to={`/category/${category.id}`}
              key={category.id}>

                {category.name}

              </NavLink >
          })
          }
      </div>
    </>
    
  )
}

export default Leftsidebar
