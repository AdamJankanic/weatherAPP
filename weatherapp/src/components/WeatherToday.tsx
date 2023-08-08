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

export function WeatherToday({ data }: { data: WeatherCurrent | null }) {
  return (
    <>
      <div className="border border-slate-100 p-4 rounded">
        <div className="flex flex-col items-center gap-4 ">
          {/* <p>{JSON.stringify(data)}</p> */}

          <p>{data?.location.name}</p>
          <p>{data?.current.last_updated}</p>
          <p>{data?.current.temp_c} °C </p>
          <p>{data?.current.condition.text}</p>
          <img src={data?.current.condition.icon} alt="weather icon" />
          <p>{data?.current.condition.code}</p>
          <p>{data?.current.wind_kph} km/h</p>
          <p>{data?.current.wind_dir}</p>
        </div>

        <div className="flex flex-col items-center gap-4 p-16"></div>
      </div>
    </>
  );
}
