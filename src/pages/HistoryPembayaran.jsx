import Navbar from "../components/navbar";
import logoFile from "../assets/file.png"
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

const HistoryPembayaran = () => {
    const {authMemberLogin, API_URL, userBills, setUserBills, userData} = useContext(GlobalContext);
    const role = localStorage.getItem('role')
    const token = localStorage.getItem('token')
    const{billId} = useParams();
    useEffect(()=>{
        authMemberLogin(role);
        const fetchData = async()=>{
            const response = await axios.get(`${API_URL}/pay-bill/${billId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            setUserBills([...response.data]);
        }
        fetchData();
    },[])
    useEffect(()=>{
        console.log(userBills);
    },[userBills])
    return (
        <>
            <Navbar />
            <main className="flex justify-center w-full mt-10 bg-customGray">
                <div className="rounded-xl bg-white w-1/3 flex flex-col p-7 gap-y-2">
                    {userBills[0].payment.status == "BERHASIL" && (
                        <h2 className="font-poppins text-lg text-customLightGreen text-center">Pembayaran Terverifikasi</h2>
                    )}
                    {userBills[0].payment.status == "PROSES" && (
                        <h2 className="font-poppins text-lg text-customLightYellow text-center">Pembayaran Diproses</h2>
                    )}
                    {userBills[0].payment.status == "DITOLAK" && (
                        <h2 className="font-poppins text-lg text-customLightRed text-center">Pembayaran Ditolak</h2>
                    )}
                    <h1 className="font-poppins text-2xl font-semibold text-center">Rp {userBills[0].price}</h1>
                    {userBills[0].payment.status == "BERHASIL" && (
                        <h3 className="font-poppins text-center text-xs">Pembayaran Anda Berhasil</h3>
                    )}
                    {userBills[0].payment.status == "PROSES" && (
                        <h3 className="font-poppins text-center text-xs">Pembayaran Anda Diproses</h3>
                    )}
                    {userBills[0].payment.status == "DITOLAK" && (
                        <h3 className="font-poppins text-center text-xs">Pembayaran Anda Ditolak</h3>
                    )}
                    <div className="flex flex-col rounded-xl bg-customLightBlue px-6 py-4 bg-opacity-30 gap-y-3 mt-3">
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Nama Transaksi</span>
                            <span className="text-xs font-poppins">{userBills[0].name}</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Waktu</span>
                            <span className="text-xs font-poppins">{userBills[0].updatedAt}</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Atas Nama</span>
                            <span className="text-xs font-poppins">{userData.username}</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Metode Pembayaran</span>
                            <span className="text-xs font-poppins">{userBills[0].payment.method}</span>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-xl bg-customLightBlue px-6 py-4 bg-opacity-30 gap-y-2 mt-3">
                        <h1 className="text-xs font-poppins font-semibold">Bukti</h1>
                        <div className="flex gap-x-2 items-center">
                            <img src={logoFile} className="w-5" />
                            <Link to={`${userBills[0].payment.proof}`}>
                                <span className="text-xs font-poppins text-customBlue">bukti.jpg</span>
                            </Link>
                        </div>
                    </div>
                    <Link to='/'>
                        <button
                            className={`mt-2 w-full font-poppins bg-customBlue text-sm text-white font-semibold py-1 px-4 rounded-xl`}
                            type="button"
                        >
                            Kembali
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default HistoryPembayaran;