
import './App.css';
import { useState} from "react";
const api = {
  key: "182dfbbaa2ba198aedc5bd57d9fc1f6e",
  base: "https://api.openweathermap.org/data/2.5/",
};

  function App() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    
    const searchPressed = () => {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
       .then((res) => res.json())
       .then((result) => {
          setWeather(result);
       });
    };
  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather Analyzer</h1>

        {/*Search Box */}
        <div> 
          <input type="text" 
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        

        {/* Location */}
        {weather.name && <p>{weather.name}</p>}


        {/* Temperature F/C */}
        {weather.main && <p>{weather.main.temp}°C</p>}

        {/* Condition (Sunny) */}
       <div>
        {weather.weather && (
          <div>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
            <p>Hope you have a good day!</p>
          </div>
        )}
        </div>
      </header>
    </div>
  );
}

export default App;
