import AdminNavbar from "../components/adminNavbar"
import logoBack from "../assets/back.png"
import folder from "../assets/folder.png"

const EventPage = ()=>{
    return(
        <>
            <AdminNavbar/>
            <main className="mt-10 flex gap-x-10 justify-center">
                <div className="bg-white w-1/3 rounded-xl flex flex-col p-5 gap-y-5">
                    <div className="flex">
                        <img src={logoBack} className="w-4"/>
                        <h1 className="text-center w-full font-bold text-xl text-customLightBlue">Event</h1>
                    </div>
                    <div className="flex flex-col max-h-96 overflow-auto">
                        <div className="grid grid-cols-2 gap-x-20 p-2 bg-customGray rounded-lg">
                            <div className="pl-10 text-xs font-poppins">
                                Nama
                            </div>
                            <div className="text-xs font-poppins">
                                Tanggal dibuat
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-20 px-2 border-b-2 py-5 items-center">
                            <div className="flex items-center">
                                <img src={folder} className="mr-2 w-7"/>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins">
                                25 Maret 2023, 10.20 PM
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-20 px-2 border-b-2 py-5 items-center">
                            <div className="flex items-center">
                                <img src={folder} className="mr-2 w-7"/>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins">
                                25 Maret 2023, 10.20 PM
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-20 px-2 border-b-2 py-5 items-center">
                            <div className="flex items-center">
                                <img src={folder} className="mr-2 w-7"/>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins">
                                25 Maret 2023, 10.20 PM
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-20 px-2 border-b-2 py-5 items-center">
                            <div className="flex items-center">
                                <img src={folder} className="mr-2 w-7"/>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins">
                                25 Maret 2023, 10.20 PM
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-20 px-2 border-b-2 py-5 items-center">
                            <div className="flex items-center">
                                <img src={folder} className="mr-2 w-7"/>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins">
                                25 Maret 2023, 10.20 PM
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-20 px-2 border-b-2 py-5 items-center">
                            <div className="flex items-center">
                                <img src={folder} className="mr-2 w-7"/>
                                <span className="text-xs font-poppins font-semibold">Kaos UKM</span>
                            </div>
                            <div className="text-xs font-poppins">
                                25 Maret 2023, 10.20 PM
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl h-fit w-80">
                        <form method="POST" action="">
                            <div className="flex flex-col">
                                <div className="pb-3 border-b-2">
                                    <h1 className="font-poppins text-customLightBlue text-lg font-semibold">Tambah Event Baru</h1>
                                </div>
                                <div className="mt-3 flex flex-col gap-y-2">
                                    <label className="text-sm font-poppins text-customLightBlue font-semibold">Nama Event</label>
                                    <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                        id="namaTagihan" type="text" placeholder="Nama Tagihan" name="nama" />
                                </div>
                                <div className="mt-3 flex flex-col gap-y-2">
                                    <label className="text-sm font-poppins text-customLightBlue font-semibold">Tanggal</label>
                                    <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                        id="nominalTagihan" type="number" placeholder="dd/mm/yy" name="harga" />
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

export default EventPage;