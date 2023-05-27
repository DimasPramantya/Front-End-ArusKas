import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props)=>{
    const navigate = useNavigate();
    const API_URL = 'http://localhost:5000';
    const [passwordType, setPasswordType] = useState("password");
    const togglePasswordVisibility = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        } setPasswordType("password")
    }
    const [userData, setUserData] = useState({
        username: "",
        division: "",   
    });
    const [userBills, setUserBills] = useState({
        id: "",
        name: "",
        price: 0,
        payment:{
            id: "",
            status: "",
            method: "",
            proof: "",
            createdAt: "",
            updatedAt: ""
        }
    })
    const [tagihan, setTagihan] = useState({
        id: "",
        name: "",
        price: 0,
        payment:{
            id: "",
            status: "",
            method: "",
            proof: "",
            createdAt: "",
            updatedAt: ""
        }
    });
    const [historyPembayaran, setHistoryPembayaran] = useState({
        id: "",
        name: "",
        price: 0,
        payment:{
            id: "",
            status: "",
            method: "",
            proof: "",
            createdAt: "",
            updatedAt: ""
        }
    });
    const authMemberLogin = (role)=>{
        if(role !== "Member"){
            navigate("/login")
        }
    }
    const authAdminLogin = (role)=>{
        if(role !== "Admin"){
            navigate("/login")
        }
    }
    return(
        <GlobalContext.Provider value={
            {
                passwordType, setPasswordType, togglePasswordVisibility, API_URL, authMemberLogin
                ,userData, setUserData, userBills, setUserBills, tagihan, setTagihan, historyPembayaran, setHistoryPembayaran,
                authAdminLogin
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}
