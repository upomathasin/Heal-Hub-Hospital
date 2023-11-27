import React from "react";
import TopBannar from "../TopBannar/TopBannar";
import Steps from "../Steps/Steps";
import Footer from "../Footer/Footer";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import FeaturedDoctors from "../FeaturedDoctors/FeaturedDoctors";
import AllServices from "../AllServices/AllServices";

export default function () {
  return (
    <div>
      <TopBannar></TopBannar>
      <Services></Services>
      <FeaturedDoctors></FeaturedDoctors>
      <Steps></Steps>
      <Footer></Footer>
    </div>
  );
}
