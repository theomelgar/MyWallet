import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export default function TrackMain() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" />
                <Route path="/home" />
                <Route path="/nova-entrada" />
                <Route path="/nova-saida" />
            </Routes>
        </BrowserRouter>
    )
}