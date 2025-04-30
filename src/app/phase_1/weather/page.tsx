"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState, useEffect } from "react";
import axios from "axios"
import { useDebounce } from 'use-debounce';
import { useCallback } from 'react';

const Weather = () => {
  interface WeatherData {
    name: string;
    weather: { description: string }[];
    main: { temp: number; humidity: number };
  }

  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [debouncedCity] = useDebounce(city, 1000);

  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      if(debouncedCity != '') {
        const response = await axios.get(`/api/phase_1/weather?city=${debouncedCity}`);
        setWeather(response.data);
      }
    } catch (err: unknown) {
      console.log(err);
      setError("City not found or something went wrong.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [debouncedCity]);

  useEffect(() => {
    if (debouncedCity.trim()) fetchWeather();
  }, [debouncedCity, fetchWeather]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `/api/phase_1/weather?lat=${latitude}&lon=${longitude}`
          );
          setWeather(response.data);
        } catch (error) {
          console.error(error);
        }
      },
      (err) => console.error(err)
    );
  }, []);

  return (
    <Card className="w-[350px] mt-4 mx-auto">
      <CardHeader>
        <CardTitle>Weather App</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="city">City</Label>
              <Input 
                id="city" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
              />
              <Button 
                className="mt-5" 
                onClick={(e) => {
                  e.preventDefault();
                  fetchWeather();
                }}
              >
                Search
              </Button>

              {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}

              {weather && (
                <div className="bg-gray-100 rounded p-4 mt-4 shadow">
                  <h2 className="text-xl font-bold">{weather.name}</h2>
                  <p className="capitalize">{weather.weather[0].description}</p>
                  <p>🌡️ {weather.main.temp}°C</p>
                  <p>💧 Humidity: {weather.main.humidity}%</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Weather;
