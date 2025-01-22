
# Example Project

## Description
This project demonstrates a web application that integrates the MeaningCloud API to analyze the sentiment of a given URL. The application has both client and server components, utilizes Webpack for bundling, and is tested using Jest.

---

## Features
- **Client-Side:** 
  - Input validation and user-friendly alerts for invalid URLs.
  - Displays sentiment analysis results from the MeaningCloud API.
  - Responsive UI styled with SCSS.
  - Webpack configuration for development and production builds.
- **Server-Side:** 
  - Express server to handle API requests.
  - Fetches data from the MeaningCloud API.
  - Implements CORS for cross-origin requests.
- **Testing:**
  - Comprehensive tests for both client and server components using Jest.

---

## Project Structure
```plaintext
starter_project/
├── src/
│   ├── client/
│   │   ├── js/
│   │   ├── styles/
│   │   ├── views/
│   │   └── index.js
│   ├── server/
│   │   ├── app.js
│   │   └── index.js
│   └── tests/
├── .babelrc
├── .env
├── .gitignore
├── jest.config.js
├── package.json
├── webpack.dev.js
└── webpack.prod.js
```

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd starter_project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables:**
   Create a `.env` file in the root directory with the following content:
   ```plaintext
   API_KEY=your-meaningcloud-api-key
   ```

---

## Scripts

- **Run Development Build:**
  ```bash
  npm run build-dev
  ```

- **Run Production Build:**
  ```bash
  npm run build-prod
  ```

- **Start the Server:**
  ```bash
  npm start
  ```

- **Run Tests:**
  ```bash
  npm test
  ```

---

## Usage

1. Run the server using `npm start`.
2. In another terminal, start the development server:
   ```bash
   npm run build-dev
   ```
3. Open `http://localhost:3000` in your browser.
4. Enter a valid URL in the input field and submit to see the analysis results.

---

## Testing

- Unit and integration tests are written for both client and server code using Jest.
- Run the tests with the following command:
  ```bash
  npm test
  ```

---

## Technologies Used

- **Frontend:** JavaScript (ES6), SCSS
- **Backend:** Node.js, Express
- **Testing:** Jest
- **Build Tools:** Webpack
- **API:** MeaningCloud Sentiment Analysis

---

## Author
Rami Darras
