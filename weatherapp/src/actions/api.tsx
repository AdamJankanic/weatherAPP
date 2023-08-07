"use server";

export async function test(city: string) {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  );
  const data = await response.json();
  console.log(data);

  return data;
}
