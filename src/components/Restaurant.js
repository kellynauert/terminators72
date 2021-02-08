import React, { useState } from 'react';
const baseURL = "https://developers.zomato.com/api/v2.1/geocode?lat=39.8262272&lon=-85.99306240000001"
const key = '378be6926050abd5c5f2f71ac98e54ae'

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState([])
    
    function fetchResults() {
        //let url= `${baseURL}?api-key=${key}`;
        fetch("https://developers.zomato.com/api/v2.1/geocode?lat=39.8262272&lon=-85.99306240000001"),
        {
             method: "GET",
             headers: new Headers({
                 'Content-Type': 'application/json',
                 
             })
         }
        .then(res => res.json())
        .then(json => {
            setRestaurant(json.RestaurantL3);
            console.log(json.RestaurantL3);
        })
    }

    return (
        <div>
            <p>{restaurant}</p>
            <button onClick = {fetchResults}>Click for food</button>
        </div>
    );
}

export default Restaurant;