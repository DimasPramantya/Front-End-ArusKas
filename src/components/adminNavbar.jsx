import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logout_logo from "../assets/logout.png"
import logoUkm from "../assets/logo_ukm.png"
import { GlobalContext } from "../context/GlobalContext";

const AdminNavbar = () => {
    const location = useLocation();
    const currentUrl = location.pathname;
    const active = "font-bold";
    const { setUserData, userData} = useContext(GlobalContext)
    const navigate = useNavigate()
    const handleLogout = ()=>{
        setUserData({
            username: "",
            division: ""
        });
        localStorage.clear();
        return navigate("/login")
    }
    return (
        <>
            <nav className="bg-customLightBlue">
                <div className="px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-x-7">
                            <div className="flex-shrink-0">
                                <img src={logoUkm} className="filter brightness-0 invert h-14"/>
                            </div>
                            <div className={`font-poppins, text-white ${currentUrl==="/admin"? active:" "}`}>
                                <Link to="/admin">
                                    Dashboard
                                </Link> 
                            </div> 
                            <div className={`font-poppins, text-white ${currentUrl==="/admin/pembukuan"? active:" "}`}>
                                <Link to="/admin/pembukuan">
                                    Pembukuan
                                </Link> 
                            </div> 
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-col justify-end mr-7">
                                <div className="text-white font-poppins font-bold">
                                    {userData.username}
                                </div>
                                <div className="text-right text-white font-poppins font-semibold text-xs">
                                    Admin
                                </div>
                            </div>
                            <div>
                                <button onClick={handleLogout}>
                                    <img src={logout_logo}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar;