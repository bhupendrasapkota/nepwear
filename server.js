import express from "express";
import fs from "fs";
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  fs.readFile("users.json", "utf8", (err, userData) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }

    const users = JSON.parse(userData).data;

    const userlist = users.map((user) => {
      return {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
      };
    });
    res.json(userlist);
  });
});
