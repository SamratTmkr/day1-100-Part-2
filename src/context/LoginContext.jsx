import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({children}) =>{
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    const [username,setUsername]=useState("")

   const login = (user_name) =>{
        setIsAuthenticated(true);
        setUsername(user_name)
   }

   const logout =()=>{
    setIsAuthenticated(false);
    setUsername(user_name)
   }
   
    return(
        <LoginContext.Provider value={{isAuthenticated,username ,login,logout}}>
            {children}
        </LoginContext.Provider>
    )
}