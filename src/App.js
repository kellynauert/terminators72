import './App.css';
import React, { useEffect, useState } from 'react';
import { Row, Container } from 'reactstrap';
import Jobs from './components/jobs/Jobs';
import Weather from './components/weather/Weather';

function App() {
  const [sessionLatitude, setSessionLatitude] = useState('');
  const [sessionLongitude, setSessionLongitude] = useState('');

  useEffect(() => {
    if (localStorage.getItem('Latitude')) {
      setSessionLatitude(localStorage.getItem('Latitude'));
    }
    if (localStorage.getItem('Longitude')) {
      setSessionLongitude(localStorage.getItem('Longitude'));
    }
  });

  const updatePosition = (newPosition) => {
    localStorage.setItem('Latitude', newPosition.coords.latitude);
    setSessionLatitude(newPosition.coords.latitude);

    localStorage.setItem('Longitude', newPosition.coords.longitude);
    setSessionLongitude(newPosition.coords.longitude);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updatePosition);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  });

  function displayWeather() {
    return sessionLatitude && sessionLongitude ? (
      <Weather lat={sessionLatitude} lon={sessionLongitude} />
    ) : null;
  }

  return (
    <div className="App">
      <Container>
        <Row>
          {/* if your component's return is wrapped in <Col sm="auto"></Col> you can plop it next to mine and they should adjust to one another */}
          <Jobs
            sessionLatitude={sessionLatitude}
            sessionLongitude={sessionLongitude}
          />
          {displayWeather()}
        </Row>
      </Container>
    </div>
  );
}

export default App;
