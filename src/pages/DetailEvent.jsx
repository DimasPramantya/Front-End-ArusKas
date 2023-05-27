import AdminNavbar from "../components/adminNavbar";
import logoBack from "../assets/back.png"
import logoFile from "../assets/file.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const DetailEvent = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : '');
  };
    return (
        <>
            <AdminNavbar />
            <main className="mt-12 flex justify-center gap-x-12 font-poppins">
                <div className="bg-white w-5/12 rounded-xl flex flex-col p-5 gap-y-5">
                    <div className="flex">
                        <img src={logoBack} className="w-4" />
                        <h1 className="text-center w-full font-bold text-xl text-customLightBlue">Pengeluran Baksos</h1>
                    </div>
                    <div className="flex flex-col max-h-96 overflow-auto">
                        <div className="grid grid-cols-5 py-2 px-5 bg-customGray rounded-lg">
                            <div className="pl-7 text-xs font-poppins col-span-2">
                                Nama
                            </div>
                            <div className="text-xs font-poppins col-span-2">
                                Tanggal dibuat
                            </div>
                            <div className="text-xs font-poppins">
                                Nominal
                            </div>
                        </div>
                        <div className="grid grid-cols-5  border-b-2 p-5 items-center">
                            <div className="flex items-center col-span-2">
                                <Link to="">
                                    <img src={logoFile} className="mr-2 w-5" />
                                </Link>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins col-span-2">
                                25 Maret 2023, 10.20 PM
                            </div>
                            <div className="text-xs font-poppins">
                                Rp100.000
                            </div>
                        </div>
                        <div className="grid grid-cols-5  border-b-2 p-5 items-center">
                            <div className="flex items-center col-span-2">
                                <Link to="">
                                    <img src={logoFile} className="mr-2 w-5" />
                                </Link>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins col-span-2">
                                25 Maret 2023, 10.20 PM
                            </div>
                            <div className="text-xs font-poppins">
                                Rp100.000
                            </div>
                        </div>
                        <div className="grid grid-cols-5  border-b-2 p-5 items-center">
                            <div className="flex items-center col-span-2">
                                <Link to="">
                                    <img src={logoFile} className="mr-2 w-5" />
                                </Link>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins col-span-2">
                                25 Maret 2023, 10.20 PM
                            </div>
                            <div className="text-xs font-poppins">
                                Rp100.000
                            </div>
                        </div>
                        <div className="grid grid-cols-5  border-b-2 p-5 items-center">
                            <div className="flex items-center col-span-2">
                                <Link to="">
                                    <img src={logoFile} className="mr-2 w-5" />
                                </Link>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins col-span-2">
                                25 Maret 2023, 10.20 PM
                            </div>
                            <div className="text-xs font-poppins">
                                Rp100.000
                            </div>
                        </div>
                        <div className="grid grid-cols-5  border-b-2 p-5 items-center">
                            <div className="flex items-center col-span-2">
                                <Link to="">
                                    <img src={logoFile} className="mr-2 w-5" />
                                </Link>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins col-span-2">
                                25 Maret 2023, 10.20 PM
                            </div>
                            <div className="text-xs font-poppins">
                                Rp100.000
                            </div>
                        </div>
                        <div className="grid grid-cols-5  border-b-2 p-5 items-center">
                            <div className="flex items-center col-span-2">
                                <Link to="">
                                    <img src={logoFile} className="mr-2 w-5" />
                                </Link>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins col-span-2">
                                25 Maret 2023, 10.20 PM
                            </div>
                            <div className="text-xs font-poppins">
                                Rp100.000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl h-fit w-80">
                    <form method="POST" action="">
                        <div className="flex flex-col">
                            <div className="pb-3 border-b-2">
                                <h1 className="font-poppins text-customLightBlue text-lg font-semibold">Tambah Pengeluaran Baru</h1>
                            </div>
                            <div className="mt-3 flex flex-col gap-y-2">
                                <label className="text-sm font-poppins text-customLightBlue font-semibold">Nama Tagihan</label>
                                <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                    id="namaTagihan" type="text" placeholder="Nama Tagihan" name="nama" />
                            </div>
                            <div className="mt-3 flex flex-col gap-y-2">
                                <label className="text-sm font-poppins text-customLightBlue font-semibold">Nominal</label>
                                <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                    id="nominalTagihan" type="number" placeholder="Input Nominal" name="harga" />
                            </div>
                            <div className="mt-3 flex flex-col gap-y-2">
                                <label className="text-sm font-poppins text-customLightBlue font-semibold">Nama Tagihan</label>
                                <input type="file" id="files" class="hidden" onChange={handleFileChange}/>
                                <label for="files" className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline text-opacity-80">{fileName || 'Select Image'}</label>
                            </div>
                            <div className="mt-5 w-full mb-2">
                                <button
                                    className={`w-full font-poppins bg-customBlue text-sm text-white font-semibold py-1 px-4 rounded-lg `}
                                    type="submit"
                                >
                                    Tambahkan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default DetailEvent;