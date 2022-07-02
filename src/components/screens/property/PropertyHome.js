import React from "react";
import findAHome from "../../../images/find-a-home.svg";
import PropertyMenu from "./PropertyMenu";
import Footer from "../../common/Footer";

const PropertyHome = () => {
  return (
    <div>
      <div className="mt-5">
        <h1
          className="mt-3 mb-5 display-5 text-center"
          style={{ fontWeight: "bolder" }}
        >
          Find your home
        </h1>
      </div>
      <fieldset className="mt-3">
        <legend>
          <PropertyMenu />
        </legend>
        <img src={findAHome} alt="Find A Home" width="100%" />
      </fieldset>
      <Footer />
    </div>
  );
};

export default PropertyHome;
