import app from "./app.js";

const app_url = process.env.APP_URL || "http://localhost";
const port = process.env.PORT || 8000;

app.listen(port, () => {
 

  console.log(`Server running at ${app_url}:${port}`);
});
