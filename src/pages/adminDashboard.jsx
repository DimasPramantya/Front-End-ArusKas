import AdminNavbar from "../components/adminNavbar";
import logoAcc from '../assets/check.png'
import logoFilter from "../assets/Filter.png"
import logoProses from '../assets/warning.png'
import logoTolak from '../assets/declined.png'
import logoEvent from '../assets/event.png'
import logoRiwayat from '../assets/riwayat.png'
import StatusAcc from '../components/statusAcc'
import StatusProcess from '../components/statusProcess'
import StatusTolak from '../components/statusTolak'
import logoUnpaid from '../assets/unpaidLogo.png'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import StatusUnpaid from "../components/statusUnpaid";

const AdminDashboard = () => {
    const [userPaymentData, setUserPaymentData] = useState({});
    const { API_URL, authAdminLogin, userData, setUserData } = useContext(GlobalContext);
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const [newBill, setNewBill] = useState({
        name: "",
        price: 0
    });
    const [cashBalance, setCashBalance] = useState({
        name: "",
        ammount: 0
    });
    const handleChange = (event) => {
        setNewBill({
            ...newBill,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { name, price } = newBill;
            const response = await axios.post(`${API_URL}/admin/create-bill`, { name, price }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const {message} = response.data;
            alert(message)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        authAdminLogin(role)
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/admin/dashboard`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { username, paymentData, currBalance } = response.data;
                setCashBalance({currBalance});
                setUserData({ username });
                setUserPaymentData([...paymentData])
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [handleSubmit])
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
                            <div className="bg-customGray text-sm p-3 pl-1 font-poppins text-customDarkerBlue">Status</div>
                            <div className="bg-customGray text-sm p-3 pl-8 col-span-2 font-poppins text-customDarkerBlue">Nama Anggota</div>
                            <div className="bg-customGray text-sm p-3 font-poppins text-customDarkerBlue">Total</div>
                        </div>
                        {userPaymentData.length > 0 ? (userPaymentData.map(array => (
                            array.userBills.map(payment => (
                                <div className="grid grid-cols-6 border-b-2 items-center">
                                    <div className="p-3 break-words bg-white flex col-span-2 items-center">
                                        
                                        {payment.payment.status === "UNPAID" && (
                                            <img src={logoUnpaid} className='mr-2 w-6 h-6 rounded-full' />
                                        )}
                                        {payment.payment.status === "PROSES" && (
                                            <img src={logoProses} className='mr-2 w-6 h-6' />
                                        )}
                                        {payment.payment.status === "DITOLAK" && (
                                            <img src={logoTolak} className='mr-2 w-6 h-6' />
                                        )}
                                        {payment.payment.status === "BERHASIL" && (
                                            <img src={logoAcc} className='mr-2 w-6 h-6' />
                                        )}
                                        <span className='font-poppins font-semibold text-customDarkerBlue'>
                                            {array.bill.name}
                                        </span>
                                    </div>
                                    <div className="p-3 pl-0 break-words bg-white">
                                        {payment.payment.status === "UNPAID" && (
                                            <StatusUnpaid/>
                                        )}
                                        {payment.payment.status === "PROSES" && (
                                            <StatusProcess />
                                        )}
                                        {payment.payment.status === "DITOLAK" && (
                                            <StatusTolak />
                                        )}
                                        {payment.payment.status === "BERHASIL" && (
                                            <StatusAcc />
                                        )}
                                    </div>
                                    <div className="p-3 break-words pl-8 col-span-2 text-sm bg-white">
                                        {payment.fullName}
                                    </div>
                                    <div className="p-3 break-words text-sm bg-white">
                                        {array.bill.price}
                                    </div>
                                </div>
                            ))
                        ))) : (<div></div>)}
                    </div>
                </div>
                <div className="flex flex-col gap-y-12">
                    <div className="bg-customBlue w-92 py-4 rounded-xl flex justify-center gap-x-6">
                        <div className="rounded-xl bg-white p-3 flex flex-col">
                            <h1 className="text-customBlue font-semibold font-poppins">{cashBalance.name}</h1>
                            <h1 className="text-customDarkerBlue font-semibold font-poppins">{cashBalance.ammount}</h1>
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
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="pb-3 border-b-2">
                                    <h1 className="font-poppins text-customLightBlue text-lg font-semibold">Tambah Tagihan Baru</h1>
                                </div>
                                <div className="mt-3 flex flex-col gap-y-2">
                                    <label className="text-sm font-poppins text-customLightBlue font-semibold">Nama Tagihan</label>
                                    <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                        id="namaTagihan" type="text" placeholder="Nama Tagihan" name="name" onChange={handleChange} />
                                </div>
                                <div className="mt-3 flex flex-col gap-y-2">
                                    <label className="text-sm font-poppins text-customLightBlue font-semibold">Nominal</label>
                                    <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                        id="nominalTagihan" type="number" placeholder="Input Nominal" name="price" onChange={handleChange} />
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