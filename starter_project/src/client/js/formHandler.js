// starter_project/src/client/js/formHandler.js

// A small helper to validate URL format:
export function validURL(str) {
 try {
  new URL(str);
  return true;
 } catch (err) {
  return false;
 }
}

// Helper to POST data to server
const postData = async (url = "", data = {}) => {
 const response = await fetch(url, {
  method: "POST",
  credentials: "same-origin",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
 });
 try {
  return await response.json();
 } catch (error) {
  console.log("Error parsing JSON:", error);
  return {};
 }
};

function handleSubmit(event) {
 event.preventDefault();

 // Grab the text from the input
 const formText = document.getElementById("name").value;

 // Validate that it's a URL
 if (!validURL(formText)) {
  alert("Please enter a valid URL!");
  return;
 }

 // If valid, send it to our server
 postData("http://localhost:8000/api", { url: formText })
  .then((res) => {
   console.log("Response from server:", res);

   // Update the UI with the results
   document.getElementById("results").innerHTML = `
          <p><strong>Polarity (score_tag):</strong> ${res.score_tag}</p>
          <p><strong>Agreement:</strong> ${res.agreement}</p>
          <p><strong>Subjectivity:</strong> ${res.subjectivity}</p>
          <p><strong>Confidence:</strong> ${res.confidence}</p>
          <p><strong>Irony:</strong> ${res.irony}</p>
        `;
  })
  .catch((error) => {
   console.log("Error from server call:", error);
  });
}

export { handleSubmit };
