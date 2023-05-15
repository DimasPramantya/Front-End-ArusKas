import React, {createContext, useState} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props)=>{
    const [passwordType, setPasswordType] = useState("password");
    const togglePasswordVisibility = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        } setPasswordType("password")
    }
    const [userData, setUserData] = useState({
        
    })
    return(
        <GlobalContext.Provider value={
            {
                passwordType, setPasswordType, togglePasswordVisibility
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}
