import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./about";
import Service from "./service";
import Appointment from "./appointment";
import Home from "./home";

import Product from "./product";
import HospitalBranches from "./branch";
import ContactPage from "./contact";
import Topbar from "../common/topbar";  
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import News from "../common/newsletter";
import Doctor from "./doctors";

function Main() {
    return (
        <Router>
            <div className="app-container">
                <Topbar/>
                <Navbar/>
                
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/doctors" element={<Doctor />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/branch" element={<HospitalBranches />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <News/>
                <Footer/>
            </div>
        </Router>
    );
}

export default Main;
