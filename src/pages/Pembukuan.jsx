import { Link } from "react-router-dom";
import AdminNavbar from "../components/adminNavbar";
import { useContext, useEffect, useState } from "react";

import DropdownComponent from "../components/dropDownComponent";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import LoadingAnimation from "../components/loadingAnimation";

const Pembukuan = () => {
    const { API_URL, authAdminLogin, isLoading, setIsLoading } = useContext(GlobalContext);
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role")
    const [totalCashIn, setTotalCashIn] = useState(0);
    const [totalCashOut, setTotalCashOut] = useState(0);
    const [currDataState, setCurrDataState] = useState("Pengeluaran");
    const [bills, setBills] = useState({});
    const [events, setEvents] = useState({});
    const [fundIncomes, setFundIncomes] = useState({});
    const [cashBalances, setCashBalances] = useState({});
    const [currData, setCurrData] = useState([]);
    const handleChange = (event)=>{
        setCurrDataState(event.target.value);
    }
    useEffect(() => {  
        setIsLoading(true);
        authAdminLogin(role);
        try {
            const fetchData = async () => {
                const response = await axios.get(`${API_URL}/admin/get-all-cash-data`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTotalCashIn(response.data.totalCashIn);
                setTotalCashOut(response.data.totalCashOut);
                setBills(response.data.bills);
                setFundIncomes(response.data.fundIncomes);
                setEvents(response.data.events);
                setCashBalances(response.data.cashBalances);
                console.log(response.data.events);
                console.log(cashBalances);
                if (currDataState === "Pengeluaran") {
                    await setCurrData([...events]);
                } else {
                    await setCurrData([...bills, ...fundIncomes]);
                }
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [currDataState])
    useEffect(() => {
        console.log(currData);
    }, [currDataState])
    if (isLoading) {
        return (
            <LoadingAnimation />
        )
    }
    return (
        <>
            <AdminNavbar />
            <main className="mt-12 flex justify-center gap-x-12 font-poppins">
                <div className="bg-white w-1/3 rounded-xl flex flex-col p-5 gap-y-5">
                    <div className="flex justify-between px-3">
                        <h1 className="w-full font-bold text-lg text-customLightBlue">Periode 2022 - 2023</h1>
                        <div className="w-52">
                            <select
                                className="block selection:text-xs text-xs w-full bg-customBlue border-none font-poppins font-semibold text-white py-2 px-3 pr-8 rounded leading-tight"
                                id="PaymentMethod" name="filter" onChange={handleChange} value={currDataState}
                            >
                                <option className="bg-customBlue text-white" value="Pengeluaran">Pengeluaran</option>
                                <option className="bg-customBlue text-white" value="Pendapatan">Pendapatan</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col h-96 overflow-auto">
                        <div className="grid grid-cols-2 py-2 px-5 bg-customGray rounded-lg">
                            <div className="pl-5 text-xs font-poppins">
                                Event
                            </div>
                            <div className="text-xs font-poppins pl-24">
                                Nominal
                            </div>
                        </div>
                        {currData.map(data=>(
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 border-b-2 p-5 items-center w-full">
                                <div className="text-xs font-poppins font-semibold pl-5">
                                    {data.name}
                                </div>
                                <div className="flex text-xs items-center font-poppins pl-24">
                                    {currDataState==="Pengeluaran"&&(
                                        data.cashOut
                                    )} 
                                    {currDataState==="Pendapatan"&&(
                                        <span>{data.cashIn?(data.cashIn):(data.ammount)}</span>
                                    )}    
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white flex flex-col p-6 rounded-xl h-fit w-80">
                    <h1 className="font-poppins font-semibold text-customLightBlue pb-4 mb-3 border-b-2">Rangkuman</h1>
                    <div className="my-1 flex justify-between">
                        <div className="font-poppins font-semibold text-sm">
                            Kas Awal Periode
                        </div>
                        {cashBalances.length > 0 && (
                            <div className="font-poppins text-sm">
                                Rp{cashBalances[0].ammount}
                            </div>
                        )}
                    </div>
                    <div className="my-1 flex justify-between">
                        <div className="font-poppins font-semibold text-sm">
                            Pemasukan
                        </div>
                        <div className="font-poppins text-sm text-customLightGreen">
                            Rp{totalCashIn}
                        </div>
                    </div>
                    <div className="my-1 flex justify-between">
                        <div className="font-poppins font-semibold text-sm">
                            Pengeluaran
                        </div>
                        <div className="font-poppins text-sm text-customLightRed">
                            Rp{totalCashOut}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3 text-center rounded-xl p-3 bg-customBlue">
                        <div className="font-poppins text-white text-sm">
                            Kas Akhir Periode
                        </div>
                        {cashBalances.length > 1 && (
                            <div className="font-poppins text-white font-semibold text-sm">
                                Rp{cashBalances[1].ammount}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}
export default Pembukuan;