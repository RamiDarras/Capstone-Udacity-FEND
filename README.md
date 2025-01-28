# Travel Planner

Travel Planner is a web application designed to help users plan their trips by providing weather forecasts, trip countdowns, and location-based images. The project utilizes APIs such as Geonames, Weatherbit, and Pixabay to deliver a dynamic and engaging user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [APIs Used](#apis-used)
- [Scripts](#scripts)
- [License](#license)

---

## Features

- Search for a city and specify a departure date.
- View a countdown to your trip.
- Get weather forecasts for your trip date.
- Display relevant images for the destination.
- Save recent searches to localStorage and view them on the app.
- Fully responsive design.

---

## Technologies Used

### Frontend

- HTML5
- SCSS
- JavaScript (ES6+)
- Webpack (development and production configurations)

### Backend

- Node.js
- Express.js

### APIs

- Geonames API
- Weatherbit API
- Pixabay API

### Testing

- Jest (for unit testing)

---

## Setup and Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

### Steps

``

1. Create a `.env` file in the root directory and add your API credentials:

   ```env
   GEONAMES_USERNAME=your_geonames_username
   WEATHERBIT_KEY=your_weatherbit_key
   PIXABAY_KEY=your_pixabay_key
   ```

2. Start the development server:

   ```bash
   npm run build-dev
   ```

3. Open your browser and navigate to `http://localhost:8080`.

4. To run the production build:
   ```bash
   npm run build-prod
   npm start
   ```
   The server will run on `http://localhost:8081`.

---

## Usage

1. Enter the city and departure date in the provided form.
2. Click the "Generate Trip" button.
3. View the trip details, including:
   - Countdown to the trip.
   - Weather forecast.
   - Image of the destination.
4. Check the "Latest Searches" section for recent trip plans.

---

## Project Structure

```
starter_project/
├── dist/                      # Compiled production files
├── src/
│   ├── client/
│   │   ├── js/               # JavaScript logic
│   │   ├── styles/           # SCSS files
│   │   ├── views/            # HTML templates
│   │   └── index.js          # Entry point for the client
│   ├── server/
│   │   ├── app.js            # Express app
│   │   └── server.js         # Server entry point
│   └── tests/                # Jest test files
├── .env                       # Environment variables
├── .gitignore                 # Files ignored by git
├── package.json               # Project metadata and dependencies
├── webpack.dev.js             # Development Webpack configuration
├── webpack.prod.js            # Production Webpack configuration
└── README.md                  # Project documentation
```

---

## APIs Used

1. **Geonames API**

   - Provides geographical data such as latitude, longitude, and country name.

2. **Weatherbit API**

   - Provides weather forecasts or current weather data based on latitude and longitude.

3. **Pixabay API**
   - Fetches images related to the destination city or country.

---

## Scripts

- `npm run start`: Starts the production server.
- `npm run build-dev`: Starts the development server with hot reloading.
- `npm run build-prod`: Builds the application for production.
- `npm test`: Runs the Jest tests.

---

## Developer

Rami Darras.
