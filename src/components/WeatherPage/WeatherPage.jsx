import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

function WeatherPage(){
    const dispatch = useDispatch();
    const weather = useSelector( store => store.weather)
    const [ hook, setHook ] = useState( null )

    // const getWeather = () => {
    //     dispatch( { type: 'GET_WEATHER'});
    // }
    // useEffect(() =>{
    //     getWeather();
    // }, []);

    return (
        <div>
            <h2>WeatherPage</h2>
            {/* <p>Props: { JSON.stringify( weather.properties.periods[0] ) }</p> */}
            
            <p>{weather.properties.periods[0].shortForecast}</p>
            <img src="https://api.weather.gov/icons/land/night/bkn?size=medium"/>
            <p>Temp:{weather.properties.periods[0].temperature}</p>
        </div>
    );
}

export default WeatherPage;