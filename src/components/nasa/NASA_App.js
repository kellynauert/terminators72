import React, { useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = "12KscdAAboVFQGYVKtN1pKgV6XunBfMIqdbn52UR";

const NASA_App = (props) => {

  // Reenable these when you figure out how to make them work
  // const [lon, setLon] = useState("");
  // const [lat, setLat] = useState("");
  // const [date, setDate] = useState("");

  // Disable these when you done git lurnd reel gud. 
  const lon = props.sessionLongitude;
  const lat = props.sessionLatitude;
  const date = new Date().toISOString().slice(0,10);

  console.log(lon);
  console.log(lat);
  console.log(date);

  const fetchResults = () => {
    let url = `${baseURL}?lon=${lon}&lat=${lat}&date=${date}&api_key=${key}`;

    fetch(url)
      .then((res) => res.json())
      // .then((data) => setResults(data.response.docs))
      .catch((err) => console.log(err,'This may be a bad url or NASA may simply not have an image for this date'));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      fetchResults();
  }

  return (
    <div className="main">
      <div className="mainDiv">
        <form onSubmit={(e) => handleSubmit(e)}>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NASA_App;
