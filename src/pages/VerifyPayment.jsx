import Navbar from "../components/navbar";
import logoFile from "../assets/file.png"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import AdminNavbar from "../components/adminNavbar";

const VerifyPayment = () => {
    const {authAdminLogin, API_URL} = useContext(GlobalContext);
    const navigate = useNavigate();
    const [currPayment, setCurrPayment] = useState({});
    const [currBill, setCurrBill] = useState({});
    const role = localStorage.getItem('role')
    const token = localStorage.getItem('token')
    const{paymentId} = useParams();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const status = event.target.elements.status.value;
        try {
            const response = await axios.put(`${API_URL}/admin/verify-payment/${paymentId}`, {status},{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            alert(response.data.message)
        } catch (error) {
            console.log(error);
        }
        navigate("/admin")
    }
    useEffect(()=>{
        authAdminLogin(role);
        const fetchData = async()=>{
            const response = await axios.get(`${API_URL}/admin/get-payment/${paymentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            setCurrPayment(response.data.currentPayment);
            setCurrBill(response.data.currentBill);
        }
        fetchData();
    },[])
    return (
        <>
            <AdminNavbar/>
            <main className="flex justify-center w-full mt-10 bg-customGray">
                <div className="rounded-xl bg-white w-1/3 flex flex-col p-7 gap-y-2">
                    {currPayment.status == "BERHASIL" && (
                        <h2 className="font-poppins text-lg text-customLightGreen text-center">Pembayaran Terverifikasi</h2>
                    )}
                    {currPayment.status == "PROSES" && (
                        <h2 className="font-poppins text-lg text-customLightYellow text-center">Pembayaran Diproses</h2>
                    )}
                    {currPayment.status == "DITOLAK" && (
                        <h2 className="font-poppins text-lg text-customLightRed text-center">Pembayaran Ditolak</h2>
                    )}
                    <h1 className="font-poppins text-2xl font-semibold text-center">Rp {currBill.price}</h1>
                    {currPayment.status == "BERHASIL" && (
                        <h3 className="font-poppins text-center text-xs">Pembayaran Anda Berhasil</h3>
                    )}
                    {currPayment.status == "PROSES" && (
                        <h3 className="font-poppins text-center text-xs">Pembayaran Anda Diproses</h3>
                    )}
                    {currPayment.status == "DITOLAK" && (
                        <h3 className="font-poppins text-center text-xs">Pembayaran Anda Ditolak</h3>
                    )}
                    <div className="flex flex-col rounded-xl bg-customLightBlue px-6 py-4 bg-opacity-30 gap-y-3 mt-3">
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Nama Transaksi</span>
                            <span className="text-xs font-poppins">{currBill.name}</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Waktu</span>
                            <span className="text-xs font-poppins">{currBill.updatedAt}</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Atas Nama</span>
                            <span className="text-xs font-poppins">{currPayment.accName}</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="text-xs font-poppins font-semibold">Metode Pembayaran</span>
                            <span className="text-xs font-poppins">{currPayment.method}</span>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-xl bg-customLightBlue px-6 py-4 bg-opacity-30 gap-y-2 mt-3">
                        <h1 className="text-xs font-poppins font-semibold">Bukti</h1>
                        <div className="flex gap-x-2 items-center">
                            <img src={logoFile} className="w-5" />
                            <Link to={`${currPayment.proof}`} target="_blank" rel="noopener noreferrer">
                                <span className="text-xs font-poppins text-customBlue">bukti.jpg</span>
                            </Link>
                        </div>
                    </div>
                    {currPayment.status == "PROSES" && (
                        <div className="flex mt-3 gap-x-3">
                            <form className="w-1/2" onSubmit={handleSubmit}>
                                <input type="hidden" name="status" value="BERHASIL"/>
                                <button className="w-full bg-customVeryLightGreen py-2 rounded-xl text-customLightGreen font-poppins text-sm font-bold" type="submit">Terima</button>
                            </form>
                            <form className="w-1/2" onSubmit={handleSubmit}>
                                <input type="hidden" name="status" value="DITOLAK"/>
                                <button className="w-full bg-customVeryLightRed py-2 rounded-xl text-customLightRed font-poppins text-sm font-bold" type="submit">Tolak</button>
                            </form>
                        </div>
                    )}
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

export default VerifyPayment;