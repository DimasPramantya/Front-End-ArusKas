import logoAcc from '../assets/check.png'
import logoFilter from "../assets/Filter.png"
import logoProses from '../assets/warning.png'
import logoTolak from '../assets/declined.png'

const ListPembayaran = () => {
    return (
        <>
            <div className='w-3/5 h-125 bg-white rounded-xl py-10 mt-10 ml-16'>
                <div className='flex w-5/6 justify-between items-center mx-20 mb-6'>
                    <div className='font-poppins text-customLightBlue text-2xl font-semibold '>
                        Riwayat Pembayaran
                    </div>
                    <div className='bg-customBlue w-40 px-5 py-3 flex justify-between rounded-xl'>
                        <span className='text-xs font-poppins text-white font-semibold'>Filter Status</span>
                        <img src={logoFilter} className='w-4 filter brightness-0 invert'/>
                    </div>
                </div>
                <div className="flex flex-col w-5/6 h-96 overflow-auto mx-20">
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
        </>
    )
}

export default ListPembayaran;