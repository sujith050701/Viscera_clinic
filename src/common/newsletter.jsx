import React from "react";

function News(){
    return(
        <>
          {/* Newsletter Start */}
  <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{"z-index":"1"}}>
    <div className="container">
      <div className="bg-primary p-5">
        <form className="mx-auto" style={{"max-width":"600px"}}>
          <div className="input-group">
            <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
            <button className="btn btn-dark px-4">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Newsletter End */}
        </>
    )
}

export default News;