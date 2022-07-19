import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  React from 'react';
import { Grid, Typography } from '@material-ui/core';

function WeatherPage() {
    const dispatch = useDispatch();
    const weather = useSelector(store => store.weather)
    const vegetables = useSelector(store => store.vegetables)

    const [hook, setHook] = useState(null)

    const getWeather = () => {
        dispatch( { type: 'GET_WEATHER'});
        dispatch( { type: 'GET_VEGETABLES'});
    }
    useEffect(() =>{
        getWeather();
    }, []);

    return (
        <div>
            {/*ternary operator to make sure all dispatches are complete before showing page */}
            {weather.length === 0 ? (  
                <p>loading..</p>
            ) : (
                <div>
                    <div className="weather">
                        <p>Minneapolis</p>
                        <img className="icon" src={weather.properties.periods[0].icon} />{/*this displays the current weather icon from api*/}
                        <p>{weather.properties.periods[0].shortForecast}</p>{/*this displays the shortForecast from api*/}
                        <p>Temp:{weather.properties.periods[0].temperature}°</p>{/*this displays the "current temp" from api*/}
                        {/* <p>{vegetables.veg_name}</p> */}
                    </div>
                    <div className="vegetables">
                        {vegetables.map(veggies => {
                            {/*mapping through the vegetables db info from vegetables table*/ }
                            return (
                                <div className="veggies" key={veggies.id}>
                                    <p>{veggies.veg_name}</p>{/*this displays vegetables names from db table*/}
                                    <img src={veggies.images} alt={veggies.veg_name} />{/*this displays vegetables images from db table*/}
                                    <p>{veggies.water_needs}</p>{/*this displays vegetables water needs from cd table*/}
                                    <button onClick={setHook}>Add to Garden</button>
                                </div>
                            )
                        })}
                    </div>
            
                </div>
    )}       
    </div>
    );
}

export default WeatherPage;