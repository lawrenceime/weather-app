import axios from 'axios';
import mockWeatherData from '../mocks/mockWeatherData';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
console.log("API Key:", API_KEY);

export const fetchWeatherData = async(location:string) => {
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params : {
                q : location,
                appid : API_KEY,
                units : 'metric',
            }
        })
        console.log("Request URL:", `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);

        const details = response.data
        console.log(details)
        return details;
    
        
    } catch (error) {
        console.error('API call failed , using mock data' , error)
        return mockWeatherData
    }
}

