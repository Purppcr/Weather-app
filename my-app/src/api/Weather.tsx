const baseUrl = 'http://api.weatherapi.com/v1';

export const fetchWeatherCurrentData = async (location: any) => {
    let url = `${baseUrl}/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}q=${location}&aqi=no`;
    const response = await fetch(url);

    return await response.json();
};

export const fetchWeatherForecastData = async (location: any) => {
    let url = `${baseUrl}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}q=${location}&days=14&aqi=no&alerts=no`;
    const response = await fetch(url);

    return await response.json();
};
