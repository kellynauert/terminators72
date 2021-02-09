import './App.css';
import React, { useEffect, useState } from 'react';
import { Row, Container } from 'reactstrap';
import Jobs from './components/jobs/Jobs';
import Restaurants from "./components/restaurant/Restaurants";

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
  }, []); 
  //dont need this since its in the hook and saving it again below in local storage

	const updatePosition = (newPosition) => {
	localStorage.setItem('Latitude', newPosition.coords.latitude); //saving it to local here
		setSessionLatitude(newPosition.coords.latitude); //setting up here

	localStorage.setItem('Longitude', newPosition.coords.longitude); //saving it to local here
		setSessionLongitude(newPosition.coords.longitude); //setting up hook here
	};
  
	useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updatePosition);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  function displayRestaurants() {
    return sessionLongitude && sessionLatitude ? (
      <Restaurants lat={sessionLatitude} lon={sessionLongitude} /> ): null;
    
  }
  

	return (
		<div className='App'>
			<Container>
				<Row>
					{/* if your component's return is wrapped in <Col sm="auto"></Col> you can plop it next to mine and they should adjust to one another */}
					<Jobs
						sessionLatitude={sessionLatitude}
						sessionLongitude={sessionLongitude}
					/>
          {displayRestaurants()}
				</Row>
			</Container>
		</div>
	);
}

export default App;
