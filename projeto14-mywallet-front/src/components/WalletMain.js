import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoProvider } from "../context/info";
import Home from "../pages/Home";
import Income from "../pages/Income";
import Outcome from "../pages/Outcome"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export default function TrackMain() {

    return (
        <BrowserRouter>
            <InfoProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/nova-entrada" element={<Income/>}/>
                    <Route path="/nova-saida" element={<Outcome/>}/>
                </Routes>
            </InfoProvider>
        </BrowserRouter>
    )
}