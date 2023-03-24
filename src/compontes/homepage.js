import React, { useState } from "react";
import { Button, Col, Container, Row, Dropdown, InputGroup, DropdownButton, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { weatherapi, weatherapi2 } from '../services/fetch';


import ApiKey from "../services/api";

export default function Weatherapp() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [namecard1, setnamecard1] = useState("");
  const [daysoftheweek, setdaysoftheweek] = useState('')
  const [temp, settemp] = useState("")
  const [description, setdescription] = useState("")
  const [description1, setdescription1] = useState("")
  const [description2, setdescription2] = useState("")
  const [description3, setdescription3] = useState("")
  const [description4, setdescription4] = useState("")
  const [tempmax, setempmax] = useState("")
  const [tempmin, setempmin] = useState("")
  const [icon, setIcon] = useState("");
  const [nexticon, setNextIcon] = useState("");
  const [nexticon2, setNextIcon2] = useState("");
  const [nexticon3, setNextIcon3] = useState("");
  const [nexticon4, setNextIcon4] = useState("");
  const [cityname, setCityname] = useState("")
  const [todaystem, settodaystem] = useState("")
  const [time, settime] = useState("")
  const [temp1, tustemp] = useState("")
  const [temp2, wedtemp] = useState("")
  const [temp3, thutemp] = useState("")
  const [temp4, fritemp] = useState("")
  const [favorites, setFavorites] = useState([]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handleClick = async () => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
    try {
      let weatherData = await weatherapi(city, ApiKey);


      let weatherForecast = await weatherapi2(city, ApiKey);




      //monday
      settime(weatherData.timezone)
      settodaystem(weatherData.main.temp)
      setCityname(weatherData.name)
      setempmax(weatherData.main.temp_max);
      setempmin(weatherData.main.temp_min);
      setnamecard1(weatherForecast.city.name);
      settemp(weatherForecast.list[0].main.temp);
      setdescription(weatherForecast.list[0].weather[0].description);

      //Tuesday
      tustemp(weatherForecast.list[8].main.temp)
      setdescription1(weatherForecast.list[8].weather[0].description);

      //Wednesday
      wedtemp(weatherForecast.list[16].main.temp)
      setdescription2(weatherForecast.list[16].weather[0].description);

      //Thursday
      thutemp(weatherForecast.list[24].main.temp)
      setdescription3(weatherForecast.list[24].weather[0].description);

      //Friday
      fritemp(weatherForecast.list[32].main.temp)
      setdescription4(weatherForecast.list[32].weather[0].description);

      // weather icon
      const iconCode = weatherForecast.list[0].weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
      setIcon(iconUrl);

      const nextIconCode = weatherForecast.list[8].weather[0].icon;
      const nextIconUrl = `http://openweathermap.org/img/wn/${nextIconCode}.png`;
      setNextIcon(nextIconUrl);

      const nextIconCode2 = weatherForecast.list[16].weather[0].icon;
      const nextIconUrl2 = `http://openweathermap.org/img/wn/${nextIconCode2}.png`;
      setNextIcon2(nextIconUrl2);

      const nextIconCode3 = weatherForecast.list[24].weather[0].icon;
      const nextIconUrl3 = `http://openweathermap.org/img/wn/${nextIconCode3}.png`;
      setNextIcon3(nextIconUrl3);

      const nextIconCode4 = weatherForecast.list[32].weather[0].icon;
      const nextIconUrl4 = `http://openweathermap.org/img/wn/${nextIconCode4}.png`;
      setNextIcon4(nextIconUrl4);

      addToFavorites();
    } catch (error) {
      console.log(error);
    }
  };
  const Favorites = () => { };

  const addToFavorites = () => {
    setFavorites([...favorites, city]);
  };
  const removeFromFavorites = (cityName) => {
    setFavorites(favorites.filter((city) => city !== cityName));
  };


  const handleSearch = async () => {
    handleClick();
  };

  return (

    <Container>
      <Row>
        <Col>
          <h1 className="titleapp text-center">weather app</h1>

        </Col>
      </Row>
      <Row md={4}>
        <Col><div className="">
          <input
            className="input1"
            type="text"
            id="city"
            name="city"
            placeholder="Enter a city name"
            onChange={handleChange}
            value={city}
          />
        </div>
        </Col>
        <Col xs={4}> <Button onClick={handleSearch}>Get Weather Data</Button>
        </Col>
        <Col><Button onClick={addToFavorites}>Add to favorites</Button></Col>
        < Col><InputGroup>
          <DropdownButton className="dropdown"
            title="Favorite Cities list">
            <ul>
              {favorites.map((favorite, index) => (
                <li key={index}>
                  {favorite}{" "}
                  <Button onClick={() => removeFromFavorites(Favorites)}>Remove</Button>
                </li>
              ))}
            </ul>
          </DropdownButton>
        </InputGroup>
        </Col>
      </Row>
      <Col className="d-flex justify-content-center text-center ">
          <div className="maxtemp1">
          <div  className="day">Todays weather</div>
          <div className=""> City : {cityname}</div>
          <div  className=" "> Temp : {tempmax}</div>
          <div className="" >Time Zone : {time}</div>
          <div>Todays min Temp: {tempmin}</div>
            <div>Todays minx Temp : {tempmin}</div>
            
           </div>
        </Col>


      <Row>
        
        <Col className="">
        <div className="maxtemp">
          <div  className="day d-flex justify-content-end text-center">Monday</div>
          <div className=" text-center"> City : {cityname}</div>
             <div className="text-center">  Temp : {temp}</div>
              <div className="text-center">  <img src={icon} alt="weather icon" /> </div>
              <div className=" text-center"> description :  {description}</div>
              </div> 
        </Col>
          
        <Col className="d-flex justify-content-end text-center">
        <div className="maxtemp">
          <div  className="day">Tuesday</div>
          <div className=""> City : {cityname}</div>
             <div>  Temp : {temp1}</div>
              <div> <img src={nexticon} alt="weather icon" /></div>
              <div> description : {description1}</div>
              </div> 
        </Col>
        <Col className="d-flex justify-content-end text-center">
       
        <div className="maxtemp">
            <div  className="day">  Wednesday </div>
            <div className=" text-center"> City : {cityname}</div>
             <div className=" text-center">  Temp : {temp2}</div>     
             <div className=" text-center"> <img src={nexticon2} alt="weather icon" /></div>
               <div className=" text-center">description : {description2}</div>
              
            </div>
    
        </Col>
        <Col >
        <div className="maxtemp">
         <div  className="day"> Thursday</div>
         <div className=" text-center"> City : {cityname}</div>
              
             <div className=" text-center"> Temp : {temp3}</div> 
              <div className=" text-center">
              <img src={nexticon3} alt="weather icon" />
             </div>
              <div className=" text-center">
              description : {description3}
              </div>
              </div>
        </Col>


        <Col className="d-flex justify-content-end text-center">
        <div className="maxtemp">
             <div  className="day"> Friday</div> 
             <div className=" text-center"> City : {cityname}</div>
               <div> Temp :{temp4}</div> 
              <div><img src={nexticon4} alt="weather icon" /></div>
            <div>description :  {description4}</div>
            </div>
        </Col>
      </Row>

  
    </Container>



  );
}
