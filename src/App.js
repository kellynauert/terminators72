import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, Row, Container } from 'reactstrap';
import Jobs from './components/jobs/Jobs';

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

	useEffect(() => {
		if (navigator.geolocation) {
			console.log('Heu');
			navigator.geolocation.getCurrentPosition(updatePosition);
		} else {
			alert('Geolocation is not supported by this browser.');
		}
	});
	return (
		<div className='App'>
			<p>
				{sessionLongitude} + {sessionLatitude}
			</p>
			<Container>
				<Row>
					<Jobs
						sessionLatitude={sessionLatitude}
						sessionLongitude={sessionLongitude}
					/>
				</Row>
			</Container>
		</div>
	);
}

export default App;
