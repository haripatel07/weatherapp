# Weather App

## Overview
This Weather App allows users to search for current weather information by entering a city's name. It uses the OpenWeatherMap API to fetch weather data and displays it in an interactive and user-friendly manner.

## Features
- Search weather information by city name.
- Display current temperature, humidity, weather description, and an appropriate weather emoji.
- Error handling for invalid inputs or failed API calls.
- Responsive design for various screen sizes.

## Technologies Used
- **HTML**: For the structure of the application.
- **CSS**: For styling and layout.
- **JavaScript**: For dynamic functionality and API integration.
- **OpenWeatherMap API**: To fetch live weather data.

## File Structure
```
WeatherApp/
├── index.html         # Main HTML file
├── design.css         # CSS file for styling
├── function.js        # JavaScript file for functionality
├── README.md          # Project documentation (this file)
```

## Setup and Installation

1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the Project Directory:**
   ```
   cd weather-app
   ```

3. **Open `index.html` in a browser:**
   - Double-click on the `index.html` file.
   - Alternatively, use a live server extension (e.g., Live Server in VS Code).

## Usage

1. Open the app in your browser.
2. Enter a city name in the input field.
3. Click on the "Get weather" button to view the weather information.
4. If the city is not found or the input is invalid, an error message will be displayed.

## API Configuration
- The app uses the [OpenWeatherMap API](https://openweathermap.org/api).
- Replace the `apikey` variable in `function.js` with your API key:
  ```javascript
  const apikey = "your-api-key-here";
  ```

## Weather Emojis
The app displays weather emojis based on the weather condition ID provided by the API:
- Thunderstorm: ⛈
- Drizzle: 🌧
- Rain: 🌧
- Snow: ❄
- Mist/Haze/Fog: 🌫
- Clear: ☀
- Clouds: ☁

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- Inspiration for the weather emojis based on weather conditions.

---

Enjoy using the Weather App!

