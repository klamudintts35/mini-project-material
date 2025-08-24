import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import './WeatherApp.css'
export default function WeatherApp({}) {
    
    const [weatherinfo, setWeatherinfo] = useState({
        city: 'delhi',
        feelsLike: 30.11,
        temp: 29.74,
        temMin: 29.74,
        temMax: 29.74,
        humidity: 46,
        weather: "overcast cloud",
    });

    let updateInfo = (newInfo) => {
        setWeatherinfo(newInfo);
    }
    return(
        <div className="weatherapp">
            <h1>Weather App</h1>
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}