import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function TrackMain() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" />
                <Route path="/cadastro" />
                <Route path="/home" />
                <Route path="/nova-entrada" />
                <Route path="/nova-saida" />
            </Routes>
        </BrowserRouter>
    )
}