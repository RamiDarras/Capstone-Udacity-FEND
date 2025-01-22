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
 if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
   navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker Registered (production)"))
    .catch((err) => console.error("SW registration failed:", err));
  });
 }
});
