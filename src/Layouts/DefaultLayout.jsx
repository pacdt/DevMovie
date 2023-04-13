import { Outlet } from "react-router-dom";
import Header from "../components/Header/Index.jsx";

export default function DefaultLayout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}