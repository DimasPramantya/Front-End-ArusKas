import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logout_logo from "../assets/logout.png"
import logoUkm from "../assets/logo_ukm.png"
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
    return (
        <>
            <nav className="bg-customLightBlue">
                <div className="px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img src={logoUkm} className="filter brightness-0 invert h-14"/>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-col justify-end mr-7">
                                <div className="text-white font-poppins font-bold">
                                    Dimas Pramantya
                                </div>
                                <div className="text-right text-white font-poppins font-semibold text-xs">
                                    Kerohanian
                                </div>
                            </div>
                            <div>
                                <img src={logout_logo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;