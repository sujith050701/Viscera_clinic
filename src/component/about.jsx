import React,{useEffect} from "react";


import { useLocation, Link } from "react-router-dom";
import AboutHead from "./heading/abouthead";
import Service from "./service";

function About() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const textColorStyle = { color: "#333" }; 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={textColorStyle}>
        {!isHomePage && <AboutHead />}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                  <h1 className="mb-0">Your Trusted Holistic Wellness Center</h1>
                </div>
                <h4 className="text-body mb-4">
                  Where ancient wisdom meets modern expertise for your wellness journey.
                </h4>
                <p className="mb-4">
                  At Viscera Naturals Clinic, we use the latest technology to provide the most advanced treatments and procedures to our patients. Our facilities are equipped with state-of-the-art equipment and our team of experts are trained in the most cutting-edge techniques.
                </p>
                <div className="row g-3">
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Award Winning</h5>
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Professional Staff</h5>
                  </div>
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />24/7 Opened</h5>
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Fair Prices</h5>
                  </div>
                </div>
                <Link 
                  to="/appointment" 
                  className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" 
                  data-wow-delay="0.6s"
                >
                  Make Appointment
                </Link>
              </div>
              <div className="col-lg-5" style={{ minHeight: "500px" }}>
                <div className="position-relative h-100">
                  <img 
                    className="position-absolute w-100 h-100 rounded wow zoomIn" 
                    data-wow-delay="0.9s" 
                    src="/asset/img/about.jpg" 
                    style={{ objectFit: "cover" }} 
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service/>
    </>
  );
}

export default About;
