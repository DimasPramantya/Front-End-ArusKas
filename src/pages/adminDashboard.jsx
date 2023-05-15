import AdminNavbar from "../components/adminNavbar";
import logoAcc from '../assets/check.png'
import logoFilter from "../assets/Filter.png"
import logoProses from '../assets/warning.png'
import logoTolak from '../assets/declined.png'
import logoEvent from '../assets/event.png'
import logoRiwayat from '../assets/riwayat.png'

const AdminDashboard = () => {
    return (
        <>
            <AdminNavbar />
            <main className="mt-10 flex gap-x-10 justify-center">
                <div className='w-1/2 bg-white rounded-xl p-7'>
                    <div className='flex w-full justify-between items-center mb-6'>
                        <div className='font-poppins text-customLightBlue text-2xl font-semibold '>
                            Pembayaran Anggota
                        </div>
                        <div className='bg-customBlue w-40 px-5 py-3 flex justify-between rounded-xl'>
                            <span className='text-xs font-poppins text-white font-semibold'>Filter Status</span>
                            <img src={logoFilter} className='w-4 filter brightness-0 invert' />
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-96 overflow-auto">
                        <div className="grid grid-cols-6 items-center">
                            <div className="bg-customGray text-sm p-3 col-span-2"><span className='pl-8 font-poppins text-customDarkerBlue '>Nama Transaksi</span></div>
                            <div className="bg-customGray text-sm p-3 pl-0 font-poppins text-customDarkerBlue">Status</div>
                            <div className="bg-customGray text-sm p-3 pl-8 col-span-2 font-poppins text-customDarkerBlue">Waktu Transaksi</div>
                            <div className="bg-customGray text-sm p-3 font-poppins text-customDarkerBlue">Total</div>
                        </div>
                        <div className="grid grid-cols-6 border-b-2 items-center">
                            <div className="p-3 break-words bg-white flex col-span-2 items-center"><img src={logoAcc} className='mr-2 w-6 h-6' /><span className='font-poppins font-semibold text-customDarkerBlue'>Kas Januari 2023</span></div>
                            <div className="p-3 pl-0 break-words bg-white">
                                <div className='text-xs text-center font-poppins bg-customVeryLightGreen px-4 py-3 rounded-lg w-28 text-customLightGreen font-semibold'>Terverifikasi</div>
                            </div>
                            <div className="p-3 break-words pl-8 col-span-2 text-sm bg-white">20 Maret 2023 12.30 PM</div>
                            <div className="p-3 break-words text-sm bg-white">Cell 8</div>
                        </div>
                        <div className="grid grid-cols-6 items-center border-b-2">
                            <div className="p-3 break-words bg-white flex col-span-2 items-center"><img src={logoProses} className='mr-2 w-6 h-6' /><span className='font-poppins font-semibold text-customDarkerBlue'>Kas Januari 2023</span></div>
                            <div className="p-3 pl-0 break-words bg-white">
                                <div className='text-xs w-28 font-poppins bg-customVeryLightYellow text-center px-5 py-3 rounded-lg text-customLightYellow font-semibold'>Diproses
                                </div>
                            </div>
                            <div className="p-3 break-words pl-8 text-sm col-span-2 bg-white">20 Maret 2023 12.30 PM</div>
                            <div className="p-3 break-words text-sm bg-white">Cell 8</div>
                        </div>
                        <div className="grid grid-cols-6 border-b-2 items-center">
                            <div className="p-3 break-words bg-white flex col-span-2 items-center"><img src={logoProses} className='mr-2 w-6 h-6' /><span className='font-poppins font-semibold text-customDarkerBlue'>Kas Januari 2023</span></div>
                            <div className="p-3 pl-0 break-words bg-white">
                                <div className='text-xs w-28 font-poppins bg-customVeryLightYellow text-center px-5 py-3 rounded-lg text-customLightYellow font-semibold'>
                                    Diproses
                                </div>
                            </div>
                            <div className="p-3 break-words col-span-2 pl-8 text-sm bg-white">20 Maret 2023 12.30 PM</div>
                            <div className="p-3 break-words text-sm bg-white">Cell 8</div>
                        </div>
                        <div className="grid grid-cols-6 border-b-2 items-center">
                            <div className="p-3 break-words bg-white flex col-span-2 items-center"><img src={logoTolak} className='mr-2 w-6 h-6' /><span className='font-poppins font-semibold text-customDarkerBlue'>Kas Januari 2023</span></div>
                            <div className="p-3 pl-0 break-words bg-white">
                                <div className='text-xs w-28 font-poppins bg-customVeryLightRed text-center px-5 py-3 rounded-lg text-customLightRed font-semibold'>
                                    Ditolak
                                </div>
                            </div>
                            <div className="p-3 break-words text-sm pl-8 col-span-2 bg-white">20 Maret 2023 12.30 PM</div>
                            <div className="p-3 break-words text-sm bg-white">Cell 8</div>
                        </div>
                        <div className="grid grid-cols-6 border-b-2 items-center">
                            <div className="p-3 break-words bg-white flex col-span-2 items-center"><img src={logoAcc} className='mr-2 w-6 h-6' /><span className='font-poppins font-semibold text-customDarkerBlue'>Kas Januari 2023</span></div>
                            <div className="p-3 pl-0 break-words bg-white">
                                <div className='text-xs font-poppins bg-customVeryLightGreen px-4 text-center py-3 rounded-lg w-28 text-customLightGreen font-semibold'>Terverifikasi</div>
                            </div>
                            <div className="p-3 text-sm break-words pl-8 col-span-2 bg-white">20 Maret 2023 12.30 PM</div>
                            <div className="p-3 text-sm break-words bg-white">Cell 8</div>
                        </div>
                        <div className="grid grid-cols-6 border-b-2 items-center">
                            <div className="p-3 break-words bg-white flex col-span-2 items-center"><img src={logoAcc} className='mr-2 w-6 h-6' /><span className='font-poppins font-semibold text-customDarkerBlue'>Kas Januari 2023</span></div>
                            <div className="p-3 pl-0 break-words bg-white">
                                <div className='text-xs font-poppins bg-customVeryLightGreen px-4 text-center py-3 rounded-lg w-28 text-customLightGreen font-semibold'>Terverifikasi</div>
                            </div>
                            <div className="p-3 text-sm break-words pl-8 col-span-2 bg-white">20 Maret 2023 12.30 PM</div>
                            <div className="p-3 text-sm break-words bg-white">Cell 8</div>
                        </div>
                        <div className="grid grid-cols-6 border-b-2 items-center">
                            <div className="p-3 break-words bg-white flex col-span-2 items-center"><img src={logoAcc} className='mr-2 w-6 h-6' /><span className='font-poppins font-semibold text-customDarkerBlue'>Kas Januari 2023</span></div>
                            <div className="p-3 pl-0 break-words bg-white">
                                <div className='text-xs font-poppins bg-customVeryLightGreen px-4 text-center py-3 rounded-lg w-28 text-customLightGreen font-semibold'>Terverifikasi</div>
                            </div>
                            <div className="p-3 text-sm break-words pl-8 col-span-2 bg-white">20 Maret 2023 12.30 PM</div>
                            <div className="p-3 text-sm break-words bg-white">Cell 8</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-12">
                    <div className="bg-customBlue w-92 py-4 rounded-xl flex justify-center gap-x-6">
                        <div className="rounded-xl bg-white p-3 flex flex-col">
                            <h1 className="text-customBlue font-semibold font-poppins">Saldo Kas</h1>
                            <h1 className="text-customDarkerBlue font-semibold font-poppins">Rp 500.000,00</h1>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <img src={logoEvent} className="w-13" />
                            <span className="font-poppins text-white font-semibold">Event</span>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <img src={logoRiwayat} className="w-13" />
                            <span className="font-poppins text-white font-semibold">Riwayat</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl">
                        <form method="POST" action="">
                            <div className="flex flex-col">
                                <div className="pb-3 border-b-2">
                                    <h1 className="font-poppins text-customLightBlue text-lg font-semibold">Tambah Tagihan Baru</h1>
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
                </div>
            </main>
        </>
    )
}

export default AdminDashboard;