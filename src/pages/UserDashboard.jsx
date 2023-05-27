import { useContext, useEffect } from "react";
import Navbar from "../components/navbar";
import { GlobalContext } from "../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logoAcc from '../assets/check.png'
import logoFilter from "../assets/Filter.png"
import logoProses from '../assets/warning.png'
import logoTolak from '../assets/declined.png'
import StatusAcc from "../components/statusAcc";
import StatusTolak from "../components/statusTolak";
import StatusProcess from "../components/statusProcess";

const UserDashboard = () => {
    const { authMemberLogin, API_URL, setUserData, setUserBills, userBills, tagihan, setTagihan, historyPembayaran, setHistoryPembayaran } = useContext(GlobalContext);
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    useEffect(() => {
        authMemberLogin(role);
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = response.data;
                setUserData({
                    username: data.username,
                    division: data.division
                });
                await setUserBills([...response.data.bills]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        console.log(userBills);
        let tempTagihan = [];
        let tempHistoryPembayaran = [];
        for (let i = 0; i < userBills.length; i++) {
            if (userBills[i].payment.status === "UNPAID") {
                tempTagihan.push(userBills[i])

            } else if(userBills[i].payment.status !== "UNPAID"){
                tempHistoryPembayaran.push(userBills[i])
            }
        }
        setTagihan([...tempTagihan]);
        setHistoryPembayaran([...tempHistoryPembayaran]);
        console.log(tempTagihan, tempHistoryPembayaran);
    }, [userBills]);
    if (!token) {
        return null;
    }
    return (
        <>
            <Navbar />
            <main className="flex">
                <div className="w-1/5 bg-white h-125 rounded-lg ml-32 mt-10 flex flex-col px-6 overflow-auto">
                    <div className="font-poppins text-customLightBlue font-semibold text-2xl border-b-2 py-4">
                        Tagihan
                    </div>
                    {tagihan.length > 0 ? (
                        tagihan.map((item) => (
                            <div className="flex items-center border-b-2 py-4 justify-between" key={item.id}>
                                <div className="flex flex-col px-2">
                                    <div className="font-poppins font-bold text-sm">{item.name}</div>
                                    <div className="font-poppins text-xs">{item.price}</div>
                                </div>
                                <div className="pr-2">
                                    <Link to={`/pembayaran/${item.id}`}>
                                        <button
                                            className={`w-full font-poppins bg-customBlue text-white font-semibold py-2 px-5 rounded-xl text-xs`}
                                            type="submit"
                                        >
                                            Bayar
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='w-3/5 h-125 bg-white rounded-xl py-10 mt-10 ml-16'>
                    <div className='flex w-5/6 justify-between items-center mx-20 mb-6'>
                        <div className='font-poppins text-customLightBlue text-2xl font-semibold '>
                            Riwayat Pembayaran
                        </div>
                        <div className='bg-customBlue w-40 px-5 py-3 flex justify-between rounded-xl'>
                            <span className='text-xs font-poppins text-white font-semibold'>Filter Status</span>
                            <img src={logoFilter} className='w-4 filter brightness-0 invert' />
                        </div>
                    </div>
                    <div className="flex flex-col w-5/6 h-96 overflow-auto mx-20">
                        <div className="grid grid-cols-6 items-center">
                            <div className="bg-customGray text-sm p-3 col-span-2"><span className='pl-8 font-poppins text-customDarkerBlue '>Nama Transaksi</span></div>
                            <div className="bg-customGray text-sm p-3 pl-0 font-poppins text-customDarkerBlue">Status</div>
                            <div className="bg-customGray text-sm p-3 pl-8 col-span-2 font-poppins text-customDarkerBlue">Waktu Transaksi</div>
                            <div className="bg-customGray text-sm p-3 font-poppins text-customDarkerBlue">Total</div>
                        </div>
                        {historyPembayaran.length > 0 ? (historyPembayaran.map(item => (
                            <div className="grid grid-cols-6 border-b-2 items-center">
                                <div className="p-3 break-words bg-white flex col-span-2 items-center">
                                {item.payment.status === "BERHASIL" && (
                                    <img src={logoAcc} className='mr-2 w-6 h-6' />
                                )}
                                {item.payment.status === "PROSES" && (
                                    <img src={logoProses} className='mr-2 w-6 h-6' />
                                )}
                                {item.payment.status === "DITOLAK" && (
                                    <img src={logoTolak} className='mr-2 w-6 h-6' />
                                )}
                                <Link to={`/historyPembayaran/${item.id}`}>                               
                                    <span className='font-poppins font-semibold text-customDarkerBlue'>Kas Januari 2023</span>
                                </Link>
                                </div>
                                {item.payment.status === "BERHASIL" && (
                                    <StatusAcc/>
                                )}
                                {item.payment.status === "PROSES" && (
                                    <StatusProcess/>
                                )}
                                {item.payment.status === "DITOLAK" && (
                                    <StatusTolak/>
                                )}
                                <div className="p-3 text-sm break-words pl-8 col-span-2 bg-white">{item.payment.createdAt}</div>
                                <div className="p-3 text-sm break-words bg-white">Rp {item.price}</div>
                            </div>
                        )
                    )) : (<div></div>)}
                    </div>
                </div>
            </main>
        </>
    )
}

export default UserDashboard;