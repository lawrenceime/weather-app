import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';


import WeatherCard from "../components/WeatherCard";
import { weatherData } from "../types/weatherTypes";

const mockWeatherData: weatherData = {
    name: 'New York',
    main: { temp: 25.3 },
    weather: [{ description: 'clear sky', icon: '01d' }],
  };
  
  describe('WeatherCard Component', () => {
    it('renders the weather data correctly', () => {
      render(<WeatherCard data={mockWeatherData} />);
  
      expect(screen.getByText(/New York/i)).toBeInTheDocument();
      expect(screen.getByText(/25.3°C/i)).toBeInTheDocument();
      expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
  
      const imgElement = screen.getByAltText('Weather Icon');
      expect(imgElement).toHaveAttribute('src', 'https://openweathermap.org/img/wn/01d@2x.png');
    });
  });