'use client'

import { useState } from 'react'
import WeatherCard from './components/WeatherCard';
import { fetchWeatherData } from './services/weatherApi';
import { weatherData } from './types/weatherTypes';

export default function Home() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<weatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchWeather = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await fetchWeatherData(location) 
      setWeatherData(data)
      console.log(data);
      
    } catch (error) {
      setError('Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 '>

      <h1 className="text-4xl font-bold mb-6 text-white">Weather App</h1>

      
        <input type="text" placeholder='Enter city or zip code' value={location} onChange={(e) => setLocation(e.target.value)} className="p-2 border rounded-lg mb-4 w-64 outline-none"/>
        <button  onClick={handleFetchWeather} className="bg-blue-500 text-white px-4 py-2 rounded-lg">{loading ? 'Loading...' : 'Get Weather'}</button>

    

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}

    </div>
  );
}
