import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

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
			setSessionLatitude(localStorage.getItem('Longitude'));
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
		<div className='App'>
			<h1>Kelly</h1>
			<h3>Kenneth</h3>
			<h1>Ryan's branch</h1>
			<h1>Sarah's branch</h1>
			<Button onClick={getLocation}>Click</Button>
		</div>
	);
}

export default App;
