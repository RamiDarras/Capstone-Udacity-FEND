// starter_project/src/client/index.js

import { handleSubmit } from "./js/formHandler";
// If you want to import the nameChecker, do so here:
// import { checkForName } from "./js/nameChecker";

// SASS imports
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

alert("I EXIST");

// Attach event listener after DOM loads
document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById("urlForm");
 if (form) {
  form.addEventListener("submit", handleSubmit);
 }
 // Only register service worker in production
 if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
   navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker Registered (production)"))
    .catch((err) => console.error("SW registration failed:", err));
  });
 }
});
