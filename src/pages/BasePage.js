import React from "react";
import Navbar from "../Components/Navbar";

const BasePage = function({children}){
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default BasePage;