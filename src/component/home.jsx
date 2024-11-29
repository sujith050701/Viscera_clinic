import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import "owl.carousel";

import Contentone from "./contentone";
import ContentTwo from "./contenttwo";
import Contentthree from "./contentthree";
import About from "./about";
import Appointment from "./appointment";
import Service from "./service";
import Doctor from "./doctors";



function Home() {


  return (
    <>
      
      <Contentone />
      <ContentTwo />
      <Contentthree />
      <About />
      <Appointment />
     
      <Doctor />
    

    </>
  );
}


export default Home;