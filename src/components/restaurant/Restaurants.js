import React, { useEffect, useState } from 'react';
import { Container, Col} from 'reactstrap';
import RestaurantsDisplay from "./RestaurantsDisplay";

const Restaurants = (props) => {
    const lat = props.sessionLatitude;
    const lon = props.sessionLongitude;
    const [restaurants, setRestaurants] = useState();
    //const baseURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`;
	const baseURL = "https://developers.zomato.com/api/v2.1/geocode?lat=39.8262272&lon=-85.99306240000001"
	//console.log(lat, lon)
	
	function fetchResults () {
    //if (!restaurants && lat && lon) {
		fetch(baseURL , { 
			method: 'GET',
			headers: {
				//'user-key': "378be6926050abd5c5f2f71ac98e54ae"
				'user-key' : 'd29e21fa0bcb0a754769d23457e8a27a'
				
			}
		})
		
        .then(res => res.json())
        .then(json => {
			setRestaurants(json);
			console.log(json.link);
        });
	}


useEffect(() => {
	fetchResults();
}, []);


    function displayCards() {
		if (restaurants) {
			return restaurants.nearby_restaurants.length > 0
				? restaurants.nearby_restaurants.slice(0, 4).map((restaurant) => {
						return <RestaurantsDisplay restaurant={restaurant} key={restaurant.id} />;
				  })
				: null;
		}
	}

	return (
		
		<Col sm='auto' className='Restaurant-Section'>
			<h5>
				{restaurants ? `There Are ${restaurants.nearby_restaurants.length} Restaurants Near You` : 'Loading Jobs'}
			</h5>
			<Container>{displayCards()}</Container>
		</Col>
	);
};

export default Restaurants;