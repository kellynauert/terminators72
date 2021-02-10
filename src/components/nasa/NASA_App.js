import React, { useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = "12KscdAAboVFQGYVKtN1pKgV6XunBfMIqdbn52UR";

const NASA_App = (props) => {

  const lon = props.sessionLongitude;
  const lat = props.sessionLatitude;
  const date = "2019-02-07";

  return (
    <div className="main">
      <div className="mainDiv">
          <h4>Crappy NASA Aerial Photo:</h4>
      </div>
      <div>
        <img
          src={`${baseURL}?lon=${lon}&lat=${lat}&date=${date}&api_key=${key}`}
        />
      </div>
    </div>
  );
};

export default NASA_App;
