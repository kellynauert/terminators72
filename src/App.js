//import logo from './logo.svg';
import './App.css';
//import Location from './components/Location'
import Restaurant from './components/Restaurant';
import React, { useState, useEffect } from 'react';

function App() {
	const [sessionLatitude, setSessionLatitude] = useState('');
	const [sessionLongitude, setSessionLongitude] = useState('');
	useEffect(() => {
		if (localStorage.getItem('Latitude')) {
			setSessionLatitude(localStorage.getItem('Latitude'));
		}
	});
	useEffect(() => {
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
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(updatePosition);
		} else {
			alert('Geolocation is not supported by this browser.');
		}
	}

  return (
    <div>
      Does this work
     <Restaurant />
    </div>
  );
}

export default App;
