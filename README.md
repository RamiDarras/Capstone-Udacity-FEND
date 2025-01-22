# Travel Planner Capstone Project

## Description

The Travel Planner is a capstone project that allows users to plan trips by entering a city and departure date. It fetches and displays trip details, including weather forecasts and images, using external APIs like Geonames, Weatherbit, and Pixabay.

## Features

- Enter a city and departure date to plan a trip.
- Fetch and display weather forecasts for the selected date.
- Show relevant images for the trip location.
- Save the latest searches locally for quick access.
- Responsive design for a seamless experience across devices.

## Technologies Used

### Frontend:

- **HTML5, CSS3 (SCSS)**: Responsive and modern styling.
- **JavaScript (ES6+)**: Interactive features and DOM manipulation.
- **Webpack**: Module bundling and asset optimization.

### Backend:

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework.
- **APIs**:
  - **Geonames**: Fetch location data (latitude, longitude, and country).
  - **Weatherbit**: Retrieve weather forecasts.
  - **Pixabay**: Get images for the trip location.

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/travel-planner.git
   cd travel-planner
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root and add your API keys:
   ```env
   GEONAMES_USERNAME=your_geonames_username
   WEATHERBIT_KEY=your_weatherbit_api_key
   PIXABAY_KEY=your_pixabay_api_key
   ```
4. Start the development server:
   ```bash
   npm run build-dev
   ```
5. To build for production:
   ```bash
   npm run build-prod
   ```
6. Run the server in production:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser.
2. Enter a city and departure date.
3. Click "Generate Trip" to fetch and display trip details.
4. View and revisit recent searches.

## Testing

To run tests:

```bash
npm test
```

## Project Structure

```
starter_project/
├── src/
│   ├── client/
│   │   ├── js/
│   │   ├── styles/
│   │   ├── views/
│   │   └── index.js
│   ├── server/
│   │   ├── app.js
│   │   └── server.js
│   └── tests/
├── .babelrc
├── .env
├── .gitignore
├── jest.config.js
├── package.json
├── webpack.dev.js
└── webpack.prod.js
```

## Developer

Rami Darras
