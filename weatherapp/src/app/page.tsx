"use client";

import { Button } from "../components/Button";
import React, { ChangeEvent } from "react";
import { test } from "../actions/api";

type WeatherCurrent = {
  location: Object;
  current: Object;
};

export default function Home() {
  const [data, setData] = React.useState<WeatherCurrent | null>(null);
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
            onClick={() =>
              test(city).then((dataResponse) => setData(dataResponse))
            }
          >
            Click Me
          </button>
          {/* <Button buttonText="Click Me Right Now !!!!!" test={test} /> */}
        </div>

        <div className="flex flex-col items-center gap-4 p-16">
          <p>{JSON.stringify(data?.location)}</p>
          {/* <p>{JSON.stringify(data?.current)}</p> */}
        </div>
      </div>
    </>
  );
}
