import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import app from '../firebase/firebase.config'
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext(null)
const auth =getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()



const AuthProvider = ({children}) => {

    const [users, setUser] = useState(null)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const signInWithGithub =()=>{
        return signInWithPopup(auth,githubProvider)
    }

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })

        return ()=>{
            unSubscribe()
        }
    },[])


    const logOut =()=>{
        return signOut(auth)
    }

    const userInfo ={
        users,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }

  return (
    <AuthContext.Provider value={userInfo} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes={
    children: PropTypes.node
}

