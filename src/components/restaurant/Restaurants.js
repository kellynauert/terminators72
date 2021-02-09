import React, { useEffect, useState } from 'react';
import { Container, Col} from 'reactstrap';
import RestaurantsDisplay from "./RestaurantsDisplay";

const Restaurants = (props) => {
    const lat = localStorage.getItem('Latitude')
    const lon = localStorage.getItem('Longitude')
    const [restaurants, setRestaurants] = useState([]);
   const baseURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`;
	//const baseURL = "https://developers.zomato.com/api/v2.1/geocode?lat=39.8262272&lon=-85.99306240000001"
	console.log(lat, lon)
	
	function fetchResults () {
   // if (!restaurants && lat && lon) {
		fetch(baseURL , { 
			method: 'GET',
			headers: {
				//'user-key': "378be6926050abd5c5f2f71ac98e54ae"
				'user-key' : 'd29e21fa0bcb0a754769d23457e8a27a'
				
			}
		})
		
        .then(res => res.json())
        .then(json => {
			setRestaurants(json.nearby_restaurants);
			console.log(json.nearby_restaurants);
        });
	}


useEffect(() => {
	fetchResults();
}, []);


    function displayCards() {
		// return restaurants.map((results, index) => 
		// <RestaurantsDisplay key= {index} restaurant={results} />)
		
		// if (restaurants) {
			return restaurants.length > 0
				? restaurants.map((restaurant) => {
						return <RestaurantsDisplay restaurant={restaurant} key={restaurant.id} />;
				  })
				: null;
		//}
	}

	return (
		
		<Col sm='auto' className='Restaurant-Section'>
			<h5>
				{restaurants ? `There Are ${restaurants.length} Restaurants Near You` : 'Loading Restaurants'}
			</h5>
			<Container>{displayCards()}</Container>
		</Col>
	);
};

export default Restaurants;