import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LogIn from "./pages/log-in/LogIn";
import Header from "./components/header/Header";
import DetailsProduct from "./pages/details-product/DetailsProduct";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="product/:id" element={<DetailsProduct />} />
                <Route path="/" element={<Auth />}>
                    <Route path="admin" element={<Admin />} />
                </Route>
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
