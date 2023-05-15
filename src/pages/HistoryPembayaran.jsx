import Navbar from "../components/navbar";
import logoFile from "../assets/file.png"

const HistoryPembayaran = () => {
    return (
        <>
            <Navbar />
            <main className="flex justify-center w-full mt-10 bg-customGray">
                <div className="rounded-xl bg-white w-1/3 flex flex-col p-7 gap-y-2">
                    <h2 className="font-poppins text-lg text-customLightGreen text-center">Pembayaran Terverifikasi</h2>
                    <h1 className="font-poppins text-2xl font-semibold text-center">Rp10.000</h1>
                    <h3 className="font-poppins text-center text-xs">Pembayaran Anda Berhasil</h3>
                    <div className="flex flex-col rounded-xl bg-customLightBlue px-6 py-4 bg-opacity-30 gap-y-3 mt-3">
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Nama Transaksi</span>
                            <span className="text-xs font-poppins">Kas Januari</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Waktu</span>
                            <span className="text-xs font-poppins">20 Maret 2023, 12.30 PM</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Atas Nama</span>
                            <span className="text-xs font-poppins">Dimas Pramantya</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Metode Pembayaran</span>
                            <span className="text-xs font-poppins">BCA</span>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-xl bg-customLightBlue px-6 py-4 bg-opacity-30 gap-y-2 mt-3">
                        <h1 className="text-xs font-poppins font-semibold">Bukti</h1>
                        <div className="flex gap-x-2 items-center">
                            <img src={logoFile} className="w-5" />
                            <span className="text-xs font-poppins text-customBlue">bukti.jpg</span>
                        </div>
                    </div>
                    <button
                        className={`mt-2 w-full font-poppins bg-customBlue text-sm text-white font-semibold py-1 px-4 rounded-xl`}
                        type="button"
                    >
                        Kembali
                    </button>
                </div>
            </main>
        </>
    )
}

export default HistoryPembayaran;