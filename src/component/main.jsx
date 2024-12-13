import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./about";

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
import Gallery from "./gallery";
import Testimonial from "./testimonial";
import Login from "../user/login";
import AdminLogin from "../admin/adminlogin";
import Dashboard from "../admin/dashboard";
import UserDashboard from "../user/userdashboard";
function Main() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const [token, setToken] = useState("");
      const [userId,setuserId] = useState("");
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
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                    <Route path="/dashboard" element={<Dashboard id={userId} />} />
                    <Route path="/userdashboard" element={<UserDashboard token={token}/>} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <News/>
                <Footer/>
            </div>
        </Router>
    );
}

export default Main;
