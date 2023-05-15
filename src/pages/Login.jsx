import axios from "axios";
import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import logoUkm from "../assets/logo_ukm.png"
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
    const {passwordType, togglePasswordVisibility} = useContext(GlobalContext);
    useEffect(()=>{
        axios.get("").then((res)=>{console.log(res);})
    },[])
    return (
        <>
            <div className="min-h-screen flex items-center">
                <div className="bg-white w-1/2 flex flex-row justify-between p-12 items-center rounded-xl mx-auto">
                    <form className="w-3/5">
                        <div className="font-poppins text-3xl text-customLightBlue mb-2 font-semibold">
                            Masuk
                        </div>
                        <div className="font-poppins text-xs text-customDarkerBlue mb-3">
                            Masukkan detail login Anda untuk melanjutkan.
                        </div>
                        <div className="mb-4">
                            <input
                                className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-sm font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="text" placeholder="Alamat email" name="email" />
                        </div>
                        <div className="mb-3 flex flex-col relative">
                            <input
                                className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-sm font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type={passwordType} placeholder="Kata sandi" name="password" />
                            <button type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 hover:text-gray-900 focus:outline-none"
                                onClick={togglePasswordVisibility}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.2572 10.9622C21.7314 11.5813 21.7314 12.4187 21.2572 13.0378C19.764 14.9868 16.1818 19 12 19C7.81823 19 4.23598 14.9868 2.74284 13.0378C2.26857 12.4187 2.26856 11.5813 2.74283 10.9622C4.23598 9.01321 7.81823 5 12 5C16.1818 5 19.764 9.01321 21.2572 10.9622Z" stroke="#2D283E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" /> <circle cx="12" cy="12" r="3" stroke="#2D283E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" /> </svg>
                            </button>
                        </div>
                        <div className="mb-2 flex flex-row justify-between items-center">
                            <div className="flex items-center">
                                <input
                                    class="appearance-none border border-gray-400 rounded w-4 h-4 mr-2 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                                    type="checkbox"
                                    id="privacy"
                                />
                                <label
                                    class="text-customDarkerBlue font-poppins cursor-pointer select-none text-xs"
                                    for="privacy"
                                >
                                    Ingat saya
                                </label>    
                            </div>
                            <Link className="mb-1.5" to="">
                                <span className="font-poppins text-xs text-customLightBlue underline leading-none">Lupa kata sandi</span>
                            </Link>
                        </div>
                        <div className="flex items-center w-full mb-2">
                            <button
                                className={`w-full font-poppins bg-customLightBlue text-white font-semibold py-1 px-4 rounded `}
                                type="submit"
                            >
                                Masuk
                            </button>
                        </div>
                        <div className="flex items-center justify-center w-full mb-2">
                           <span className="font-poppins text-xs text-customDarkerBlue">Belum punya akun?</span>           
                            <span className="ml-1 font-poppins text-xs text-customLightBlue"><Link to="/register">Buat akun</Link></span>
                           
                        </div>
                    </form>
                    <div className="ml-10 h-60">
                        <img src={logoUkm} className="h-full"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            