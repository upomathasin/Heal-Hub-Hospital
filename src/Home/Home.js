import React from "react";
import TopBannar from "../TopBannar/TopBannar";
import Steps from "../Steps/Steps";
import Footer from "../Footer/Footer";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";

export default function () {
  return (
    <div>
      <TopBannar></TopBannar>
      <Services></Services>
      <Doctors></Doctors>
      <Steps></Steps>
      <Footer></Footer>
    </div>
  );
}
