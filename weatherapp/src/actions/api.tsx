"use server";

export async function currentWeather(city: string) {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  );
  const data = await response.json();

  return data;
}

export async function forecastWeather(city: string) {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`
  );
  const data = await response.json();
  console.log("MILANKOOO");

  return data;
}
