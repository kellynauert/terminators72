import React, { useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = "12KscdAAboVFQGYVKtN1pKgV6XunBfMIqdbn52UR";

const NASA_App = () => {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [date, setDate] = useState("");

  const fetchResults = () => {
    let url = `${baseURL}?lon=${lon}&lat=${lat}&date=${date}&api_key=${key}`;

    fetch(url)
      .then((res) => res.json())
      // .then((data) => setResults(data.response.docs))
      .catch((err) => console.log(err));
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
