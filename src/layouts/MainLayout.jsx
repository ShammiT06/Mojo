import { Outlet } from "react-router-dom";
import Header from "../Components/Reusable Components/Header";
import Footer from "../Components/Reusable Components/Footer";


function MainLayout(){
    return(<>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer/>
    </>)
}
export default MainLayout