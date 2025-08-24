import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
    let Image_url = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80";
    const HOT_URL = "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80";
    const COLD_URL = "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80";
    const RAIN_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
    return (
        <div className="infoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}{
                        info.humidity > 80 
                        ? <ThunderstormIcon />
                        : info.temp > 15 
                        ? <WbSunnyIcon /> 
                        : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>
                            <p>Temperature: {info.temp}&deg;C </p>
                            <p>humidity: {info.humidity}</p>
                            <p>Min temp: {info.temMin}&deg;C</p>
                            <p>Max temp: {info.temMax}&deg;C</p>
                            <p>The Weather can be described as <i>{info.weather}</i> and feels like: {info.feelsLike}&deg;C</p>
                            

                        </div>
                        </Typography>
                    </CardContent>
                
                </Card>
            </div>
            
        </div>
    )
}

  