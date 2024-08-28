import React from 'react'
import { weatherData } from '../types/weatherTypes'

interface weatherCardProps {
    data : weatherData
}

const WeatherCard:React.FC<weatherCardProps> = ({data}) => {
    const {main , weather , name} = data
  return (
    <div className=" p-6 rounded-lg shadow-lg text-center mt-[24px] min-w-[20%]">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-3xl mb-2">{main.temp}°C</p>
        <p className="text-lg mb-2 capitalize">{weather[0].description}</p>
        <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto"
      />
    </div>
  )
}

export default WeatherCard