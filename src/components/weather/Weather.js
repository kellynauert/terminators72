import React, { useState, useEffect } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '4b806f50d72b3d5d0d3d33005c40276e';

const Weather = (props) => {
  const [currentCondition, setCurrentCondition] = useState('');
  const [currentTemp, setCurrentTemp] = useState('');
  const [feelsLike, setFeelsLike] = useState(0);
  const [degreeType, setDegreeType] = useState('imperial');
  const [degreesIn, setDegreesIn] = useState('Fahrenheit');

  function fetchWeather() {
    let url = `${baseURL}?lat=${props.lat}&lon=${props.lon}&units=${degreeType}&appid=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCurrentCondition(json.weather[0].description);
        setCurrentTemp(json.main.temp);
        setFeelsLike(json.main.feels_like);
      });
  }

  function buttonText() {
    return degreesIn === 'Fahrenheit' ? (
      <Button onClick={handleToggle}>Click for Centigrade</Button>
    ) : (
      <Button onClick={handleToggle}>Click for Fahrenheit</Button>
    );
  }

  function handleToggle() {
    if (degreeType === 'imperial') {
      setDegreeType('metric');
      setDegreesIn('Centigrade');
    } else {
      setDegreeType('imperial');
      setDegreesIn('Fahrenheit');
    }
  }

  useEffect(() => {
    fetchWeather();
  }, [degreeType]);

  return (
    <>
      <Col sm="auto">
        <Card body className="text-center rounded" inverse color="info">
          <CardTitle tag="h4">Current Weather in Your Area</CardTitle>
          <CardText>
            <hr />
            Current condition are: {currentCondition}
            <hr />
            Current temperature is: {currentTemp} {degreesIn}
            <br />
            Feels like temperature: {feelsLike} {degreesIn}
          </CardText>
          {buttonText()}
        </Card>
      </Col>
    </>
  );
};

export default Weather;
