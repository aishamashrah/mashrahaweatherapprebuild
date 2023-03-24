
import ApiKey from "./api";


 async function weatherapi(city,ApiKey) {

  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${ApiKey}`
  );
  const data = await promise.json();
  // console.log(data);
  // console.log(data.name);
  // console.log(data.main.temp)
  // console.log(data.timezone)
return data
}

async function weatherapi2(city,ApiKey) {

  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${ApiKey}`
  );
  const data = await promise.json();
  console.log(data);
  return data

}
export {weatherapi ,weatherapi2}









// Initial City Forecast ===================================================================
// export async function AsyncGetData4(latitude, longitude){
//   const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial${apiKey}`)
//   const data = await promise.json();
//   weatherApi4 = data
//   console.log(weatherApi4);
// }