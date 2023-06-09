import AdminNavbar from "../components/adminNavbar";
import LoadingAnimation from "../components/loadingAnimation";
import logoBack from "../assets/back.png"
import logoFile from "../assets/file.png"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

const DetailEvent = () => {
    const navigate = useNavigate();
    const {eventId} = useParams();
    const { API_URL, authAdminLogin, setUserData, isLoading, setIsLoading } = useContext(GlobalContext);
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const [newExpenditure, setNewExpenditure] = useState({ name: "", cashOut: 0, image: null });
    const handleChange = (event) => {
        if (event.target.name === "image") {
            setNewExpenditure({
                ...newExpenditure,
                [event.target.name]: event.target.files[0]
            })
        } else {
            setNewExpenditure({
                ...newExpenditure,
                [event.target.name]: event.target.value
            })
        }
    };
    const [expenditure, setExpenditure] = useState({ name: "", createdAt: "", cashOut: 0, imageUrl: "" });
    const [eventName, setEventName] = useState("")
    const handleSubmit = async(event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const { name, cashOut, image } = newExpenditure;
            const response = await axios.post(`${API_URL}/admin/event/create-expenditure/${eventId}`, {name,cashOut,image}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }, 
            });
            const {message} = response.data;
            alert(message)
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
        navigate(`/admin/event/${eventId}`)
    }
    useEffect(() => {
        authAdminLogin(role);
        const fetchData = async() => {
            try {
                const response = await axios.get(`${API_URL}/admin/event/${eventId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { username, eventExpenditures, eventName } = response.data;
                setUserData({ username });
                setExpenditure([...eventExpenditures]);
                setEventName(eventName);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <AdminNavbar />
            {isLoading && <LoadingAnimation />}
            <main className="mt-12 flex justify-center gap-x-12 font-poppins">
                <div className="bg-white w-5/12 rounded-xl flex flex-col p-5 gap-y-5">
                    <div className="flex">
                        <img src={logoBack} className="w-4" />
                        <h1 className="text-center w-full font-bold text-xl text-customLightBlue">{eventName}</h1>
                    </div>
                    <div className="flex flex-col h-96 overflow-auto">
                        <div className="grid grid-cols-5 py-2 px-5 bg-customGray rounded-lg">
                            <div className="pl-7 text-xs font-poppins col-span-2">
                                Nama
                            </div>
                            <div className="text-xs font-poppins col-span-2">
                                Tanggal dibuat
                            </div>
                            <div className="text-xs font-poppins">
                                Nominal
                            </div>
                        </div>
                        {expenditure.length > 0 ? (expenditure.map(item => (
                            <div className="grid grid-cols-5  border-b-2 p-5 items-center">
                                <div className="flex items-center col-span-2">
                                    <Link to={item.imageUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={logoFile} className="mr-2 w-5" />
                                    </Link>
                                    <span className="text-xs font-poppins font-semibold">{item.name}</span>
                                </div>
                                <div className="text-xs font-poppins col-span-2">
                                    {item.createdAt}
                                </div>
                                <div className="text-xs font-poppins">
                                    {item.cashOut}
                                </div>
                            </div>
                        ))) : (<div></div>)}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl h-fit w-80">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="pb-3 border-b-2">
                                <h1 className="font-poppins text-customLightBlue text-lg font-semibold">Tambah Pengeluaran Baru</h1>
                            </div>
                            <div className="mt-3 flex flex-col gap-y-2">
                                <label className="text-sm font-poppins text-customLightBlue font-semibold">Nama Tagihan</label>
                                <input className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                    id="namaTagihan" type="text" placeholder="Nama Tagihan" name="name" onChange={handleChange} />
                            </div>
                            <div className="mt-3 flex flex-col gap-y-2">
                                <label className="text-sm font-poppins text-customLightBlue font-semibold">Nominal</label>
                                <input onChange={handleChange} className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline"
                                    id="nominalTagihan" type="number" placeholder="Input Nominal" name="cashOut" />
                            </div>
                            <div className="mt-3 flex flex-col gap-y-2">
                                <label className="text-sm font-poppins text-customLightBlue font-semibold">Bukti Pengeluaran</label>
                                <input type="file" accept="image/*" id="files" class="hidden" name="image" onChange={handleChange} />
                                <label for="files" className="appearance-none border-none bg-customGray rounded w-full py-2 px-3 text-xs font-poppins text-customDarkerBlue leading-tight focus:outline-none focus:shadow-outline text-opacity-80">'Select Image</label>
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
            </main>
        </>
    )
}

export default DetailEvent;