import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export default function TrackMain() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<SignUp/>}/>
                <Route path="/home" element={</>} />
                <Route path="/nova-entrada" />
                <Route path="/nova-saida" />
            </Routes>
        </BrowserRouter>
    )
}