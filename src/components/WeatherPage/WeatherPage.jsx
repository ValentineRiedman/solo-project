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
            {/* <h2>WeatherPage</h2> */}
            {/* <p>Props: { JSON.stringify( weather.properties.periods[0] ) }</p> */}
            <div className="weather">
                <p>Minneapolis</p>
            <img className="icon" src={weather.properties.periods[0].icon}/>{/*this displays the current weather icon from api*/}
            <p>{weather.properties.periods[0].shortForecast}</p>{/*this displays the shortForecast from api*/}
            <p>Temp:{weather.properties.periods[0].temperature}°</p>{/*this displays the current temp from api*/}
            </div>
            <br/>
        </div>
    );
}

export default WeatherPage;