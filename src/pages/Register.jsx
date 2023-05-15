import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Register = () => {
    const {passwordType, togglePasswordVisibility} = useContext(GlobalContext)
    const [passwordConfType, setPasswordConfType] = useState("password");
    const [signUpDisable, setSignUpDisable] = useState("cursor-not-allowed");
    const [signUpHover, setSignUpHover] = useState("hover:none");
    const togglePasswordConfVisibility = () => {
        if (passwordConfType === "password") {
            setPasswordConfType("text");
            return;
        } setPasswordConfType("password")
    }
    const toggleDisableButton = () => {
        if (signUpDisable === "cursor-not-allowed") {
            setSignUpDisable("")
            setSignUpHover("hover:bg-blue-700")
            return;
        }
        setSignUpHover("hover:none")
        setSignUpDisable("cursor-not-allowed")
    }
    return (
        <>
            <div className="min-h-screen flex items-center">
                <div className="2xl:w-2/5 w-1/2 mx-auto bg-white p-10 rounded-md my-5">
                    <form>
                        <div className="font-poppins font-semibold text-2xl text-customLightBlue mb-1">
                            Buat Akun
                        </div>
                        <div className="font-poppins text-xs text-customDarkerBlue mb-2">
                            Isi data diri Anda untuk membuat akun baru.
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-poppins text-customLightBlue font-semibold mb-1" for="username">
                                Nama Lengkap
                            </label>
                            <input
                                className="appearance-none text-xs border-none placeholder:text-xs bg-customGray rounded w-full py-2 px-3 font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Nama Lengkap Anda" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-poppins text-customLightBlue font-semibold mb-1" for="username">
                                Email
                            </label>
                            <input
                                className="appearance-none border-none placeholder:text-xs bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Alamat email Anda" />
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-poppins text-customLightBlue font-semibold mb-1" for="username">
                                Nama Pengguna
                            </label>
                            <input
                                className="appearance-none border-none placeholder:text-xs bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Buat nama pengguna baru" />
                        </div>
                        <div className="mb-3 flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-4">
                                <label className="block text-sm font-poppins text-customLightBlue font-semibold mb-1" for="password">
                                    Kata Sandi
                                </label>
                                <div className="relative">
                                    <input
                                        className="appearance-none border-none placeholder:text-xs bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                        id="password" type={passwordType} placeholder="Buat kata sandi" />
                                    <button type="button"
                                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 hover:text-gray-900 focus:outline-none"
                                        onClick={togglePasswordVisibility}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.2572 10.9622C21.7314 11.5813 21.7314 12.4187 21.2572 13.0378C19.764 14.9868 16.1818 19 12 19C7.81823 19 4.23598 14.9868 2.74284 13.0378C2.26857 12.4187 2.26856 11.5813 2.74283 10.9622C4.23598 9.01321 7.81823 5 12 5C16.1818 5 19.764 9.01321 21.2572 10.9622Z" stroke="#2D283E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" /> <circle cx="12" cy="12" r="3" stroke="#2D283E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" /> </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-4">
                                <label className="block font-poppins text-sm text-customLightBlue font-semibold mb-1" for="confirm-password">
                                    Konfirmasi Kata Sandi
                                </label>
                                <div className="relative">
                                    <input
                                        className="appearance-none placeholder:text-xs border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                        id="password" type={passwordConfType} placeholder="Masukkan ulang kata sandi" />
                                    <button type="button"
                                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 hover:text-gray-900 focus:outline-none"
                                        onClick={togglePasswordConfVisibility}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.2572 10.9622C21.7314 11.5813 21.7314 12.4187 21.2572 13.0378C19.764 14.9868 16.1818 19 12 19C7.81823 19 4.23598 14.9868 2.74284 13.0378C2.26857 12.4187 2.26856 11.5813 2.74283 10.9622C4.23598 9.01321 7.81823 5 12 5C16.1818 5 19.764 9.01321 21.2572 10.9622Z" stroke="#2D283E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" /> <circle cx="12" cy="12" r="3" stroke="#2D283E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" /> </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label className="block text-sm font-poppins text-customLightBlue font-semibold mb-1" for="gender">
                                Divisi
                            </label>
                            <div className="relative appearance-none">
                                <select
                                    className="block appearance-none selection:text-sm text-xs w-full bg-customGray border-none font-poppins text-customDarkerBlue py-2 px-3 pr-8 rounded leading-tight"
                                    id="Divisi"
                                >
                                    <option className="bg-white text-customDarkerBlue" value="">Pilih Divisi</option>
                                    <option className="bg-white text-customDarkerBlue" value="Kerohanian">Kerohanian</option>
                                    <option className="bg-white text-customDarkerBlue" value="PDD">PDD</option>
                                    <option className="bg-white text-customDarkerBlue" value="Mikat">Minat dan Bakat</option>
                                    <option className="bg-white text-customDarkerBlue" value="Humas">Hubungan Masyarakat</option>
                                    <option className="bg-white text-customDarkerBlue" value="PSDM">PSDM</option>
                                    <option className="bg-white text-customDarkerBlue" value="Pengurus Inti">Pengurus Inti</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="flex items-center">
                                <input
                                    class="appearance-none border border-gray-400 rounded w-4 h-4 mr-2 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                                    type="checkbox"
                                    id="privacy"
                                    onClick={toggleDisableButton}
                                />
                                <label
                                    class="text-customDarkerBlue font-poppins cursor-pointer select-none text-xs"
                                    for="privacy"
                                >
                                    Saya setuju dengan <span className="text-blue-800 underline font-semibold text-xs">Persyaratan Pengguna</span> dan <span className="text-blue-800 underline font-semibold text-sm">Ketentuan Privasi</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center w-full mb-2">
                            <button
                                className={`w-full text-sm ${signUpDisable} ${signUpHover} font-poppins bg-customLightBlue text-white font-semibold py-2 px-4 rounded `}
                                type="button"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="flex justify-center text-xs font-poppins text-customDarkerBlue items-center w-full mb-2">
                            Sudah punya akun? <Link to="/login">
                                <span className="text-customLightBlue ml-1">Masuk</span>
                            </Link> 
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;