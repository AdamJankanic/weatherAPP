"use client";

import { Button } from "../components/Button";
import React, { ChangeEvent } from "react";
import { currentWeather, forecastWeather } from "../actions/api";
import { WeatherToday } from "@/components/WeatherToday";

type WeatherCurrent = {
  location: {
    name: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_dir: string;
  };
};

type WeatherForecast = {
  location: {
    name: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_dir: string;
  };
  forecast: {
    forecastday: {
      astro: {
        sunrise: string;
        sunset: string;
      };
      day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        uv: number;

        condition: {
          text: string;
          icon: string;
          code: number;
        };
      };
    };
  };
};

export default function Home() {
  const [data, setData] = React.useState<WeatherCurrent | null>(null);
  const [forecast, setForecast] = React.useState<WeatherCurrent | null>(null);
  const [city, setCity] = React.useState("");

  function cityName(e: ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-4 ">
          <input
            className="text-slate-950"
            type="text"
            onChange={(e) => cityName(e)}
          ></input>
          <h1>Today is Tuesday</h1>
          <p>Today is a good day to be alive</p>
          <button
            onClick={() => {
              currentWeather(city).then((dataResponse) =>
                setData(dataResponse)
              );
              forecastWeather(city).then((dataResponse) =>
                console.log(dataResponse)
              );
            }}
          >
            Click Me
          </button>
        </div>
        {data && <WeatherToday data={data} />}
      </div>
    </>
  );
}
