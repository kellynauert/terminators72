import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import Jobs from './components/jobs/Jobs';

function App() {
	const [sessionLatitude, setSessionLatitude] = useState('');
	const [sessionLongitude, setSessionLongitude] = useState('');

	const updatePosition = (newPosition) => {
		localStorage.setItem('Latitude', newPosition.coords.latitude);
		setSessionLatitude(newPosition.coords.latitude);

		localStorage.setItem('Longitude', newPosition.coords.longitude);
		setSessionLongitude(newPosition.coords.longitude);
	};

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

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(updatePosition);
		} else {
			alert('Geolocation is not supported by this browser.');
		}
	}

	return (
		<div className='App'>
			<Button onClick={getLocation}>Click</Button>
			<Container>
				<Row>
					<Jobs latitude={sessionLatitude} longitude={sessionLongitude} />{' '}
				</Row>
			</Container>
		</div>
	);
}

export default App;
