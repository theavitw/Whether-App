const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a2fef86973msh839f5d2bdd726aep1c1978jsn157896bb1f3b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getwheather = (city) => {
	cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      

      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;

      humidity.innerHTML = "<p>Humidity<p/>" + response.humidity;

      wind_speed.innerHTML = "<p>wind speed<p/>" + response.wind_speed;
      wind_degrees.innerHTML = "<p>wind degrees<p/>" + response.wind_degrees;
      cloud_pct.innerHTML = "<p>cloud %<p/>" + response.cloud_pct;
    })
    .catch((err) => console.error(err));

  document.querySelector(
    "body > div.template-root > div.page-hero.hero-5.content-module > div.page-hero-content"
  );
};
Submit.addEventListener("click", (e) => {
	e.preventDefault();
	getwheather(city.value);
});
