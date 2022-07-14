import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

function WeatherPage(){
    const dispatch = useDispatch();
    const weather = useSelector( store => store.weather)
    const [ hook, setHook ] = useState( null )

    const getWeather = () => {
        dispatch( { type: 'GET_WEATHER'});
    }
    useEffect(() =>{
        getWeather();
    }, []);

    return (
        <div>
            <h2>WeatherPage</h2>
            <p>Props: { JSON.stringify( weather ) }</p>
        </div>
    );
}

export default WeatherPage;