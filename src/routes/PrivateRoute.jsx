import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom"


const PrivateRoute = ({children}) => {

    const {users,loading} = useContext(AuthContext)
    const loaction = useLocation()

    if (!loading) {
        return(
            <>
                <div className=" md:w-1/4 w-1/2 mx-auto mt-16 text-center">
                    <span className="loading loading-infinity loading-xs"></span>
                    <span className="loading loading-infinity loading-sm"></span>
                    <span className="loading loading-infinity loading-md"></span>
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            </>
        )
    }

    if (users) {
        return children;
    }

  return <Navigate state={loaction.pathname} to='/login'></Navigate>
}

export default PrivateRoute

PrivateRoute.propTypes ={
    children: PropTypes.node
}
