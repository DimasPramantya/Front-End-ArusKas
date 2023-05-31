import Navbar from "../components/navbar";
import logoUpload from "../assets/upload.png"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const Pembayaran = () => {
    const { authMemberLogin, API_URL, setUserData, userData} = useContext(GlobalContext);
    const [userBills, setUserBills] = useState({
        id: "",
        name: "",
        price: 0,
        payment:{
            id: "",
            status: "",
            method: "",
            proof: "",
            createdAt: "",
            updatedAt: ""
        }
    });
    const [payment, setPayment] = useState({
        accName: "",
        method: "",
        image: null
    });
    const handleChange = (event)=>{
        if(event.target.name == "image"){
            setPayment({
                ...payment,
                [event.target.name]: event.target.files[0]
            })
        }else{
            setPayment({
                ...payment,
                [event.target.name]: event.target.value
            })
        }
    }
    const handleSubmit = async(event)=>{
        event.preventDefault();
        //set loader to true
        try {
            const {accName, method, image} = payment;
            const response = await axios.put(`${API_URL}/pay-bill/${billId}`, {accName, method, image}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }, 
            })  
        } catch (error) {
            console.log(error);
        } finally{
            //set loader false
        }
    }
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const{billId} = useParams();
    useEffect(()=>{
        authMemberLogin(role);
        const fetchData = async()=>{
            try {
                const response = await axios.get(`${API_URL}/pay-bill/${billId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const {username, currentBill, userDivision} = response.data;
                setUserData({
                    username, 
                    division: userDivision
                });
                setUserBills({...currentBill[0]});
                console.log(userDivision);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])
    return (
        <>
            <Navbar />
            <main className="flex justify-center w-full mt-10 bg-customGray">
                <div className="rounded-xl bg-white w-1/3 flex flex-col  p-9 gap-y-5">
                    <div className="mx-auto font-poppins text-xl font-semibold text-customLightBlue">
                        Pembayaran
                    </div>
                    <form className="gap-y-5 flex flex-col" onSubmit={handleSubmit}>
                        <div className="flex justify-between w-full">
                            <div className="font-poppins font-semibold text-xs">
                                Nama Pembayaran
                            </div>
                            <div className="font-poppins text-xs">
                                {userBills.name}
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <div className="font-poppins font-semibold text-xs">
                                Atas Nama
                            </div>
                            <div>
                                <input className="appearance-none text-xs border-none placeholder:text-xs bg-customGray rounded w-full py-2 px-3 font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Nama Akun Rekening" name="accName" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <div className="font-poppins font-semibold text-xs">
                                Pilih metode pembayaran
                            </div>
                            <div className="relative appearance-none">
                                <select
                                    className="block appearance-none selection:text-xs text-xs w-full bg-customGray border-none font-poppins text-customDarkerBlue py-2 px-3 pr-8 rounded leading-tight"
                                    id="PaymentMethod" name="method" onChange={handleChange}
                                >
                                    <option className="bg-white text-customDarkerBlue" value=""></option>
                                    <option className="bg-white text-customDarkerBlue" value="BCA">BCA</option>
                                    <option className="bg-white text-customDarkerBlue" value="GOPAY">GOPAY</option>
                                    <option className="bg-white text-customDarkerBlue" value="DANA">DANA</option>
                                    <option className="bg-white text-customDarkerBlue" value="SHOPEEPAY">GOPAY</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full p-3 bg-customLightBlue flex justify-between rounded-lg">
                            <div className="font-poppins font-semibold text-sm text-white">Total</div>
                            <div className="font-poppins font-semibold text-sm text-white">Rp {userBills.price}</div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="font-poppins font-semibold text-xs">
                                Bukti Pembayaran
                            </div>
                            <div>
                                <input type="file" accept="image/*" id="files" class="hidden" name="image" onChange={handleChange}/>
                                <label for="files" style={{
                                    backgroundImage: `url(${logoUpload})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "left center",
                                    borderLeft: "10px solid transparent",
                                    borderRight: "5px solid transparent",
                                    backgroundSize: "auto"
                                }} className="pl-6 appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline text-opacity-80">Upload Bukti Pembayaran</label>
                            </div>
                        </div>
                        <div className="w-full my-2">
                                <button
                                    className={`w-full font-poppins bg-customBlue text-xs text-white font-semibold py-2 px-4 rounded-lg `}
                                    type="submit"
                                >
                                    Tambahkan
                                </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Pembayaran;