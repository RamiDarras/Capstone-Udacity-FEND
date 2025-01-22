const app = require("./app");

const PORT = 8081;
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
