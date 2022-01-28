import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import {api, createSession} from "../services/api"

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        if(recoveredUser){
            setUser(recoveredUser)
        }
        setLoading(false)
    },[])

    const loginUser = async (login, password) => {

        const response = await createSession(login, password)

        console.log("login", response.data)

        // api session

        const loggedUser = response.data.user
        const token = response.data.token

        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("user", token)

        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser)
        navigate("/protagadmin/")

    }
    const logoutUser = () => {
        console.log('logout')

        localStorage.removeItem("user")
        localStorage.removeItem("token")

        api.defaults.headers.Authorization = null

        setUser(null)
        navigate("/loginadmin/")
    }


    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}