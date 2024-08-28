import { describe, expect, it, jest } from '@jest/globals';

import { fetchWeatherData } from '../services/weatherApi';
import mockWeatherData from '../mocks/mockWeatherData';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;



describe('fetchWeatherData', () => {
  it('should fetch weather data from the API', async () => {
    // Define the expected data structure
    const data = {
      weather: [{ description: 'clear sky', icon: '01d' }],
      main: { temp: 25 },
      name: 'London',
    };

    // Mock the API response
    mockedAxios.get.mockResolvedValueOnce({ data });

    const location = 'London';
    const result = await fetchWeatherData(location);

    expect(result).toEqual(data);
    expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining('q=London'), {
      params: {
        q: location,
        appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
        units: 'metric',
      },
    });
  });

  it('should return mock data if API call fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API call failed'));

    const location = 'Unknown City';
    const result = await fetchWeatherData(location);

    expect(result).toEqual(mockWeatherData);
  });
});
