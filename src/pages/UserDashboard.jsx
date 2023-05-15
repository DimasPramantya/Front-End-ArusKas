import ListPembayaran from "../components/listPembayaran";
import Navbar from "../components/navbar";
import Tagihan from "../components/tagihan";

const UserDashboard = ()=>{
    return(
        <>
            <Navbar/>
            <main className="flex">
                <Tagihan/>
                <ListPembayaran/>
            </main>
        </>
    )
}

export default UserDashboard;