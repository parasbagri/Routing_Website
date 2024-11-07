import Footer from "./components/Footer/Footer.component";
import Header from "./components/Hearder/Header.component";
import { Outlet } from "react-router-dom";

 const Layout = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
 }

 export default Layout;