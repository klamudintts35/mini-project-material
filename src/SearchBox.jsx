import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox( {updateInfo} ) {
    const [city, setCity]= useState("");
    const [errer, setErrer] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "6e6cefebbb28d1416915eb3cb4f02640";
    const getWeatherAppInfo =async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                temMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
        console.log(result);
        return result;
        } catch(errer) {
            throw errer;
        }   
    }



    let handleChange = (event)=> {
         setCity(event.target.value);
    }
    let handleSubmit =async (event) => {
        event.preventDefault();
        setErrer(false);
        try {
            
            console.log(city);
            setCity("");
            let newInfo = await getWeatherAppInfo();
            updateInfo(newInfo);
        } catch(errer) {
            setErrer(true);
        }
    }
    return(
        <div className='searchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
            <Button variant="contained" type='submit'>Submit</Button>
            {errer && <p style={{color: 'red'}}>No such place exists</p>}
        </form>
        </div>
    )
}