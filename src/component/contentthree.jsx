import React,{useEffect} from "react";
import { Link } from "react-router-dom";

function Contentthree(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
        return(
            <>
            {/* Banner Start */}
  <div className="container-fluid banner mb-5">
    <div className="container">
      <div className="row gx-0">
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
          <div className="bg-primary d-flex flex-column p-5" style={{"height":"300px"}}>
            <h3 className="text-white mb-3">Opening Hours</h3>
            <div className="d-flex justify-content-between text-white mb-3">
              <h6 className="text-white mb-0">Mon - Fri</h6>
              <p className="mb-0"> 10:00am - 8:00pm</p>
            </div>
            <div className="d-flex justify-content-between text-white mb-3">
              <h6 className="text-white mb-0">Saturday</h6>
              <p className="mb-0"> 10:00am - 8:00pm</p>
            </div>
            <div className="d-flex justify-content-between text-white mb-3">
              <h6 className="text-white mb-0">Sunday</h6>
              <p className="mb-0"> 10:00am - 8:00pm</p>
            </div>
            <Link className="btn btn-light py-2 px-4 ms-3" to="/appointment">Appointment</Link>
          </div>
        </div>
       
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
          <div className="bg-secondary d-flex flex-column p-5" style={{"height":"300px"}}>
            <h3 className="text-white mb-3">Make Appointment</h3>
            <p className="text-white">Embrace holistic healing through accupuncture, naturopathy, and accupressure to align energy, nurture vitality, and unlock wellness.</p>
            <h2 className="text-white mb-0">+91 8925168697</h2>
          </div>
        </div>

        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div className="bg-dark d-flex flex-column p-5" style={{"height":"300px"}}>
            <h3 className="text-white mb-3">Contact Info</h3>
            <p className="text-white">No.29, vaithiyanathapuram , Ellis Nagar, s s colony, Madurai Tamil Nadu

Madurai Tamil Nadu
India - 625016</p>
            <p className="text-white">stapas2010@gmail.com</p>
            <h2 className="text-white mb-0">+91 8925168697</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner End */}
            </>
        )

}

export default Contentthree;