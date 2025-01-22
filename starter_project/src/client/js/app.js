// src/client/js/app.js

// Toggle loading overlay
function showLoading() {
 const overlay = document.getElementById("loadingOverlay");
 if (overlay) {
  overlay.style.display = "flex";
 }
}

function hideLoading() {
 const overlay = document.getElementById("loadingOverlay");
 if (overlay) {
  overlay.style.display = "none";
 }
}

/**
 * Save the search (city + date) to localStorage
 */
function saveSearchToLocalStorage(city, date) {
 // Retrieve existing searches
 let searches = JSON.parse(localStorage.getItem("latestSearches")) || [];

 // Add the new search to the front
 searches.unshift({
  city,
  date,
  timestamp: new Date().toISOString()
 });

 // Limit to 5 or 10 recent searches if you want
 if (searches.length > 5) {
  searches.pop();
 }

 // Save back to localStorage
 localStorage.setItem("latestSearches", JSON.stringify(searches));
}

/**
 * Load the latest searches from localStorage and display in #searchList
 */
function loadLatestSearches() {
 const searchList = document.getElementById("searchList");
 if (!searchList) return;

 let searches = JSON.parse(localStorage.getItem("latestSearches")) || [];
 searchList.innerHTML = "";

 searches.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = `${item.city} (${item.date})`;
  searchList.appendChild(li);
 });
}

/**
 * Update the UI with the trip data (returned from server)
 */
function updateTripUI(data) {
 const resultsSection = document.getElementById("trip-results");
 if (!resultsSection) return;

 // Clear previous result
 resultsSection.innerHTML = "";

 // Build a trip card
 const tripCard = document.createElement("section");
 tripCard.classList.add("trip-card");

 tripCard.innerHTML = `
    <img src="${data.image}" alt="${data.city} photo" class="trip-image" />
    <div class="trip-info">
      <h2>My trip to: <span>${data.city}, ${data.country}</span></h2>
      <p class="departure-date">Departing: <span>${data.departureDate}</span></p>
      <p class="countdown"><strong>${data.city}, ${data.country} is ${data.countdown} days away</strong></p>
      <p class="weather">
        Typical weather then: High – ${data.weather.high}, Low – ${data.weather.low}
        <br />
        ${data.weather.description}
      </p>
    </div>
  `;

 resultsSection.appendChild(tripCard);
}

/**
 * Handle the "Generate Trip" button click
 */
async function handleGenerateTrip(event) {
 event.preventDefault();

 const cityInput = document.getElementById("city");
 const dateInput = document.getElementById("departureDate");
 if (!cityInput || !dateInput) return;

 const city = cityInput.value.trim();
 const date = dateInput.value;

 if (!city || !date) {
  alert("Please enter a city and a departure date.");
  return;
 }

 // Show loading screen
 showLoading();

 try {
  // Save the search to localStorage
  saveSearchToLocalStorage(city, date);
  // Update the "Latest Searches" list
  loadLatestSearches();

  // POST to our Express server
  const response = await fetch("http://localhost:8081/addTrip", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ city, date })
  });

  if (!response.ok) {
   throw new Error("Network response was not ok");
  }

  const resultData = await response.json();
  // Update the Trip UI
  updateTripUI(resultData);
 } catch (err) {
  console.error("Error fetching trip data:", err);
  alert("Something went wrong. Check the console for details.");
 } finally {
  // Hide loading screen
  hideLoading();
 }
}

// Export for usage in index.js or tests
export { handleGenerateTrip, loadLatestSearches };
