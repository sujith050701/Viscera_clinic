import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{ "margin-top": "-75px" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-4">
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <Link to="/" className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2" />Home</Link>
                <Link to="/about" className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2" />About Us</Link>
                <Link to="/service" className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2" />Our Services</Link>
                <Link to="/product" className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2" />Our Products</Link>
                <Link to="/contact" className="text-light"><i className="bi bi-arrow-right text-primary me-2" />Contact Us</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2" />No.29, vaithiyanathapuram , Ellis Nagar, s s colony, Madurai Tamil Nadu

Madurai Tamil Nadu
India - 625016</p>
              <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2" />stapas2010@gmail.com</p>
              <p className="mb-0"><i className="bi bi-telephone text-primary me-2" />+91 8925168697</p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex mb-4">
                <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded me-2"><i className="fab fa-twitter fw-normal"></i></a>
                <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded me-2"><i className="fab fa-facebook-f fw-normal"></i></a>
                <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded me-2"><i className="fab fa-linkedin-in fw-normal"></i></a>
                <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded"><i className="fab fa-instagram fw-normal"></i></a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-light py-4" style={{ "background": "#051225" }}>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-12 text-center">
              <p className="mb-md-0">© <a className="text-white border-bottom" href="#">Viscera</a>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
    </>
  )
}

export default Footer;