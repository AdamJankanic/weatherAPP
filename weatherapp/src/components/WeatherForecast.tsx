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
