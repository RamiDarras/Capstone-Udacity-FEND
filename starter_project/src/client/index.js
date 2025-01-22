// src/client/index.js

import "./styles/base.scss"; // or your main SCSS
import { handleGenerateTrip, loadLatestSearches } from "./js/app";

document.addEventListener("DOMContentLoaded", () => {
 // Load latest searches from local storage
 loadLatestSearches();

 // Attach event listener to the button
 const generateBtn = document.getElementById("generateTrip");
 if (generateBtn) {
  generateBtn.addEventListener("click", handleGenerateTrip);
 }
});
