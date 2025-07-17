import express from "express";
import bodyparser from "body-parser";

import userRoutes from "./src/routes/userRoutes.js";

const app = express();

app.use(bodyparser.json());

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
