import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsPost from "../pages/NewsPost";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";




const router =createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                loader:()=>{
                    return fetch('/news.json')
                },
                element:<Home/>,
                children:[
                    {
                        path:'/category/:id',
                        element:<NewsPost></NewsPost>
                    }
                ]
            },
            {
                path:'/news/:id',
                loader:()=>{
                    return fetch('/../news.json')
                },
                element:<PrivateRoute><NewsDetails/></PrivateRoute>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/career',
                element:<PrivateRoute><Career/></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default router;