import AdminNavbar from "../components/adminNavbar";
import logoBack from "../assets/back.png"
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const TambahDana = () => {
    const {userData, setUserData, API_URL} = useContext(GlobalContext);
    const navigate = useNavigate();
    const [pemasukan, setPemasukan] = useState({
        name:"",
        fundSource: "",
        ammount: 0
    });
    const handleChange = (event)=>{
        setPemasukan({
            ...pemasukan,
            [event.target.name]: event.target.value
        })
    }
    const token = localStorage.getItem('token');
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const {name, ammount, fundSource} = pemasukan;
        console.log(ammount);
        try {
            const response = await axios.post(`${API_URL}/admin/create-fund-income`,{name,ammount,fundSource},{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            alert(response.data.message)
        } catch (error) {
            console.log(error);
        }
        navigate('/admin')
    }
    return (
        <>
            <AdminNavbar />
            <div className="bg-white p-6 rounded-xl h-fit w-96 mx-auto my-10">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="pb-3 border-b-2 flex items-center">
                            <img src={logoBack} className="w-5 h-5 mr-12"/>
                            <h1 className="font-poppins text-customLightBlue text-lg font-semibold px-auto text-center">Tambah Pemasukan</h1>
                        </div>
                        <div className="mt-3 flex flex-col gap-y-2">
                            <label className="text-sm font-poppins text-customLightBlue font-semibold">Nama Pemasukan</label>
                            <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                id="namaTagihan" type="text" placeholder="Nama Tagihan" name="name"  onChange={handleChange}/>
                        </div>
                        <div className="mt-3 flex flex-col gap-y-2">
                            <label className="text-sm font-poppins text-customLightBlue font-semibold">Sumber Dana</label>
                            <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                id="namaTagihan" type="text" placeholder="Nama Tagihan" name="fundSource" onChange={handleChange} />
                        </div>
                        <div className="mt-3 flex flex-col gap-y-2">
                            <label className="text-sm font-poppins text-customLightBlue font-semibold">Nominal</label>
                            <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                id="nominalTagihan" type="number" placeholder="Input Nominal" name="ammount" onChange={handleChange} />
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
        </>
    )
}

export default TambahDana;