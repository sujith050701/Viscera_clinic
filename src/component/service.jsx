import React,{useEffect} from "react";



function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        
        <div className="modal fade" id="searchModal" tabIndex={-1}>
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{"background":"rgba(9, 30, 62, .7)"}}>
              <div className="modal-header border-0">
                <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: "600px" }}>
                  <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                  <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Full Screen Search End */}
        
        {/* Service Start */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5 mb-5">
              <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{ minHeight: "400px" }}>
                <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                  <img className="position-absolute w-100 h-100" src="/asset/img/after.jpg" style={{ objectFit: "cover", maxHeight: "400px", transform: "translateY(2cm)" }} alt="Natural clinic treatment" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="section-title mb-5">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
                  <h1 className="display-5 mb-0">We Offer The Best Quality Natural Clinic Services</h1>
                </div>
                <div className="row g-5">
                  <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                    <div className="rounded-top overflow-hidden" style={{ height: "250px" }}>
                      <img className="img-fluid w-100 h-100" src="/asset/img/service-1.jpg" alt="Cosmetic Dentistry" style={{ objectFit: "cover" }} />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Acupuncture</h5>
                    </div>
                  </div>
                  <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                    <div className="rounded-top overflow-hidden" style={{ height: "250px" }}>
                      <img className="img-fluid w-100 h-100" src="/asset/img/service-2.jpg" alt="Dental Implants" style={{ objectFit: "cover" }} />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Acupressure</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-7">
                <div className="row g-5">
                  <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                    <div className="rounded-top overflow-hidden" style={{ height: "250px" }}>
                      <img className="img-fluid w-100 h-100" src="/asset/img/service-3.jpg" alt="Dental Bridges" style={{ objectFit: "cover" }} />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Naturopathy</h5>
                    </div>
                  </div>
                  <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                    <div className="rounded-top overflow-hidden" style={{ height: "250px" }}>
                      <img className="img-fluid w-100 h-100" src="/asset/img/service-4.jpg" alt="Teeth Whitening" style={{ objectFit: "cover" }} />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Reflexology</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                  <h3 className="text-white mb-3">Make Appointment</h3>
                  <p className="text-white mb-3">Top-notch healthcare services for all ages and conditions.</p>
                  <h2 className="text-white mb-0">+91 8925168697</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
      </div>
    </>
  );
}

export default Service;