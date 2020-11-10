import React from "react";
import BasePage from "./BasePage";
import AddUser from "../Components/AddUser";

const HomePage = function() {
  return (
    <BasePage>
      <AddUser />
    </BasePage>
  );
}

export default HomePage;