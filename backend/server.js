require("dotenv").config(); // yeh wapas lagao

const app = require("./src/app");
const connectDB = require("./src/db/db");

console.log("Calling DB...");
connectDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});