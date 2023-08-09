import Image from "next/image";

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
  //transform data.current.last_updated to date with time like this 29.10 23:00

  let date, time;
  if (data?.current.last_updated) {
    date = new Date(data?.current?.last_updated);
    time = date.toLocaleTimeString().slice(0, -3);

    date = date.toLocaleDateString().slice(0, -5);
  }

  return (
    <>
      <div className="border border-white  p-4 rounded-xl max-w-max max-h-max shadow-[7px_7px_20px_5px_#a0aec0]">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-4 font-bold text-lg">
            <p>{data?.location.name}</p>
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-col items-center font-bold">
              <img src={data?.current.condition.icon} alt="weather icon" />
              <p>{data?.current.condition.text}</p>
              <p>
                {data?.current.temp_c ? Math.round(data?.current.temp_c) : ""}{" "}
                °C{" "}
              </p>
            </div>
            {/* <p>{data?.current.condition.code}</p> */}

            <div className="flex flex-col items-center font-bold">
              <Image
                src="/wind-14.png"
                width="64"
                height="64"
                alt="wind icon"
              />
              <p>{data?.current.wind_kph} km/h</p>
              <p>{data?.current.wind_dir}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
